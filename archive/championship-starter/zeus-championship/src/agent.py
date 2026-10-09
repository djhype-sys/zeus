from dataclasses import dataclass
from enum import Enum
from typing import Optional

class Stage(str, Enum):
    RECEIVED='received'
    EVALUATED='evaluated'
    AWAITING_APPROVAL='awaiting_approval'
    APPROVED='approved'
    REJECTED='rejected'

@dataclass
class Inquiry:
    client: str
    event_date: str
    fee_aed: int
    availability_confirmed: bool = False
    stage: Stage = Stage.RECEIVED
    quote: Optional[str] = None

class BookingAgent:
    """Deterministic, offline demonstration; no external calls or auto-send."""
    def evaluate(self, inquiry: Inquiry) -> Inquiry:
        if inquiry.fee_aed <= 0:
            raise ValueError('Fee must be positive')
        inquiry.stage = Stage.EVALUATED
        if inquiry.availability_confirmed:
            inquiry.quote = f'Draft for {inquiry.client}: {inquiry.event_date}, AED {inquiry.fee_aed}. Subject to owner approval.'
            inquiry.stage = Stage.AWAITING_APPROVAL
        return inquiry

    def approve(self, inquiry: Inquiry, owner_approved: bool) -> Inquiry:
        if inquiry.stage != Stage.AWAITING_APPROVAL:
            raise ValueError('Cannot approve without confirmed availability and quote')
        inquiry.stage = Stage.APPROVED if owner_approved else Stage.REJECTED
        return inquiry

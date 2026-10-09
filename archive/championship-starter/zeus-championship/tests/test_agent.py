import unittest
from src.agent import BookingAgent, Inquiry, Stage

class Tests(unittest.TestCase):
    def setUp(self): self.agent=BookingAgent()
    def test_approval_gate(self):
        inquiry=self.agent.evaluate(Inquiry('Client','2026-11-15',2000,True))
        self.assertEqual(inquiry.stage,Stage.AWAITING_APPROVAL)
        self.assertEqual(self.agent.approve(inquiry,True).stage,Stage.APPROVED)
    def test_unavailable_not_approved(self):
        inquiry=self.agent.evaluate(Inquiry('Client','2026-11-15',2000,False))
        with self.assertRaises(ValueError): self.agent.approve(inquiry,True)
    def test_invalid_fee(self):
        with self.assertRaises(ValueError): self.agent.evaluate(Inquiry('Client','2026-11-15',0,True))
if __name__=='__main__': unittest.main()

import express from 'express'


const router = express.Router()

router.get('/api', (req, res) => {
    res.status(200).json({ message: 'Hello from server!' });
});

export default router;
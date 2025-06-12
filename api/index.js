module.exports = (req, res) => {
    const { expression } = req.body;

    try {
        const result = eval(expression); // జాగ్రత్త: eval() సెక్యూరిటీ రిస్క్‌ను కలిగిస్తుంది
        res.status(200).json({ result });
    } catch (error) {
        res.status(400).json({ error: 'Invalid calculation' });
    }
};

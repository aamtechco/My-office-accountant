const supabase = require('../db');

const getClients = async (req, res) => {
    const { data, error } = await supabase.from('clients').select('*');
    if(error) return res.status(500).json({ message: error.message });
    res.json(data);
};

module.exports = { getClients };
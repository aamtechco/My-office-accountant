const supabase = require('../db');

const login = async (req, res) => {
    const { username, password } = req.body;
    const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('username', username)
        .eq('password', password)
        .single();
    if(error || !data) return res.status(401).json({ message: 'Invalid credentials' });
    res.json({ username: data.username, role: data.role });
};

module.exports = { login };
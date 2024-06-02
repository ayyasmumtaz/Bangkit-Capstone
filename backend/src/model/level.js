const dbPool = require('../config/database');

const getAllLevel = () => {
    const SQLQuery = 'SELECT * FROM level';
    return dbPool.execute(SQLQuery);
    
}
const getDetailLevel = (level_id) => {
    const SQLQuery = 'SELECT * FROM level WHERE level_id = ?';
    return dbPool.execute(SQLQuery, [level_id]);
};

module.exports = {
    getAllLevel,
    getDetailLevel,
}
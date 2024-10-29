import { pool } from "../db.config.js";

export const addStore = async (data) => {
  const conn = await pool.getConnection();

  try {
    const [store] = await pool.query(
      `INSERT INTO store (name, address, region_id) VALUES (?, ?, ?);`,
      [data.name, data.address, data.regionId]
    );
    store.insertId;
  } catch (err) {
    throw new Error(`오류 발생. 요청 파라미터 확인 필요. (${err})`);
  } finally {
    conn.release();
  }
};

export const getRegionIdByRegion = async (region) => {
  const conn = await pool.getConnection();

  try {
    const [regionId] = await pool.query(
      `select r.id from region r where r.name = ?`,
      [region]
    );

    console.log(regionId);
    return regionId;
  } catch (err) {
    throw new Error(`오류 발생. 요청 파라미터 확인 필요. (${err})`);
  } finally {
    conn.release();
  }
};

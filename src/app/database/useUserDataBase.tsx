import { useSQLiteContext } from "expo-sqlite";

export type userDataBase = {
  id: number;
  name: string;
  password: string;
  email: string;
};

export function useUserDatabase() {
  const database = useSQLiteContext();

  async function create(data: Omit<userDataBase, "id">) {
    const statement = await database.prepareAsync(
      "INSERT INTO users (name, password, email) VALUES ($name, $password, $email)"
    );

    try {
      const result = await statement.executeAsync({
        $name: data.name,
        $password: data.password,
        $email: data.email,
      });

      const insertedRowId = result.lastInsertRowId.toLocaleString();

      return { insertedRowId };
    } catch (error) {
      throw error;
    } finally {
      await statement.finalizeAsync();
    }
  }

  async function searchByName(name: string) {
    try {
      const query = "SELECT * FROM users WHERE name LIKE ?";

      const response = await database.getAllAsync<userDataBase>(
        query,
        `%${name}%`
      );

      return response;
    } catch (error) {
      throw error;
    }
  }

  async function update(data: userDataBase) {
    const statement = await database.prepareAsync(
      "UPDATE users SET name = $name, password = $password WHERE id = $id"
    );

    try {
      await statement.executeAsync({
        $id: data.id,
        $name: data.name,
        $password: data.password,
      });
    } catch (error) {
      throw error;
    } finally {
      await statement.finalizeAsync();
    }
  }

  async function remove(id: number) {
    try {
      await database.execAsync("DELETE FROM users WHERE id = " + id);
    } catch (error) {
      throw error;
    }
  }

  async function show(id: number) {
    try {
      const query = "SELECT * FROM users WHERE id = ?";

      const response = await database.getFirstAsync<userDataBase>(query, [id]);

      return response;
    } catch (error) {
      throw error;
    }
  }

  return { create, searchByName, update, remove, show };
}

import firebase from "../firebase";

const db = firebase.collection("/libraries");

const getAll = () => {
  return db;
};

const create = (data: any) => {
  return db.add(data);
};

const update = (id: string, value: any) => {
  return db.doc(id).update(value);
};

const remove = (id: string) => {
  return db.doc(id).delete();
};

const LibraryService = {
  getAll,
  create,
  update,
  remove
};

export default LibraryService;
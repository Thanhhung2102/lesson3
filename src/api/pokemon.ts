import instance from "./instance";

export const getAll = () => {
  const uri = "/pokemons"
  return instance.get(uri)
}
export const get = (id) => {
  const uri = `/pokemons/${id}`
  return instance.get(uri)
}
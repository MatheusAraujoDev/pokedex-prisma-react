import Joi from "joi";

export const validatePokemon = (name, pokedexNumber, type1, type2, weather1 ,weather2 ,atk ,def ,userId) =>  {
  const schema = Joi.object({
    name: Joi.string().required(),
    pokedexNumber: Joi.number().required(),
    type1 : Joi.string().required(),
    type2 : Joi.string().allow(null),
    weather1 : Joi.string().required(),
    weather2 : Joi.string().allow(null),
    atk: Joi.number().required(),
    def: Joi.number().required(),
    userId: Joi.string().required(),
  });

  const validate = schema.validate({ name, pokedexNumber, type1, type2, weather1 ,weather2 ,atk ,def ,userId });
  return validate;
}
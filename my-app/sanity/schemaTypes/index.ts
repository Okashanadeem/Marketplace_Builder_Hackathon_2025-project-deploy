import { type SchemaTypeDefinition } from 'sanity'
import product from '../schema/product'
import order from '../schema/order'
import deliveryZone from '../schema/deliveryZone'
import user from '../schema/user'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, user, order, deliveryZone],
}

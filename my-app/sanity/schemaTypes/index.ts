import { type SchemaTypeDefinition } from 'sanity'
import product from '../schema/product'
import order from '../schema/order'
import deliveryZone from '../schema/deliveryZone'
import customer from '../schema/customer'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, customer, order, deliveryZone],
}

export interface Data {
  CodigoBodega: string;
  Bodega: string;
  Serie: string;
  NoFactura: number;
  Fecha: string;
  Credito: number;
  Comentario?: number | string;
  NoPedido: number;
  CodigoCliente: number;
  NIT: string;
  Cliente: string;
  CodigoVendedor: number;
  Vendedor: string;
  CodigoProducto: number | string;
  NombreProducto: string;
  FamiliaProducto: string;
  TipoProducto: string;
  LineaProducto: string;
  ClaseProducto: string;
  CantidadVenta: number;
  PrecioUnitario: number;
  Total: number;
}

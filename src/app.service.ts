import { Injectable } from '@nestjs/common';
import { Client, Transport, ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  @Client({ transport: Transport.TCP, options: { port: 3001 } })
  orders: ClientProxy;

  createOrder() {
    const payload = {}
    const pattern = { cmd: 'createOrder'}

    return this.orders.send(pattern, payload)
  }

  getOrderStatus(id) {
    const payload = { id }
    const pattern = { cmd: 'getOrderStatus'}

    return this.orders.send(pattern, payload)
  }

  cancelOrder(id) {
    const payload = { id }
    const pattern = { cmd: 'cancelOrder'}

    return this.orders.send(pattern, payload)
  }

}

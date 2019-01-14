import { Injectable } from '@nestjs/common';
import { Client, Transport, ClientProxy } from '@nestjs/microservices';

@Injectable()
export class OrdersService {

  @Client({ transport: Transport.TCP, options: { port: 3002 } })
  payments: ClientProxy;

  createOrder() {
    console.log('Create Order Microservice')
    const order = {}
    return this.approvePayments(order)
  }

  getOrderStatus() {
    console.log('getOrderStatus');
    return 'Get Order Status Microservice';
  }

  cancelOrder() {
    console.log('cancelOrder');
    return 'Cancel Order Status Microservice';
  }

  confirmOrder() {
    console.log('confirmOrder');
    return 'Confirm Order Status Microservice'
}

  approvePayments(order) {
    console.log('approvePayments');
    const payload = { order }
    const pattern = { cmd: 'approvePayment' }

    return this.payments.send(pattern, payload)
  }

}

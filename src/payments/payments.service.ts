import { Injectable } from '@nestjs/common';
import { Client, Transport, ClientProxy } from '@nestjs/microservices';

@Injectable()
export class PaymentsService {
  @Client({ transport: Transport.TCP, options: { port: 3001 } })
  orders: ClientProxy;

  approvePayment() {
    return 'Approve Payment Microservice';
  }

}

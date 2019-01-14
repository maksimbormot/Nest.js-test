import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices'
import { AppModule } from './app.module';
import { OrdersModule } from './orders/orders.module'
import { PaymentsModule } from './payments/payments.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  const orders = await NestFactory.createMicroservice(OrdersModule, {
    transport: Transport.TCP,
    options: {
      port: 3001,
    }
  });
  orders.listen(() => console.log('Orders Microservice is listening'));

  const payments = await NestFactory.createMicroservice(PaymentsModule, {
    transport: Transport.TCP,
    options: {
      port: 3002,
    }
  });
  payments.listen(() => console.log('Payments Microservice is listening'));
}
bootstrap();

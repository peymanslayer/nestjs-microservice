import { AppModule } from "./app.module";
import {Module} from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  // eslint-disable-next-line prettier/prettier
  imports: [
    AppModule,MongooseModule.forRoot('mongodb://localhost:27017/user'),
  ],
  controllers: [],
  providers: [MongooseModule],
})
export class UserModule {}

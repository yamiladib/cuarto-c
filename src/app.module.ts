import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CuidadModule } from './cuidad/cuidad.module';

@Module({
  imports: [TypeOrmModule.forRoot({"type": "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root",
  database: "escolar",
  entities: [
  "dist/**/**.entity{.ts,.js}"
  ],
  synchronize: false}), CuidadModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

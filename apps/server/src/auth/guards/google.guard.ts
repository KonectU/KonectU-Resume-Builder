import { Injectable } from "@nestjs/common";  //importing
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class GoogleGuard extends AuthGuard("google") {}

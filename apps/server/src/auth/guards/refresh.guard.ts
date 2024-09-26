import { Injectable } from "@nestjs/common";  //import
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class RefreshGuard extends AuthGuard("refresh") {}

import { ApiProperty } from "@nestjs/swagger";

export class AuthDto {
    @ApiProperty()
    group: string;
    @ApiProperty()
    name: string;
}

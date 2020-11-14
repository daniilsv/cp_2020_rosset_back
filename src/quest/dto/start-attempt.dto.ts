import { ApiProperty } from "@nestjs/swagger";

export class StartAttemptDto {
    @ApiProperty()
    questId: number;
}

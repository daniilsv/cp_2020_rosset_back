import { ApiProperty } from "@nestjs/swagger";

export class FinishAttemptDto {
    @ApiProperty()
    attemptId: number;

    @ApiProperty({ type: Object })
    answer: any;
}

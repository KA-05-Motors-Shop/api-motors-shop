import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTableComplement1660247046421 implements MigrationInterface {
    name = 'AlterTableComplement1660247046421'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" ALTER COLUMN "complement" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" ALTER COLUMN "complement" SET NOT NULL`);
    }

}

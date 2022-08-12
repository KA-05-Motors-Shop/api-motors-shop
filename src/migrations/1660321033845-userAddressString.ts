import { MigrationInterface, QueryRunner } from "typeorm";

export class userAddressString1660321033845 implements MigrationInterface {
    name = 'userAddressString1660321033845'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "cep"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "cep" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "number" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "cpf"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "cpf" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "cel"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "cel" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "birth_date"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "birth_date" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "birth_date"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "birth_date" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "cel"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "cel" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "cpf"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "cpf" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "number" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "cep"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "cep" integer NOT NULL`);
    }

}

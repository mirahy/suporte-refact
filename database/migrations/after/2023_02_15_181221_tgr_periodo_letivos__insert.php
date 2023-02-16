<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::unprepared('
                        CREATE TRIGGER Tgr_periodo_letivos_Insert AFTER INSERT ON `periodo_letivos` FOR EACH ROW
                        BEGIN
                            INSERT INTO `periodo_letivos_categorias`(`periodo_letivo_id`,`curso_id`,`categoria_id`) 
                                (SELECT NEW.id, cursos.id, NEW.inicio_auto_increment+cursos.auto_increment_ref FROM cursos);
                        END
                ');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::unprepared('DROP TRIGGER `Tgr_periodo_letivos_Insert`');
    }
};

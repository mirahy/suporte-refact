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
                        CREATE TRIGGER Tgr_cursos_Insert AFTER INSERT ON `cursos` FOR EACH ROW
                        BEGIN
                            INSERT INTO `periodo_letivos_categorias`(`periodo_letivo_id`,`curso_id`,`categoria_id`) 
                                (SELECT periodo_letivos.id, NEW.id, NEW.auto_increment_ref+periodo_letivos.inicio_auto_increment FROM periodo_letivos);
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
        DB::unprepared('DROP TRIGGER `Tgr_cursos_Insert`');
    }
};

<?php

namespace Database\Migrations;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Schema table name to migrate
     * @var string
     */
    public $tableName = 'periodo_letivos_categorias';

    /**
     * Run the migrations.
     * @table periodo_letivos_categorias
     *
     * @return void
     */
    public function up()
    {
        Schema::create($this->tableName, function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->bigIncrements('id');
            $table->integer('categoria_id');
           

            $table->unique(["curso_id", "periodo_letivo_id"]);

            $table->index(["curso_id"], 'curso_id_FK');

            $table->index(["periodo_letivo_id"], 'periodo_letivo_id_FK');
        
            $table->foreignId('curso_id')
                ->constrained('cursos')
                ->onDelete('cascade')
                ->onUpdate('cascade');

            $table->foreignId('periodo_letivo_id')
                ->constrained('periodo_letivos')
                ->onDelete('cascade')
                ->onUpdate('cascade');

            $table->timestamp('created_at')->nullable()->default(DB::raw('CURRENT_TIMESTAMP'));
            $table->timestamp('updated_at')->nullable();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists($this->tableName);
    }
};

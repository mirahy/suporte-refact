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
    public $tableName = 'periodo_letivos';

    /**
     * Run the migrations.
     * @table periodo_letivos
     *
     * @return void
     */
    public function up()
    {
        Schema::create($this->tableName, function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->bigIncrements('id');
            $table->string('nome', 31);
            $table->integer('id_sigecad');
            $table->string('descricao', 63)->nullable()->default(null);
            $table->string('sufixo', 31)->nullable()->default(null);
            $table->integer('inicio_auto_increment')->nullable()->default(null);
            $table->tinyInteger('ativo')->default('1');
            

            $table->unique(["nome"], 'nome');

            $table->unique(["id_sigecad"], 'id_sigecad');
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

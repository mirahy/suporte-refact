(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/abstract-component-child.ts":
/*!*********************************************!*\
  !*** ./src/app/abstract-component-child.ts ***!
  \*********************************************/
/*! exports provided: AbstractComponentChild */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractComponentChild", function() { return AbstractComponentChild; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AbstractComponentChild = /** @class */ (function () {
    function AbstractComponentChild() {
        this.aviso = "";
    }
    Object.defineProperty(AbstractComponentChild.prototype, "LOADING", {
        get: function () {
            return this._ancestral.LOADING;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractComponentChild.prototype, "COMPLETE", {
        get: function () {
            return this._ancestral.COMPLETE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractComponentChild.prototype, "ERROR", {
        get: function () {
            return this._ancestral.ERROR;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractComponentChild.prototype, "editavel", {
        get: function () {
            return this._ancestral.editavel;
        },
        set: function (editavel) {
            this._ancestral.editavel = editavel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractComponentChild.prototype, "status", {
        get: function () {
            return this._ancestral.status;
        },
        set: function (status) {
            this._ancestral.status = status;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractComponentChild.prototype, "ancestral", {
        get: function () {
            return this._ancestral;
        },
        set: function (ancestral) {
            this._ancestral = ancestral;
        },
        enumerable: true,
        configurable: true
    });
    AbstractComponentChild.prototype.erroHttp = function (response) {
        var mensagem;
        if (response.status == 0) {
            mensagem = "Falha na Conexão!";
        }
        else {
            if (response.json)
                mensagem = response.json().message;
            else
                mensagem = response;
        }
        return mensagem;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], AbstractComponentChild.prototype, "ancestral", null);
    return AbstractComponentChild;
}());



/***/ }),

/***/ "./src/app/abstract-component.ts":
/*!***************************************!*\
  !*** ./src/app/abstract-component.ts ***!
  \***************************************/
/*! exports provided: AbstractComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractComponent", function() { return AbstractComponent; });
var AbstractComponent = /** @class */ (function () {
    function AbstractComponent() {
        this.editavel = false;
        this.LOADING = 0;
        this.COMPLETE = 1;
        this.ERROR = 2;
        this.status = this.LOADING;
        this.aviso = "";
        this.erroAviso = false;
    }
    AbstractComponent.prototype.erroHttp = function (response) {
        var mensagem;
        if (response.status == 0) {
            mensagem = "Falha na Conexão!";
        }
        else {
            try {
                mensagem = response.json().message;
            }
            catch (e) {
                if (response.message)
                    mensagem = response.message;
                else
                    mensagem = response;
            }
        }
        return mensagem;
    };
    return AbstractComponent;
}());



/***/ }),

/***/ "./src/app/agenda.service.ts":
/*!***********************************!*\
  !*** ./src/app/agenda.service.ts ***!
  \***********************************/
/*! exports provided: AgendaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendaService", function() { return AgendaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _agenda_evento__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./agenda/evento */ "./src/app/agenda/evento.ts");




var AgendaService = /** @class */ (function () {
    function AgendaService(http) {
        this.http = http;
        this.evento = new _agenda_evento__WEBPACK_IMPORTED_MODULE_3__["EventoGerador"]();
        this.events = [];
        this.eventsIndex = {};
    }
    AgendaService.prototype.create = function () {
        var _this = this;
        return this.http.post("/agenda", this.evento.gerarEventPost()).toPromise()
            .then(function (response) {
            var e = _agenda_evento__WEBPACK_IMPORTED_MODULE_3__["EventoGerador"].obtemEventoGet(response.json());
            _this.eventsIndex[e.id] = _this.events.length;
            _this.events = _this.events.concat([
                //this.evento.gerarEventApi(this.events.length)
                e]);
            return response;
        });
    };
    AgendaService.prototype.update = function () {
        var _this = this;
        return this.http.put("/agenda/" + this.evento.id, this.evento.gerarEventPost()).toPromise()
            .then(function (response) {
            var e = _agenda_evento__WEBPACK_IMPORTED_MODULE_3__["EventoGerador"].obtemEventoGet(response.json());
            var copia = _this.events.slice();
            copia[_this.eventsIndex[e.id]] = e;
            _this.events = copia;
            return response;
        });
    };
    AgendaService.prototype.delete = function () {
        var _this = this;
        return this.http.delete("/agenda/" + this.evento.id).toPromise()
            .then(function (response) {
            var copia = _this.events.slice();
            copia.splice(_this.eventsIndex[_this.evento.id], 1);
            _this.events = copia;
            return response;
        });
    };
    AgendaService.prototype.listar = function () {
        var _this = this;
        return this.http.get("/agenda/listar").toPromise()
            .then(function (response) {
            var lista = response.json();
            _this.events = [];
            _this.eventsIndex = {};
            for (var i in lista) {
                var e = _agenda_evento__WEBPACK_IMPORTED_MODULE_3__["EventoGerador"].obtemEventoGet(lista[i]);
                _this.events.push(e);
                _this.eventsIndex[e.id] = i;
            }
            //console.log(lista)
            return _this.events;
        });
    };
    AgendaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], AgendaService);
    return AgendaService;
}());



/***/ }),

/***/ "./src/app/agenda/agenda.component.html":
/*!**********************************************!*\
  !*** ./src/app/agenda/agenda.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-14\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">Agenda</div>\n            <div class=\"panel-body\" redimensionar=\"222\">\n                <p-fullCalendar #fc [events]=\"events\" [options]=\"options\" (onSelect)=\"aee($event)\"></p-fullCalendar>\n            </div>\n            <div class=\"panel-footer\">\n                <table>\n                    <tr>\n                        <!--td style=\"width: 180px; padding: 0px 2px;\"><p-dropdown [options]=\"temas\" [(ngModel)]=\"selectedTheme\" (onChange)=\"onThemeSelect()\"></p-dropdown></td-->\n                        <td style=\"width: 60px; padding: 0px 5px;\"><p-button label=\"Novo\" data-toggle=\"modal\" data-target=\"#dialogEvento\" (click)=\"janela()\"></p-button></td>\n                    </tr>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"dialogEvento\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialogEventoTitle\" aria-hidden=\"true\" data-backdrop=\"static\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Evento</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"resetEvento()\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\" style=\"width: 362px; height: 300px;\">\n                <table>\n                    <colgroup>\n                        <col width=\"278px\"/>\n                        <col />\n                    </colgroup>\n                    <tr>\n                        <td>\n                            <label>Título</label><br>\n                            <input id=\"tituloInput\" class=\"form-control\" [(ngModel)]=\"evento.title\" [readonly]=\"!editavel\" autofocus/>\n                        </td>\n                        <td style=\"padding-left: 10px;\">\n                            <label>Cor</label><br>\n                            <input type=\"color\" style=\"height: 34px; border-radius: 3px;\" id=\"head\" name=\"head\" [(ngModel)]=\"evento.backgroundColor\"  [disabled]=\"!editavel\">\n                        </td>\n                    </tr>\n                </table>\n                <p></p>\n                <table>\n                    <tr>\n                        <td>\n                            <label>Dia Inteiro</label>\n                            <input type=\"checkbox\" class=\"form-control\" style=\"box-shadow: none;\" [(ngModel)]=\"evento.allDay\" (change)=\"changeAllDay()\" [disabled]=\"!editavel\" /><p></p>\n                        </td>\n                        <td style=\"width: 50px;\"></td>\n                        <td>\n                            <label>+ Dias</label>\n                            <input type=\"checkbox\" class=\"form-control\" style=\"box-shadow: none;\" [(ngModel)]=\"evento.maisDay\" (change)=\"changeMaisDay()\" [disabled]=\"!editavel\"/><p></p>\n                        </td>\n                    </tr>\n                </table>\n                <table>\n                    <tr>\n                        <td>\n                            <label>Data</label><br>\n                            <p-calendar [locale]=\"pt\" [(ngModel)]=\"evento.start\" [maxDate]=\"evento.maisDay ? evento.end : null\" dateFormat=\"dd/mm/yy\" [showIcon]=\"true\"  [disabled]=\"!editavel\"></p-calendar>\n                        </td>\n                        <td style=\"width: 10px;\"></td>\n                        <td *ngIf=\"evento.maisDay\">\n                            <label>Fim</label><br>\n                            <p-calendar [locale]=\"pt\" [(ngModel)]=\"evento.end\" [minDate]=\"evento.start\" dateFormat=\"dd/mm/yy\" [showIcon]=\"true\"  [disabled]=\"!editavel\"></p-calendar>\n                        </td>\n                    </tr>\n                </table>\n                <p></p>\n                <ng-container *ngIf=\"!evento.allDay\">\n                    <table>\n                        <tr>\n                            <td>\n                                <label>Hora Início</label><br>\n                                <p-calendar [timeOnly]=\"true\" [stepMinute]=\"30\" [locale]=\"pt\" [maxDate]=\"evento.horaEnd\" [(ngModel)]=\"evento.horaStart\"  [disabled]=\"!editavel\"></p-calendar>\n                            </td>\n                            <td style=\"width: 10px;\"></td>\n                            <td>\n                                <label>Hora Fim</label><br>\n                                <p-calendar [timeOnly]=\"true\" [stepMinute]=\"30\" [locale]=\"pt\" [minDate]=\"evento.horaStart\" [(ngModel)]=\"evento.horaEnd\" [disabled]=\"!editavel\"></p-calendar>\n                            </td>\n                        </tr>\n                    </table>\n                </ng-container>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-primary botao-barra\" (click)=\"addEvent()\" [disabled]=\"!editavel\">{{evento.id == 0 ? \"Criar\" : \"Editar\"}}</button>\n                <button type=\"button\" class=\"btn btn-danger botao-barra\" (click)=\"delEvent()\" [disabled]=\"!editavel || evento.id == 0\">Excluir</button>\n                <button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\" (click)=\"resetEvento()\">Fechar</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/agenda/agenda.component.less":
/*!**********************************************!*\
  !*** ./src/app/agenda/agenda.component.less ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FnZW5kYS9hZ2VuZGEuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/agenda/agenda.component.ts":
/*!********************************************!*\
  !*** ./src/app/agenda/agenda.component.ts ***!
  \********************************************/
/*! exports provided: AgendaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendaComponent", function() { return AgendaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/@fullcalendar/daygrid/main.esm.js");
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/timegrid */ "./node_modules/@fullcalendar/timegrid/main.esm.js");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullcalendar/interaction */ "./node_modules/@fullcalendar/interaction/main.esm.js");
/* harmony import */ var _fullcalendar_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/list */ "./node_modules/@fullcalendar/list/main.esm.js");
/* harmony import */ var primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/fullcalendar */ "./node_modules/primeng/fullcalendar.js");
/* harmony import */ var primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fullcalendar_core_locales_pt_br__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fullcalendar/core/locales/pt-br */ "./node_modules/@fullcalendar/core/locales/pt-br.js");
/* harmony import */ var _fullcalendar_core_locales_pt_br__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_core_locales_pt_br__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _redimensionavel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../redimensionavel */ "./src/app/redimensionavel.ts");
/* harmony import */ var _dados_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dados.service */ "./src/app/dados.service.ts");
/* harmony import */ var _theme_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../theme.service */ "./src/app/theme.service.ts");
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../abstract-component */ "./src/app/abstract-component.ts");
/* harmony import */ var _evento__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./evento */ "./src/app/agenda/evento.ts");
/* harmony import */ var _agenda_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../agenda.service */ "./src/app/agenda.service.ts");


//import { ThemeService } from '../theme.service';




//import { Theme } from './theme';








var AgendaComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AgendaComponent, _super);
    function AgendaComponent(themeService, dadosService, agendaService) {
        var _this_1 = _super.call(this) || this;
        _this_1.themeService = themeService;
        _this_1.dadosService = dadosService;
        _this_1.agendaService = agendaService;
        _this_1.data = new Date();
        _this_1.rangeDates = new Date();
        _this_1.temas = [];
        _this_1.intervalGamb = 0;
        _this_1.tamanho = 500;
        return _this_1;
        /*var themes: Theme[] = Theme.getThemes();

        for (var i in themes) {
            this.temas.push({ label: themes[i].name, value: themes[i] })
            if (themes[i].name == "luna-green")
                this.selectedTheme = themes[i];
        }*/
    }
    AgendaComponent.prototype.onThemeSelect = function () {
        //this.themeService.setTheme(this.selectedTheme.name);
    };
    Object.defineProperty(AgendaComponent.prototype, "evento", {
        get: function () {
            return this.agendaService.evento;
        },
        set: function (evento) {
            this.agendaService.evento = evento;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AgendaComponent.prototype, "events", {
        get: function () {
            return this.agendaService.events;
        },
        set: function (events) {
            this.agendaService.events = events;
        },
        enumerable: true,
        configurable: true
    });
    AgendaComponent.prototype.ngOnInit = function () {
        var _this_1 = this;
        this.events = [];
        this.editavel = true;
        this.agendaService.listar().then(function (response) {
        });
        // Alterando o texto "Compromissos" para "Lista"
        _fullcalendar_core_locales_pt_br__WEBPACK_IMPORTED_MODULE_7___default.a.buttonText.list = "Lista";
        this.options = {
            plugins: [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_2__["default"], _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_3__["default"], _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_4__["default"], _fullcalendar_list__WEBPACK_IMPORTED_MODULE_5__["default"]],
            defaultDate: new Date(),
            header: {
                left: 'prev,next today',
                center: 'title',
                right: "dayGridMonth,timeGridWeek,listMonth" //"dayGridMonth,timeGridWeek,timeGridDay,listMonth  dayGridDay,dayGridWeek"
            },
            selectable: true,
            height: this.tamanho,
            locales: [_fullcalendar_core_locales_pt_br__WEBPACK_IMPORTED_MODULE_7___default.a],
            locale: "pt-br",
            //editable: true,
            //deepChangeDetection: true,
            //weekends: false,
            //showNonCurrentDates: true,
            dateClick: function (e) {
                //console.log (e);
            },
            select: function (e) {
                _this_1.evento = _evento__WEBPACK_IMPORTED_MODULE_12__["EventoGerador"].obtemEvento(e);
                //jQuery("#dialogEvento").modal('show');
            },
            unselect: function (e) {
                var _this = _this_1;
                _this_1.intervalGamb = setTimeout(function () {
                    _this.resetEvento();
                }, 20);
            },
            eventClick: function (e) {
                _this_1.evento = _evento__WEBPACK_IMPORTED_MODULE_12__["EventoGerador"].obtemEvento(e.event);
                jQuery("#dialogEvento").modal('show');
                //this.modifyProp(0, "teste")
                //e.event.date = new Date()
                //e.el.style.borderColor = 'red';
            }
        };
        var _this = this;
        setTimeout(function () {
            _this.resize();
        }, 10);
        this.pt = {
            firstDayOfWeek: 0,
            dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
            dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
            dayNamesMin: ['Do', 'Se', 'Te', 'Qu', 'Qu', 'Se', 'Sa'],
            monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
                'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            today: 'Hoje',
            clear: 'Limpar'
        };
    };
    AgendaComponent.prototype.aee = function (event) {
        event.jsEvent.preventDefault(); // don't let the browser navigate
        console.log("event");
    };
    AgendaComponent.prototype.modifyProp = function (eventIndex, newTitle) {
        var calendarEvents = this.events.slice(); // a clone
        var singleEvent = Object.assign({}, calendarEvents[eventIndex]); // a clone
        singleEvent.title = newTitle;
        calendarEvents[eventIndex] = singleEvent;
        this.events = calendarEvents; // reassign the array
        //.fullCalendar( ‘renderEvent’, event [, stick ] )
    };
    AgendaComponent.prototype.resetEvento = function () {
        this.evento = new _evento__WEBPACK_IMPORTED_MODULE_12__["EventoGerador"]();
    };
    AgendaComponent.prototype.changeAllDay = function () {
        /*var nextDay = new Date(day);
        nextDay.setDate(day.getDate()+1);*/
    };
    AgendaComponent.prototype.changeMaisDay = function () {
        if (this.evento.maisDay) {
            this.evento.end = new Date(this.evento.start);
            this.evento.end.setDate(this.evento.start.getDate() + 1);
        }
    };
    AgendaComponent.prototype.addEvent = function () {
        if (!this.evento.title) {
            alert("Insira um Título");
            document.getElementById('tituloInput').focus();
            return;
        }
        if ((this.evento.end ? this.evento.start.getTime() > this.evento.end.getTime() : false) || (this.evento.horaEnd ? this.evento.horaStart.getTime() > this.evento.horaEnd.getTime() : false)) {
            alert("O início não pode ser depois do fim");
            return;
        }
        if (this.evento.id) {
            if (confirm("Confirmar alteração deste Evento?")) {
                this.agendaService.update()
                    .then(function (response) {
                    jQuery("#dialogEvento").modal('hide');
                })
                    .catch(function (response) {
                    alert("Falha na criação do evento!");
                });
            }
        }
        else {
            this.agendaService.create()
                .then(function (response) {
                jQuery("#dialogEvento").modal('hide');
            })
                .catch(function (response) {
                alert("Falha na criação do evento!");
            });
        }
    };
    AgendaComponent.prototype.delEvent = function (e) {
        if (this.evento.id > 0 && confirm("Confirmar exclusão deste Evento?"))
            this.agendaService.delete().then(function (response) {
                jQuery("#dialogEvento").modal('hide');
            });
    };
    AgendaComponent.prototype.update = function () {
        //incorrect
        /*this.events.push({
            "title": "Conference",
            "start": "2019-06-11",
            "end": "2019-06-13"
        });*/
        //correct
        /*this.events = [...this.events, {
            "title": "Conference",
            "start": "2019-06-12",
            "end": "2019-06-14"
        }];*/
        this.events = this.events.concat([{
                "title": "Conference",
                "date": this.data.toJSON()
            }]);
        //console.log (this.fc)
        //incorrect
        //this.options.weekends = false;
        //correct
        //this.options = [...this.options, { weekends: false }];
        //this.options = {...this.options, { height: 600 }};
    };
    AgendaComponent.prototype.janela = function () {
        this.editavel = true;
        if (this.intervalGamb) {
            clearTimeout(this.intervalGamb);
        }
        //this.evento = new EventoGerador();
        setTimeout(function () {
            document.getElementById('tituloInput').focus();
        }, 500);
    };
    AgendaComponent.prototype.resize = function () {
        var redimensionaAgenda = function (parametros) {
            parametros.componente.calendar.setOption('height', parametros.tamanho);
        };
        var red = new _redimensionavel__WEBPACK_IMPORTED_MODULE_8__["Redimensionavel"](null, 252, 450, null, { funcao: redimensionaAgenda, parametros: { componente: this.fc, tamanho: this.tamanho } });
        this.dadosService.componentesPersonalizados.push(red);
        this.dadosService.resizeFull();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fc'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_6__["FullCalendar"])
    ], AgendaComponent.prototype, "fc", void 0);
    AgendaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-agenda',
            template: __webpack_require__(/*! ./agenda.component.html */ "./src/app/agenda/agenda.component.html"),
            styles: [__webpack_require__(/*! ./agenda.component.less */ "./src/app/agenda/agenda.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_theme_service__WEBPACK_IMPORTED_MODULE_10__["ThemeService"], _dados_service__WEBPACK_IMPORTED_MODULE_9__["DadosService"], _agenda_service__WEBPACK_IMPORTED_MODULE_13__["AgendaService"]])
    ], AgendaComponent);
    return AgendaComponent;
}(_abstract_component__WEBPACK_IMPORTED_MODULE_11__["AbstractComponent"]));



/***/ }),

/***/ "./src/app/agenda/evento.ts":
/*!**********************************!*\
  !*** ./src/app/agenda/evento.ts ***!
  \**********************************/
/*! exports provided: EventoGerador */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventoGerador", function() { return EventoGerador; });
var EventoGerador = /** @class */ (function () {
    /*
    groupIdurl:string;
    classNames:Array<string> = []
    editable:boolean;
    startEditable:boolean;
    durationEditable:boolean;
    resourceEditable:boolean;
    rendering:string; //('background|inverse-background');
    overlap:boolean
    constraint
    extendedProps
    source*/
    function EventoGerador() {
        this.id = 0;
        this.allDay = false;
        this.title = "";
        this.backgroundColor = EventoGerador.COR;
        this.maisDay = false;
        this.repeticao = false;
        this.start = EventoGerador.defaultDateStart;
        this.end = EventoGerador.defaultDateEnd;
        this.horaStart = EventoGerador.defaultDateStart;
        this.horaEnd = EventoGerador.defaultDateEnd;
    }
    EventoGerador.prototype.gerarEventApi = function (id) {
        var eventApi = { title: this.title, allDay: this.allDay, maisDay: this.maisDay };
        if (id)
            eventApi.id = id;
        if (this.allDay) {
            if (this.maisDay) {
                eventApi.start = this.start.toJSON().slice(0, 10);
                eventApi.end = this.end.toJSON().slice(0, 10);
                var end = new Date(this.end);
                end.setDate(this.end.getDate() + 1);
                eventApi.end = end.toJSON().slice(0, 10);
            }
            else {
                eventApi.start = this.start.toJSON().slice(0, 10);
                eventApi.end = null;
            }
        }
        else {
            if (this.maisDay) {
                eventApi.start = new Date(this.start.getFullYear(), this.start.getMonth(), this.start.getDate(), this.horaStart.getHours(), this.horaStart.getMinutes()).toJSON();
                eventApi.end = new Date(this.end.getFullYear(), this.end.getMonth(), this.end.getDate(), this.horaEnd.getHours(), this.horaEnd.getMinutes()).toJSON();
            }
            else {
                eventApi.start = new Date(this.start.getFullYear(), this.start.getMonth(), this.start.getDate(), this.horaStart.getHours(), this.horaStart.getMinutes()).toJSON();
                eventApi.end = new Date(this.start.getFullYear(), this.start.getMonth(), this.start.getDate(), this.horaEnd.getHours(), this.horaEnd.getMinutes()).toJSON();
            }
        }
        if (this.backgroundColor != EventoGerador.COR)
            eventApi.backgroundColor = this.backgroundColor;
        return eventApi;
    };
    EventoGerador.obtemEvento = function (ev) {
        var evento = new EventoGerador();
        evento.id = ev.id ? parseInt(ev.id) : 0;
        evento.allDay = ev.allDay;
        if (ev.allDay) {
            evento.start = new Date(ev.start);
            evento.horaStart = new Date(ev.start);
            evento.horaStart.setHours(0, 0, 0);
            evento.horaEnd = new Date(ev.start);
            evento.horaEnd.setHours(23, 30, 0);
            if (ev.end) {
                // checar se é no mesmo dia
                var check = new Date(ev.end);
                check.setDate(check.getDate() - 1);
                if (evento.horaStart.getTime() >= check.getTime()) {
                    evento.maisDay = false;
                    evento.end = null;
                }
                else {
                    evento.maisDay = true;
                    evento.end = new Date(check);
                }
            }
            else {
                evento.maisDay = false;
                evento.end = null;
            }
            // tornar "novo evento" com allDay setado false
            if (evento.id == 0)
                evento.allDay = false;
        }
        else {
            evento.start = new Date(ev.start);
            evento.horaStart = new Date(ev.start);
            if (ev.end) {
                evento.end = new Date(ev.end);
                // tratamento continuidade
                evento.horaEnd = new Date(ev.end);
                evento.maisDay = evento.start.getDate() < evento.end.getDate();
            }
            else {
                evento.end = new Date(ev.start);
                evento.end.setHours(ev.start.getHours() + 1);
                evento.horaEnd = new Date(evento.end);
                evento.maisDay = evento.start.getDate() < evento.end.getDate();
            }
        }
        evento.title = ev.title;
        evento.backgroundColor = ev.backgroundColor == null || ev.backgroundColor == "" ? evento.backgroundColor = EventoGerador.COR : ev.backgroundColor;
        return evento;
        //evento.borderColor
        //evento.textColor
    };
    EventoGerador.prototype.gerarEventPost = function (id) {
        var eventApi = { title: this.title, allDay: this.allDay, maisDay: this.maisDay };
        if (id)
            eventApi.id = id;
        if (this.allDay) {
            if (this.maisDay) {
                eventApi.start = this.start.toJSON().slice(0, 10);
                eventApi.end = this.end.toJSON().slice(0, 10);
                var end = new Date(this.end);
                end.setDate(this.end.getDate() + 1);
                eventApi.end = end.toJSON().slice(0, 10);
            }
            else {
                eventApi.start = this.start.toJSON().slice(0, 10);
                eventApi.end = null;
            }
        }
        else {
            if (this.maisDay) {
                eventApi.start = new Date(this.start.getFullYear(), this.start.getMonth(), this.start.getDate(), this.horaStart.getHours(), this.horaStart.getMinutes()).toJSON().slice(0, 19).replace('T', ' ');
                eventApi.end = new Date(this.end.getFullYear(), this.end.getMonth(), this.end.getDate(), this.horaEnd.getHours(), this.horaEnd.getMinutes()).toJSON().slice(0, 19).replace('T', ' ');
            }
            else {
                eventApi.start = new Date(this.start.getFullYear(), this.start.getMonth(), this.start.getDate(), this.horaStart.getHours(), this.horaStart.getMinutes()).toJSON().slice(0, 19).replace('T', ' ');
                eventApi.end = new Date(this.start.getFullYear(), this.start.getMonth(), this.start.getDate(), this.horaEnd.getHours(), this.horaEnd.getMinutes()).toJSON().slice(0, 19).replace('T', ' ');
            }
        }
        if (this.backgroundColor != EventoGerador.COR)
            eventApi.backgroundColor = this.backgroundColor;
        return eventApi;
    };
    EventoGerador.obtemEventoGet = function (ev) {
        ev.id = parseInt(ev.id);
        if (!ev.allDay) {
            ev.start = new Date(ev.start + " GMT");
            ev.end = new Date(ev.end + " GMT");
        }
        if (!ev.backgroundColor) {
            ev.backgroundColor = ev.backgroundColor = EventoGerador.COR;
        }
        return ev;
        //evento.borderColor
        //evento.textColor
    };
    EventoGerador.NOW = new Date();
    EventoGerador.COR = "#1ea04c";
    EventoGerador.defaultDateStart = new Date(EventoGerador.NOW.getFullYear(), EventoGerador.NOW.getMonth(), EventoGerador.NOW.getDate(), 0);
    EventoGerador.defaultDateEnd = new Date(EventoGerador.NOW.getFullYear(), EventoGerador.NOW.getMonth(), EventoGerador.NOW.getDate(), 23, 30);
    return EventoGerador;
}());



/***/ }),

/***/ "./src/app/agenda/theme.ts":
/*!*********************************!*\
  !*** ./src/app/agenda/theme.ts ***!
  \*********************************/
/*! exports provided: Theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Theme", function() { return Theme; });
var Theme = /** @class */ (function () {
    function Theme(name, path) {
        this.name = name;
        this.path = path;
    }
    Theme.getThemes = function () {
        var themeArray = [];
        var basePath = "css/themes/";
        var endPath = "/theme.css";
        themeArray.push(new Theme("bootstrap", basePath + "bootstrap" + endPath));
        themeArray.push(new Theme("cruze", basePath + "cruze" + endPath));
        themeArray.push(new Theme("cupertino", basePath + "cupertino" + endPath));
        themeArray.push(new Theme("darkness", basePath + "darkness" + endPath));
        themeArray.push(new Theme("flick", basePath + "flick" + endPath));
        themeArray.push(new Theme("home", basePath + "home" + endPath));
        themeArray.push(new Theme("kasper", basePath + "kasper" + endPath));
        themeArray.push(new Theme("lightness", basePath + "lightness" + endPath));
        themeArray.push(new Theme("ludvig", basePath + "ludvig" + endPath));
        themeArray.push(new Theme("luna-amber", basePath + "luna-amber" + endPath));
        themeArray.push(new Theme("luna-blue", basePath + "luna-blue" + endPath));
        themeArray.push(new Theme("luna-green", basePath + "luna-green" + endPath));
        themeArray.push(new Theme("luna-pink", basePath + "luna-pink" + endPath));
        themeArray.push(new Theme("nova-colored", basePath + "nova-colored" + endPath));
        themeArray.push(new Theme("nova-dark", basePath + "nova-dark" + endPath));
        themeArray.push(new Theme("nova-light", basePath + "nova-light" + endPath));
        themeArray.push(new Theme("omega", basePath + "omega" + endPath));
        themeArray.push(new Theme("pepper-grinder", basePath + "pepper-grinder" + endPath));
        themeArray.push(new Theme("redmond", basePath + "redmond" + endPath));
        themeArray.push(new Theme("rhea", basePath + "rhea" + endPath));
        themeArray.push(new Theme("rocket", basePath + "rocket" + endPath));
        themeArray.push(new Theme("south-street", basePath + "south-street" + endPath));
        themeArray.push(new Theme("start", basePath + "start" + endPath));
        themeArray.push(new Theme("trontastic", basePath + "trontastic" + endPath));
        themeArray.push(new Theme("voclain", basePath + "voclain" + endPath));
        return themeArray;
    };
    return Theme;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'front';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _salas_salas_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./salas/salas.component */ "./src/app/salas/salas.component.ts");
/* harmony import */ var _usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./usuarios/usuarios.component */ "./src/app/usuarios/usuarios.component.ts");
/* harmony import */ var _agenda_agenda_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./agenda/agenda.component */ "./src/app/agenda/agenda.component.ts");
/* harmony import */ var _periodo_letivos_periodo_letivos_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./periodo-letivos/periodo-letivos.component */ "./src/app/periodo-letivos/periodo-letivos.component.ts");
/* harmony import */ var _faculdades_faculdades_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./faculdades/faculdades.component */ "./src/app/faculdades/faculdades.component.ts");
/* harmony import */ var _cursos_cursos_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cursos/cursos.component */ "./src/app/cursos/cursos.component.ts");
/* harmony import */ var _periodo_letivos_categorias_periodo_letivos_categorias_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./periodo-letivos-categorias/periodo-letivos-categorias.component */ "./src/app/periodo-letivos-categorias/periodo-letivos-categorias.component.ts");
/* harmony import */ var _salas_cria_salas_cria_salas_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./salas/cria-salas/cria-salas.component */ "./src/app/salas/cria-salas/cria-salas.component.ts");
/* harmony import */ var _select_usuario_select_usuario_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./select-usuario/select-usuario.component */ "./src/app/select-usuario/select-usuario.component.ts");
/* harmony import */ var _buscadores_buscadores_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./buscadores/buscadores.component */ "./src/app/buscadores/buscadores.component.ts");
/* harmony import */ var _arquivo_arquivo_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./arquivo/arquivo.component */ "./src/app/arquivo/arquivo.component.ts");
/* harmony import */ var _reservas_reservas_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./reservas/reservas.component */ "./src/app/reservas/reservas.component.ts");
/* harmony import */ var _recurso_recurso_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./recurso/recurso.component */ "./src/app/recurso/recurso.component.ts");
/* harmony import */ var _calendario_calendario_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./calendario/calendario.component */ "./src/app/calendario/calendario.component.ts");
/* harmony import */ var _macro_macro_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./macro/macro.component */ "./src/app/macro/macro.component.ts");
/* harmony import */ var _salas_old_salas_old_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./salas-old/salas-old.component */ "./src/app/salas-old/salas-old.component.ts");
/* harmony import */ var _pl_disciplinas_academicos_pl_disciplinas_academicos_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pl-disciplinas-academicos/pl-disciplinas-academicos.component */ "./src/app/pl-disciplinas-academicos/pl-disciplinas-academicos.component.ts");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/slider */ "./node_modules/primeng/slider.js");
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(primeng_slider__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! primeng/inputtextarea */ "./node_modules/primeng/inputtextarea.js");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/checkbox.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(primeng_checkbox__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! primeng/autocomplete */ "./node_modules/primeng/autocomplete.js");
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(primeng_autocomplete__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! primeng/fullcalendar */ "./node_modules/primeng/fullcalendar.js");
/* harmony import */ var primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var primeng_colorpicker__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! primeng/colorpicker */ "./node_modules/primeng/colorpicker.js");
/* harmony import */ var primeng_colorpicker__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(primeng_colorpicker__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! primeng/radiobutton */ "./node_modules/primeng/radiobutton.js");
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(primeng_radiobutton__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! primeng/fileupload */ "./node_modules/primeng/fileupload.js");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(primeng_fileupload__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var _usuario_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./usuario.service */ "./src/app/usuario.service.ts");
/* harmony import */ var _salas_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./salas.service */ "./src/app/salas.service.ts");
/* harmony import */ var _dados_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./dados.service */ "./src/app/dados.service.ts");
/* harmony import */ var _theme_service__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./theme.service */ "./src/app/theme.service.ts");
/* harmony import */ var _agenda_service__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./agenda.service */ "./src/app/agenda.service.ts");
/* harmony import */ var _macro_service__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./macro.service */ "./src/app/macro.service.ts");
/* harmony import */ var _recurso_service__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./recurso.service */ "./src/app/recurso.service.ts");
/* harmony import */ var _reservas_service__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./reservas.service */ "./src/app/reservas.service.ts");
/* harmony import */ var _salas_old_service__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./salas-old.service */ "./src/app/salas-old.service.ts");
/* harmony import */ var _periodo_letivos_service__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./periodo-letivos.service */ "./src/app/periodo-letivos.service.ts");
/* harmony import */ var _faculdade_service__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./faculdade.service */ "./src/app/faculdade.service.ts");
/* harmony import */ var _cursos_service__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./cursos.service */ "./src/app/cursos.service.ts");
/* harmony import */ var _periodo_letivos_categorias_service__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./periodo-letivos-categorias.service */ "./src/app/periodo-letivos-categorias.service.ts");
/* harmony import */ var _pl_disciplinas_academicos_service__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./pl-disciplinas-academicos.service */ "./src/app/pl-disciplinas-academicos.service.ts");
/* harmony import */ var _zeros_pipe__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./zeros.pipe */ "./src/app/zeros.pipe.ts");
/* harmony import */ var _formatador_data_pipe__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./formatador-data.pipe */ "./src/app/formatador-data.pipe.ts");
/* harmony import */ var _filtro_salas_pipe__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./filtro-salas.pipe */ "./src/app/filtro-salas.pipe.ts");
/* harmony import */ var _filtro_usuario_pipe__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./filtro-usuario.pipe */ "./src/app/filtro-usuario.pipe.ts");
/* harmony import */ var _filtro_cursos_pipe__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./filtro-cursos.pipe */ "./src/app/filtro-cursos.pipe.ts");
/* harmony import */ var _redimensionar_directive__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./redimensionar.directive */ "./src/app/redimensionar.directive.ts");
/* harmony import */ var _super_macro_super_macro_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./super-macro/super-macro.component */ "./src/app/super-macro/super-macro.component.ts");
/* harmony import */ var _super_macro_service__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./super-macro.service */ "./src/app/super-macro.service.ts");
/* harmony import */ var _lote_salas_cria_lote_salas_cria_lote_salas_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./lote-salas/cria-lote-salas/cria-lote-salas.component */ "./src/app/lote-salas/cria-lote-salas/cria-lote-salas.component.ts");
/* harmony import */ var _lote_salas_lote_salas_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./lote-salas/lote-salas.component */ "./src/app/lote-salas/lote-salas.component.ts");
/* harmony import */ var _lote_salas_service__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./lote-salas.service */ "./src/app/lote-salas.service.ts");
/* harmony import */ var _servidores_moodle_servidores_moodle_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./servidores-moodle/servidores-moodle.component */ "./src/app/servidores-moodle/servidores-moodle.component.ts");
/* harmony import */ var _servidores_moodle_service__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./servidores-moodle.service */ "./src/app/servidores-moodle.service.ts");
/* harmony import */ var _servidores_moodle_formulario_insercao_usuarios_moodle_formulario_insercao_usuarios_moodle_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./servidores-moodle/formulario-insercao-usuarios-moodle/formulario-insercao-usuarios-moodle.component */ "./src/app/servidores-moodle/formulario-insercao-usuarios-moodle/formulario-insercao-usuarios-moodle.component.ts");
/* harmony import */ var _pl_disciplinas_academicos_obtem_plda_obtem_plda_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./pl-disciplinas-academicos/obtem-plda/obtem-plda.component */ "./src/app/pl-disciplinas-academicos/obtem-plda/obtem-plda.component.ts");
/* harmony import */ var _macro_super_macro_service__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./macro-super-macro.service */ "./src/app/macro-super-macro.service.ts");
/* harmony import */ var _super_macro_macro_super_macro_macro_super_macro_component__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./super-macro/macro-super-macro/macro-super-macro.component */ "./src/app/super-macro/macro-super-macro/macro-super-macro.component.ts");
/* harmony import */ var _lote_salas_simplificado_lote_salas_simplificado_component__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./lote-salas-simplificado/lote-salas-simplificado.component */ "./src/app/lote-salas-simplificado/lote-salas-simplificado.component.ts");
/* harmony import */ var _lote_salas_simplificado_service__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./lote-salas-simplificado.service */ "./src/app/lote-salas-simplificado.service.ts");
/* harmony import */ var _sala_simplificada_sala_simplificada_component__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./sala-simplificada/sala-simplificada.component */ "./src/app/sala-simplificada/sala-simplificada.component.ts");
/* harmony import */ var _sala_simplificada_service__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./sala-simplificada.service */ "./src/app/sala-simplificada.service.ts");
/* harmony import */ var _grupo_lotes_simplificados_service__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./grupo-lotes-simplificados.service */ "./src/app/grupo-lotes-simplificados.service.ts");
/* harmony import */ var _logs_logs_component__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./logs/logs.component */ "./src/app/logs/logs.component.ts");
/* harmony import */ var _logs_service__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./logs.service */ "./src/app/logs.service.ts");
/* harmony import */ var _unidade_organizacional_unidade_organizacional_component__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./unidade-organizacional/unidade-organizacional.component */ "./src/app/unidade-organizacional/unidade-organizacional.component.ts");
/* harmony import */ var _unidade_organizacional_service__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./unidade-organizacional.service */ "./src/app/unidade-organizacional.service.ts");
/* harmony import */ var _unidade_organizacional_formulario_insercao_usuarios_ad_formulario_insercao_usuarios_ad_component__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./unidade-organizacional/formulario-insercao-usuarios-ad/formulario-insercao-usuarios-ad.component */ "./src/app/unidade-organizacional/formulario-insercao-usuarios-ad/formulario-insercao-usuarios-ad.component.ts");
/* harmony import */ var _unidade_organizacional_formulario_alteracao_usuario_formulario_alteracao_usuario_component__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./unidade-organizacional/formulario-alteracao-usuario/formulario-alteracao-usuario.component */ "./src/app/unidade-organizacional/formulario-alteracao-usuario/formulario-alteracao-usuario.component.ts");
/* harmony import */ var _usuarios_formulario_pessoas_estatus_lotacao_formulario_pessoas_estatus_lotacao_component__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./usuarios/formulario-pessoas-estatus-lotacao/formulario-pessoas-estatus-lotacao.component */ "./src/app/usuarios/formulario-pessoas-estatus-lotacao/formulario-pessoas-estatus-lotacao.component.ts");
/* harmony import */ var _pessoas_estatus_lotacao_service__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./pessoas-estatus-lotacao.service */ "./src/app/pessoas-estatus-lotacao.service.ts");






















































//import { ThemeService } from './theme.service';






























var appRoutes = [
    { path: 'salas', component: _salas_salas_component__WEBPACK_IMPORTED_MODULE_11__["SalasComponent"] },
    { path: 'salas/create', component: _salas_cria_salas_cria_salas_component__WEBPACK_IMPORTED_MODULE_18__["CriaSalasComponent"] },
    { path: 'salas/create/:periodoLetivoKey/:codigoCurso/:codigoDisciplina/:salaTurma', component: _salas_cria_salas_cria_salas_component__WEBPACK_IMPORTED_MODULE_18__["CriaSalasComponent"] },
    { path: 'salas-old', component: _salas_old_salas_old_component__WEBPACK_IMPORTED_MODULE_26__["SalasOldComponent"] },
    { path: 'lote-salas', component: _lote_salas_lote_salas_component__WEBPACK_IMPORTED_MODULE_63__["LoteSalasComponent"] },
    { path: 'lote-salas-simplificados', component: _lote_salas_simplificado_lote_salas_simplificado_component__WEBPACK_IMPORTED_MODULE_71__["LoteSalasSimplificadoComponent"] },
    { path: 'periodo-letivos', component: _periodo_letivos_periodo_letivos_component__WEBPACK_IMPORTED_MODULE_14__["PeriodoLetivosComponent"] },
    { path: 'periodo-letivos-categorias', component: _periodo_letivos_categorias_periodo_letivos_categorias_component__WEBPACK_IMPORTED_MODULE_17__["PeriodoLetivosCategoriasComponent"] },
    { path: 'pl-disciplinas-academicos', component: _pl_disciplinas_academicos_pl_disciplinas_academicos_component__WEBPACK_IMPORTED_MODULE_27__["PlDisciplinasAcademicosComponent"] },
    { path: 'faculdades', component: _faculdades_faculdades_component__WEBPACK_IMPORTED_MODULE_15__["FaculdadesComponent"] },
    { path: 'usuarios', component: _usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_12__["UsuariosComponent"] },
    { path: 'servidores-moodle', component: _servidores_moodle_servidores_moodle_component__WEBPACK_IMPORTED_MODULE_65__["ServidoresMoodleComponent"] },
    { path: 'formulario-insere-usuarios', component: _servidores_moodle_formulario_insercao_usuarios_moodle_formulario_insercao_usuarios_moodle_component__WEBPACK_IMPORTED_MODULE_67__["FormularioInsercaoUsuariosMoodleComponent"] },
    { path: 'agenda', component: _agenda_agenda_component__WEBPACK_IMPORTED_MODULE_13__["AgendaComponent"] },
    { path: 'reservas', component: _reservas_reservas_component__WEBPACK_IMPORTED_MODULE_22__["ReservasComponent"] },
    { path: 'recursos', component: _recurso_recurso_component__WEBPACK_IMPORTED_MODULE_23__["RecursoComponent"] },
    { path: 'calendario', component: _calendario_calendario_component__WEBPACK_IMPORTED_MODULE_24__["CalendarioComponent"] },
    { path: 'macro', component: _macro_macro_component__WEBPACK_IMPORTED_MODULE_25__["MacroComponent"] },
    { path: 'super-macro', component: _super_macro_super_macro_component__WEBPACK_IMPORTED_MODULE_60__["SuperMacroComponent"] },
    { path: 'unidade-organizacional', component: _unidade_organizacional_unidade_organizacional_component__WEBPACK_IMPORTED_MODULE_78__["UnidadeOrganizacionalComponent"] },
    { path: 'formulario-insere-ad', component: _unidade_organizacional_formulario_insercao_usuarios_ad_formulario_insercao_usuarios_ad_component__WEBPACK_IMPORTED_MODULE_80__["FormularioInsercaoUsuariosAdComponent"] },
    { path: 'formulario-altera-usuario', component: _unidade_organizacional_formulario_alteracao_usuario_formulario_alteracao_usuario_component__WEBPACK_IMPORTED_MODULE_81__["FormularioAlteracaoUsuarioComponent"] },
    { path: 'formulario-pessoas-estatus-lotacao', component: _usuarios_formulario_pessoas_estatus_lotacao_formulario_pessoas_estatus_lotacao_component__WEBPACK_IMPORTED_MODULE_82__["FormularioPessoasEstatusLotacaoComponent"] },
    { path: 'logs', component: _logs_logs_component__WEBPACK_IMPORTED_MODULE_76__["LogsComponent"] },
    /*{ path: '',
      redirectTo: '/',
      pathMatch: 'full'
    },*/
    { path: '**', component: _usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_12__["UsuariosComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _salas_salas_component__WEBPACK_IMPORTED_MODULE_11__["SalasComponent"],
                _zeros_pipe__WEBPACK_IMPORTED_MODULE_54__["ZerosPipe"],
                _formatador_data_pipe__WEBPACK_IMPORTED_MODULE_55__["FormatadorDataPipe"],
                _redimensionar_directive__WEBPACK_IMPORTED_MODULE_59__["RedimensionarDirective"],
                _usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_12__["UsuariosComponent"],
                _filtro_salas_pipe__WEBPACK_IMPORTED_MODULE_56__["FiltroSalasPipe"],
                _filtro_usuario_pipe__WEBPACK_IMPORTED_MODULE_57__["FiltroUsuarioPipe"],
                _filtro_cursos_pipe__WEBPACK_IMPORTED_MODULE_58__["FiltroCursosPipe"],
                _agenda_agenda_component__WEBPACK_IMPORTED_MODULE_13__["AgendaComponent"],
                _calendario_calendario_component__WEBPACK_IMPORTED_MODULE_24__["CalendarioComponent"],
                _macro_macro_component__WEBPACK_IMPORTED_MODULE_25__["MacroComponent"],
                _buscadores_buscadores_component__WEBPACK_IMPORTED_MODULE_20__["BuscadoresComponent"],
                _arquivo_arquivo_component__WEBPACK_IMPORTED_MODULE_21__["ArquivoComponent"],
                _reservas_reservas_component__WEBPACK_IMPORTED_MODULE_22__["ReservasComponent"],
                _recurso_recurso_component__WEBPACK_IMPORTED_MODULE_23__["RecursoComponent"],
                _select_usuario_select_usuario_component__WEBPACK_IMPORTED_MODULE_19__["SelectUsuarioComponent"],
                _salas_old_salas_old_component__WEBPACK_IMPORTED_MODULE_26__["SalasOldComponent"],
                _periodo_letivos_periodo_letivos_component__WEBPACK_IMPORTED_MODULE_14__["PeriodoLetivosComponent"],
                _faculdades_faculdades_component__WEBPACK_IMPORTED_MODULE_15__["FaculdadesComponent"],
                _cursos_cursos_component__WEBPACK_IMPORTED_MODULE_16__["CursosComponent"],
                _periodo_letivos_categorias_periodo_letivos_categorias_component__WEBPACK_IMPORTED_MODULE_17__["PeriodoLetivosCategoriasComponent"],
                _salas_cria_salas_cria_salas_component__WEBPACK_IMPORTED_MODULE_18__["CriaSalasComponent"],
                _pl_disciplinas_academicos_pl_disciplinas_academicos_component__WEBPACK_IMPORTED_MODULE_27__["PlDisciplinasAcademicosComponent"],
                _super_macro_super_macro_component__WEBPACK_IMPORTED_MODULE_60__["SuperMacroComponent"],
                _lote_salas_cria_lote_salas_cria_lote_salas_component__WEBPACK_IMPORTED_MODULE_62__["CriaLoteSalasComponent"],
                _lote_salas_lote_salas_component__WEBPACK_IMPORTED_MODULE_63__["LoteSalasComponent"],
                _servidores_moodle_servidores_moodle_component__WEBPACK_IMPORTED_MODULE_65__["ServidoresMoodleComponent"],
                _servidores_moodle_formulario_insercao_usuarios_moodle_formulario_insercao_usuarios_moodle_component__WEBPACK_IMPORTED_MODULE_67__["FormularioInsercaoUsuariosMoodleComponent"],
                _pl_disciplinas_academicos_obtem_plda_obtem_plda_component__WEBPACK_IMPORTED_MODULE_68__["ObtemPldaComponent"],
                _super_macro_macro_super_macro_macro_super_macro_component__WEBPACK_IMPORTED_MODULE_70__["MacroSuperMacroComponent"],
                _lote_salas_simplificado_lote_salas_simplificado_component__WEBPACK_IMPORTED_MODULE_71__["LoteSalasSimplificadoComponent"],
                _sala_simplificada_sala_simplificada_component__WEBPACK_IMPORTED_MODULE_73__["SalaSimplificadaComponent"],
                _logs_logs_component__WEBPACK_IMPORTED_MODULE_76__["LogsComponent"],
                _unidade_organizacional_unidade_organizacional_component__WEBPACK_IMPORTED_MODULE_78__["UnidadeOrganizacionalComponent"],
                _unidade_organizacional_formulario_insercao_usuarios_ad_formulario_insercao_usuarios_ad_component__WEBPACK_IMPORTED_MODULE_80__["FormularioInsercaoUsuariosAdComponent"],
                _unidade_organizacional_formulario_alteracao_usuario_formulario_alteracao_usuario_component__WEBPACK_IMPORTED_MODULE_81__["FormularioAlteracaoUsuarioComponent"],
                _usuarios_formulario_pessoas_estatus_lotacao_formulario_pessoas_estatus_lotacao_component__WEBPACK_IMPORTED_MODULE_82__["FormularioPessoasEstatusLotacaoComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_6__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(appRoutes),
                // Prime
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_28__["ButtonModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_30__["InputTextModule"],
                primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_31__["InputTextareaModule"],
                primeng_checkbox__WEBPACK_IMPORTED_MODULE_32__["CheckboxModule"],
                primeng_autocomplete__WEBPACK_IMPORTED_MODULE_34__["AutoCompleteModule"],
                //AccordionModule,
                //PanelModule,
                primeng_calendar__WEBPACK_IMPORTED_MODULE_35__["CalendarModule"],
                primeng_slider__WEBPACK_IMPORTED_MODULE_29__["SliderModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_33__["DropdownModule"],
                primeng_colorpicker__WEBPACK_IMPORTED_MODULE_37__["ColorPickerModule"],
                primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_36__["FullCalendarModule"],
                primeng_radiobutton__WEBPACK_IMPORTED_MODULE_38__["RadioButtonModule"],
                primeng_fileupload__WEBPACK_IMPORTED_MODULE_39__["FileUploadModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["ScrollingModule"]
            ],
            providers: [
                _salas_service__WEBPACK_IMPORTED_MODULE_41__["SalasService"],
                _salas_old_service__WEBPACK_IMPORTED_MODULE_48__["SalasOldService"],
                _dados_service__WEBPACK_IMPORTED_MODULE_42__["DadosService"],
                _usuario_service__WEBPACK_IMPORTED_MODULE_40__["UsuarioService"],
                _agenda_service__WEBPACK_IMPORTED_MODULE_44__["AgendaService"],
                _theme_service__WEBPACK_IMPORTED_MODULE_43__["ThemeService"],
                _macro_service__WEBPACK_IMPORTED_MODULE_45__["MacroService"],
                _recurso_service__WEBPACK_IMPORTED_MODULE_46__["RecursoService"],
                _reservas_service__WEBPACK_IMPORTED_MODULE_47__["ReservasService"],
                _periodo_letivos_service__WEBPACK_IMPORTED_MODULE_49__["PeriodoLetivosService"],
                _periodo_letivos_categorias_service__WEBPACK_IMPORTED_MODULE_52__["PeriodoLetivosCategoriasService"],
                _faculdade_service__WEBPACK_IMPORTED_MODULE_50__["FaculdadeService"],
                _cursos_service__WEBPACK_IMPORTED_MODULE_51__["CursosService"],
                _pl_disciplinas_academicos_service__WEBPACK_IMPORTED_MODULE_53__["PlDisciplinasAcademicosService"],
                _super_macro_service__WEBPACK_IMPORTED_MODULE_61__["SuperMacroService"],
                _macro_super_macro_service__WEBPACK_IMPORTED_MODULE_69__["MacroSuperMacroService"],
                _lote_salas_service__WEBPACK_IMPORTED_MODULE_64__["LoteSalasService"],
                _servidores_moodle_service__WEBPACK_IMPORTED_MODULE_66__["ServidoresMoodleService"],
                _lote_salas_simplificado_service__WEBPACK_IMPORTED_MODULE_72__["LoteSalasSimplificadoService"],
                _sala_simplificada_service__WEBPACK_IMPORTED_MODULE_74__["SalaSimplificadaService"],
                _grupo_lotes_simplificados_service__WEBPACK_IMPORTED_MODULE_75__["GrupoLotesSimplificadosService"],
                _unidade_organizacional_service__WEBPACK_IMPORTED_MODULE_79__["UnidadeOrganizacionalService"],
                _pessoas_estatus_lotacao_service__WEBPACK_IMPORTED_MODULE_83__["PessoasEstatusLotacaoService"],
                _logs_service__WEBPACK_IMPORTED_MODULE_77__["LogsService"]
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/arquivo/arquivo.component.html":
/*!************************************************!*\
  !*** ./src/app/arquivo/arquivo.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <label>Novo Arquivo:</label>\n    <p-fileUpload name=\"arquivo\" chooseLabel=\"Adicionar\" customUpload=\"true\" (uploadHandler)=\"onFileUpload($event)\" [disabled]=\"!editavel\"></p-fileUpload>\n    <!--input type=\"file\" name=\"arquivo\" /-->\n</div>\n<div>\n    <p></p>\n    <label>Arquivos em Disco:</label>\n    <table class=\"table\" style=\"margin-bottom: 0px\">\n        <colgroup>\n            <col width=\"70px\" />\n            <col width=\"100%\"/>\n            <col width=\"90px\"/>\n            <col width=\"15px\"/>\n        </colgroup>\n        <thead class=\"thead-light\">\n            <tr>\n                <th style=\"text-align: center\" title=\"SELECIONADO\">SELEC.</th>\n                <th style=\"text-align: center\">ARQUIVO</th>\n                <th class=\"celula-trunca-texto\" title=\"DATA\">DATA</th>\n                <th></th>\n            </tr>\n        </thead>\n    </table>\n</div>\n<div redimensionar=\"500\" style=\"overflow-y: scroll;\">\n    <table class=\"table\">\n        <colgroup>\n            <col width=\"70px\" />\n            <col width=\"100%\"/>\n            <col width=\"90px\"/>\n        </colgroup>\n        <tbody>\n            <tr *ngFor=\"let file of files\" [ngClass]=\"{'linha-selecionada': file.name == arquivoSelecionadoRadio}\">\n                <td style=\"text-align: center\"><p-radioButton name=\"group1\" value=\"{{file.name}}\" (onClick)=\"changeArquivo(file)\" [(ngModel)]=\"arquivoSelecionadoRadio\" [disabled]=\"!editavelChild\"></p-radioButton></td>\n                <td class=\"celula-trunca-texto\" title=\"{{file.name}}\"><a href=\"{{file.path}}\">{{file.name}}</a></td>\n                <td class=\"celula-trunca-texto\" >{{file.created | formatadorData}}</td>\n            </tr>\n        </tbody>\n        <tfoot class=\"status-tabela\">\n            <tr *ngIf=\"status == LOADING\"><td colspan=\"6\"><i>Carregando Lista de Arquivos...</i></td></tr>\n            <tr *ngIf=\"files != null && files.length == 0 && status == COMPLETE\"><td colspan=\"6\"><i>Não Há Arquivos para serem listados</i></td></tr>\n            <tr *ngIf=\"status == ERROR\"><td class=\"erro\" colspan=\"6\"><i>Falha na obtenção da Lista de Arquivos!</i></td></tr>\n        </tfoot>\n    </table>\n</div>"

/***/ }),

/***/ "./src/app/arquivo/arquivo.component.less":
/*!************************************************!*\
  !*** ./src/app/arquivo/arquivo.component.less ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FycXVpdm8vYXJxdWl2by5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/arquivo/arquivo.component.ts":
/*!**********************************************!*\
  !*** ./src/app/arquivo/arquivo.component.ts ***!
  \**********************************************/
/*! exports provided: ArquivoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArquivoComponent", function() { return ArquivoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _macro_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../macro.service */ "./src/app/macro.service.ts");
/* harmony import */ var _abstract_component_child__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../abstract-component-child */ "./src/app/abstract-component-child.ts");
/* harmony import */ var _macro_macro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../macro/macro.component */ "./src/app/macro/macro.component.ts");





var ArquivoComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ArquivoComponent, _super);
    //arquivoSelecionado:string = "";
    function ArquivoComponent(macroService) {
        var _this = _super.call(this) || this;
        _this.macroService = macroService;
        _this.val2 = 'Option 2';
        return _this;
    }
    Object.defineProperty(ArquivoComponent.prototype, "editavelChild", {
        get: function () {
            return this.editavel && this.macroService.macroSelecionada.id > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArquivoComponent.prototype, "nomeMacro", {
        get: function () {
            return this.macroService.macroSelecionada.nome;
        },
        set: function (nome) {
            this.macroService.macroSelecionada.nome = nome;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArquivoComponent.prototype, "files", {
        get: function () {
            return this.macroService.files;
        },
        set: function (files) {
            this.macroService.files = files;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArquivoComponent.prototype, "arquivoSelecionadoRadio", {
        get: function () {
            return this.macroService.macroSelecionada.arquivo ? this.macroService.macroSelecionada.arquivo.name : null;
        },
        enumerable: true,
        configurable: true
    });
    /*set arquivoSelecionadoRadio (arquivo) {
        this.macroService.macroSelecionada.arquivo.name = arquivo
    }*/
    ArquivoComponent.prototype.changeArquivo = function (arquivo) {
        var _this = this;
        if (this.editavelChild) {
            this.macroService.changeArquivo(arquivo.name)
                .then(function (r) {
                _this.macroService.macroSelecionada.arquivo = arquivo;
            })
                .catch(function (r) {
                _this.erroHttp(r);
            });
        }
        //this.macroService.macroSelecionada.arquivo = arquivo
    };
    ArquivoComponent.prototype.onFileUpload = function (event) {
        var _this = this;
        this.macroService.onFileUpload(event)
            .then(function (nomeArquivo) {
            if (_this.ancestral instanceof _macro_macro_component__WEBPACK_IMPORTED_MODULE_4__["MacroComponent"]) {
                return _this.ancestral.carregarLista()
                    .then(function (r) {
                    var novoArquivo = _this.macroService.files[_this.macroService.filesIndex[nomeArquivo]];
                    _this.macroService.macroSelecionada.arquivo = novoArquivo;
                    return nomeArquivo;
                })
                    .catch(function (r) {
                    _this.erroHttp(r);
                });
            }
        })
            .catch(function (r) {
            _this.erroHttp(r);
        });
    };
    ArquivoComponent.prototype.ngOnInit = function () {
        //this.arquivoSelecionado = this.macroService.macroSelecionada.arquivo ? this.macroService.macroSelecionada.arquivo.name : null;
    };
    ArquivoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-arquivo',
            template: __webpack_require__(/*! ./arquivo.component.html */ "./src/app/arquivo/arquivo.component.html"),
            styles: [__webpack_require__(/*! ./arquivo.component.less */ "./src/app/arquivo/arquivo.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_macro_service__WEBPACK_IMPORTED_MODULE_2__["MacroService"]])
    ], ArquivoComponent);
    return ArquivoComponent;
}(_abstract_component_child__WEBPACK_IMPORTED_MODULE_3__["AbstractComponentChild"]));



/***/ }),

/***/ "./src/app/arquivo/arquivo.ts":
/*!************************************!*\
  !*** ./src/app/arquivo/arquivo.ts ***!
  \************************************/
/*! exports provided: Arquivo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Arquivo", function() { return Arquivo; });
var Arquivo = /** @class */ (function () {
    function Arquivo(name, path, created) {
        if (typeof name == 'string') {
            this.name = name;
            this.path = path.replace(/\\/g, '/');
            this.created = new Date(created);
        }
        else {
            this.name = name.name;
            this.path = name.path.replace(/\\/g, '/');
            this.created = new Date(name.created);
        }
    }
    return Arquivo;
}());



/***/ }),

/***/ "./src/app/array-indexador.ts":
/*!************************************!*\
  !*** ./src/app/array-indexador.ts ***!
  \************************************/
/*! exports provided: ArrayIndexador */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayIndexador", function() { return ArrayIndexador; });
var ArrayIndexador = /** @class */ (function () {
    function ArrayIndexador(lista, chavePersonalizada) {
        this.listaOrigin = [];
        this.indices = {};
        this.chave = "id";
        if (chavePersonalizada)
            this.chave = chavePersonalizada;
        for (var i = 0; i < lista.length; i++) {
            this.indices[lista[i][this.chave]] = i;
        }
        this.listaOrigin = lista;
    }
    ArrayIndexador.prototype.get = function (chave) {
        var ret = this.listaOrigin[this.indices[chave]];
        return ret ? ret : null;
    };
    ArrayIndexador.prototype.append = function (lista) {
        this.listaOrigin = this.listaOrigin.slice(0);
        this.listaOrigin = this.listaOrigin.concat(lista);
        for (var i = this.listaOrigin.length - lista.length; i < this.listaOrigin.length; i++) {
            this.indices[this.listaOrigin[i][this.chave]] = i;
        }
    };
    ArrayIndexador.prototype.add = function (elem) {
        this.indices[elem[this.chave]] = this.listaOrigin.length;
        this.listaOrigin.push(elem);
    };
    /*update(elem) {
        this.listaOrigin[this.indices[elem[this.chave]]];
    }*/
    ArrayIndexador.prototype.remove = function (chave) {
        this.listaOrigin.splice(this.indices[chave], 1);
        this.indices = {};
        for (var i = 0; i < this.listaOrigin.length; i++) {
            this.indices[this.listaOrigin[i][this.chave]] = i;
        }
    };
    return ArrayIndexador;
}());



/***/ }),

/***/ "./src/app/arvore.ts":
/*!***************************!*\
  !*** ./src/app/arvore.ts ***!
  \***************************/
/*! exports provided: Arvore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Arvore", function() { return Arvore; });
var Arvore = /** @class */ (function () {
    function Arvore(id, dado) {
        this.pai = null;
        this.filhos = {}; // lista de árvores
        this.id = id;
        this.dado = dado;
    }
    // Encontra o nó correspondente ao id informado
    Arvore.prototype.find = function (id) {
        if (this.id == id || id == null)
            return this;
        for (var i in this.filhos) {
            var buscado = this.filhos[i].find(id);
            if (buscado)
                return buscado;
        }
        return null;
    };
    // insere um nó na árvore, como filho do nó-id informado
    Arvore.prototype.insert = function (filho, paiId) {
        if (!(filho instanceof Arvore))
            return false;
        var pai = this.find(paiId);
        if (pai) {
            pai.filhos[filho.id] = filho;
            filho.pai = pai;
        }
        else {
            this.filhos[filho.id] = filho;
            filho.pai = this;
        }
        return true;
    };
    // remove um nó da árvore por id, se upper for true, transfere os filhos desse nó para seu pai, caso seja false, exclui recursivamente
    Arvore.prototype.delete = function (id, upper) {
        if (upper === void 0) { upper = false; }
        var nodo = this.find(id);
        if (nodo) {
            if (nodo.isRaiz())
                return null;
            if (upper) {
                nodo.upper();
            }
            else {
                for (var i in nodo.filhos)
                    nodo.filhos[i].delete();
            }
            delete (nodo.pai.filhos[id]);
        }
        return nodo;
    };
    // Transfere todos os filhos deste nodo para seu pai
    Arvore.prototype.upper = function () {
        if (this.pai) {
            for (var i in this.filhos) {
                this.filhos[i].pai = this.pai;
                this.pai.filhos[i] = this.filhos[i];
            }
            this.filhos = [];
        }
        else
            return false;
        return true;
    };
    // altera um nodo de lugar (troca de pai)
    Arvore.prototype.change = function (id, novoPaiId) {
        //var nodo = this.delete(id);
        var nodo = this.find(id);
        if (nodo && !nodo.isRaiz() && this.insert(nodo, novoPaiId))
            return nodo;
        return null;
    };
    Arvore.prototype.isAncestral = function (id, descendenteId) {
        var nodo = this.find(id);
        if (nodo.find(descendenteId))
            return true;
        else
            return false;
    };
    Arvore.prototype.isRaiz = function () {
        return this.pai == null;
    };
    Arvore.prototype.isFolha = function () {
        return Object.keys(this.filhos).length == 0;
    };
    // função de sort, apenas esqueleto, para ser sobrescrita por função apropriada, dependendo da aplicação
    Arvore.prototype.sortFilhosArray = function (a1, a2) {
        return 0;
    };
    Object.defineProperty(Arvore.prototype, "filhosArray", {
        get: function () {
            var filhos = [];
            for (var i in this.filhos)
                filhos.push(this.filhos[i]);
            this.sortFilhosArray ? filhos.sort(this.sortFilhosArray) : filhos;
            return filhos;
        },
        enumerable: true,
        configurable: true
    });
    return Arvore;
}());



/***/ }),

/***/ "./src/app/buscadores/buscador.ts":
/*!****************************************!*\
  !*** ./src/app/buscadores/buscador.ts ***!
  \****************************************/
/*! exports provided: Buscador */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Buscador", function() { return Buscador; });
var Buscador = /** @class */ (function () {
    function Buscador(id, chave, entrada) {
        if (typeof id == "number") {
            this.id = id;
            this.chave = chave;
            this.entrada = entrada;
        }
        else {
            this.id = id.id;
            this.chave = id.chave;
            this.entrada = id.entrada;
        }
    }
    Buscador.prototype.clone = function () {
        return new Buscador(this.id, this.chave, this.entrada);
    };
    return Buscador;
}());



/***/ }),

/***/ "./src/app/buscadores/buscadores.component.html":
/*!******************************************************!*\
  !*** ./src/app/buscadores/buscadores.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <table class=\"table\" style=\"margin-bottom: 0px\">\n        <colgroup>\n            <col width=\"50%\"/>\n            <col width=\"50%\"/>\n            <col width=\"39px\"/>\n            <col width=\"39px\"/>\n            <col width=\"15px\"/>\n        </colgroup>\n        <thead class=\"thead-light\">\n            <tr>\n                <th title=\"Item que será pesquisado para ser substituído pelas entradas desejadas\">CHAVE</th>\n                <th title=\"Item que será substituído em cada ocorrencia da Chave\">ENTRADA</th>\n                <th></th>\n                <th></th>\n                <th></th>\n            </tr>\n        </thead>\n    </table>\n</div>\n<div redimensionar=\"262\" style=\"overflow-y: scroll;\">\n    <table class=\"table\">\n        <colgroup>\n            <col width=\"50%\"/>\n            <col width=\"50%\"/>\n            <col width=\"39px\"/>\n            <col width=\"39px\"/>\n        </colgroup>\n        <tbody>\n            <tr *ngFor=\"let buscador of macro.buscadores\">\n                <ng-container *ngIf=\"buscadorTemp.id != buscador.id\">\n                    <td class=\"celula-trunca-texto\" title=\"{{buscador.chave}}\">{{buscador.chave}}</td>\n                    <td class=\"celula-trunca-texto\" title=\"{{buscador.entrada}}\">{{buscador.entrada}}</td>\n                    <td class=\"celula-trunca-texto\" title=\"Editar\">\n                        <button style=\"text-align: center; margin-left: 2px;\" title=\"Editar\" type=\"button\" class=\"btn btn-info botao-reduzido\" (click)=\"editar(buscador)\">\n                            <span class=\"glyphicon glyphicon-edit\"></span>\n                        </button>\n                    </td>\n                    <td class=\"celula-trunca-texto\" title=\"Excluir\">\n                        <button style=\"text-align: center; margin-left: 2px;\" title=\"Excluir\" type=\"button\" class=\"btn btn-danger botao-reduzido\" (click)=\"deletar(buscador)\">\n                            <span class=\"glyphicon glyphicon-remove\"></span>\n                        </button>\n                    </td>\n                </ng-container>\n                <ng-container *ngIf=\"buscadorTemp.id == buscador.id\">\n                    <td class=\"celula-trunca-texto\" title=\"{{buscadorTemp.chave}}\"><input type=\"text\" class=\"form-control form-control-micro\" [(ngModel)]=\"buscadorTemp.chave\" required/></td>\n                    <td class=\"celula-trunca-texto\" title=\"{{buscadorTemp.entrada}}\">\n                        <select  class=\"form-control form-control-micro\" [(ngModel)]=\"buscadorTemp.entrada\" required >\n                            <option *ngFor=\"let entrada of entradas\" value=\"{{entrada}}\">{{entrada}}</option>\n                        </select>\n                    </td>\n                    <td class=\"celula-trunca-texto\" title=\"Concluir Edição\" style=\"text-align: center;\">\n                        <button style=\"text-align: center; margin-left: 2px;\" title=\"Concluir Edição\" type=\"button\" class=\"btn btn-success botao-reduzido\" (click)=\"concluirEdicao()\" [disabled]=\"invalid\">\n                            <span class=\"glyphicon glyphicon-ok\"></span>\n                        </button>\n                    </td>\n                    <td class=\"celula-trunca-texto\" title=\"Cancelar\" style=\"text-align: center;\">\n                        <button style=\"text-align: center; margin-left: 2px;\" title=\"Cancelar\" type=\"button\" class=\"btn btn-secondary botao-reduzido\" (click)=\"reset()\">\n                            <span class=\"glyphicon glyphicon-retweet\"></span>\n                        </button>\n                    </td>\n                </ng-container>\n            </tr>\n            <tr *ngIf=\"!emCriacao && macro.buscadores != null && macro.buscadores.length > 0 && status == COMPLETE\">\n                <td *ngIf=\"buscadorTemp.id == 0\" class=\"celula-trunca-texto\" title=\"Novo\" style=\"text-align: center;\" colspan=\"4\">\n                    <button style=\"text-align: center; margin-left: 2px;\" title=\"Novo\" type=\"button\" class=\"btn btn-primary botao-reduzido\" (click)=\"novo()\">\n                        <span class=\"glyphicon glyphicon-plus\"></span>\n                    </button>\n                </td>\n            </tr>\n            <tr *ngIf=\"emCriacao\">\n                    <td class=\"celula-trunca-texto\"><input type=\"text\" class=\"form-control form-control-micro\" [(ngModel)]=\"buscadorTemp.chave\"/></td>\n                    <td class=\"celula-trunca-texto\" title=\"{{buscadorTemp.entrada}}\">\n                        <select  class=\"form-control form-control-micro\" [(ngModel)]=\"buscadorTemp.entrada\" >\n                            <option *ngFor=\"let entrada of entradas\" value=\"{{entrada}}\">{{entrada}}</option>\n                        </select>\n                    </td>\n                    <td *ngIf=\"buscadorTemp.id == 0\" class=\"celula-trunca-texto\" title=\"Concluir\"  style=\"text-align: center;\" >\n                        <button style=\"text-align: center; margin-left: 2px;\" title=\"Concluir\" type=\"button\" class=\"btn btn-success botao-reduzido\" (click)=\"concluirEdicao()\"  [disabled]=\"invalid\">\n                            <span class=\"glyphicon glyphicon-ok\"></span>\n                        </button>\n                    </td>\n                    <td *ngIf=\"buscadorTemp.id == 0\" class=\"celula-trunca-texto\" title=\"Cancelar\"  style=\"text-align: center;\" >\n                        <button style=\"text-align: center; margin-left: 2px;\" title=\"Calcelar\" type=\"button\" class=\"btn btn-secondary botao-reduzido\" (click)=\"reset()\">\n                            <span class=\"glyphicon glyphicon-retweet\"></span>\n                        </button>\n                    </td>\n                </tr>\n        </tbody>\n        <tfoot class=\"status-tabela\">\n            <tr *ngIf=\"status == LOADING\"><td colspan=\"4\"><i>Carregando Buscadores...</i></td></tr>\n            <tr *ngIf=\"macro.buscadores != null && macro.buscadores.length == 0 && status == COMPLETE && !emCriacao\">\n                <td colspan=\"4\">\n                    <i>Não Há Buscadores para serem listados</i><br />\n                    <button *ngIf=\"macro.id > 0\" style=\"text-align: center; margin-left: 2px; margin-top: 5px;\" title=\"Nova\" type=\"button\" class=\"btn btn-primary botao-reduzido\" (click)=\"novo()\">\n                        <span class=\"glyphicon glyphicon-plus\"></span>\n                    </button>\n                </td>\n            </tr>\n            <tr *ngIf=\"status == ERROR\"><td class=\"erro\" colspan=\"4\"><i>Falha na obtenção de Buscadores!</i></td></tr>\n            \n        </tfoot>\n    </table>\n</div>"

/***/ }),

/***/ "./src/app/buscadores/buscadores.component.less":
/*!******************************************************!*\
  !*** ./src/app/buscadores/buscadores.component.less ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1c2NhZG9yZXMvYnVzY2Fkb3Jlcy5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/buscadores/buscadores.component.ts":
/*!****************************************************!*\
  !*** ./src/app/buscadores/buscadores.component.ts ***!
  \****************************************************/
/*! exports provided: BuscadoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscadoresComponent", function() { return BuscadoresComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _macro_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../macro.service */ "./src/app/macro.service.ts");
/* harmony import */ var _abstract_component_child__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../abstract-component-child */ "./src/app/abstract-component-child.ts");
/* harmony import */ var _buscador__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buscador */ "./src/app/buscadores/buscador.ts");





var BuscadoresComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BuscadoresComponent, _super);
    function BuscadoresComponent(macroService) {
        var _this = _super.call(this) || this;
        _this.macroService = macroService;
        _this.buscadorTemp = new _buscador__WEBPACK_IMPORTED_MODULE_4__["Buscador"](0, "", "");
        _this.emCriacao = false;
        return _this;
    }
    Object.defineProperty(BuscadoresComponent.prototype, "macro", {
        get: function () {
            return this.macroService.macroSelecionada;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BuscadoresComponent.prototype, "entradas", {
        get: function () {
            return this.macroService.ENTRADAS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BuscadoresComponent.prototype, "invalid", {
        get: function () {
            return this.buscadorTemp.chave == "" || this.buscadorTemp.entrada == "";
        },
        enumerable: true,
        configurable: true
    });
    BuscadoresComponent.prototype.novo = function () {
        this.buscadorTemp = new _buscador__WEBPACK_IMPORTED_MODULE_4__["Buscador"](0, "", "");
        this.emCriacao = true;
    };
    BuscadoresComponent.prototype.editar = function (buscador) {
        this.buscadorTemp = buscador.clone();
        this.emCriacao = false;
    };
    BuscadoresComponent.prototype.reset = function () {
        this.emCriacao = false;
        this.buscadorTemp = new _buscador__WEBPACK_IMPORTED_MODULE_4__["Buscador"](0, "", "");
    };
    BuscadoresComponent.prototype.deletar = function (buscador) {
        var _this = this;
        if (confirm("Deseja excuir este buscador?")) {
            this.editavel = false;
            this.macroService.delBuscador(buscador)
                .then(function (response) {
                _this.macroService.getBuscadores()
                    .then(function (response) {
                    _this.buscadorTemp = new _buscador__WEBPACK_IMPORTED_MODULE_4__["Buscador"](0, "", "");
                    _this.editavel = true;
                    _this.emCriacao = false;
                });
            });
        }
    };
    BuscadoresComponent.prototype.concluirEdicao = function () {
        var _this = this;
        this.editavel = false;
        this.macroService.addBuscador(this.buscadorTemp)
            .then(function (response) {
            _this.macroService.getBuscadores()
                .then(function (response) {
                _this.buscadorTemp = new _buscador__WEBPACK_IMPORTED_MODULE_4__["Buscador"](0, "", "");
                _this.editavel = true;
                _this.emCriacao = false;
            });
        });
    };
    BuscadoresComponent.prototype.ngOnInit = function () {
        this.reset();
    };
    BuscadoresComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-buscadores',
            template: __webpack_require__(/*! ./buscadores.component.html */ "./src/app/buscadores/buscadores.component.html"),
            styles: [__webpack_require__(/*! ./buscadores.component.less */ "./src/app/buscadores/buscadores.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_macro_service__WEBPACK_IMPORTED_MODULE_2__["MacroService"]])
    ], BuscadoresComponent);
    return BuscadoresComponent;
}(_abstract_component_child__WEBPACK_IMPORTED_MODULE_3__["AbstractComponentChild"]));



/***/ }),

/***/ "./src/app/calendario/calendario.component.html":
/*!******************************************************!*\
  !*** ./src/app/calendario/calendario.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<p-fullCalendar #fc [events]=\"events\" [options]=\"options\"></p-fullCalendar>\n"

/***/ }),

/***/ "./src/app/calendario/calendario.component.less":
/*!******************************************************!*\
  !*** ./src/app/calendario/calendario.component.less ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbGVuZGFyaW8vY2FsZW5kYXJpby5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/calendario/calendario.component.ts":
/*!****************************************************!*\
  !*** ./src/app/calendario/calendario.component.ts ***!
  \****************************************************/
/*! exports provided: CalendarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarioComponent", function() { return CalendarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/@fullcalendar/daygrid/main.esm.js");
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/timegrid */ "./node_modules/@fullcalendar/timegrid/main.esm.js");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullcalendar/interaction */ "./node_modules/@fullcalendar/interaction/main.esm.js");
/* harmony import */ var _fullcalendar_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/list */ "./node_modules/@fullcalendar/list/main.esm.js");
/* harmony import */ var primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/fullcalendar */ "./node_modules/primeng/fullcalendar.js");
/* harmony import */ var primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fullcalendar_core_locales_pt_br__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fullcalendar/core/locales/pt-br */ "./node_modules/@fullcalendar/core/locales/pt-br.js");
/* harmony import */ var _fullcalendar_core_locales_pt_br__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_core_locales_pt_br__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _redimensionavel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../redimensionavel */ "./src/app/redimensionavel.ts");
/* harmony import */ var _dados_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dados.service */ "./src/app/dados.service.ts");
/* harmony import */ var _theme_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../theme.service */ "./src/app/theme.service.ts");
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../abstract-component */ "./src/app/abstract-component.ts");
/* harmony import */ var _agenda_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../agenda.service */ "./src/app/agenda.service.ts");
/* harmony import */ var _agenda_evento__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../agenda/evento */ "./src/app/agenda/evento.ts");


//import { ThemeService } from '../theme.service';




//import { Theme } from './theme';








var CalendarioComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CalendarioComponent, _super);
    function CalendarioComponent(themeService, dadosService, agendaService) {
        var _this_1 = _super.call(this) || this;
        _this_1.themeService = themeService;
        _this_1.dadosService = dadosService;
        _this_1.agendaService = agendaService;
        _this_1.data = new Date();
        _this_1.rangeDates = new Date();
        _this_1.temas = [];
        _this_1.intervalGamb = 0;
        _this_1.tamanho = 500;
        return _this_1;
        /*var themes: Theme[] = Theme.getThemes();
 
        for (var i in themes) {
            this.temas.push({ label: themes[i].name, value: themes[i] })
            if (themes[i].name == "luna-green")
                this.selectedTheme = themes[i];
        }*/
    }
    CalendarioComponent.prototype.onThemeSelect = function () {
        //this.themeService.setTheme(this.selectedTheme.name);
    };
    Object.defineProperty(CalendarioComponent.prototype, "evento", {
        get: function () {
            return this.agendaService.evento;
        },
        set: function (evento) {
            this.agendaService.evento = evento;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarioComponent.prototype, "events", {
        get: function () {
            return this.agendaService.events;
        },
        set: function (events) {
            this.agendaService.events = events;
        },
        enumerable: true,
        configurable: true
    });
    CalendarioComponent.prototype.ngOnInit = function () {
        this.events = [];
        this.editavel = true;
        this.agendaService.listar().then(function (response) {
        });
        // Alterando o texto "Compromissos" para "Lista"
        _fullcalendar_core_locales_pt_br__WEBPACK_IMPORTED_MODULE_7___default.a.buttonText.list = "Lista";
        this.options = {
            plugins: [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_2__["default"], _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_3__["default"], _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_4__["default"], _fullcalendar_list__WEBPACK_IMPORTED_MODULE_5__["default"]],
            defaultDate: new Date(),
            header: {
                left: 'prev,next today',
                center: 'title',
                right: "dayGridMonth,timeGridWeek,listMonth" //"dayGridMonth,timeGridWeek,timeGridDay,listMonth  dayGridDay,dayGridWeek"
            },
            height: this.tamanho,
            locales: [_fullcalendar_core_locales_pt_br__WEBPACK_IMPORTED_MODULE_7___default.a],
            locale: "pt-br",
        };
        var _this = this;
        setTimeout(function () {
            _this.resize();
        }, 10);
        this.pt = {
            firstDayOfWeek: 0,
            dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
            dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
            dayNamesMin: ['Do', 'Se', 'Te', 'Qu', 'Qu', 'Se', 'Sa'],
            monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
                'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            today: 'Hoje',
            clear: 'Limpar'
        };
    };
    CalendarioComponent.prototype.resetEvento = function () {
        this.evento = new _agenda_evento__WEBPACK_IMPORTED_MODULE_13__["EventoGerador"]();
    };
    CalendarioComponent.prototype.resize = function () {
        var redimensionaAgenda = function (parametros) {
            parametros.componente.calendar.setOption('height', parametros.tamanho);
        };
        var red = new _redimensionavel__WEBPACK_IMPORTED_MODULE_8__["Redimensionavel"](null, 0, 450, null, { funcao: redimensionaAgenda, parametros: { componente: this.fc, tamanho: this.tamanho } });
        this.dadosService.componentesPersonalizados.push(red);
        this.dadosService.resizeFull();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fc'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_6__["FullCalendar"])
    ], CalendarioComponent.prototype, "fc", void 0);
    CalendarioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-calendario',
            template: __webpack_require__(/*! ./calendario.component.html */ "./src/app/calendario/calendario.component.html"),
            styles: [__webpack_require__(/*! ./calendario.component.less */ "./src/app/calendario/calendario.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_theme_service__WEBPACK_IMPORTED_MODULE_10__["ThemeService"], _dados_service__WEBPACK_IMPORTED_MODULE_9__["DadosService"], _agenda_service__WEBPACK_IMPORTED_MODULE_12__["AgendaService"]])
    ], CalendarioComponent);
    return CalendarioComponent;
}(_abstract_component__WEBPACK_IMPORTED_MODULE_11__["AbstractComponent"]));



/***/ }),

/***/ "./src/app/cursos.service.ts":
/*!***********************************!*\
  !*** ./src/app/cursos.service.ts ***!
  \***********************************/
/*! exports provided: CursosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursosService", function() { return CursosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _array_indexador__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./array-indexador */ "./src/app/array-indexador.ts");
/* harmony import */ var _faculdades_faculdade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./faculdades/faculdade */ "./src/app/faculdades/faculdade.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");





var CursosService = /** @class */ (function () {
    function CursosService(http) {
        this.http = http;
        this.cursos = [];
        this.cursosIndex = null;
        this.cursosKeyIndex = null;
        this.faculdadeSelecionada = _faculdades_faculdade__WEBPACK_IMPORTED_MODULE_3__["Faculdade"].generateFaculdade();
    }
    CursosService.prototype.obterCursos = function (listaFaculdades) {
        if (listaFaculdades.length) {
            this.cursosIndex = new _array_indexador__WEBPACK_IMPORTED_MODULE_2__["ArrayIndexador"](listaFaculdades[0].cursos);
            this.cursosKeyIndex = new _array_indexador__WEBPACK_IMPORTED_MODULE_2__["ArrayIndexador"](listaFaculdades[0].cursos, 'curso_key');
            for (var i = 1; i < listaFaculdades.length; i++) {
                this.cursosIndex.append(listaFaculdades[i].cursos);
                this.cursosKeyIndex.append(listaFaculdades[i].cursos);
            }
        }
    };
    CursosService.prototype.getPostCurso = function (curso) {
        return {
            id: curso.id,
            nome: curso.nome,
            curso_key: curso.curso_key,
            auto_increment_ref: curso.auto_increment_ref == null ? "" : curso.auto_increment_ref,
            faculdade_id: (typeof curso.faculdade == 'object' && curso.faculdade instanceof _faculdades_faculdade__WEBPACK_IMPORTED_MODULE_3__["Faculdade"] ? curso.faculdade.id : curso.faculdade),
            ativo: curso.ativo
        };
    };
    CursosService.prototype.create = function (curso) {
        var _this = this;
        return this.http.post("/cursos", this.getPostCurso(curso))
            .toPromise()
            .then(function (response) {
            curso.id = response.json().id;
            _this.cursosIndex.add(curso);
            curso.faculdade.cursos.push(curso);
            return curso;
        });
    };
    CursosService.prototype.update = function (curso) {
        var _this = this;
        return this.http.put("/cursos/" + curso.id, this.getPostCurso(curso))
            .toPromise()
            .then(function (response) {
            var cursoRef = _this.cursosIndex.get(curso.id);
            cursoRef.nome = curso.nome;
            cursoRef.curso_key = curso.curso_key;
            cursoRef.auto_increment_ref = curso.auto_increment_ref;
            cursoRef.ativo = curso.ativo;
            return cursoRef;
        });
    };
    CursosService.prototype.delete = function (curso) {
        var _this = this;
        return this.http.delete("/cursos/" + curso.id)
            .toPromise()
            .then(function (response) {
            _this.cursosIndex.remove(curso);
            var fac = curso.faculdade;
            for (var i = 0; i < fac.cursos.length; i++) {
                if (fac.cursos[i].id == curso.id) {
                    fac.cursos.splice(i, 1);
                    break;
                }
            }
            return curso;
        });
    };
    CursosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"]])
    ], CursosService);
    return CursosService;
}());



/***/ }),

/***/ "./src/app/cursos/curso.ts":
/*!*********************************!*\
  !*** ./src/app/cursos/curso.ts ***!
  \*********************************/
/*! exports provided: Curso */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Curso", function() { return Curso; });
var Curso = /** @class */ (function () {
    function Curso(id, nome, curso_key, auto_increment_ref, faculdade, ativo) {
        if (typeof id == "number") {
            this.id = id;
            this.nome = nome;
            this.curso_key = curso_key;
            this.auto_increment_ref = auto_increment_ref;
            this.faculdade = faculdade;
            this.ativo = ativo;
        }
        else {
            this.id = parseInt(id['id']);
            this.nome = id['nome'];
            this.curso_key = id['curso_key'];
            this.auto_increment_ref = id['auto_increment_ref'];
            this.faculdade = id['faculdade_id'];
            this.ativo = id['ativo'] ? (eval(id['ativo']) ? true : false) : false;
        }
    }
    Curso.generateList = function (list, faculdade) {
        var cursos = [];
        for (var i = 0; i < list.length; i++) {
            var curso = new Curso(list[i]);
            if (faculdade)
                curso.faculdade = faculdade;
            cursos.push(curso);
        }
        return cursos;
    };
    Curso.generateCurso = function () {
        return new Curso(0, "", "", null, 0, true);
    };
    Curso.prototype.clone = function () {
        return new Curso(this.id, this.nome, this.curso_key, this.auto_increment_ref, this.faculdade, this.ativo);
    };
    return Curso;
}());



/***/ }),

/***/ "./src/app/cursos/cursos.component.html":
/*!**********************************************!*\
  !*** ./src/app/cursos/cursos.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <table class=\"table\" style=\"margin-bottom: 0px\">\n        <colgroup>\n            <col width=\"100%\"/>\n            <col width=\"100px\"/>\n            <col width=\"110px\"/>\n            <col width=\"39px\"/>\n            <col width=\"39px\"/>\n            <col width=\"15px\"/>\n        </colgroup>\n        <thead class=\"thead-light\">\n            <tr>\n                <th class=\"celula-trunca-texto\" title=\"Nome do Curso\">Nome do Curso</th>\n                <th class=\"celula-trunca-texto\" title=\"ID do Curso no SIGECAD\">ID SIGECAD</th>\n                <th class=\"celula-trunca-texto\" title=\"Referência IDs de Categorias a serem somadas\">Cat. IDs Refs</th>\n                <th></th>\n                <th></th>\n                <th></th>\n            </tr>\n        </thead>\n    </table>\n</div>\n<div redimensionar=\"315\" style=\"overflow-y: scroll;\">\n    <table class=\"table\">\n        <colgroup>\n            <col width=\"100%\"/>\n            <col width=\"100px\"/>\n            <col width=\"110px\"/>\n            <col width=\"39px\"/>\n            <col width=\"39px\"/>\n        </colgroup>\n        <tbody>\n            <tr *ngFor=\"let curso of faculdadeSelecionada.cursos\" [ngClass]=\"{'linha-desativada' : !curso.ativo}\">\n                <td class=\"celula-trunca-texto\" title=\"{{curso.nome}}\">{{curso.nome}}</td>\n                <td title=\"ID do Curso no SIGECAD\">{{curso.curso_key}}</td>\n                <td title=\"Referência IDs de Categorias a serem somadas\">{{curso.auto_increment_ref}}</td>\n                <td class=\"celula-trunca-texto\" title=\"Editar\">\n                    <button style=\"text-align: center; margin-left: 2px;\" title=\"Editar\" type=\"button\" class=\"btn btn-info botao-reduzido\"  data-toggle=\"modal\" data-target=\"#dialogCreateCurso\" (click)=\"seleciona(curso)\" [disabled]=\"!editavel\">\n                        <span class=\"glyphicon glyphicon-edit\"></span>\n                    </button>\n                </td>\n                <td class=\"celula-trunca-texto\" title=\"Excluir\">\n                    <button style=\"text-align: center; margin-left: 2px;\" title=\"Excluir\" type=\"button\" class=\"btn btn-danger botao-reduzido\" (click)=\"remove(curso)\" [disabled]=\"!editavel\">\n                        <span class=\"glyphicon glyphicon-remove\"></span>\n                    </button>\n                </td>\n            </tr>\n        </tbody>\n        <tfoot class=\"status-tabela\">\n            <tr *ngIf=\"faculdadeSelecionada.cursos != null && faculdadeSelecionada.cursos.length == 0 && status == COMPLETE\"><td colspan=\"4\"><i>Não Há Cursos para serem listados</i></td></tr>\n        </tfoot>\n    </table>\n</div>\n<div class=\"panel-footer\">\n    <button type=\"button\"  style=\"width: 130px;\" class=\"btn btn-primary botao-barra\" data-toggle=\"modal\" data-target=\"#dialogCreateCurso\" (click)=\"novo()\" [disabled]=\"!editavel || faculdadeSelecionada.id == 0\">Novo Curso</button>\n</div>\n\n<div class=\"modal fade\" id=\"dialogCreateCurso\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialogCreateCursoTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Cursos</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <fieldset>\n                    <form id=\"cursoForm\" class=\"form-group\" style=\"text-align: left; width: 400px; margin: 15px auto;\" (submit)=\"criaAltera($event)\">\n                        <div class=\"alert alert-info\" [ngClass]=\"{'alert-info': !erroAviso, 'alert-danger': erroAviso}\" *ngIf=\"aviso\">\n                            <strong *ngIf=\"!erroAviso\">Informação!</strong><strong *ngIf=\"erroAviso\">Falha!</strong> {{aviso}}\n                        </div>\n\n                        <label class=\"style1\">Nome: *</label><br>\n                        <input class=\"form-control\" type=\"text\" name=\"nome\" placeholder=\"Ex. Sistemas de Informação\" [(ngModel)]=\"cursoTemp.nome\" size=\"60\" [disabled]=\"!editavel\" required><p></p>\n\n                        <label class=\"style1\" for=\"curso-key\">Curso ID SIGECAD: </label><br>\n                        <input class=\"form-control\" type=\"text\" name=\"curso-key\" placeholder=\"0\" [(ngModel)]=\"cursoTemp.curso_key\" style=\"width: 100px;\" [disabled]=\"!editavel\"><p></p>\n                    \n                        <label class=\"style1\" for=\"auto-increment-ref\">Referência IDs de Categorias a serem somadas: </label><br>\n                        <input class=\"form-control\" type=\"number\" name=\"auto-increment-ref\" placeholder=\"0\" [(ngModel)]=\"cursoTemp.auto_increment_ref\" style=\"width: 100px;\" [disabled]=\"!editavel\"><p></p>\n                    \n                        <label class=\"style1\" for=\"curso-ativo\">Curso Ativo: </label><br>\n                        <span class=\"big-check\">\n                            <input  type=\"checkbox\" name=\"curso-ativo\" [(ngModel)]=\"cursoTemp.ativo\" [disabled]=\"!editavel\">\n                        </span><p></p>\n                    </form>\n                </fieldset>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"submit\" form=\"cursoForm\" class=\"btn btn-primary botao-barra\"  [disabled]=\"!editavel\">Enviar</button>\n                <button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\">Fechar</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/cursos/cursos.component.less":
/*!**********************************************!*\
  !*** ./src/app/cursos/cursos.component.less ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1cnNvcy9jdXJzb3MuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/cursos/cursos.component.ts":
/*!********************************************!*\
  !*** ./src/app/cursos/cursos.component.ts ***!
  \********************************************/
/*! exports provided: CursosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursosComponent", function() { return CursosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cursos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cursos.service */ "./src/app/cursos.service.ts");
/* harmony import */ var _abstract_component_child__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../abstract-component-child */ "./src/app/abstract-component-child.ts");
/* harmony import */ var _curso__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./curso */ "./src/app/cursos/curso.ts");





var CursosComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CursosComponent, _super);
    function CursosComponent(cursosService) {
        var _this = _super.call(this) || this;
        _this.cursosService = cursosService;
        _this.cursoTemp = _curso__WEBPACK_IMPORTED_MODULE_4__["Curso"].generateCurso();
        return _this;
    }
    Object.defineProperty(CursosComponent.prototype, "faculdadeSelecionada", {
        get: function () {
            return this.cursosService.faculdadeSelecionada;
        },
        set: function (faculdade) {
            this.cursosService.faculdadeSelecionada = faculdade;
        },
        enumerable: true,
        configurable: true
    });
    CursosComponent.prototype.criaAltera = function (ev) {
        ev.preventDefault();
        var cursoForm = jQuery('#cursoForm')[0];
        if (cursoForm.reportValidity()) {
            if (this.cursoTemp.id)
                this.altera();
            else
                this.cria();
        }
    };
    CursosComponent.prototype.novo = function () {
        this.cursoTemp = _curso__WEBPACK_IMPORTED_MODULE_4__["Curso"].generateCurso();
        this.cursoTemp.faculdade = this.faculdadeSelecionada;
        this.aviso = "";
    };
    CursosComponent.prototype.seleciona = function (curso) {
        this.cursoTemp = curso.clone();
        this.aviso = "";
    };
    CursosComponent.prototype.cria = function () {
        var _this = this;
        this.editavel = false;
        this.cursosService.create(this.cursoTemp)
            .then(function (response) {
            jQuery('#dialogCreateCurso').modal('hide');
            _this.editavel = true;
        })
            .catch(function (response) {
            _this.aviso = _this.erroHttp(response);
            alert(_this.aviso);
            _this.editavel = true;
        });
    };
    CursosComponent.prototype.altera = function () {
        var _this = this;
        this.editavel = false;
        this.cursosService.update(this.cursoTemp)
            .then(function (response) {
            jQuery('#dialogCreateCurso').modal('hide');
            _this.editavel = true;
        })
            .catch(function (response) {
            _this.aviso = _this.erroHttp(response);
            alert(_this.aviso);
            _this.editavel = true;
        });
    };
    CursosComponent.prototype.remove = function (curso) {
        var _this = this;
        if (confirm("Confirmar exclusão deste curso?")) {
            this.editavel = false;
            this.cursosService.delete(this.cursoTemp)
                .then(function (response) {
                _this.editavel = true;
            })
                .catch(function (response) {
                _this.aviso = _this.erroHttp(response);
                alert(_this.aviso);
                _this.editavel = true;
            });
        }
    };
    CursosComponent.prototype.ngOnInit = function () {
        this.editavel = true;
    };
    CursosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cursos',
            template: __webpack_require__(/*! ./cursos.component.html */ "./src/app/cursos/cursos.component.html"),
            styles: [__webpack_require__(/*! ./cursos.component.less */ "./src/app/cursos/cursos.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cursos_service__WEBPACK_IMPORTED_MODULE_2__["CursosService"]])
    ], CursosComponent);
    return CursosComponent;
}(_abstract_component_child__WEBPACK_IMPORTED_MODULE_3__["AbstractComponentChild"]));



/***/ }),

/***/ "./src/app/dados.service.ts":
/*!**********************************!*\
  !*** ./src/app/dados.service.ts ***!
  \**********************************/
/*! exports provided: DadosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DadosService", function() { return DadosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./status */ "./src/app/status.ts");
/* harmony import */ var _array_indexador__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./array-indexador */ "./src/app/array-indexador.ts");





var DadosService = /** @class */ (function () {
    function DadosService(http) {
        this.http = http;
        this.componentesHeight = [];
        this.componentesWidth = [];
        this.componentesPersonalizados = [];
        var _this = this;
        window.onresize = function () {
            _this.resizeFull();
        };
        jQuery(document).ready(function () {
            _this.resizeFull();
        });
    }
    DadosService.prototype.statusList = function () {
        var _this_1 = this;
        return this.http.get("/statuslist")
            .toPromise()
            .then(function (response) {
            _this_1.statuses = _status__WEBPACK_IMPORTED_MODULE_3__["Status"].generateList(response.json());
            _this_1.statusesIndex = new _array_indexador__WEBPACK_IMPORTED_MODULE_4__["ArrayIndexador"](_this_1.statuses, 'chave');
            return _this_1.statuses;
        });
    };
    DadosService.prototype.resizeTabelaLinhaFullHeight = function (redimensionavel) {
        var width = jQuery(window).height() - redimensionavel.base;
        if (redimensionavel.min != null && width < redimensionavel.min)
            width = redimensionavel.min;
        if (redimensionavel.max != null && width > redimensionavel.max)
            width = redimensionavel.max;
        if (jQuery(redimensionavel.elemento).hasClass('modal-body'))
            jQuery(redimensionavel.elemento).css('max-height', width);
        else
            jQuery(redimensionavel.elemento).css('height', width);
    };
    DadosService.prototype.resizeTabelaLinhaFullWidth = function (redimensionavel) {
        if (jQuery(window).width() >= 1200) {
            jQuery(redimensionavel.elemento).css('width', 780 - redimensionavel.base);
        }
        else if (jQuery(window).width() > 990) {
            jQuery(redimensionavel.elemento).css('width', 646 - redimensionavel.base);
        }
        else if (jQuery(window).width() > 748) {
            jQuery(redimensionavel.elemento).css('width', 750 - redimensionavel.base);
        }
        else
            jQuery(redimensionavel.elemento).css('width', jQuery(window).width() - redimensionavel.base);
    };
    DadosService.prototype.resizePersonalizado = function (redimensionavel) {
        var width = jQuery(window).height() - redimensionavel.base;
        if (redimensionavel.min != null && width < redimensionavel.min)
            width = redimensionavel.min;
        if (redimensionavel.max != null && width > redimensionavel.max)
            width = redimensionavel.max;
        redimensionavel.personalizado.parametros.tamanho = width;
        redimensionavel.executarPersonalizado();
    };
    DadosService.prototype.resizeFull = function () {
        var i;
        for (i = 0; i < this.componentesHeight.length; i++) {
            this.resizeTabelaLinhaFullHeight(this.componentesHeight[i]);
        }
        for (i = 0; i < this.componentesWidth.length; i++) {
            this.resizeTabelaLinhaFullWidth(this.componentesWidth[i]);
        }
        for (i = 0; i < this.componentesPersonalizados.length; i++) {
            this.resizePersonalizado(this.componentesPersonalizados[i]);
        }
    };
    DadosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], DadosService);
    return DadosService;
}());



/***/ }),

/***/ "./src/app/faculdade.service.ts":
/*!**************************************!*\
  !*** ./src/app/faculdade.service.ts ***!
  \**************************************/
/*! exports provided: FaculdadeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaculdadeService", function() { return FaculdadeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _faculdades_faculdade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./faculdades/faculdade */ "./src/app/faculdades/faculdade.ts");
/* harmony import */ var _array_indexador__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./array-indexador */ "./src/app/array-indexador.ts");
/* harmony import */ var _cursos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cursos.service */ "./src/app/cursos.service.ts");






var FaculdadeService = /** @class */ (function () {
    function FaculdadeService(http, cursosService) {
        this.http = http;
        this.cursosService = cursosService;
        this.faculdades = [];
        this.faculdadesIndex = null;
    }
    FaculdadeService.prototype.listar = function () {
        var _this = this;
        return this.http.get("/faculdades/all")
            .toPromise()
            .then(function (response) {
            _this.faculdades = _faculdades_faculdade__WEBPACK_IMPORTED_MODULE_3__["Faculdade"].generateList(response.json());
            _this.faculdadesIndex = new _array_indexador__WEBPACK_IMPORTED_MODULE_4__["ArrayIndexador"](_this.faculdades);
            _this.cursosService.obterCursos(_this.faculdades);
            return _this.faculdades;
        });
    };
    FaculdadeService.prototype.getPostFaculdade = function (faculdade) {
        return {
            id: faculdade.id,
            sigla: faculdade.sigla,
            nome: faculdade.nome,
            auto_increment_ref: faculdade.auto_increment_ref == null ? "" : faculdade.auto_increment_ref,
            ativo: faculdade.ativo
        };
    };
    FaculdadeService.prototype.create = function (faculdade) {
        var _this = this;
        return this.http.post("/faculdades", this.getPostFaculdade(faculdade))
            .toPromise()
            .then(function (response) {
            return _this.listar();
        });
    };
    FaculdadeService.prototype.update = function (faculdade) {
        var _this = this;
        return this.http.put("/faculdades/" + faculdade.id, this.getPostFaculdade(faculdade))
            .toPromise()
            .then(function (response) {
            return _this.listar();
        });
    };
    FaculdadeService.prototype.delete = function (faculdade) {
        var _this = this;
        return this.http.delete("/faculdades/" + faculdade.id)
            .toPromise()
            .then(function (response) {
            return _this.listar();
        });
    };
    FaculdadeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _cursos_service__WEBPACK_IMPORTED_MODULE_5__["CursosService"]])
    ], FaculdadeService);
    return FaculdadeService;
}());



/***/ }),

/***/ "./src/app/faculdades/faculdade.ts":
/*!*****************************************!*\
  !*** ./src/app/faculdades/faculdade.ts ***!
  \*****************************************/
/*! exports provided: Faculdade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Faculdade", function() { return Faculdade; });
/* harmony import */ var _cursos_curso__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cursos/curso */ "./src/app/cursos/curso.ts");

var Faculdade = /** @class */ (function () {
    function Faculdade(id, sigla, nome, auto_increment_ref, ativo) {
        if (typeof id == "number") {
            this.id = id;
            this.sigla = sigla;
            this.nome = nome;
            this.auto_increment_ref = auto_increment_ref;
            this.ativo = ativo;
            this.cursos = [];
        }
        else {
            this.id = parseInt(id['id']);
            this.sigla = id['sigla'];
            this.nome = id['nome'];
            this.auto_increment_ref = id['auto_increment_ref'];
            this.ativo = id['ativo'] ? (eval(id['ativo']) ? true : false) : false;
            this.cursos = [];
        }
    }
    Faculdade.generateList = function (list) {
        var faculdades = [];
        for (var i = 0; i < list.length; i++) {
            var fac = new Faculdade(list[i]);
            var cursos = _cursos_curso__WEBPACK_IMPORTED_MODULE_0__["Curso"].generateList(list[i].cursos, fac);
            fac.cursos = cursos;
            faculdades.push(fac);
        }
        return faculdades;
    };
    Faculdade.generateFaculdade = function () {
        return new Faculdade(0, "", "", null, true);
    };
    Faculdade.prototype.clone = function () {
        var f = new Faculdade(this.id, this.sigla, this.nome, this.auto_increment_ref, this.ativo);
        f.cursos = this.cursos;
        return f;
    };
    return Faculdade;
}());



/***/ }),

/***/ "./src/app/faculdades/faculdades.component.html":
/*!******************************************************!*\
  !*** ./src/app/faculdades/faculdades.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n        Faculdades e Cursos\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-6\"  style=\"padding-right: 0px; border-right: 1px solid #ddd\">\n            <div>\n                <table class=\"table\" style=\"margin-bottom: 0px\">\n                    <colgroup>\n                        <col width=\"40px\"/>\n                        <col width=\"130px\"/>\n                        <col width=\"100%\"/>\n                        <col width=\"130px\"/>\n                        <col width=\"39px\"/>\n                        <col width=\"39px\"/>\n                        <col width=\"15px\"/>\n                    </colgroup>\n                    <thead class=\"thead-light\">\n                        <tr>\n                            <th>#</th>\n                            <th class=\"celula-trunca-texto\" title=\"SIGLA\">SIGLA</th>\n                            <th class=\"celula-trunca-texto\" title=\"Nome da Faculdade\">Nome da Faculdade</th>\n                            <th class=\"celula-trunca-texto\" title=\"Referência IDs de Categorias a serem somadas\">Cat. IDs Refs</th>\n                            <th colspan=\"3\"></th>\n                        </tr>\n                    </thead>\n                </table>\n            </div>\n            <div redimensionar=\"259\" style=\"overflow-y: scroll;\">\n                <table class=\"table\">\n                    <colgroup>\n                        <col width=\"40px\"/>\n                        <col width=\"130px\"/>\n                        <col width=\"100%\"/>\n                        <col width=\"130px\"/>\n                        <col width=\"39px\"/>\n                        <col width=\"39px\"/>\n                    </colgroup>\n                    <tbody>\n                        <tr *ngFor=\"let f of faculdades\"  class=\"clickable-row\" (click)=\"selecionar(f)\" [ngClass]=\"{'linha-selecionada': f.id == faculdadeSelecionada.id, 'linha-desativada' : !f.ativo}\">\n                            <td>{{f.id}}</td>\n                            <td class=\"celula-trunca-texto\" title=\"{{f.sigla}}\">{{f.sigla}}</td>\n                            <td class=\"celula-trunca-texto\" title=\"{{f.nome}}\">{{f.nome}}</td>\n                            <td class=\"celula-trunca-texto\" title=\"{{f.auto_increment_ref}}\">{{f.auto_increment_ref}}</td>\n                            <td class=\"celula-trunca-texto\" title=\"Editar\">\n                                <button style=\"text-align: center; margin-left: 2px;\" title=\"Editar\" type=\"button\" class=\"btn btn-info botao-reduzido\"  data-toggle=\"modal\" data-target=\"#dialogCreate\" (click)=\"selecionar(f)\" [disabled]=\"!editavel\">\n                                    <span class=\"glyphicon glyphicon-edit\"></span>\n                                </button>\n                            </td>\n                            <td class=\"celula-trunca-texto\" title=\"Excluir\">\n                                <button style=\"text-align: center; margin-left: 2px;\" title=\"Excluir\" type=\"button\" class=\"btn btn-danger botao-reduzido\" (click)=\"remove(f)\" [disabled]=\"!editavel\">\n                                    <span class=\"glyphicon glyphicon-remove\"></span>\n                                </button>\n                            </td>\n                        </tr>\n                    </tbody>\n                    <tfoot class=\"status-tabela\">\n                        <tr *ngIf=\"status == LOADING\"><td colspan=\"5\"><i>Carregando Faculdades...</i></td></tr>\n                        <tr *ngIf=\"periodoLetivos != null && periodoLetivos.length == 0 && status == COMPLETE\"><td colspan=\"5\"><i>Não Há Faculdades para serem listadas</i></td></tr>\n                        <tr *ngIf=\"status == ERROR\"><td class=\"erro\" colspan=\"5\"><i>Falha na obtenção de Faculdades!</i></td></tr>\n                    </tfoot>\n                </table>\n            </div>\n            <div class=\"panel-footer\">\n                <button type=\"button\" class=\"btn btn-primary botao-barra\" style=\"width: 130px;\" data-toggle=\"modal\" data-target=\"#dialogCreate\" (click)=\"nova()\" [disabled]=\"!editavel\">Nova Faculdade</button>\n            </div>\n        </div>\n        <div class=\"col-md-6\" style=\"padding-left: 0px; \">\n            <div class=\"barra-titulo\">\n                <table class=\"table\">\n                    <tbody>\n                        <tr>\n                            <td colspan=\"3\" class=\"celula-trunca-texto\" style=\"text-align: center;\">\n                                <h4 *ngIf=\"faculdadeSelecionada.id == 0\" style=\"display: inline-block; color: gray;\" title=\"\"><i>Selecione uma Faculdade...</i></h4>\n                                <h4 *ngIf=\"faculdadeSelecionada.id > 0\" style=\"display: inline-block\" title=\"\">Faculdade: {{faculdadeSelecionada.sigla}}</h4>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            <div>\n                <app-cursos [ancestral]=\"eu\">Carregando...</app-cursos>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"dialogCreate\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialogCreateTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Faculdades</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <fieldset>\n                    <form id=\"faculdadeForm\" class=\"form-group\" style=\"text-align: left; width: 400px; margin: 15px auto;\" (submit)=\"criaAltera($event)\">\n                        <div class=\"alert alert-info\" [ngClass]=\"{'alert-info': !erroAviso, 'alert-danger': erroAviso}\" *ngIf=\"aviso\">\n                            <strong *ngIf=\"!erroAviso\">Informação!</strong><strong *ngIf=\"erroAviso\">Falha!</strong> {{aviso}}\n                        </div>\n                        <label class=\"style1\">Sigla: *</label><br>\n                        <input class=\"form-control\" type=\"text\" name=\"sigla\" placeholder=\"Ex. FACET\" [(ngModel)]=\"faculdadeSelecionada.sigla\" size=\"60\" [disabled]=\"!editavel\" required><p></p>\n\n                        <label class=\"style1\">Nome: *</label><br>\n                        <input class=\"form-control\" type=\"text\" name=\"nome\" placeholder=\"Ex. Faculdade de Ciências Exatas e Tecnologias\" [(ngModel)]=\"faculdadeSelecionada.nome\" size=\"60\" [disabled]=\"!editavel\" required><p></p>\n\n                        <label class=\"style1\" for=\"auto-increment-ref\">Referência IDs de Categorias a serem somadas: </label><br>\n                        <input class=\"form-control\" type=\"number\" name=\"iauto-increment-ref\" placeholder=\"0\" style=\"width: 100px;\" [(ngModel)]=\"faculdadeSelecionada.auto_increment_ref\" [disabled]=\"!editavel\"><p></p>\n                        \n                        <label class=\"style1\" for=\"faculdade-ativa\">Faculdade Ativa: </label><br>\n                        <span class=\"big-check\">\n                            <input  type=\"checkbox\" name=\"faculdade-ativa\" [(ngModel)]=\"faculdadeSelecionada.ativo\" [disabled]=\"!editavel\">\n                        </span><p></p>\n                        \n\n                    </form>\n                </fieldset>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"submit\" form=\"faculdadeForm\" class=\"btn btn-primary botao-barra\"  [disabled]=\"!editavel\">Enviar</button>\n                <button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\">Fechar</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/faculdades/faculdades.component.less":
/*!******************************************************!*\
  !*** ./src/app/faculdades/faculdades.component.less ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZhY3VsZGFkZXMvZmFjdWxkYWRlcy5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/faculdades/faculdades.component.ts":
/*!****************************************************!*\
  !*** ./src/app/faculdades/faculdades.component.ts ***!
  \****************************************************/
/*! exports provided: FaculdadesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaculdadesComponent", function() { return FaculdadesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cursos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cursos.service */ "./src/app/cursos.service.ts");
/* harmony import */ var _faculdade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../faculdade.service */ "./src/app/faculdade.service.ts");
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../abstract-component */ "./src/app/abstract-component.ts");
/* harmony import */ var _faculdade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./faculdade */ "./src/app/faculdades/faculdade.ts");






var FaculdadesComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FaculdadesComponent, _super);
    function FaculdadesComponent(faculdadeService, cursosService) {
        var _this = _super.call(this) || this;
        _this.faculdadeService = faculdadeService;
        _this.cursosService = cursosService;
        return _this;
    }
    Object.defineProperty(FaculdadesComponent.prototype, "faculdades", {
        get: function () {
            return this.faculdadeService.faculdades;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FaculdadesComponent.prototype, "faculdadeSelecionada", {
        get: function () {
            return this.cursosService.faculdadeSelecionada;
        },
        set: function (faculdade) {
            this.cursosService.faculdadeSelecionada = faculdade;
        },
        enumerable: true,
        configurable: true
    });
    FaculdadesComponent.prototype.eu = function () {
        return this;
    };
    FaculdadesComponent.prototype.nova = function () {
        this.faculdadeSelecionada = _faculdade__WEBPACK_IMPORTED_MODULE_5__["Faculdade"].generateFaculdade();
        this.aviso = "";
    };
    FaculdadesComponent.prototype.selecionar = function (faculdade) {
        this.faculdadeSelecionada = faculdade.clone();
        this.aviso = "";
    };
    FaculdadesComponent.prototype.criaAltera = function (ev) {
        ev.preventDefault();
        var faculdadeForm = jQuery('#faculdadeForm')[0];
        if (faculdadeForm.reportValidity()) {
            if (this.faculdadeSelecionada.id)
                this.altera();
            else
                this.cria();
        }
    };
    FaculdadesComponent.prototype.cria = function () {
        var _this = this;
        this.editavel = false;
        this.faculdadeService.create(this.faculdadeSelecionada)
            .then(function (response) {
            jQuery('#dialogCreate').modal('hide');
            _this.editavel = true;
        })
            .catch(function (response) {
            _this.aviso = _this.erroHttp(response);
            alert(_this.aviso);
            _this.editavel = true;
        });
    };
    FaculdadesComponent.prototype.altera = function () {
        var _this = this;
        this.editavel = false;
        this.faculdadeService.update(this.faculdadeSelecionada)
            .then(function (response) {
            jQuery('#dialogCreate').modal('hide');
            _this.editavel = true;
        })
            .catch(function (response) {
            _this.aviso = _this.erroHttp(response);
            alert(_this.aviso);
            _this.editavel = true;
        });
    };
    FaculdadesComponent.prototype.remove = function () {
        var _this = this;
        if (confirm("Confirmar exclusão desta facudade?")) {
            this.editavel = false;
            this.faculdadeService.delete(this.faculdadeSelecionada)
                .then(function (response) {
                _this.editavel = true;
                _this.faculdadeSelecionada = _faculdade__WEBPACK_IMPORTED_MODULE_5__["Faculdade"].generateFaculdade();
            })
                .catch(function (response) {
                _this.aviso = _this.erroHttp(response);
                alert(_this.aviso);
                _this.editavel = true;
            });
        }
    };
    FaculdadesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.faculdadeService.listar()
            .then(function (response) {
            _this.status = _this.COMPLETE;
            _this.editavel = true;
        })
            .catch(function (response) {
            _this.erroAviso = true;
            _this.aviso = _this.erroHttp(response);
            _this.status = _this.ERROR;
            alert(_this.aviso);
        });
    };
    FaculdadesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-faculdades',
            template: __webpack_require__(/*! ./faculdades.component.html */ "./src/app/faculdades/faculdades.component.html"),
            styles: [__webpack_require__(/*! ./faculdades.component.less */ "./src/app/faculdades/faculdades.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_faculdade_service__WEBPACK_IMPORTED_MODULE_3__["FaculdadeService"], _cursos_service__WEBPACK_IMPORTED_MODULE_2__["CursosService"]])
    ], FaculdadesComponent);
    return FaculdadesComponent;
}(_abstract_component__WEBPACK_IMPORTED_MODULE_4__["AbstractComponent"]));



/***/ }),

/***/ "./src/app/filtro-cursos.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/filtro-cursos.pipe.ts ***!
  \***************************************/
/*! exports provided: FiltroCursosPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltroCursosPipe", function() { return FiltroCursosPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FiltroCursosPipe = /** @class */ (function () {
    function FiltroCursosPipe() {
    }
    FiltroCursosPipe.prototype.transform = function (value, criteria) {
        if (criteria == "")
            return value;
        var faculdades = [];
        for (var i in value) {
            var faculdade = this.filtroFaculdades(value[i], criteria.toUpperCase());
            if (faculdade)
                faculdades.push(faculdade);
        }
        return faculdades;
    };
    FiltroCursosPipe.prototype.filtroFaculdades = function (faculdade, criteria) {
        if (faculdade.nome.toUpperCase().search(criteria) >= 0 ||
            faculdade.sigla.toUpperCase().startsWith(criteria))
            return faculdade;
        var cursos = [];
        for (var i in faculdade.cursos) {
            var curso = this.filtroCursos(faculdade.cursos[i], criteria.toUpperCase());
            if (this.filtroCursos(faculdade.cursos[i], criteria.toUpperCase()))
                cursos.push(faculdade.cursos[i]);
        }
        if (cursos.length > 0) {
            faculdade = faculdade.clone();
            faculdade.cursos = cursos;
            return faculdade;
        }
        return null;
    };
    FiltroCursosPipe.prototype.filtroCursos = function (curso, criteria) {
        if (curso.nome.toUpperCase().search(criteria) >= 0)
            return true;
        return false;
    };
    FiltroCursosPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filtroCursos'
        })
    ], FiltroCursosPipe);
    return FiltroCursosPipe;
}());



/***/ }),

/***/ "./src/app/filtro-salas.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/filtro-salas.pipe.ts ***!
  \**************************************/
/*! exports provided: FiltroSalasPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltroSalasPipe", function() { return FiltroSalasPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _salas_sala__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./salas/sala */ "./src/app/salas/sala.ts");
/* harmony import */ var _salas_old_sala_old__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./salas-old/sala-old */ "./src/app/salas-old/sala-old.ts");




var FiltroSalasPipe = /** @class */ (function () {
    function FiltroSalasPipe() {
    }
    FiltroSalasPipe.prototype.transform = function (value, criteria) {
        if (criteria == "")
            return value;
        var salas = [];
        for (var i in value) {
            if (this.filtro(value[i], criteria.toUpperCase()))
                salas.push(value[i]);
        }
        return salas;
    };
    FiltroSalasPipe.prototype.filtro = function (sala, criteria) {
        if (sala instanceof _salas_sala__WEBPACK_IMPORTED_MODULE_2__["Sala"]) {
            if (sala.nome_sala.toUpperCase().search(criteria) >= 0 ||
                sala.nome_professor.toUpperCase().search(criteria) >= 0 ||
                sala.curso.faculdade.nome.toUpperCase().search(criteria) >= 0 ||
                sala.curso.nome.toUpperCase().search(criteria) >= 0 ||
                sala.status.descricao.toUpperCase().startsWith(criteria))
                return true;
        }
        else if (sala instanceof _salas_old_sala_old__WEBPACK_IMPORTED_MODULE_3__["SalaOld"]) {
            if (sala.nome_sala.toUpperCase().search(criteria) >= 0 ||
                sala.nome_professor.toUpperCase().search(criteria) >= 0 ||
                sala.faculdade.toUpperCase().search(criteria) >= 0 ||
                sala.curso.toUpperCase().search(criteria) >= 0 ||
                sala.status.descricao.toUpperCase().startsWith(criteria))
                return true;
        }
        return false;
    };
    FiltroSalasPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filtroSalas'
        })
    ], FiltroSalasPipe);
    return FiltroSalasPipe;
}());



/***/ }),

/***/ "./src/app/filtro-usuario.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/filtro-usuario.pipe.ts ***!
  \****************************************/
/*! exports provided: FiltroUsuarioPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltroUsuarioPipe", function() { return FiltroUsuarioPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FiltroUsuarioPipe = /** @class */ (function () {
    function FiltroUsuarioPipe() {
    }
    FiltroUsuarioPipe.prototype.transform = function (value, criteria) {
        if (criteria == "")
            return value;
        var usuarios = [];
        for (var i in value) {
            if (this.filtro(value[i], criteria.toUpperCase()))
                usuarios.push(value[i]);
        }
        return usuarios;
    };
    FiltroUsuarioPipe.prototype.filtro = function (usuario, criteria) {
        if (usuario.name.toUpperCase().search(criteria) >= 0 ||
            usuario.email.toUpperCase().search(criteria) >= 0 ||
            usuario.permissao.startsWith(criteria))
            return true;
        return false;
    };
    FiltroUsuarioPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filtroUsuario'
        })
    ], FiltroUsuarioPipe);
    return FiltroUsuarioPipe;
}());



/***/ }),

/***/ "./src/app/formatador-data.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/formatador-data.pipe.ts ***!
  \*****************************************/
/*! exports provided: FormatadorDataPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatadorDataPipe", function() { return FormatadorDataPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormatadorDataPipe = /** @class */ (function () {
    function FormatadorDataPipe() {
    }
    FormatadorDataPipe.prototype.transform = function (value, time) {
        var date = new Date(value);
        return date.toLocaleDateString() + (time ? " " + date.toLocaleTimeString().substring(0, 5) : '');
    };
    FormatadorDataPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'formatadorData'
        })
    ], FormatadorDataPipe);
    return FormatadorDataPipe;
}());



/***/ }),

/***/ "./src/app/grupo-lotes-simplificados.service.ts":
/*!******************************************************!*\
  !*** ./src/app/grupo-lotes-simplificados.service.ts ***!
  \******************************************************/
/*! exports provided: GrupoLotesSimplificadosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrupoLotesSimplificadosService", function() { return GrupoLotesSimplificadosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _array_indexador__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./array-indexador */ "./src/app/array-indexador.ts");
/* harmony import */ var _lote_salas_simplificado_grupo_lotes_simplificado__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lote-salas-simplificado/grupo-lotes-simplificado */ "./src/app/lote-salas-simplificado/grupo-lotes-simplificado.ts");





var GrupoLotesSimplificadosService = /** @class */ (function () {
    function GrupoLotesSimplificadosService(http) {
        this.http = http;
        this.grupos = [];
        this.gruposIndex = null;
        this.grupoSelecionadoId = "";
    }
    GrupoLotesSimplificadosService.prototype.listar = function (selectId) {
        var _this = this;
        return this.http.get("/grupo-lotes-simplificados/all")
            .toPromise()
            .then(function (response) {
            _this.grupos = _lote_salas_simplificado_grupo_lotes_simplificado__WEBPACK_IMPORTED_MODULE_4__["GrupoLotesSimplificado"].generateList(response.json());
            _this.gruposIndex = new _array_indexador__WEBPACK_IMPORTED_MODULE_3__["ArrayIndexador"](_this.grupos);
            if (selectId)
                _this.grupoSelecionadoId = selectId;
            return _this.grupos;
        });
    };
    GrupoLotesSimplificadosService.prototype.create = function (grupo) {
        var _this = this;
        return this.http.post("/grupo-lotes-simplificados", grupo.getPost())
            .toPromise()
            .then(function (response) {
            return _this.listar(response.json());
        });
    };
    GrupoLotesSimplificadosService.prototype.update = function (grupo) {
        var _this = this;
        return this.http.put("/grupo-lotes-simplificados/" + grupo.id, grupo.getPost())
            .toPromise()
            .then(function (response) {
            return _this.listar(grupo.id);
        });
    };
    GrupoLotesSimplificadosService.prototype.delete = function (grupo) {
        var _this = this;
        return this.http.delete("/grupo-lotes-simplificados/" + grupo.id)
            .toPromise()
            .then(function (response) {
            _this.grupoSelecionadoId = "";
            return _this.listar();
        });
    };
    GrupoLotesSimplificadosService.prototype.exportarEstudantes = function (grupo) {
        return this.http.get("/grupo-lotes-simplificados/estudantes/" + grupo.id)
            .toPromise()
            .then(function (response) {
            return response.text();
        });
    };
    GrupoLotesSimplificadosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], GrupoLotesSimplificadosService);
    return GrupoLotesSimplificadosService;
}());



/***/ }),

/***/ "./src/app/logs.service.ts":
/*!*********************************!*\
  !*** ./src/app/logs.service.ts ***!
  \*********************************/
/*! exports provided: LogsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogsService", function() { return LogsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");



var LogsService = /** @class */ (function () {
    function LogsService(http) {
        this.http = http;
        this.PATH_LOGS_EXPORTACOES_ESTUDANTES = "/logs/exportacao-estudantes";
    }
    LogsService.prototype.listarLogsExportEstudantes = function () {
        return this.http.get(this.PATH_LOGS_EXPORTACOES_ESTUDANTES)
            .toPromise()
            .then(function (response) {
            return response.json();
        });
    };
    LogsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], LogsService);
    return LogsService;
}());



/***/ }),

/***/ "./src/app/logs/logs.component.html":
/*!******************************************!*\
  !*** ./src/app/logs/logs.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-md-8\" style=\"margin: auto; float: initial;\">\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-heading\">Logs</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<h3>Logs Exportações de Estudantes</h3>\n\t\t\t\t<ng-container *ngFor=\"let e of logsExportsEstudantes\">\n\t\t\t\t\t<a target=\"_blank\" style=\"margin: 5px;\" href=\"{{pathLogsExportacaoEstudantes}}/{{e}}\" class=\"btn btn-primary botao\">{{e}}</a>\n\t\t\t\t</ng-container>\n\t\t\t</div>\t\t\t\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/logs/logs.component.less":
/*!******************************************!*\
  !*** ./src/app/logs/logs.component.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ3MvbG9ncy5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/logs/logs.component.ts":
/*!****************************************!*\
  !*** ./src/app/logs/logs.component.ts ***!
  \****************************************/
/*! exports provided: LogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogsComponent", function() { return LogsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstract-component */ "./src/app/abstract-component.ts");
/* harmony import */ var _logs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logs.service */ "./src/app/logs.service.ts");




var LogsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LogsComponent, _super);
    function LogsComponent(logsService) {
        var _this = _super.call(this) || this;
        _this.logsService = logsService;
        _this.logsExportsEstudantes = [];
        return _this;
    }
    Object.defineProperty(LogsComponent.prototype, "pathLogsExportacaoEstudantes", {
        get: function () {
            return this.logsService.PATH_LOGS_EXPORTACOES_ESTUDANTES;
        },
        enumerable: true,
        configurable: true
    });
    LogsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.logsService.listarLogsExportEstudantes()
            .then(function (response) {
            _this.logsExportsEstudantes = response;
        })
            .catch(function (response) {
            _this.status = _this.ERROR;
            console.log(response);
        });
    };
    LogsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logs',
            template: __webpack_require__(/*! ./logs.component.html */ "./src/app/logs/logs.component.html"),
            styles: [__webpack_require__(/*! ./logs.component.less */ "./src/app/logs/logs.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_logs_service__WEBPACK_IMPORTED_MODULE_3__["LogsService"]])
    ], LogsComponent);
    return LogsComponent;
}(_abstract_component__WEBPACK_IMPORTED_MODULE_2__["AbstractComponent"]));



/***/ }),

/***/ "./src/app/lote-salas-simplificado.service.ts":
/*!****************************************************!*\
  !*** ./src/app/lote-salas-simplificado.service.ts ***!
  \****************************************************/
/*! exports provided: LoteSalasSimplificadoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoteSalasSimplificadoService", function() { return LoteSalasSimplificadoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _array_indexador__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./array-indexador */ "./src/app/array-indexador.ts");
/* harmony import */ var _lote_salas_simplificado_grupo_lotes_simplificado__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lote-salas-simplificado/grupo-lotes-simplificado */ "./src/app/lote-salas-simplificado/grupo-lotes-simplificado.ts");
/* harmony import */ var _lote_salas_simplificado_lote_salas_simplificado__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lote-salas-simplificado/lote-salas-simplificado */ "./src/app/lote-salas-simplificado/lote-salas-simplificado.ts");
/* harmony import */ var _servidores_moodle_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./servidores-moodle.service */ "./src/app/servidores-moodle.service.ts");
/* harmony import */ var _super_macro_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./super-macro.service */ "./src/app/super-macro.service.ts");








var LoteSalasSimplificadoService = /** @class */ (function () {
    function LoteSalasSimplificadoService(http, superMacrosService, servidoresMoodleService) {
        this.http = http;
        this.superMacrosService = superMacrosService;
        this.servidoresMoodleService = servidoresMoodleService;
        this.loteSalasSimplificados = [];
        this.loteSalasSimplificadosIndex = null;
        this.loteSalasSimplificadoSelecionada = _lote_salas_simplificado_lote_salas_simplificado__WEBPACK_IMPORTED_MODULE_5__["LoteSalasSimplificado"].generate();
        this.grupoLotesSelecionado = _lote_salas_simplificado_grupo_lotes_simplificado__WEBPACK_IMPORTED_MODULE_4__["GrupoLotesSimplificado"].generate();
    }
    LoteSalasSimplificadoService.prototype.listar = function () {
        var _this = this;
        return this.http.get("/lote-salas-simplificados/all/" + this.grupoLotesSelecionado.id)
            .toPromise()
            .then(function (response) {
            _this.loteSalasSimplificados = _lote_salas_simplificado_lote_salas_simplificado__WEBPACK_IMPORTED_MODULE_5__["LoteSalasSimplificado"].generateListPlus(response.json(), _this.superMacrosService.superMacrosIndex, _this.servidoresMoodleService.servidoresMoodleIndex);
            _this.loteSalasSimplificadosIndex = new _array_indexador__WEBPACK_IMPORTED_MODULE_3__["ArrayIndexador"](_this.loteSalasSimplificados);
            return _this.loteSalasSimplificados;
        });
    };
    LoteSalasSimplificadoService.prototype.create = function (loteSalasSimplificado) {
        var _this = this;
        return this.http.post("/lote-salas-simplificados", loteSalasSimplificado.getPost())
            .toPromise()
            .then(function (response) {
            return _this.listar();
        });
    };
    LoteSalasSimplificadoService.prototype.update = function (loteSalasSimplificado) {
        var _this = this;
        return this.http.put("/lote-salas-simplificados/" + loteSalasSimplificado.id, loteSalasSimplificado.getPost())
            .toPromise()
            .then(function (response) {
            return _this.listar();
        });
    };
    LoteSalasSimplificadoService.prototype.delete = function (loteSalasSimplificado) {
        var _this = this;
        return this.http.delete("/lote-salas-simplificados/" + loteSalasSimplificado.id)
            .toPromise()
            .then(function (response) {
            return _this.listar();
        });
    };
    LoteSalasSimplificadoService.prototype.executaExportacoes = function (loteSalasSimplificado) {
        return this.http.get("/lote-salas-simplificados/exportacao/" + loteSalasSimplificado.id)
            .toPromise()
            .then(function (response) {
            return response.text();
        });
    };
    LoteSalasSimplificadoService.prototype.exportarEstudantes = function (loteSalasSimplificado) {
        return this.http.get("/lote-salas-simplificados/estudantes/" + loteSalasSimplificado.id)
            .toPromise()
            .then(function (response) {
            return response.text();
        });
    };
    LoteSalasSimplificadoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _super_macro_service__WEBPACK_IMPORTED_MODULE_7__["SuperMacroService"], _servidores_moodle_service__WEBPACK_IMPORTED_MODULE_6__["ServidoresMoodleService"]])
    ], LoteSalasSimplificadoService);
    return LoteSalasSimplificadoService;
}());



/***/ }),

/***/ "./src/app/lote-salas-simplificado/grupo-lotes-simplificado.ts":
/*!*********************************************************************!*\
  !*** ./src/app/lote-salas-simplificado/grupo-lotes-simplificado.ts ***!
  \*********************************************************************/
/*! exports provided: GrupoLotesSimplificado */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrupoLotesSimplificado", function() { return GrupoLotesSimplificado; });
var GrupoLotesSimplificado = /** @class */ (function () {
    function GrupoLotesSimplificado(id, descricao, auto_export_estudantes) {
        if (typeof id == "number") {
            this.id = id;
            this.descricao = descricao;
            this.auto_export_estudantes = auto_export_estudantes;
        }
        else {
            this.id = id['id'];
            this.descricao = id['descricao'];
            this.auto_export_estudantes = id['auto_export_estudantes'];
        }
    }
    GrupoLotesSimplificado.prototype.getPost = function () {
        return {
            'id': this.id,
            'descricao': this.descricao,
            'auto_export_estudantes': this.auto_export_estudantes ? true : false
        };
    };
    GrupoLotesSimplificado.generate = function () {
        return new GrupoLotesSimplificado(0, "", false);
    };
    GrupoLotesSimplificado.generateList = function (list) {
        var lotes = [];
        for (var i = 0; i < list.length; i++) {
            var lote = new GrupoLotesSimplificado(list[i]);
            lotes.push(lote);
        }
        return lotes;
    };
    GrupoLotesSimplificado.prototype.clone = function () {
        return new GrupoLotesSimplificado(this.id, this.descricao, this.auto_export_estudantes);
    };
    return GrupoLotesSimplificado;
}());



/***/ }),

/***/ "./src/app/lote-salas-simplificado/lote-salas-simplificado.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/lote-salas-simplificado/lote-salas-simplificado.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\"><div class=\"col-md-14\">\n<div class=\"panel panel-default\">\n\t<div class=\"panel-heading\" style=\"padding: 3px 15px;\">\n\t\t<table>\n\t\t\t<colgroup>\n\t\t\t\t<col width=\"40%\" />\n\t\t\t\t<col width=\"60%\" />\n\t\t\t\t<col width=\"39px\" />\n\t\t\t\t<col width=\"39px\" />\n\t\t\t\t<col width=\"39px\" />\n\t\t\t</colgroup>\n\t\t\t<tbody>\n\t\t\t\t<tr>\n\t\t\t\t\t<td class=\"celula-trunca-texto\">\n\t\t\t\t\t\tLote de Salas Simplificados\n\t\t\t\t\t</td>\n\t\t\t\t\t<td style=\"text-align: center;\">\n\t\t\t\t\t\t<select class=\"form-control\" [(ngModel)]=\"grupoSelecionadoId\" (change)=\"selecionaGrupoLotes()\">\n\t\t\t\t\t\t\t<option hidden disabled value selected> -- Selecione Um Grupo de Lotes -- </option>\n\t\t\t\t\t\t\t<option *ngFor=\"let g of gruposLotesSimplificados\" [value]=\"g.id\">{{g.descricao}} {{g.auto_export_estudantes ? '✅👥' : ''}}</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td title=\"Novo\">\n\t\t\t\t\t\t<button style=\"text-align: center; margin-left: 10px;\" title=\"Novo\" type=\"button\"\n\t\t\t\t\t\t\tclass=\"btn btn-primary botao-reduzido\" data-toggle=\"modal\"\n\t\t\t\t\t\t\tdata-target=\"#dialogCreateGrupoLSS\" (click)=\"resetGrupo()\" [disabled]=\"!editavel\">\n\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-plus\"></span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td title=\"Editar\">\n\t\t\t\t\t\t<button style=\"text-align: center; margin-left: 10px;\" title=\"Editar\" type=\"button\"\n\t\t\t\t\t\t\tclass=\"btn btn-info botao-reduzido\" data-toggle=\"modal\"\n\t\t\t\t\t\t\tdata-target=\"#dialogCreateGrupoLSS\" [disabled]=\"!editavel || !grupoLotesSimplificadosSelecionado.id\">\n\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-edit\"></span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td title=\"Excluir\">\n\t\t\t\t\t\t<button style=\"text-align: center; margin-left: 10px;\" title=\"Excluir\" type=\"button\"\n\t\t\t\t\t\t\tclass=\"btn btn-danger botao-reduzido\" (click)=\"removeGrupo()\" [disabled]=\"!editavel || !grupoLotesSimplificadosSelecionado.id\">\n\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-remove\"></span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n\t<div class=\"row\" *ngIf=\"grupoLotesSimplificadosSelecionado.id\">\n\t\t<div class=\"col-md-3\" style=\"padding-right: 0px; border-right: 1px solid #ddd\">\n\t\t\t<div>\n\t\t\t\t<table class=\"table\" style=\"margin-bottom: 0px\">\n\t\t\t\t\t<colgroup>\n\t\t\t\t\t\t<col width=\"40px\" />\n\t\t\t\t\t\t<col width=\"100%\" />\n\t\t\t\t\t\t<col width=\"39px\" />\n\t\t\t\t\t\t<col width=\"39px\" />\n\t\t\t\t\t\t<col width=\"15px\" />\n\t\t\t\t\t</colgroup>\n\t\t\t\t\t<thead class=\"thead-light\">\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>#</th>\n\t\t\t\t\t\t\t<th class=\"celula-trunca-texto\" title=\"Descrição do Lote\">Descrição</th>\n\t\t\t\t\t\t\t<th></th>\n\t\t\t\t\t\t\t<th></th>\n\t\t\t\t\t\t\t<th></th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t\t<div redimensionar=\"259\" style=\"overflow-y: scroll;\">\n\t\t\t\t<table class=\"table\">\n\t\t\t\t\t<colgroup>\n\t\t\t\t\t\t<col width=\"40px\" />\n\t\t\t\t\t\t<col width=\"100%\" />\n\t\t\t\t\t\t<col width=\"39px\" />\n\t\t\t\t\t\t<col width=\"39px\" />\n\t\t\t\t\t</colgroup>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr *ngFor=\"let lote of lotes\" class=\"clickable-row\" (click)=\"selecionar(lote)\"\n\t\t\t\t\t\t\t[ngClass]=\"{'linha-selecionada': lote.id == loteSelecionado.id}\">\n\t\t\t\t\t\t\t<td>{{lote.id}}</td>\n\t\t\t\t\t\t\t<td class=\"celula-trunca-texto\" title=\"{{lote.descricao}}\">{{lote.descricao}}</td>\n\t\t\t\t\t\t\t<td title=\"Editar\">\n\t\t\t\t\t\t\t\t<button style=\"text-align: center; margin-left: 2px;\" title=\"Editar\" type=\"button\"\n\t\t\t\t\t\t\t\t\tclass=\"btn btn-info botao-reduzido\" data-toggle=\"modal\"\n\t\t\t\t\t\t\t\t\tdata-target=\"#dialogCreateLSS\" (click)=\"selecionar(lote)\" [disabled]=\"!editavel\">\n\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-edit\"></span>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td title=\"Excluir\">\n\t\t\t\t\t\t\t\t<button style=\"text-align: center; margin-left: 2px;\" title=\"Excluir\" type=\"button\"\n\t\t\t\t\t\t\t\t\tclass=\"btn btn-danger botao-reduzido\" (click)=\"removeLote(lote)\" [disabled]=\"!editavel\">\n\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-remove\"></span>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t\t<tfoot class=\"status-tabela\">\n\t\t\t\t\t\t<tr *ngIf=\"status == LOADING\">\n\t\t\t\t\t\t\t<td colspan=\"4\"><i>Carregando Lotes...</i></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr *ngIf=\"lotes != null && lotes.length == 0 && status == COMPLETE\">\n\t\t\t\t\t\t\t<td colspan=\"4\"><i>Não Há Lotes para serem listados</i></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr *ngIf=\"status == ERROR && lotes.length == 0\">\n\t\t\t\t\t\t\t<td class=\"erro\" colspan=\"4\"><i>Falha na obtenção de lotes!</i></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tfoot>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t\t<div class=\"panel-footer\">\n\t\t\t\t<button style=\"text-align: center;\" title=\"Novo Lote\" type=\"button\" data-toggle=\"modal\" data-target=\"#dialogCreateLSS\"\n\t\t\t\t\tclass=\"btn btn-primary\" (click)=\"novoLote()\" [disabled]=\"!editavel\">\n\t\t\t\t\t<span class=\"glyphicon glyphicon-plus\"></span>\n\t\t\t\t</button>\n\t\t\t\t<button style=\"text-align: center; margin-left: 10px;\" title=\"Inserir Usuários\" type=\"button\"\n\t\t\t\t\tclass=\"btn btn-info\" (click)=\"inserirEstudantesGrupo()\" [disabled]=\"!editavel\">\n\t\t\t\t\t<span class=\"glyphicon glyphicon-user\"></span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-md-9\" style=\"padding-left: 0px;\">\n\t\t\t<div class=\"barra-titulo\">\n\t\t\t\t<table class=\"table\">\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td colspan=\"3\" class=\"celula-trunca-texto\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t\t<h4 *ngIf=\"loteSelecionado.id == 0\" style=\"display: inline-block; color: gray;\"\n\t\t\t\t\t\t\t\t\ttitle=\"\">\n\t\t\t\t\t\t\t\t\t<i>Selecione um Lote...</i>\n\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t<h4 *ngIf=\"loteSelecionado.id > 0\" style=\"display: inline-block\" title=\"\">\n\t\t\t\t\t\t\t\t\t<b>{{loteSelecionado.descricao}}</b> \n\t\t\t\t\t\t\t\t\t|  Moodle: {{loteSelecionado.servidor_moodle.nome}}\n\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<app-sala-simplificada [ancestral]=\"eu\">Carregando...</app-sala-simplificada>\n\t\t\t</div>\n\t\t\t<div class=\"panel-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-warning\" (click)=\"exportarSalasMoodle()\" [disabled]=\"!editavel || loteSelecionado.id == 0\">Exportar Salas para Moodle</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-info\" style=\"width: 160px;\" (click)=\"exportarEstudantes()\" [disabled]=\"!editavel || loteSelecionado.id == 0\">Exportar Estudantes</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n</div></div>\n\n<div class=\"modal fade\" id=\"dialogCreateGrupoLSS\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h5 class=\"modal-title\" *ngIf=\"!grupoLoteSimplificadoTemp.id\">Novo Grupo de Lotes</h5>\n\t\t\t\t<h5 class=\"modal-title\" *ngIf=\"grupoLoteSimplificadoTemp.id\">Alterar Grupo de Lotes</h5>\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<fieldset>\n\t\t\t\t\t<form id=\"grupoLoteForm\" class=\"form-group\" style=\"text-align: left; width: 400px; margin: 15px auto;\"\n\t\t\t\t\t\t(submit)=\"criarAlterarGrupoLote($event)\">\n\t\t\t\t\t\t<div class=\"alert alert-info\" [ngClass]=\"{'alert-info': !erroAviso, 'alert-danger': erroAviso}\"\n\t\t\t\t\t\t\t*ngIf=\"aviso\">\n\t\t\t\t\t\t\t<strong *ngIf=\"!erroAviso\">Informação!</strong><strong *ngIf=\"erroAviso\">Falha!</strong>\n\t\t\t\t\t\t\t{{aviso}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<label class=\"style1\">Descrição: *</label><br>\n\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"descricao-grupo\" placeholder=\"-- Descrição do Grupo de Lotes --\"\n\t\t\t\t\t\t\t[(ngModel)]=\"grupoLoteSimplificadoTemp.descricao\" size=\"60\" [disabled]=\"!editavel\" required><br>\n\t\t\t\t\t\t<label class=\"style1\" for=\"gl-auto-export\">Habilitar Auto Exportação de Estudantes: </label><br>\n\t\t\t\t\t\t<span class=\"big-check\">\n\t\t\t\t\t\t\t<input id=\"gl-auto-export\" type=\"checkbox\" name=\"gl-auto-export\" [(ngModel)]=\"grupoLoteSimplificadoTemp.auto_export_estudantes\" [disabled]=\"!editavel\">\n\t\t\t\t\t\t</span><p></p>\n\t\t\t\t\t</form>\n\t\t\t\t</fieldset>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"submit\" form=\"grupoLoteForm\" class=\"btn btn-primary botao-barra\"\n\t\t\t\t\t[disabled]=\"!editavel\">Enviar</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\">Fechar</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"modal fade\" id=\"dialogCreateLSS\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h5 class=\"modal-title\" *ngIf=\"!loteSelecionado.id\">Novo Lote de Salas Simplificados</h5>\n\t\t\t\t<h5 class=\"modal-title\" *ngIf=\"loteSelecionado.id\">Alterar Lote de Salas Simplificados</h5>\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<fieldset>\n\t\t\t\t\t<form id=\"loteSalasSimplificadoForm\" class=\"form-group\" style=\"text-align: left; width: 400px; margin: 15px auto;\"\n\t\t\t\t\t\t(submit)=\"criarAlterarLoteSalasSimplificado($event)\">\n\t\t\t\t\t\t<div class=\"alert alert-info\" [ngClass]=\"{'alert-info': !erroAviso, 'alert-danger': erroAviso}\"\n\t\t\t\t\t\t\t*ngIf=\"aviso\">\n\t\t\t\t\t\t\t<strong *ngIf=\"!erroAviso\">Informação!</strong><strong *ngIf=\"erroAviso\">Falha!</strong>\n\t\t\t\t\t\t\t{{aviso}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<label class=\"style1\">Descrição: *</label><br>\n\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"descricao-lote\" placeholder=\"-- Descrição do lote --\"\n\t\t\t\t\t\t\t[(ngModel)]=\"loteSelecionado.descricao\" size=\"60\" [disabled]=\"!editavel\" required><br>\t\n\t\t\t\t\t\t<label class=\"style1\">Servidor Moodle: *</label><br>\n\t\t\t\t\t\t<select class=\"form-control\" name=\"links-moodle\" [(ngModel)]=\"servidorMoodleSelecionadoId\" (change)=\"selecionaServidorMoodle()\" [disabled]=\"!editavel\" required>   \n\t\t\t\t\t\t\t<option hidden disabled value selected> -- Selecione -- </option>  \n\t\t\t\t\t\t\t<option *ngFor=\"let s of servidoresMoodle\" [value]=\"s.id\">{{s?.nome}} ({{s.url}})</option>       \n\t\t\t\t\t\t</select><br>\n\t\t\t\t\t\t<label class=\"style1\">Super Macro: </label><br>\n\t\t\t\t\t\t<select class=\"form-control\" name=\"super-macro\" [(ngModel)]=\"superMacroSelecionadaId\" (change)=\"selecionaSuperMacro()\" [disabled]=\"!editavel\">   \n\t\t\t\t\t\t\t<option value selected> -- Selecione -- </option>  \n\t\t\t\t\t\t\t<option *ngFor=\"let sm of superMacros\" [value]=\"sm.id\">{{sm.descricao}}</option>       \n\t\t\t\t\t\t</select><br>\n\t\t\t\t\t\t<label class=\"style1\">Sufixo:</label><br>\n\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"sufixo\" placeholder=\"-- Sufixo a ser inserido ao final dos nomes das salas --\"\n\t\t\t\t\t\t\t[(ngModel)]=\"loteSelecionado.sufixo\" size=\"60\" [disabled]=\"!editavel\"><br>\t\n\t\t\t\t\t\t<label class=\"style1\">Sala Provão ID: </label><br>\n\t\t\t\t\t\t<input class=\"form-control\" type=\"number\" name=\"sala-provao-id\" placeholder=\"-- ID da Sala Provão --\"\n\t\t\t\t\t\t\t[(ngModel)]=\"loteSelecionado.sala_provao_id\" size=\"60\" [disabled]=\"!editavel\"><br>\n\t\t\t\t\t</form>\n\t\t\t\t</fieldset>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"submit\" form=\"loteSalasSimplificadoForm\" class=\"btn btn-primary botao-barra\"\n\t\t\t\t\t[disabled]=\"!editavel\">Enviar</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\">Fechar</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"modal fade\" id=\"dialogExportResult\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialogExportResultTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Resposta do Servidor Moodle</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\" style=\"width: 450px;\">\n                <div class=\"alert alert-info\" [ngClass]=\"{'alert-info': !erroAviso, 'alert-danger': erroAviso}\" *ngIf=\"aviso\">\n                    <strong *ngIf=\"!erroAviso\">Informação!</strong><strong *ngIf=\"erroAviso\">Falha!</strong> {{aviso}}\n                </div>\n                <div redimensionar=\"300\" style=\"max-height: 250px;\" id=\"saidaExport\"></div>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\" [disabled]=\"!editavel\">Fechar</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/lote-salas-simplificado/lote-salas-simplificado.component.less":
/*!********************************************************************************!*\
  !*** ./src/app/lote-salas-simplificado/lote-salas-simplificado.component.less ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvdGUtc2FsYXMtc2ltcGxpZmljYWRvL2xvdGUtc2FsYXMtc2ltcGxpZmljYWRvLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/lote-salas-simplificado/lote-salas-simplificado.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/lote-salas-simplificado/lote-salas-simplificado.component.ts ***!
  \******************************************************************************/
/*! exports provided: LoteSalasSimplificadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoteSalasSimplificadoComponent", function() { return LoteSalasSimplificadoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstract-component */ "./src/app/abstract-component.ts");
/* harmony import */ var _grupo_lotes_simplificados_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../grupo-lotes-simplificados.service */ "./src/app/grupo-lotes-simplificados.service.ts");
/* harmony import */ var _lote_salas_simplificado_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lote-salas-simplificado.service */ "./src/app/lote-salas-simplificado.service.ts");
/* harmony import */ var _macro_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../macro.service */ "./src/app/macro.service.ts");
/* harmony import */ var _sala_simplificada_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sala-simplificada.service */ "./src/app/sala-simplificada.service.ts");
/* harmony import */ var _servidores_moodle_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../servidores-moodle.service */ "./src/app/servidores-moodle.service.ts");
/* harmony import */ var _super_macro_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../super-macro.service */ "./src/app/super-macro.service.ts");
/* harmony import */ var _grupo_lotes_simplificado__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./grupo-lotes-simplificado */ "./src/app/lote-salas-simplificado/grupo-lotes-simplificado.ts");
/* harmony import */ var _lote_salas_simplificado__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lote-salas-simplificado */ "./src/app/lote-salas-simplificado/lote-salas-simplificado.ts");











var LoteSalasSimplificadoComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LoteSalasSimplificadoComponent, _super);
    function LoteSalasSimplificadoComponent(loteSalasSimplificadoService, salaSimplificadaService, grupoLotesSimplificadosService, macroService, superMacroService, servidoresMoodleService) {
        var _this = _super.call(this) || this;
        _this.loteSalasSimplificadoService = loteSalasSimplificadoService;
        _this.salaSimplificadaService = salaSimplificadaService;
        _this.grupoLotesSimplificadosService = grupoLotesSimplificadosService;
        _this.macroService = macroService;
        _this.superMacroService = superMacroService;
        _this.servidoresMoodleService = servidoresMoodleService;
        _this.superMacroSelecionadaId = null;
        _this.servidorMoodleSelecionadoId = null;
        _this.grupoLoteSimplificadoTemp = _grupo_lotes_simplificado__WEBPACK_IMPORTED_MODULE_9__["GrupoLotesSimplificado"].generate();
        return _this;
    }
    Object.defineProperty(LoteSalasSimplificadoComponent.prototype, "lotes", {
        get: function () {
            return this.loteSalasSimplificadoService.loteSalasSimplificados;
        },
        set: function (loteSalasSimplificados) {
            this.loteSalasSimplificadoService.loteSalasSimplificados = loteSalasSimplificados;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoteSalasSimplificadoComponent.prototype, "loteSelecionado", {
        get: function () {
            return this.loteSalasSimplificadoService.loteSalasSimplificadoSelecionada;
        },
        set: function (lote) {
            this.loteSalasSimplificadoService.loteSalasSimplificadoSelecionada = lote;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoteSalasSimplificadoComponent.prototype, "servidoresMoodle", {
        get: function () {
            return this.servidoresMoodleService.servidoresMoodle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoteSalasSimplificadoComponent.prototype, "superMacros", {
        get: function () {
            return this.superMacroService.superMacros;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoteSalasSimplificadoComponent.prototype, "grupoSelecionadoId", {
        get: function () {
            return this.grupoLotesSimplificadosService.grupoSelecionadoId;
        },
        set: function (grupoSelecionadoId) {
            this.grupoLotesSimplificadosService.grupoSelecionadoId = grupoSelecionadoId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoteSalasSimplificadoComponent.prototype, "gruposLotesSimplificados", {
        get: function () {
            return this.grupoLotesSimplificadosService.grupos;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoteSalasSimplificadoComponent.prototype, "grupoLotesSimplificadosSelecionado", {
        /*set gruposLotesSimplificados(grupoLotesSimplificados) {
            this.grupoLotesSimplificadosService.grupos = grupoLotesSimplificados;
        }*/
        get: function () {
            return this.loteSalasSimplificadoService.grupoLotesSelecionado;
        },
        set: function (g) {
            this.loteSalasSimplificadoService.grupoLotesSelecionado = g;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoteSalasSimplificadoComponent.prototype, "eu", {
        get: function () {
            return this;
        },
        enumerable: true,
        configurable: true
    });
    LoteSalasSimplificadoComponent.prototype.resetGrupo = function () {
        this.grupoLotesSimplificadosSelecionado = _grupo_lotes_simplificado__WEBPACK_IMPORTED_MODULE_9__["GrupoLotesSimplificado"].generate();
        this.grupoLoteSimplificadoTemp = _grupo_lotes_simplificado__WEBPACK_IMPORTED_MODULE_9__["GrupoLotesSimplificado"].generate();
        this.grupoSelecionadoId = "";
        this.lotes = [];
        this.novoLote();
    };
    LoteSalasSimplificadoComponent.prototype.selecionaGrupoLotes = function () {
        var _this = this;
        var grupoTemp = this.grupoLotesSimplificadosService.gruposIndex.get(this.grupoSelecionadoId);
        if (!grupoTemp)
            grupoTemp = _grupo_lotes_simplificado__WEBPACK_IMPORTED_MODULE_9__["GrupoLotesSimplificado"].generate();
        this.grupoLotesSimplificadosSelecionado = grupoTemp;
        this.grupoLoteSimplificadoTemp = grupoTemp.clone();
        this.editavel = false;
        this.loteSalasSimplificadoService.listar()
            .then(function (response) {
            _this.editavel = true;
            _this.novoLote();
        })
            .catch(function (response) {
            _this.erroAviso = true;
            _this.aviso = _this.erroHttp(response);
            _this.status = _this.ERROR;
            alert(_this.aviso);
        });
    };
    LoteSalasSimplificadoComponent.prototype.criarAlterarGrupoLote = function (ev) {
        var _this = this;
        ev.preventDefault();
        var loteSalasForm = jQuery('#grupoLoteForm')[0];
        if (loteSalasForm.reportValidity()) {
            this.editavel = false;
            if (this.grupoLoteSimplificadoTemp.id) {
                this.grupoLotesSimplificadosService.update(this.grupoLoteSimplificadoTemp)
                    .then(function (response) {
                    jQuery('#dialogCreateGrupoLSS').modal('hide');
                    _this.editavel = true;
                })
                    .catch(function (response) {
                    _this.aviso = _this.erroHttp(response);
                    alert(_this.aviso);
                    _this.editavel = true;
                });
            }
            else {
                this.grupoLotesSimplificadosService.create(this.grupoLoteSimplificadoTemp)
                    .then(function (response) {
                    jQuery('#dialogCreateGrupoLSS').modal('hide');
                    _this.selecionaGrupoLotes();
                    _this.editavel = true;
                })
                    .catch(function (response) {
                    _this.aviso = _this.erroHttp(response);
                    alert(_this.aviso);
                    _this.editavel = true;
                });
            }
        }
    };
    LoteSalasSimplificadoComponent.prototype.removeGrupo = function () {
        var _this = this;
        if (confirm("Confirmar exclusão do Grupo '" + this.grupoLoteSimplificadoTemp.descricao + "'?") &&
            confirm("ATENÇÃO!\nEsta ação removerá todos os lotes de salas associadas a este grupo e todas as respectivas salas associadas a estes lotes!\n Deseja prosseguir com a exclusão?"))
            this.grupoLotesSimplificadosService.delete(this.grupoLoteSimplificadoTemp)
                .then(function (response) {
                _this.grupoLotesSimplificadosService.listar();
                _this.resetGrupo();
            })
                .catch(function (r) {
                alert(_this.erroHttp(r));
            });
    };
    LoteSalasSimplificadoComponent.prototype.inserirEstudantesGrupo = function () {
        var _this = this;
        if (confirm("Deseja inserir estudantes em todos as salas de todos os lotes deste grupo?")) {
            this.erroAviso = false;
            this.aviso = '';
            jQuery('#dialogExportResult').modal('show');
            jQuery('#saidaExport').html("<i>Aguarde...<i>");
            this.editavel = false;
            //this.blockAutoRestore = true;
            this.grupoLotesSimplificadosService.exportarEstudantes(this.grupoLotesSimplificadosSelecionado)
                .then(function (response) {
                jQuery('#saidaExport').html(response);
                _this.editavel = true;
            })
                .catch(function (response) {
                _this.erroAviso = true;
                _this.aviso = _this.erroHttp(response);
                _this.editavel = true;
                jQuery('#saidaExport').html('<span style="color: red;">' + _this.aviso + "</span>");
            });
        }
    };
    LoteSalasSimplificadoComponent.prototype.criarAlterarLoteSalasSimplificado = function (ev) {
        ev.preventDefault();
        var loteSalasForm = jQuery('#loteSalasSimplificadoForm')[0];
        if (loteSalasForm.reportValidity()) {
            if (this.loteSelecionado.id)
                this.alteraLote();
            else
                this.criaLote();
        }
    };
    LoteSalasSimplificadoComponent.prototype.novoLote = function () {
        this.limpar();
        this.loteSelecionado = _lote_salas_simplificado__WEBPACK_IMPORTED_MODULE_10__["LoteSalasSimplificado"].generate();
        this.loteSelecionado.grupo_id = this.grupoLotesSimplificadosSelecionado.id;
        this.servidorMoodleSelecionadoId = "";
        this.superMacroSelecionadaId = "";
        this.salaSimplificadaService.reset();
    };
    LoteSalasSimplificadoComponent.prototype.selecionar = function (lote) {
        this.limpar();
        this.loteSelecionado = lote.clone();
        this.servidorMoodleSelecionadoId = this.loteSelecionado.servidor_moodle ? this.loteSelecionado.servidor_moodle.id : "";
        this.superMacroSelecionadaId = this.loteSelecionado.super_macro ? this.loteSelecionado.super_macro.id : "";
        this.salaSimplificadaService.list();
    };
    LoteSalasSimplificadoComponent.prototype.criaLote = function () {
        var _this = this;
        this.editavel = false;
        this.loteSalasSimplificadoService.create(this.loteSelecionado)
            .then(function (response) {
            jQuery('#dialogCreateLSS').modal('hide');
            _this.editavel = true;
        })
            .catch(function (response) {
            _this.aviso = _this.erroHttp(response);
            alert(_this.aviso);
            _this.editavel = true;
        });
    };
    LoteSalasSimplificadoComponent.prototype.alteraLote = function () {
        var _this = this;
        this.editavel = false;
        this.loteSalasSimplificadoService.update(this.loteSelecionado)
            .then(function (response) {
            jQuery('#dialogCreateLSS').modal('hide');
            _this.editavel = true;
        })
            .catch(function (response) {
            _this.aviso = _this.erroHttp(response);
            alert(_this.aviso);
            _this.editavel = true;
        });
    };
    LoteSalasSimplificadoComponent.prototype.removeLote = function (lote) {
        var _this = this;
        if (confirm("Confirmar exclusão do Lote '" + lote.descricao + "'?"))
            this.loteSalasSimplificadoService.delete(lote)
                .then(function (response) {
                _this.loteSalasSimplificadoService.listar();
                _this.novoLote();
            })
                .catch(function (r) {
                alert(_this.erroHttp(r));
            });
    };
    LoteSalasSimplificadoComponent.prototype.limpar = function () {
        this.aviso = '';
        this.status = this.COMPLETE;
    };
    LoteSalasSimplificadoComponent.prototype.selecionaServidorMoodle = function () {
        this.loteSelecionado.servidor_moodle = this.servidoresMoodleService.servidoresMoodleIndex.get(this.servidorMoodleSelecionadoId);
    };
    LoteSalasSimplificadoComponent.prototype.selecionaSuperMacro = function () {
        this.loteSelecionado.super_macro = this.superMacroService.superMacrosIndex.get(this.superMacroSelecionadaId);
    };
    LoteSalasSimplificadoComponent.prototype.exportarSalasMoodle = function () {
        var _this = this;
        this.editavel = false;
        if (this.loteSelecionado && confirm("Deseja executar as exportações automáticas das salas deste lote?")) {
            this.loteSalasSimplificadoService.executaExportacoes(this.loteSelecionado)
                .then(function (response) {
                jQuery('#dialogExportResult').modal('show');
                jQuery('#saidaExport').html(response);
                _this.editavel = true;
                _this.selecionar(_this.loteSelecionado);
            })
                .catch(function (response) {
                jQuery('#dialogExportResult').modal('show');
                _this.erroAviso = true;
                _this.aviso = _this.erroHttp(response);
                _this.editavel = true;
                jQuery('#saidaExport').html('<span style="color: red;">' + _this.aviso + "</span>");
            });
        }
    };
    LoteSalasSimplificadoComponent.prototype.exportarEstudantes = function () {
        var _this = this;
        if (!confirm("Deseja inserir os estudantes em todas as salas do lote selecionado?"))
            return;
        this.erroAviso = false;
        this.aviso = '';
        jQuery('#dialogExportResult').modal('show');
        jQuery('#saidaExport').html("<i>Aguarde...<i>");
        this.editavel = false;
        //this.blockAutoRestore = true;
        this.loteSalasSimplificadoService.exportarEstudantes(this.loteSelecionado)
            .then(function (response) {
            jQuery('#saidaExport').html(response);
            _this.editavel = true;
        })
            .catch(function (response) {
            _this.erroAviso = true;
            _this.aviso = _this.erroHttp(response);
            _this.editavel = true;
            jQuery('#saidaExport').html('<span style="color: red;">' + _this.aviso + "</span>");
        });
    };
    LoteSalasSimplificadoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.macroService.getMacros()
            .then(function (response) {
            _this.superMacroService.listar()
                .then(function (response) {
                _this.servidoresMoodleService.getServidoresMoodle()
                    .then(function (response) {
                    _this.grupoLotesSimplificadosService.listar()
                        .then(function (response) {
                        _this.status = _this.COMPLETE;
                        _this.editavel = true;
                    })
                        .catch(function (response) {
                        _this.erroAviso = true;
                        _this.aviso = _this.erroHttp(response);
                        _this.status = _this.ERROR;
                        alert(_this.aviso);
                    });
                }).catch(function (response) {
                    _this.erroAviso = true;
                    _this.aviso = _this.erroHttp(response);
                    _this.status = _this.ERROR;
                    alert(_this.aviso);
                });
            })
                .catch(function (response) {
                _this.erroAviso = true;
                _this.aviso = _this.erroHttp(response);
                _this.status = _this.ERROR;
                alert(_this.aviso);
            });
        })
            .catch(function (response) {
            _this.erroAviso = true;
            _this.aviso = _this.erroHttp(response);
            _this.status = _this.ERROR;
            alert(_this.aviso);
        });
    };
    LoteSalasSimplificadoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lote-salas-simplificado',
            template: __webpack_require__(/*! ./lote-salas-simplificado.component.html */ "./src/app/lote-salas-simplificado/lote-salas-simplificado.component.html"),
            styles: [__webpack_require__(/*! ./lote-salas-simplificado.component.less */ "./src/app/lote-salas-simplificado/lote-salas-simplificado.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_lote_salas_simplificado_service__WEBPACK_IMPORTED_MODULE_4__["LoteSalasSimplificadoService"], _sala_simplificada_service__WEBPACK_IMPORTED_MODULE_6__["SalaSimplificadaService"],
            _grupo_lotes_simplificados_service__WEBPACK_IMPORTED_MODULE_3__["GrupoLotesSimplificadosService"],
            _macro_service__WEBPACK_IMPORTED_MODULE_5__["MacroService"], _super_macro_service__WEBPACK_IMPORTED_MODULE_8__["SuperMacroService"], _servidores_moodle_service__WEBPACK_IMPORTED_MODULE_7__["ServidoresMoodleService"]])
    ], LoteSalasSimplificadoComponent);
    return LoteSalasSimplificadoComponent;
}(_abstract_component__WEBPACK_IMPORTED_MODULE_2__["AbstractComponent"]));



/***/ }),

/***/ "./src/app/lote-salas-simplificado/lote-salas-simplificado.ts":
/*!********************************************************************!*\
  !*** ./src/app/lote-salas-simplificado/lote-salas-simplificado.ts ***!
  \********************************************************************/
/*! exports provided: LoteSalasSimplificado */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoteSalasSimplificado", function() { return LoteSalasSimplificado; });
var LoteSalasSimplificado = /** @class */ (function () {
    function LoteSalasSimplificado(id, grupo_id, descricao, sala_provao_id, super_macro, servidor_moodle, sufixo) {
        if (typeof id == "number") {
            this.id = id;
            this.grupo_id = grupo_id;
            this.descricao = descricao;
            this.sala_provao_id = sala_provao_id;
            this.super_macro = super_macro;
            this.servidor_moodle = servidor_moodle;
            this.sufixo = sufixo;
        }
        else {
            this.id = id['id'];
            this.grupo_id = id['grupo_id'];
            this.descricao = id['descricao'];
            this.sala_provao_id = id['sala_provao_id'];
            this.super_macro = id['super_macro_id'];
            this.servidor_moodle = id['servidor_moodle_id'];
            this.sufixo = id['sufixo'];
        }
    }
    LoteSalasSimplificado.prototype.getPost = function () {
        return {
            'id': this.id,
            'grupo_id': this.grupo_id,
            'descricao': this.descricao,
            'sala_provao_id': this.sala_provao_id,
            'super_macro_id': (this.super_macro ? this.super_macro.id : null),
            'servidor_moodle_id': (this.servidor_moodle ? this.servidor_moodle.id : null),
            'sufixo': (this.sufixo ? this.sufixo : null)
        };
    };
    LoteSalasSimplificado.generate = function () {
        return new LoteSalasSimplificado(0, 0, "", "", null, null, null);
    };
    LoteSalasSimplificado.generateList = function (list) {
        var lotes = [];
        for (var i = 0; i < list.length; i++) {
            var lote = new LoteSalasSimplificado(list[i]);
            lotes.push(lote);
        }
        return lotes;
    };
    LoteSalasSimplificado.generateListPlus = function (list, superMacrosIndex, servidoresMoodleIndex) {
        var lotes = [];
        for (var i = 0; i < list.length; i++) {
            list[i]['super_macro_id'] = superMacrosIndex.get(list[i]['super_macro_id']);
            list[i]['servidor_moodle_id'] = servidoresMoodleIndex.get(list[i]['servidor_moodle_id']);
            var lote = new LoteSalasSimplificado(list[i]);
            lotes.push(lote);
        }
        return lotes;
    };
    LoteSalasSimplificado.prototype.clone = function () {
        return new LoteSalasSimplificado(this.id, this.grupo_id, this.descricao, this.sala_provao_id, this.super_macro, this.servidor_moodle, this.sufixo);
    };
    return LoteSalasSimplificado;
}());



/***/ }),

/***/ "./src/app/lote-salas.service.ts":
/*!***************************************!*\
  !*** ./src/app/lote-salas.service.ts ***!
  \***************************************/
/*! exports provided: LoteSalasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoteSalasService", function() { return LoteSalasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _lote_salas_lote_salas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lote-salas/lote-salas */ "./src/app/lote-salas/lote-salas.ts");
/* harmony import */ var _salas_sala__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./salas/sala */ "./src/app/salas/sala.ts");





var LoteSalasService = /** @class */ (function () {
    function LoteSalasService(http) {
        this.http = http;
        this.lotesSalasList = [];
    }
    LoteSalasService.prototype.listar = function (periodoLetivoIndex, faculdadeIndex, cursoIndex) {
        var _this = this;
        return this.http.get("/lote-salas/all")
            .toPromise()
            .then(function (response) {
            _this.lotesSalasList = _lote_salas_lote_salas__WEBPACK_IMPORTED_MODULE_3__["LoteSalas"].generateListPlus(response.json(), periodoLetivoIndex, faculdadeIndex, cursoIndex);
            return _this.lotesSalasList;
        });
    };
    LoteSalasService.prototype.criaLoteSalas = function (loteSalas) {
        var salasPost = [];
        for (var i = 0; i < loteSalas.salas.length; i++) {
            salasPost.push(this.getPostSala(loteSalas.salas[i]));
        }
        var postLoteSalas = {
            curso_id: loteSalas.curso,
            descricao: loteSalas.descricao,
            faculdade_id: loteSalas.faculdade,
            periodo_letivo_id: loteSalas.periodo_letivo,
            salas: salasPost
        };
        console.log(postLoteSalas);
        return this.http.post("/lote-salas", postLoteSalas)
            .toPromise()
            .then(function (response) {
            //this.lotesSalasList = LoteSalas.generateListPlus(response.json(), periodoLetivoIndex, faculdadeIndex, cursoIndex);
            return response.json();
        });
    };
    LoteSalasService.prototype.getSalasDoLote = function (loteSalas, periodoLetivoIndex, faculdadeIndex, cursoIndex) {
        return this.http.get("/lote-salas/" + loteSalas.id)
            .toPromise()
            .then(function (response) {
            return response.json();
        });
    };
    LoteSalasService.prototype.executaExportacoes = function (loteSalas) {
        return this.http.get("/lote-salas/exportacao/" + loteSalas.id)
            .toPromise()
            .then(function (response) {
            return response.text();
        });
    };
    LoteSalasService.prototype.insereEstudantes = function (loteSalas) {
        return this.http.get("/lote-salas/estudantes/" + loteSalas.id)
            .toPromise()
            .then(function (response) {
            return response.text();
        });
    };
    LoteSalasService.prototype.updateMacro = function (sala, macroId) {
        return this.http.put("/lote-salas/macro", { macro_id: macroId, sala_id: sala.id })
            .toPromise()
            .then(function (response) {
            return response.json();
        });
    };
    LoteSalasService.prototype.removeLoteSalas = function (loteSalas) {
        return this.http.delete("/lote-salas/" + loteSalas.id)
            .toPromise()
            .then(function (response) {
            return response.json();
        });
    };
    LoteSalasService.prototype.getPostSala = function (s) {
        var sala = _salas_sala__WEBPACK_IMPORTED_MODULE_4__["Sala"].geraNovaSala();
        //sala.id = s.id;
        //sala.email = s.email;
        sala.curso = s.curso.id;
        //sala.mensagem = s.mensagem;
        sala.nome_professor = s.nome_professor;
        sala.cpf_professor = s.cpf_professor;
        sala.nome_sala = s.nome_sala;
        sala.modalidade = s.modalidade;
        sala.objetivo_sala = s.objetivo_sala;
        sala.observacao = s.observacao;
        sala.senha_aluno = s.senha_aluno;
        sala.estudantes = s.estudantes;
        sala.periodo_letivo_id = s.periodo_letivo_id;
        sala.carga_horaria_total_disciplina = s.carga_horaria_total_disciplina;
        sala.avaliacao = s.avaliacao;
        sala.turma_nome = s.turma_nome;
        sala.turma_id = s.turma_id;
        sala.periodo_letivo_key = s.periodo_letivo_key;
        sala.curso_key = s.curso_key;
        sala.disciplina_key = s.disciplina_key;
        //sala.status = status;
        //sala.solicitante_id = s.solicitante_id;   
        return sala;
    };
    LoteSalasService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], LoteSalasService);
    return LoteSalasService;
}());



/***/ }),

/***/ "./src/app/lote-salas/cria-lote-salas/cria-lote-salas.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/lote-salas/cria-lote-salas/cria-lote-salas.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    teste\n</div>"

/***/ }),

/***/ "./src/app/lote-salas/cria-lote-salas/cria-lote-salas.component.less":
/*!***************************************************************************!*\
  !*** ./src/app/lote-salas/cria-lote-salas/cria-lote-salas.component.less ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvdGUtc2FsYXMvY3JpYS1sb3RlLXNhbGFzL2NyaWEtbG90ZS1zYWxhcy5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/lote-salas/cria-lote-salas/cria-lote-salas.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/lote-salas/cria-lote-salas/cria-lote-salas.component.ts ***!
  \*************************************************************************/
/*! exports provided: CriaLoteSalasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriaLoteSalasComponent", function() { return CriaLoteSalasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_abstract_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/abstract-component */ "./src/app/abstract-component.ts");
/* harmony import */ var src_app_cursos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/cursos.service */ "./src/app/cursos.service.ts");
/* harmony import */ var src_app_dados_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dados.service */ "./src/app/dados.service.ts");
/* harmony import */ var src_app_faculdade_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/faculdade.service */ "./src/app/faculdade.service.ts");
/* harmony import */ var src_app_faculdades_faculdade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/faculdades/faculdade */ "./src/app/faculdades/faculdade.ts");
/* harmony import */ var src_app_macro_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/macro.service */ "./src/app/macro.service.ts");
/* harmony import */ var src_app_periodo_letivos_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/periodo-letivos.service */ "./src/app/periodo-letivos.service.ts");
/* harmony import */ var src_app_pl_disciplinas_academicos_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/pl-disciplinas-academicos.service */ "./src/app/pl-disciplinas-academicos.service.ts");
/* harmony import */ var src_app_pl_disciplinas_academicos_estudante__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/pl-disciplinas-academicos/estudante */ "./src/app/pl-disciplinas-academicos/estudante.ts");
/* harmony import */ var src_app_salas_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/salas.service */ "./src/app/salas.service.ts");
/* harmony import */ var src_app_salas_sala__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/salas/sala */ "./src/app/salas/sala.ts");
/* harmony import */ var src_app_usuario_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/usuario.service */ "./src/app/usuario.service.ts");














var CriaLoteSalasComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CriaLoteSalasComponent, _super);
    function CriaLoteSalasComponent(salasService, dadosService, faculdadeService, plDisciplinasAcademicosService, macroService, periodoLetivoService, cursosService, usuarioService) {
        var _this = _super.call(this) || this;
        _this.salasService = salasService;
        _this.dadosService = dadosService;
        _this.faculdadeService = faculdadeService;
        _this.plDisciplinasAcademicosService = plDisciplinasAcademicosService;
        _this.macroService = macroService;
        _this.periodoLetivoService = periodoLetivoService;
        _this.cursosService = cursosService;
        _this.usuarioService = usuarioService;
        _this.sala = src_app_salas_sala__WEBPACK_IMPORTED_MODULE_12__["Sala"].geraNovaSala();
        _this.statusTemp = "";
        _this.estudantes = [];
        _this.estudanteTemp = new src_app_pl_disciplinas_academicos_estudante__WEBPACK_IMPORTED_MODULE_10__["Estudante"]("", "", "", false);
        _this.periodoLetivoSelecionadoId = "";
        _this.faculdadeTemp = src_app_faculdades_faculdade__WEBPACK_IMPORTED_MODULE_6__["Faculdade"].generateFaculdade();
        _this.faculdadeSelecionadaId = "";
        _this.cursoSelecionadoCodigo = "";
        _this.disciplinaSelecionadaId = "";
        _this.usuarios = [];
        _this.filteredUsuarios = [];
        _this.nome_professor_temp = "";
        _this.COLUNAS = {
            id: false,
            periodo_letivo_id: false,
            periodo_letivo_key: false,
            nome_professor: true,
            username_professor: false,
            cpf_professor: false,
            sigla_faculdade: false,
            nome_faculdade: false,
            curso_key: false,
            curso: true,
            nome_sala: true,
            disciplina_key: false,
            carga_horaria_total_disciplina: false,
            avaliacao: false,
            turma_nome: false,
            turma_id: false,
            modalidade: false,
            objetivo_sala: false,
            sala_moodle_id: false,
        };
        return _this;
    }
    Object.defineProperty(CriaLoteSalasComponent.prototype, "salas", {
        get: function () {
            return this.salasService.salas;
        },
        set: function (salas) {
            this.salasService.salas = salas;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CriaLoteSalasComponent.prototype, "faculdades", {
        get: function () {
            return this.faculdadeService.faculdades;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CriaLoteSalasComponent.prototype, "macros", {
        get: function () {
            return this.macroService.macros;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CriaLoteSalasComponent.prototype, "periodoLetivos", {
        get: function () {
            return this.periodoLetivoService.periodoLetivos;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CriaLoteSalasComponent.prototype, "modalidades", {
        get: function () {
            return this.salasService.modalidades;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CriaLoteSalasComponent.prototype, "objetivosSalas", {
        get: function () {
            return this.salasService.objetivosSalas;
        },
        enumerable: true,
        configurable: true
    });
    CriaLoteSalasComponent.prototype.selecionaFaculdade = function () {
        if (this.faculdadeSelecionadaId) {
            this.faculdadeTemp = this.faculdadeService.faculdadesIndex.get(this.faculdadeSelecionadaId);
            this.cursoSelecionadoCodigo = "";
            this.disciplinaSelecionadaId = "";
            //this.sala.nome_sala = "";
        }
    };
    CriaLoteSalasComponent.prototype.selecionaCurso = function (resetSala) {
        if (resetSala === void 0) { resetSala = true; }
        /*if (this.sala.curso) {
            this.plDisciplinasAcademicosTemp = PlDisciplinasAcademicos.generatePlDisciplinasAcademicos();
            //this.sala.nome_sala = "";
            this.disciplinaSelecionadaId = "";
            this.editavel = false;
            this.plDisciplinasAcademicosService.getPlDisciplinasAcademicos(this.sala.periodo_letivo_id, this.sala.curso)
                .then(r => {
                    this.editavel = true;
                    this.filteredDisciplina = this.filterDisciplina("", this.plDisciplinasAcademicosList);
                    if (resetSala)
                        this.sala.nome_sala = "";
                    else {
                        var plda = this.plDisciplinasAcademicosService.plDisciplinasAcademicosNameIndex.get(this.sala.nome_sala)
                        if (plda)
                            this.disciplinaSelecionadaId = plda.disciplina;
                    }
                }).catch(response => {
                    this.erroAviso = true;
                    this.aviso = this.erroHttp(response);
                    alert(this.aviso)
                    this.editavel = true;
                });
        }*/
    };
    CriaLoteSalasComponent.prototype.buscarSalas = function () {
        var _this = this;
        this.plDisciplinasAcademicosService.getDisciplinasCursoSigecad(this.periodoLetivoSelecionadoId, this.faculdadeTemp.sigla, this.cursoSelecionadoCodigo)
            .then(function (salasAny) {
            _this.salas = [];
            for (var i in salasAny) {
                var sala = _this.salasService.convertChargedSala(salasAny[i]);
                sala.nome_professor = salasAny[i].nome_professor;
                sala.username_professor = salasAny[i].username_professor;
                sala.cpf_professor = salasAny[i].cpf_professor;
                _this.salas.push(sala);
            }
            _this.status = _this.COMPLETE;
            console.log(_this.salas);
        })
            .catch(function (response) {
            _this.status = _this.ERROR;
            console.log(response);
            _this.salas = [];
        });
    };
    CriaLoteSalasComponent.prototype.getPeriodoLetivo = function (plid) {
        return this.periodoLetivoService.periodoLetivos[this.periodoLetivoService.periodoLetivosIndex[plid]];
    };
    CriaLoteSalasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dadosService.statusList()
            .then(function (response) {
            _this.periodoLetivoService.getPeriodoLetivos()
                .then(function (response) {
                _this.usuarioService.listaUsuariosCriaSala()
                    .then(function (response) {
                    _this.usuarios = response;
                    _this.faculdadeService.listar()
                        .then(function (response) {
                        _this.macroService.getMacros()
                            .then(function (response) {
                            _this.salasService.getObjetivosSalas()
                                .then(function (response) {
                                _this.salasService.getModalidades()
                                    .then(function (response) {
                                    _this.status = _this.COMPLETE;
                                    _this.salas = [];
                                    /*this.salasService.listar()
                                        .then(response => {

                                        })
                                        .catch(response => {
                                            this.status = this.ERROR;
                                            console.log(response)
                                        })*/
                                })
                                    .catch(function (response) {
                                    _this.status = _this.ERROR;
                                    console.log(response);
                                });
                            })
                                .catch(function (response) {
                                _this.status = _this.ERROR;
                                console.log(response);
                            });
                        })
                            .catch(function (response) {
                            _this.status = _this.ERROR;
                            console.log(response);
                        });
                    })
                        .catch(function (response) {
                        _this.status = _this.ERROR;
                        console.log(response);
                    });
                })
                    .catch(function (response) {
                    _this.status = _this.ERROR;
                    console.log(response);
                });
            })
                .catch(function (response) {
                _this.status = _this.ERROR;
                console.log(response);
            });
        })
            .catch(function (response) {
            _this.status = _this.ERROR;
            console.log(response);
        });
    };
    CriaLoteSalasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cria-lote-salas',
            template: __webpack_require__(/*! ./cria-lote-salas.component.html */ "./src/app/lote-salas/cria-lote-salas/cria-lote-salas.component.html"),
            styles: [__webpack_require__(/*! ./cria-lote-salas.component.less */ "./src/app/lote-salas/cria-lote-salas/cria-lote-salas.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_salas_service__WEBPACK_IMPORTED_MODULE_11__["SalasService"], src_app_dados_service__WEBPACK_IMPORTED_MODULE_4__["DadosService"], src_app_faculdade_service__WEBPACK_IMPORTED_MODULE_5__["FaculdadeService"], src_app_pl_disciplinas_academicos_service__WEBPACK_IMPORTED_MODULE_9__["PlDisciplinasAcademicosService"],
            src_app_macro_service__WEBPACK_IMPORTED_MODULE_7__["MacroService"], src_app_periodo_letivos_service__WEBPACK_IMPORTED_MODULE_8__["PeriodoLetivosService"], src_app_cursos_service__WEBPACK_IMPORTED_MODULE_3__["CursosService"], src_app_usuario_service__WEBPACK_IMPORTED_MODULE_13__["UsuarioService"]])
    ], CriaLoteSalasComponent);
    return CriaLoteSalasComponent;
}(src_app_abstract_component__WEBPACK_IMPORTED_MODULE_2__["AbstractComponent"]));



/***/ }),

/***/ "./src/app/lote-salas/lote-salas.component.html":
/*!******************************************************!*\
  !*** ./src/app/lote-salas/lote-salas.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-14\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n                Lote de Solicitações de Criação de Salas\n            </div>\n            <div>\n                <table class=\"table\" style=\"margin-bottom: 0px\">\n                    <caption style=\"padding-bottom: 0px;\">\n                        <table>\n                            <tr *ngIf=\"!loteSalas\">\n                                <td colspan=\"6\" style=\"text-align: center;\">\n                                    <button class=\"btn btn-success\" (click)=\"novoLoteSalas()\" [disabled]=\"!periodoLetivoSelecionadoId || !faculdadeSelecionadaId || !editavel\" style=\"width: 120px; margin-right: 5px;\">Novo Lote</button>\n                                    <button class=\"btn btn-primary\" (click)=\"getLoteSalasList()\" [disabled]=\"!editavel\" data-toggle=\"modal\" data-target=\"#dialogListaLotes\" style=\"width: 120px;\">Lista de Lotes</button>\n                                </td>\n                            </tr>\n                            <tr *ngIf=\"loteSalas\">\n                                <td style=\"text-align: center;\">\n                                    <label>Descrição do Lote: </label>\n                                </td>\n                                <td>\n                                    <input *ngIf=\"!loteSalas.id\" type=\"text\" class=\"form-control\" [(ngModel)]=\"loteSalas.descricao\">\n                                    <label *ngIf=\"loteSalas.id\">{{loteSalas.descricao}}</label>\n                                </td>\n                                <td>\n                                    <button *ngIf=\"!loteSalas.id\" class=\"btn btn-primary\" style=\"margin-left: 10px; width: 150px;\" data-toggle=\"modal\" data-target=\"#dialogSalas\" (click)=\"visualizarSala(salaPadraoDados)\">Dados Salas</button>\n                                </td>\n                                <td>\n                                    \n                                </td>\n                                <td>\n                                    <button class=\"btn btn-success\" (click)=\"criaLoteSalas()\" [disabled]=\"!editavel\" style=\"width: 150px;\" *ngIf=\"statusTemp == STATUS_INICIAL_PADRAO && !loteSalas.is_salas_criadas\">Criar Solicitações</button>\n                                    <button class=\"btn btn-success\" (click)=\"criaSalas()\" [disabled]=\"!editavel\" style=\"width: 150px;\" *ngIf=\"statusTemp != STATUS_INICIAL_PADRAO && !loteSalas.is_salas_criadas\">Exportar Salas</button>\n                                    <button class=\"btn\" (click)=\"inserirEstudantes()\" [disabled]=\"!editavel\" [ngClass]=\"{'btn-success': !loteSalas.is_estudantes_inseridos, 'btn-warning': loteSalas.is_estudantes_inseridos}\" style=\"width: 150px;\" *ngIf=\"loteSalas.is_salas_criadas\">Inserir Estudantes</button>\n                                </td>\n                                <td>\n                                    <button class=\"btn btn-secondary\" (click)=\"cancelar()\" [disabled]=\"!editavel\">Cancelar</button>\n                                </td>\n                            </tr>\n                            <tr><td colspan=\"6\"><hr style=\"margin: 8px 0px; border-color: #ddd;\"></td></tr>\n                            <tr>\n                                <td class=\"col-md-1\"><label for=\"filtro-pl\" class=\"col-md-1 control-label\" style=\"width: 135px;\">Período Letivo:</label></td>\n                                <td class=\"col-md-2\">\n                                    <select name=\"filtro-pl\" id=\"filtro-pl\" class=\"form-control\" [disabled]=\"!editavel || loteSalas\" [(ngModel)]=\"periodoLetivoSelecionadoId\" >\n                                        <option hidden disabled selected value> -- Selecione -- </option>\n                                        <ng-container *ngFor=\"let pl of periodoLetivos\">\n                                            <option *ngIf=\"pl.ativo\" [value]=\"pl.id\">{{pl.nome}}</option>\n                                        </ng-container>  \n                                    </select>\n                                </td>\n                                <td class=\"col-md-1\"><label for=\"filtro-fc\" class=\"col-md-1 control-label\">Faculdade:</label></td>\n                                <td class=\"col-md-2\">\n                                    <select name=\"filtro-fc\" id=\"filtro-fc\" class=\"form-control\" [disabled]=\"!editavel || loteSalas\" [(ngModel)]=\"faculdadeSelecionadaId\" (change)=\"selecionaFaculdade()\">\n                                        <option hidden disabled selected value> -- Selecione -- </option>      \n                                        <ng-container *ngFor=\"let f of faculdades\">\n                                            <option *ngIf=\"f.ativo\" [value]=\"f.id\">{{f.sigla}}</option>\n                                        </ng-container>  \n                                    </select>\n                                </td>\n                                <td class=\"col-md-1\"><label for=\"filtro-cu\" class=\"col-md-1 control-label\">Curso:</label></td>\n                                <td class=\"col-md-2\">\n                                    <ng-container *ngIf=\"!faculdadeSelecionadaId\">\n                                        <select class=\"form-control\" name=\"curso\"  disabled >   \n                                            <option hidden disabled selected value> -- </option>\n                                        </select>\n                                    </ng-container>\n                                    <ng-container *ngIf=\"faculdadeSelecionadaId\">\n                                        <select class=\"form-control\" name=\"curso\" [(ngModel)]=\"cursoSelecionadoCodigo\" [disabled]=\"!editavel || loteSalas\"  (change)=\"selecionaCurso()\" required>   \n                                            <option hidden disabled selected value> -- Selecione -- </option>    \n                                            <ng-container *ngFor=\"let c of faculdadeTemp.cursos\">\n                                                <option  *ngIf=\"c.ativo\" [value]=\"c.curso_key\">{{c.nome}}</option>\n                                            </ng-container>\n                                        </select>\n                                    </ng-container>\n                                </td>\n                            </tr>\n                            <tr><td colspan=\"6\"><hr style=\"margin: 8px 0px 0px 0px; border-color: #ccc;\"></td></tr>\n                        </table>\n                    </caption>\n                    <colgroup>\n                        <col *ngIf=\"COLUNAS.id\" width=\"40px\"/>\n                        <col *ngIf=\"COLUNAS.periodo_letivo_id\" width=\"40px\"/>\n                        <col *ngIf=\"COLUNAS.periodo_letivo_key\" width=\"70px\"/>\n                        <col *ngIf=\"COLUNAS.username_professor\" width=\"100px\"/>\n                        <col *ngIf=\"COLUNAS.cpf_professor\" width=\"100px\"/>\n                        <col *ngIf=\"COLUNAS.nome_professor\" width=\"100%\"/>\n                        <col *ngIf=\"COLUNAS.sigla_faculdade\" width=\"70px\"/>\n                        <col *ngIf=\"COLUNAS.nome_faculdade\" width=\"100%\"/>\n                        <col *ngIf=\"COLUNAS.curso_key\" width=\"70px\"/>\n                        <col *ngIf=\"COLUNAS.curso\" width=\"100%\"/>\n                        <col *ngIf=\"COLUNAS.nome_sala\" width=\"100%\"/>\n                        <col *ngIf=\"COLUNAS.disciplina_key\" width=\"100px\"/>\n                        <col *ngIf=\"COLUNAS.carga_horaria_total_disciplina\" width=\"70px\"/>\n                        <col *ngIf=\"COLUNAS.avaliacao\" width=\"70px\"/>\n                        <col *ngIf=\"COLUNAS.turma_nome\" width=\"70px\"/>\n                        <col *ngIf=\"COLUNAS.turma_id\" width=\"70px\"/>\n                        <col width=\"110px\"/>\n                        <col width=\"110px\"/>\n                        <col width=\"32px\"/>\n                        <col width=\"36px\"/>\n                        <col width=\"15px\"/>\n                    </colgroup>\n                    <thead class=\"thead-light\">\n                        <tr style=\"cursor: pointer;\" data-toggle=\"modal\" data-target=\"#dialogCheckColunas\">\n                            <th *ngIf=\"COLUNAS.id\" style=\"text-align: center\">ID</th>\n                            <th *ngIf=\"COLUNAS.periodo_letivo_id\" title=\"PERÍODO LETIVO ID\">PLID</th>\n                            <th *ngIf=\"COLUNAS.periodo_letivo_key\" title=\"PERÍODO LETIVO\">P. LET.</th>\n                            <th *ngIf=\"COLUNAS.username_professor\" class=\"celula-trunca-texto\" title=\"USERNAME PROFESSOR\">PROF KEY</th>\n                            <th *ngIf=\"COLUNAS.cpf_professor\" class=\"celula-trunca-texto\" title=\"CPF PROFESSOR\">PROF CPF</th>\n                            <th *ngIf=\"COLUNAS.nome_professor\" class=\"celula-trunca-texto\" title=\"PROFESSOR\">PROFESSOR</th>\n                            <th *ngIf=\"COLUNAS.sigla_faculdade\" title=\"SIGLA FACULDADE\">FAC.</th>\n                            <th *ngIf=\"COLUNAS.nome_faculdade\" class=\"celula-trunca-texto\">FACULDADE</th>\n                            <th *ngIf=\"COLUNAS.curso_key\" title=\"CHAVE DO CURSO SIGECAD\">CR. KEY</th>\n                            <th *ngIf=\"COLUNAS.curso\" class=\"celula-trunca-texto\" title=\"CURSO\">CURSO</th>\n                            <th *ngIf=\"COLUNAS.nome_sala\" class=\"celula-trunca-texto\" title=\"SALA\">SALA</th>\n                            <th *ngIf=\"COLUNAS.disciplina_key\" title=\"CHAVE DA DISCIPLINA SIGECAD\">DISC. KEY</th>\n                            <th *ngIf=\"COLUNAS.carga_horaria_total_disciplina\" title=\"CARGA HORÁRIA\">C. HOR.</th>\n                            <th *ngIf=\"COLUNAS.avaliacao\" title=\"MÉTODO DE AVALIACAO\">AVAL.</th>\n                            <th *ngIf=\"COLUNAS.turma_nome\" title=\"TURMA\">TURMA</th>\n                            <th *ngIf=\"COLUNAS.turma_id\" title=\"ID DA TURMA SIGECAD\">TUR.ID</th>\n                            <th style=\"text-align: center\">MACRO</th>\n                            <th style=\"text-align: center\">STATUS</th>\n                            <th colspan=\"2\" style=\"text-align: center\">AÇÕES</th>\n                            <th></th>\n                        </tr>\n                    </thead>\n                </table>\n            </div>\n            <div redimensionar=\"306\" style=\"overflow-y: scroll;\">\n                <table class=\"table\">\n                    <colgroup>\n                        <col *ngIf=\"COLUNAS.id\" width=\"40px\"/>\n                        <col *ngIf=\"COLUNAS.periodo_letivo_id\" width=\"40px\"/>\n                        <col *ngIf=\"COLUNAS.periodo_letivo_key\" width=\"70px\"/>\n                        <col *ngIf=\"COLUNAS.username_professor\" width=\"100px\"/>\n                        <col *ngIf=\"COLUNAS.cpf_professor\" width=\"100px\"/>\n                        <col *ngIf=\"COLUNAS.nome_professor\" width=\"100%\"/>\n                        <col *ngIf=\"COLUNAS.sigla_faculdade\" width=\"70px\"/>\n                        <col *ngIf=\"COLUNAS.nome_faculdade\" width=\"100%\"/>\n                        <col *ngIf=\"COLUNAS.curso_key\" width=\"70px\"/>\n                        <col *ngIf=\"COLUNAS.curso\" width=\"100%\"/>\n                        <col *ngIf=\"COLUNAS.nome_sala\" width=\"100%\"/>\n                        <col *ngIf=\"COLUNAS.disciplina_key\" width=\"100px\"/>\n                        <col *ngIf=\"COLUNAS.carga_horaria_total_disciplina\" width=\"70px\"/>\n                        <col *ngIf=\"COLUNAS.avaliacao\" width=\"70px\"/>\n                        <col *ngIf=\"COLUNAS.turma_nome\" width=\"70px\"/>\n                        <col *ngIf=\"COLUNAS.turma_id\" width=\"70px\"/>\n                        <col width=\"110px\"/>\n                        <col width=\"110px\"/>\n                        <col [width]=\"statusTemp == STATUS_INICIAL_PADRAO ? '32px' : '48px'\"/>\n                        <col *ngIf=\"statusTemp == STATUS_INICIAL_PADRAO\" width=\"36px\"/>\n                    </colgroup>\n                    <tbody>\n                        <tr *ngFor=\"let sala of salas\">\n                            <td *ngIf=\"COLUNAS.id\">{{sala.id | zeros:4}}</td>\n                            <td *ngIf=\"COLUNAS.periodo_letivo_id\">{{sala.periodo_letivo_key}}</td>\n                            <td *ngIf=\"COLUNAS.periodo_letivo_key\">{{getPeriodoLetivo(sala.periodo_letivo_id)?.nome}}</td>\n                            <td *ngIf=\"COLUNAS.username_professor\" class=\"celula-trunca-texto\" title=\"{{sala.username_professor}}\">{{sala.username_professor}}</td>\n                            <td *ngIf=\"COLUNAS.cpf_professor\" class=\"celula-trunca-texto\" title=\"{{sala.cpf_professor}}\">{{sala.cpf_professor}}</td>\n                            <td *ngIf=\"COLUNAS.nome_professor\" class=\"celula-trunca-texto\" title=\"{{sala.nome_professor}}\">{{sala.nome_professor}}</td>\n                            <td *ngIf=\"COLUNAS.sigla_faculdade\" title=\"{{sala.curso?.faculdade?.sigla}}\">{{sala.curso?.faculdade?.sigla}}</td>\n                            <td *ngIf=\"COLUNAS.nome_faculdade\" class=\"celula-trunca-texto\" title=\"{{sala.curso?.faculdade?.nome}}\">{{sala.curso?.faculdade?.nome}}</td>\n                            <td *ngIf=\"COLUNAS.curso_key\" title=\"{{sala.curso?.curso_key}}\">{{sala.curso?.curso_key}}</td>\n                            <td *ngIf=\"COLUNAS.curso\" class=\"celula-trunca-texto\" title=\"{{sala.curso?.nome}}\">{{sala.curso?.nome}}</td>\n                            <td *ngIf=\"COLUNAS.nome_sala\" class=\"celula-trunca-texto\" title=\"{{sala.nome_sala}}\">{{sala.nome_sala}}</td>\n                            <td *ngIf=\"COLUNAS.disciplina_key\" title=\"{{sala.disciplina_key}}\">{{sala.disciplina_key}}</td>\n                            <td *ngIf=\"COLUNAS.carga_horaria_total_disciplina\" title=\"{{sala.carga_horaria_total_disciplina}}\">{{sala.carga_horaria_total_disciplina}}</td>\n                            <td *ngIf=\"COLUNAS.avaliacao\" title=\"{{sala.avaliacao}}\">{{sala.avaliacao}}</td>\n                            <td *ngIf=\"COLUNAS.turma_nome\" title=\"{{sala.turma_nome}}\">{{sala.turma_nome}}</td>\n                            <td *ngIf=\"COLUNAS.turma_id\" title=\"{{sala.turma_id}}\">{{sala.turma_id}}</td>\n                            <td>\n                                <ng-container *ngIf=\"statusTemp == STATUS_INICIAL_PADRAO\">\n                                    <select class=\"form-control form-control-micro\" name=\"macroId\"  disabled >   \n                                        <option hidden disabled selected value> -- </option>\n                                    </select>\n                                </ng-container>\n                                <ng-container *ngIf=\"statusTemp != STATUS_INICIAL_PADRAO\">\n                                    <select class=\"form-control form-control-micro\" name=\"macroId\" [disabled]=\"!editavel || loteSalas.is_salas_criadas\" [(ngModel)]=\"sala.macro_id\" (change)=\"alteraMacro(sala,$event.target.value)\">   \n                                        <option hidden disabled selected value> -- Selecione -- </option>    \n                                        <ng-container *ngFor=\"let m of macros\">\n                                            <option  [value]=\"m.id\">{{m.nome}}</option>\n                                        </ng-container>\n                                    </select>\n                                </ng-container>\n                            </td>\n                            <td class=\"celula-status {{sala.status.chave}}\">{{sala.status.descricao}}</td>\n                            <td [attr.colspan]=\"statusTemp == STATUS_INICIAL_PADRAO ? 1 : 2\" style=\"text-align: center;\">\n                                <button style=\"text-align: center; margin-left: -2px;\" title=\"Vizualizar\" type=\"button\" class=\"btn btn-info botao-reduzido\"  data-toggle=\"modal\" data-target=\"#dialogSalas\" (click)=\"visualizarSala(sala)\">\n                                    <span class=\"glyphicon glyphicon-search\"></span>\n                                </button>\n                            </td>\n                            <td *ngIf=\"statusTemp == STATUS_INICIAL_PADRAO\">\n                                <button style=\"text-align: center; margin-left: -2px;\" title=\"Remove Sala\" type=\"button\" class=\"btn btn-danger botao-reduzido\"  (click)=\"excluiSala(sala)\">\n                                    <span class=\"glyphicon glyphicon-remove\"></span>\n                                </button>\n                            </td>\n                        </tr>\n                    </tbody>\n                    <tfoot class=\"status-tabela\">\n                        <tr *ngIf=\"status == LOADING\"><td colspan=\"13\"><i>Carregando Salas...</i></td></tr>\n                        <tr *ngIf=\"salas != null && salas.length == 0 && status == COMPLETE\"><td colspan=\"13\"><i>Não Há Salas para serem listadas</i></td></tr>\n                        <tr *ngIf=\"status == ERROR\"><td class=\"erro\" colspan=\"13\"><i>Falha na obtenção de Salas!</i></td></tr>\n                    </tfoot>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"dialogListaLotes\" tabindex=\"-1\" role=\"dialog\" data-backdrop=\"static\" aria-labelledby=\"dialogListaLotesTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Lista de Lotes de Salas</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\" style=\"width: 700px;\">\n                <div class=\"alert alert-info\" [ngClass]=\"{'alert-info': !erroAviso, 'alert-danger': erroAviso}\" *ngIf=\"aviso\">\n                    <strong *ngIf=\"!erroAviso\">Informação!</strong><strong *ngIf=\"erroAviso\">Falha!</strong> {{aviso}}\n                </div>\n                <table class=\"table\">\n                    <colgroup>\n                        <col width=\"40px\"/>\n                        <col width=\"170px\"/>\n                        <col width=\"100px\"/>\n                        <col width=\"100px\"/>\n                        <col width=\"207px\"/>\n                        <col width=\"36px\"/>\n                        <col width=\"15px\"/>\n                    </colgroup>\n                    <thead class=\"thead-light\">\n                        <tr>\n                            <th style=\"text-align: center\">#</th>\n                            <th title=\"DESCRIÇÃO\">DESCRIÇÃO</th>\n                            <th title=\"PERÍODO LETIVO\">P. LETIVO</th>\n                            <th title=\"FACULDADE\">FACULDADE</th>\n                            <th title=\"CURSO\">CURSO</th>\n                            <th></th>\n                            <th></th>\n                        </tr>\n                    </thead>\n                </table>\n                <div redimensionar=\"314\" style=\"overflow-y: scroll;\">\n                    <table class=\"table\">\n                        <colgroup>\n                            <col width=\"40px\"/>\n                            <col width=\"100px\"/>\n                            <col width=\"100px\"/>\n                            <col width=\"100px\"/>\n                            <col width=\"277px\"/>\n                            <col width=\"36px\"/>\n                        </colgroup>\n                        <tbody>\n                            <tr *ngFor=\"let ls of lotesSalasList\">\n                                <td>{{ls.id | zeros:3}}</td>\n                                <td class=\"celula-trunca-texto\" title=\"{{ls.descricao}}\">{{ls.descricao}}</td>\n                                <td>{{ls.periodo_letivo?.nome}}</td>\n                                <td>{{ls.faculdade?.sigla}}</td>\n                                <td class=\"celula-trunca-texto\" title=\"{{ls.curso?.nome}}\">{{ls.curso?.nome}}</td>\n                                <td style=\"text-align: center;\">\n                                    <button style=\"text-align: center; margin-left: -2px;\" title=\"Vizualizar\" type=\"button\" class=\"btn btn-info botao-reduzido\" (click)=\"selecionaLoteSalas(ls)\">\n                                        <span class=\"glyphicon glyphicon-check\"></span>\n                                    </button>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\">Fechar</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"dialogSalas\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialogSalasTitle\"  data-backdrop=\"static\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Sala #{{sala.id | zeros:4}}</h5>\n                <button type=\"button\" class=\"close\" (click)=\"fechaDialogVizualizarSalas()\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\" redimensionar=\"285\" style=\"overflow-y: scroll;\">\n                <fieldset>\n                    <form id=\"salaForm\" class=\"form-group\" style=\"max-width: 500px;\">\n                        <div class=\"alert alert-info\" [ngClass]=\"{'alert-info': !erroAviso, 'alert-danger': erroAviso}\" *ngIf=\"aviso\">\n                            <strong *ngIf=\"!erroAviso  && sala.status.chave == STATUS_INICIAL_POS_LOTE_CRIADO\">Informação!</strong><strong *ngIf=\"erroAviso && sala.status.chave == STATUS_INICIAL_POS_LOTE_CRIADO\">Falha!</strong> {{aviso}}\n                        </div>\n                        <label class=\"style1\">Nome completo: *</label><br>\n                        <input class=\"form-control\" type=\"text\" name=\"nome_professor\" placeholder=\"Nome do Professor\" [(ngModel)]=\"sala.nome_professor\" size=\"60\" disabled><p></p>\n                        \n                        <label class=\"style1\">E-mail: *</label><br>\n                        <input class=\"form-control\" type=\"email\" name=\"email\" placeholder=\"-- Email obtido no Momento das Criações das Solicitações --\" [(ngModel)]=\"sala.email\" size=\"60\" disabled><p></p>\n                         \n                        <label class=\"style1\">Período Letivo: *</label><br>\n                        <select class=\"form-control\" name=\"periodo_letivo\"  disabled [(ngModel)]=\"periodoLetivoSelecionadoId\" (change)=\"selecionaPeriodoLetivo()\">   \n                            <option hidden disabled selected value> -- </option>\n                            <ng-container *ngFor=\"let pl of periodoLetivos\">\n                                <option *ngIf=\"pl.ativo || sala.periodo_letivo_id == pl.id\" [value]=\"pl.id\">{{pl.nome}}</option>\n                            </ng-container>  \n                        </select><p></p>\n\n                        <label class=\"style1\">Faculdade: *</label><br>\n                        <select class=\"form-control\" name=\"faculdade\"  disabled [(ngModel)]=\"faculdadeSelecionadaId\" (change)=\"selecionaFaculdade()\" required>   \n                            <option hidden disabled selected value> -- </option>      \n                            <ng-container *ngFor=\"let f of faculdades\">\n                                <option *ngIf=\"f.ativo || faculdadeSelecionadaId == f.id\" [value]=\"f.id\">{{f.sigla}}</option>\n                            </ng-container>        \n                        </select><p></p>\n        \n                        <label class=\"style1\">Curso: *</label><br>\n                        <ng-container *ngIf=\"!faculdadeSelecionadaId\">\n                            <select class=\"form-control\" name=\"curso\"  disabled >   \n                                <option hidden disabled selected value> -- </option>\n                            </select>\n                        </ng-container>\n                        <ng-container *ngIf=\"faculdadeSelecionadaId\">\n                            <select class=\"form-control\" name=\"curso\"  disabled [(ngModel)]=\"sala.curso\"  (change)=\"selecionaCurso()\" >   \n                                <option hidden disabled selected value> -- </option>    \n                                <ng-container *ngFor=\"let c of faculdadeTemp.cursos\">\n                                    <option  *ngIf=\"c.ativo || sala.curso == c.id\" [value]=\"c.id\">{{c.nome}}</option>\n                                </ng-container>\n                            </select>\n                        </ng-container><p></p>\n\n                        <label class=\"style1\">Nome da Disciplina: *</label><br>\n                        <input class=\"form-control\" type=\"text\" name=\"nome_sala\" placeholder=\" -- Nome da Disciplina -- \" [(ngModel)]=\"sala.nome_sala\" disabled>\n                        <p></p>\n\n                        <label class=\"style1\">Modalidade da Disciplina: *</label><br>\n                        <select class=\"form-control\" name=\"modalidade\" [(ngModel)]=\"sala.modalidade\" [disabled]=\"!editavel\">                         \n                            <option *ngFor=\"let m of modalidades\" value=\"{{m.sigla}}\">{{m.descricao}}</option>\n                        </select><p></p>\n\n                        <label class=\"style1\">Objetivo da Disciplina: *</label><br>\n                        <select class=\"form-control\" name=\"objetivo_sala\" [(ngModel)]=\"sala.objetivo_sala\" [disabled]=\"!editavel\">                         \n                            <option *ngFor=\"let o of objetivosSalas\" value=\"{{o.sigla}}\">{{o.descricao}}</option>\n                        </select><p></p>\n\n                        <label class=\"style1\">Chave de Inscrição para Estudantes acessarem a sala:</label><br>\n                        <input class=\"form-control\" type=\"text\" name=\"senha_aluno\" placeholder=\"\" [(ngModel)]=\"sala.senha_aluno\" size=\"60\" [readonly]=\"!editavel\"><p></p>\n\n                        <label class=\"style1\">Observações:</label><br>\n                        <textarea class=\"form-control\" name=\"observacao\" placeholder=\"Ex:. Utilizem o conteúdo da sala do ano passado: Link da sala\" [(ngModel)]=\"sala.observacao\" [readonly]=\"!editavel\"></textarea><p></p>\n                        \n                        <button *ngIf=\"!mostraMais && !isSalaPadraoVisualizada\" style=\"width: 100%;\" type=\"button\" (click)=\"mostraMais = true\">˅ ˅ Mais ˅ ˅ </button>\n                        <ng-container *ngIf=\"mostraMais\">\n                            <hr style=\"border-color: #ccc;\">\n                            <label>Turma: </label><br>\n                            <label class=\"form-control form-control-read\">{{sala.turma_nome}} {{sala.turma_id ? '(id: '+sala.turma_id+')' : ''}}</label><p></p>\n                            <label>Carga Horária Disciplina: </label><br>\n                            <label class=\"form-control form-control-read\">{{sala.carga_horaria_total_disciplina}}</label><p></p>\n                            <label>Tipo de Avaliação: </label><br>\n                            <label class=\"form-control form-control-read\">{{sala.avaliacao}}</label><p></p>\n                            <label>Chave da Disciplina: </label><br>\n                            <label class=\"form-control form-control-read\">{{sala.disciplina_key}}</label><p></p>\n                            <button type=\"button\"(click)=\"mostraMais = false\" style=\"width: 100%;\">˄ ˄ Menos ˄ ˄ </button>\n                        </ng-container>\n                    </form>\n                </fieldset>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary botao-barra\" (click)=\"fechaDialogVizualizarSalas()\">Fechar</button>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"modal fade\" id=\"dialogCheckColunas\" tabindex=\"-1\" role=\"dialog\" data-backdrop=\"static\" aria-labelledby=\"dialogCheckColunasTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Mostrar/Ocultar Colunas</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\" style=\"width: 350px;\">\n                <table>\n                    <tr><td><label class=\"style1\">ID</label></td>\n                    <td><input type=\"checkbox\" [(ngModel)]=\"COLUNAS.id\"></td></tr>\n                    <tr><td><label class=\"style1\">Período Letivo ID</label></td>\n                    <td><input type=\"checkbox\" [(ngModel)]=\"COLUNAS.periodo_letivo_id\"></td></tr>\n                    <tr><td><label class=\"style1\">Período Letivo</label></td>\n                    <td><input type=\"checkbox\" [(ngModel)]=\"COLUNAS.periodo_letivo_key\"></td></tr>\n                    <tr><td><label class=\"style1\">Username Professor</label></td>\n                    <td><input type=\"checkbox\" [(ngModel)]=\"COLUNAS.username_professor\"></td></tr>\n                    <tr><td><label class=\"style1\">CPF Professor</label></td>\n                    <td><input type=\"checkbox\" [(ngModel)]=\"COLUNAS.cpf_professor\"></td></tr>\n                    <tr><td><label class=\"style1\">Nome Professor</label></td>\n                    <td><input type=\"checkbox\" [(ngModel)]=\"COLUNAS.nome_professor\"></td></tr>\n                    <tr><td><label class=\"style1\">Sigla Faculdade</label></td>\n                    <td><input type=\"checkbox\" [(ngModel)]=\"COLUNAS.sigla_faculdade\"></td></tr>\n                    <tr><td><label class=\"style1\">Nome Faculdade</label></td>\n                    <td><input type=\"checkbox\" [(ngModel)]=\"COLUNAS.nome_faculdade\"></td></tr>\n                    <tr><td><label class=\"style1\">Curso Key</label></td>\n                    <td><input type=\"checkbox\" [(ngModel)]=\"COLUNAS.curso_key\"></td></tr>\n                    <tr><td><label class=\"style1\">Nome Curso</label></td>\n                    <td><input type=\"checkbox\" [(ngModel)]=\"COLUNAS.curso\"></td></tr>\n                    <tr><td><label class=\"style1\">Nome Sala</label></td>\n                    <td><input type=\"checkbox\" [(ngModel)]=\"COLUNAS.nome_sala\"></td></tr>\n                    <tr><td><label class=\"style1\">Disciplina Key</label></td>\n                    <td><input type=\"checkbox\" [(ngModel)]=\"COLUNAS.disciplina_key\"></td></tr>\n                    <tr><td><label class=\"style1\">Carga Horária Disciplina</label></td>\n                    <td><input type=\"checkbox\" [(ngModel)]=\"COLUNAS.carga_horaria_total_disciplina\"></td></tr>\n                    <tr><td><label class=\"style1\">Método de Avaliação da Disciplina</label></td>\n                    <td><input type=\"checkbox\" [(ngModel)]=\"COLUNAS.avaliacao\"></td></tr>\n                    <tr><td><label class=\"style1\">Turma</label></td>\n                    <td><input type=\"checkbox\" [(ngModel)]=\"COLUNAS.turma_nome\"></td></tr>\n                    <tr><td><label class=\"style1\">Turma ID</label></td>\n                    <td><input type=\"checkbox\" [(ngModel)]=\"COLUNAS.turma_id\"></td></tr>\n                </table>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\">Fechar</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"dialogRestoreLote\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialogRestoreLoteTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\">Exportação de Lote Automática</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\" style=\"width: 450px;\">\n                <div class=\"alert alert-info\" [ngClass]=\"{'alert-info': !erroAviso, 'alert-danger': erroAviso}\" *ngIf=\"aviso\">\n                    <strong *ngIf=\"!erroAviso  && sala.status.chave == STATUS_INICIAL_POS_LOTE_CRIADO\">Informação!</strong><strong *ngIf=\"erroAviso && sala.status.chave == STATUS_INICIAL_POS_LOTE_CRIADO\">Falha!</strong> {{aviso}}\n                </div>\n                <div redimensionar=\"300\" style=\"max-height: 250px;\" id=\"saidaRestore\"></div>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\">Fechar</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/lote-salas/lote-salas.component.less":
/*!******************************************************!*\
  !*** ./src/app/lote-salas/lote-salas.component.less ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvdGUtc2FsYXMvbG90ZS1zYWxhcy5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/lote-salas/lote-salas.component.ts":
/*!****************************************************!*\
  !*** ./src/app/lote-salas/lote-salas.component.ts ***!
  \****************************************************/
/*! exports provided: LoteSalasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoteSalasComponent", function() { return LoteSalasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_abstract_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/abstract-component */ "./src/app/abstract-component.ts");
/* harmony import */ var src_app_cursos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/cursos.service */ "./src/app/cursos.service.ts");
/* harmony import */ var src_app_dados_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dados.service */ "./src/app/dados.service.ts");
/* harmony import */ var src_app_faculdade_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/faculdade.service */ "./src/app/faculdade.service.ts");
/* harmony import */ var src_app_faculdades_faculdade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/faculdades/faculdade */ "./src/app/faculdades/faculdade.ts");
/* harmony import */ var src_app_macro_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/macro.service */ "./src/app/macro.service.ts");
/* harmony import */ var src_app_periodo_letivos_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/periodo-letivos.service */ "./src/app/periodo-letivos.service.ts");
/* harmony import */ var src_app_pl_disciplinas_academicos_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/pl-disciplinas-academicos.service */ "./src/app/pl-disciplinas-academicos.service.ts");
/* harmony import */ var src_app_pl_disciplinas_academicos_estudante__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/pl-disciplinas-academicos/estudante */ "./src/app/pl-disciplinas-academicos/estudante.ts");
/* harmony import */ var src_app_salas_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/salas.service */ "./src/app/salas.service.ts");
/* harmony import */ var src_app_usuario_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/usuario.service */ "./src/app/usuario.service.ts");
/* harmony import */ var _lote_salas_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../lote-salas.service */ "./src/app/lote-salas.service.ts");
/* harmony import */ var _salas_sala__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../salas/sala */ "./src/app/salas/sala.ts");
/* harmony import */ var _status__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../status */ "./src/app/status.ts");
/* harmony import */ var _lote_salas__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lote-salas */ "./src/app/lote-salas/lote-salas.ts");

















var LoteSalasComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LoteSalasComponent, _super);
    function LoteSalasComponent(salasService, dadosService, faculdadeService, plDisciplinasAcademicosService, macroService, periodoLetivoService, cursosService, usuarioService, loteSalasService) {
        var _this = _super.call(this) || this;
        _this.salasService = salasService;
        _this.dadosService = dadosService;
        _this.faculdadeService = faculdadeService;
        _this.plDisciplinasAcademicosService = plDisciplinasAcademicosService;
        _this.macroService = macroService;
        _this.periodoLetivoService = periodoLetivoService;
        _this.cursosService = cursosService;
        _this.usuarioService = usuarioService;
        _this.loteSalasService = loteSalasService;
        _this.STATUS_INICIAL_PADRAO = _status__WEBPACK_IMPORTED_MODULE_15__["Status"].CHAVES.ANALISE;
        _this.STATUS_INICIAL_POS_LOTE_CRIADO = _status__WEBPACK_IMPORTED_MODULE_15__["Status"].CHAVES.PROCESSO;
        _this.STATUS_CONCLUIDO_PADRAO = _status__WEBPACK_IMPORTED_MODULE_15__["Status"].CHAVES.CONCLUIDO;
        _this.STATUS_REJEITADO_PADRAO = _status__WEBPACK_IMPORTED_MODULE_15__["Status"].CHAVES.REJEITADO;
        _this.loteSalas = null;
        _this.sala = _salas_sala__WEBPACK_IMPORTED_MODULE_14__["Sala"].geraNovaSala();
        _this.salaPadraoDados = _salas_sala__WEBPACK_IMPORTED_MODULE_14__["Sala"].geraNovaSala();
        _this.isSalaPadraoVisualizada = false;
        _this.statusTemp = _this.STATUS_INICIAL_PADRAO;
        _this.estudantes = [];
        _this.estudanteTemp = new src_app_pl_disciplinas_academicos_estudante__WEBPACK_IMPORTED_MODULE_10__["Estudante"]("", "", "", false);
        _this.periodoLetivoSelecionadoId = "";
        _this.faculdadeTemp = src_app_faculdades_faculdade__WEBPACK_IMPORTED_MODULE_6__["Faculdade"].generateFaculdade();
        _this.faculdadeSelecionadaId = "";
        _this.cursoSelecionadoCodigo = "";
        _this.disciplinaSelecionadaId = "";
        _this.usuarios = [];
        _this.filteredUsuarios = [];
        _this.nome_professor_temp = "";
        _this.macrosBacks = {};
        _this.mostraMais = false;
        _this.COLUNAS = {
            id: false,
            periodo_letivo_id: false,
            periodo_letivo_key: false,
            nome_professor: true,
            username_professor: false,
            cpf_professor: false,
            sigla_faculdade: false,
            nome_faculdade: false,
            curso_key: false,
            curso: true,
            nome_sala: true,
            disciplina_key: false,
            carga_horaria_total_disciplina: false,
            avaliacao: false,
            turma_nome: false,
            turma_id: false,
            modalidade: false,
            objetivo_sala: false,
            sala_moodle_id: false,
        };
        return _this;
    }
    Object.defineProperty(LoteSalasComponent.prototype, "salas", {
        get: function () {
            return this.salasService.salas;
        },
        set: function (salas) {
            this.salasService.salas = salas;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoteSalasComponent.prototype, "faculdades", {
        get: function () {
            return this.faculdadeService.faculdades;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoteSalasComponent.prototype, "macros", {
        get: function () {
            return this.macroService.macros;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoteSalasComponent.prototype, "periodoLetivos", {
        get: function () {
            return this.periodoLetivoService.periodoLetivos;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoteSalasComponent.prototype, "modalidades", {
        get: function () {
            return this.salasService.modalidades;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoteSalasComponent.prototype, "objetivosSalas", {
        get: function () {
            return this.salasService.objetivosSalas;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoteSalasComponent.prototype, "lotesSalasList", {
        get: function () {
            return this.loteSalasService.lotesSalasList;
        },
        enumerable: true,
        configurable: true
    });
    LoteSalasComponent.prototype.selecionaFaculdade = function () {
        if (this.faculdadeSelecionadaId) {
            this.faculdadeTemp = this.faculdadeService.faculdadesIndex.get(this.faculdadeSelecionadaId);
            this.cursoSelecionadoCodigo = "";
            this.disciplinaSelecionadaId = "";
            //this.sala.nome_sala = "";
        }
    };
    LoteSalasComponent.prototype.selecionaCurso = function (resetSala) {
        if (resetSala === void 0) { resetSala = true; }
        /*if (this.sala.curso) {
            this.plDisciplinasAcademicosTemp = PlDisciplinasAcademicos.generatePlDisciplinasAcademicos();
            //this.sala.nome_sala = "";
            this.disciplinaSelecionadaId = "";
            this.editavel = false;
            this.plDisciplinasAcademicosService.getPlDisciplinasAcademicos(this.sala.periodo_letivo_id, this.sala.curso)
                .then(r => {
                    this.editavel = true;
                    this.filteredDisciplina = this.filterDisciplina("", this.plDisciplinasAcademicosList);
                    if (resetSala)
                        this.sala.nome_sala = "";
                    else {
                        var plda = this.plDisciplinasAcademicosService.plDisciplinasAcademicosNameIndex.get(this.sala.nome_sala)
                        if (plda)
                            this.disciplinaSelecionadaId = plda.disciplina;
                    }
                }).catch(response => {
                    this.erroAviso = true;
                    this.aviso = this.erroHttp(response);
                    alert(this.aviso)
                    this.editavel = true;
                });
        }*/
    };
    LoteSalasComponent.prototype.novoLoteSalas = function () {
        var _this = this;
        this.editavel = false;
        this.plDisciplinasAcademicosService.getDisciplinasCursoSigecad(this.periodoLetivoSelecionadoId, this.faculdadeTemp.sigla, this.cursoSelecionadoCodigo)
            .then(function (salasAny) {
            _this.salas = [];
            for (var i in salasAny) {
                var sala = _this.salasService.convertChargedSala(salasAny[i], null, _this.dadosService.statusesIndex.get(_this.STATUS_INICIAL_PADRAO));
                sala.nome_professor = salasAny[i].nome_professor;
                sala.username_professor = salasAny[i].username_professor;
                sala.cpf_professor = salasAny[i].cpf_professor;
                _this.salas.push(sala);
            }
            _this.status = _this.COMPLETE;
            _this.aviso = "";
            _this.erroAviso = false;
            _this.loteSalas = _lote_salas__WEBPACK_IMPORTED_MODULE_16__["LoteSalas"].generate();
            _this.loteSalas.salas = _this.salas;
            _this.editavel = true;
            _this.statusTemp = _this.STATUS_INICIAL_PADRAO;
            _this.salaPadraoDados.status = _this.dadosService.statusesIndex.get(_this.STATUS_INICIAL_PADRAO);
        })
            .catch(function (response) {
            _this.status = _this.ERROR;
            _this.aviso = _this.erroHttp(response);
            _this.erroAviso = true;
            console.log(_this.aviso);
            alert(_this.aviso);
            _this.salas = [];
            _this.editavel = true;
        });
    };
    LoteSalasComponent.prototype.getLoteSalasList = function () {
        var _this = this;
        this.editavel = false;
        this.aviso = "";
        this.erroAviso = false;
        this.loteSalasService.listar(this.periodoLetivoService.periodoLetivosIdIndex, this.faculdadeService.faculdadesIndex, this.cursosService.cursosIndex)
            .then(function (response) {
            jQuery('#dialogListaLotes').modal('show');
            _this.editavel = true;
        })
            .catch(function (response) {
            _this.status = _this.ERROR;
            alert(_this.erroHttp(response));
            console.log(response);
        });
    };
    LoteSalasComponent.prototype.selecionaLoteSalas = function (loteSalas) {
        var _this = this;
        this.loteSalas = loteSalas;
        this.periodoLetivoSelecionadoId = loteSalas.periodo_letivo.id.toString();
        this.faculdadeSelecionadaId = loteSalas.faculdade.id.toString();
        this.selecionaFaculdade();
        this.cursoSelecionadoCodigo = loteSalas.curso ? loteSalas.curso.curso_key : "";
        this.loteSalasService.getSalasDoLote(loteSalas, this.periodoLetivoService.periodoLetivosIdIndex, this.faculdadeService.faculdadesIndex, this.cursosService.cursosIndex)
            .then(function (salasAny) {
            _this.salas = [];
            for (var i in salasAny) {
                var sala = _salas_sala__WEBPACK_IMPORTED_MODULE_14__["Sala"].geraNovaSala();
                sala = _this.salasService.convertCreatedSala(salasAny[i], sala /*,this.dadosService.statusesIndex.get(this.STATUS_INICIAL_PADRAO)*/);
                sala.nome_professor = salasAny[i].nome_professor;
                sala.username_professor = salasAny[i].username_professor;
                sala.cpf_professor = salasAny[i].cpf_professor;
                _this.salas.push(sala);
            }
            _this.status = _this.COMPLETE;
            _this.aviso = "";
            _this.erroAviso = false;
            _this.loteSalas.salas = _this.salas;
            _this.editavel = true;
            if (_this.salas[0]) {
                _this.statusTemp = _this.salas[0].status.chave;
            }
            else
                _this.statusTemp = _this.STATUS_INICIAL_POS_LOTE_CRIADO;
            _this.geraMacrosBacks();
            jQuery('#dialogListaLotes').modal('hide');
        })
            .catch(function (response) {
            _this.erroAviso = true;
            _this.aviso = _this.erroHttp(response);
            alert(_this.aviso);
            console.log(response);
            _this.editavel = true;
        });
    };
    LoteSalasComponent.prototype.getPeriodoLetivo = function (plid) {
        return this.periodoLetivoService.periodoLetivos[this.periodoLetivoService.periodoLetivosIndex[plid]];
    };
    LoteSalasComponent.prototype.getLoteDesc = function () {
        return this.periodoLetivoSelecionadoId + " - " + this.faculdadeSelecionadaId + " - " + this.cursoSelecionadoCodigo;
    };
    LoteSalasComponent.prototype.aplicarSalaPadrao = function () {
        for (var i = 0; i < this.salas.length; i++) {
            this.salas[i].modalidade = this.salaPadraoDados.modalidade;
            this.salas[i].objetivo_sala = this.salaPadraoDados.objetivo_sala;
            this.salas[i].observacao = this.salaPadraoDados.observacao;
            this.salas[i].senha_aluno = this.salaPadraoDados.senha_aluno;
        }
    };
    LoteSalasComponent.prototype.preparaCriaSolicitacoes = function () {
        var ret = "";
        if (!this.loteSalas.descricao)
            ret += "\nDescrição do Lote";
        if (!this.salaPadraoDados.modalidade)
            ret += "\nModalidade das Salas";
        if (!this.salaPadraoDados.objetivo_sala)
            ret += "\nObjetivos das Salas";
        return ret;
    };
    LoteSalasComponent.prototype.visualizarSala = function (sala) {
        this.isSalaPadraoVisualizada = this.salaPadraoDados == sala;
        this.sala = this.isSalaPadraoVisualizada ? sala : sala.clone();
        //this.estudantes = Estudante.converteJSONParaEstudantes(this.sala.estudantes);
        //this.faculdadeTemp = this.sala.curso ? this.sala.curso.faculdade : Faculdade.generateFaculdade();
        //this.faculdadeSelecionadaId = this.faculdadeTemp.id ? this.sala.curso.faculdade.id : "";
        //this.disciplinaSelecionadaId = "";
        this.nome_professor_temp = this.sala.nome_professor;
        this.sala.curso = this.sala.curso ? this.sala.curso.id : "";
        if (sala.status.chave == this.STATUS_REJEITADO_PADRAO || sala.status.chave == this.STATUS_CONCLUIDO_PADRAO) {
            this.aviso = this.sala.mensagem;
            this.erroAviso = sala.status.chave == this.STATUS_REJEITADO_PADRAO;
        }
        else {
            this.aviso = "";
            this.erroAviso = false;
        }
        this.editavel = this.isSalaPadraoVisualizada;
        this.mostraMais = false;
    };
    LoteSalasComponent.prototype.fechaDialogVizualizarSalas = function () {
        jQuery('#dialogSalas').modal('hide');
        this.editavel = true;
    };
    LoteSalasComponent.prototype.criaLoteSalas = function () {
        var _this = this;
        var checkValida = this.preparaCriaSolicitacoes();
        if (checkValida == "") {
            if (this.loteSalas) {
                this.loteSalas.periodo_letivo = parseInt(this.periodoLetivoSelecionadoId);
                this.loteSalas.faculdade = parseInt(this.faculdadeSelecionadaId);
                this.loteSalas.curso = this.cursoSelecionadoCodigo ? this.cursosService.cursosKeyIndex.get(this.cursoSelecionadoCodigo).id : 0;
                this.aplicarSalaPadrao();
                this.editavel = false;
                //console.log (this.loteSalas) ;
                this.loteSalasService.criaLoteSalas(this.loteSalas)
                    .then(function (response) {
                    //console.log (response)
                    _this.loteSalas.id = response.id;
                    _this.statusTemp = _this.STATUS_INICIAL_POS_LOTE_CRIADO;
                    var salasAny = response.salas;
                    _this.salas = [];
                    for (var i in salasAny) {
                        var sala = _salas_sala__WEBPACK_IMPORTED_MODULE_14__["Sala"].geraNovaSala();
                        sala = _this.salasService.convertCreatedSala(salasAny[i], sala, _this.dadosService.statusesIndex.get(_this.STATUS_INICIAL_POS_LOTE_CRIADO));
                        sala.lote_salas_id = response.id;
                        sala.username_professor = salasAny[i].username_professor;
                        sala.cpf_professor = salasAny[i].cpf_professor;
                        _this.salas.push(sala);
                    }
                    _this.geraMacrosBacks();
                    alert("Lote de Salas Criado!");
                    _this.editavel = true;
                })
                    .catch(function (response) {
                    _this.editavel = true;
                    _this.status = _this.ERROR;
                    _this.aviso = _this.erroHttp(response);
                    alert(_this.aviso);
                    console.log(_this.aviso);
                });
            }
        }
        else
            alert("Falta informar alguns dados:\n" + checkValida);
    };
    LoteSalasComponent.prototype.alteraMacro = function (sala, macroId) {
        var _this = this;
        var macro_id_anterior = this.macrosBacks[sala.id];
        this.editavel = false;
        this.loteSalasService.updateMacro(sala, macroId)
            .then(function (response) {
            _this.macrosBacks[sala.id] = response;
            _this.sala.macro_id = response;
            _this.editavel = true;
        })
            .catch(function (response) {
            _this.editavel = true;
            console.log(response);
            alert(_this.erroHttp(response));
            sala.macro_id = macro_id_anterior;
        });
        //this.macrosBacks[sala.id] = macroId;
    };
    LoteSalasComponent.prototype.criaSalas = function () {
        var _this = this;
        this.editavel = false;
        if (this.loteSalas && confirm("Deseja executar as exportações automáticas das salas deste lote?")) {
            this.loteSalasService.executaExportacoes(this.loteSalas)
                .then(function (response) {
                jQuery('#dialogRestoreLote').modal('show');
                jQuery('#saidaRestore').html(response);
                _this.loteSalas.is_salas_criadas = true;
                _this.editavel = true;
                _this.selecionaLoteSalas(_this.loteSalas);
            })
                .catch(function (response) {
                jQuery('#dialogRestoreLote').modal('show');
                _this.erroAviso = true;
                _this.aviso = _this.erroHttp(response);
                _this.editavel = true;
                jQuery('#saidaRestore').html('<span style="color: red;">' + _this.aviso + "</span>");
                _this.selecionaLoteSalas(_this.loteSalas);
            });
        }
    };
    LoteSalasComponent.prototype.inserirEstudantes = function () {
        var _this = this;
        this.editavel = false;
        if (this.loteSalas && confirm("Deseja executar as a busca e inserção de estudantes nas salas deste lote?")) {
            this.loteSalasService.insereEstudantes(this.loteSalas)
                .then(function (response) {
                jQuery('#dialogRestoreLote').modal('show');
                jQuery('#saidaRestore').html(response);
                _this.loteSalas.is_estudantes_inseridos = true;
                _this.editavel = true;
                _this.selecionaLoteSalas(_this.loteSalas);
            })
                .catch(function (response) {
                jQuery('#dialogRestoreLote').modal('show');
                _this.erroAviso = true;
                _this.aviso = _this.erroHttp(response);
                _this.editavel = true;
                jQuery('#saidaRestore').html('<span style="color: red;">' + _this.aviso + "</span>");
                _this.selecionaLoteSalas(_this.loteSalas);
            });
        }
    };
    LoteSalasComponent.prototype.cancelar = function () {
        this.loteSalas = null;
        this.sala = _salas_sala__WEBPACK_IMPORTED_MODULE_14__["Sala"].geraNovaSala();
        this.periodoLetivoSelecionadoId = "";
        this.faculdadeTemp = src_app_faculdades_faculdade__WEBPACK_IMPORTED_MODULE_6__["Faculdade"].generateFaculdade();
        this.faculdadeSelecionadaId = "";
        this.cursoSelecionadoCodigo = "";
        this.disciplinaSelecionadaId = "";
        this.editavel = true;
        this.statusTemp = this.STATUS_INICIAL_PADRAO;
        this.salaPadraoDados.status = this.dadosService.statusesIndex.get(this.STATUS_INICIAL_PADRAO);
        this.salas = [];
    };
    LoteSalasComponent.prototype.excluiSala = function (sala) {
        if (!confirm("Deseja remover esta sala do lote?"))
            return;
        for (var i = 0; i < this.salas.length; i++) {
            if (this.salas[i] == sala) {
                this.salas.splice(i, 1);
                return;
            }
        }
    };
    LoteSalasComponent.prototype.geraMacrosBacks = function () {
        this.macrosBacks = {};
        for (var i = 0; i < this.salas.length; i++) {
            this.macrosBacks[this.salas[i].id] = this.salas[i].macro_id + "";
        }
    };
    LoteSalasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dadosService.statusList()
            .then(function (response) {
            _this.periodoLetivoService.getPeriodoLetivos()
                .then(function (response) {
                _this.usuarioService.listaUsuariosCriaSala()
                    .then(function (response) {
                    _this.usuarios = response;
                    _this.faculdadeService.listar()
                        .then(function (response) {
                        _this.macroService.getMacros()
                            .then(function (response) {
                            _this.salasService.getObjetivosSalas()
                                .then(function (response) {
                                _this.salasService.getModalidades()
                                    .then(function (response) {
                                    _this.status = _this.COMPLETE;
                                    _this.editavel = true;
                                    _this.salas = [];
                                    /*this.loteSalasService.listar()
                                        .then(response => {

                                        })
                                        .catch(response => {
                                            this.status = this.ERROR;
                                            console.log(response)
                                        })*/
                                })
                                    .catch(function (response) {
                                    _this.status = _this.ERROR;
                                    console.log(response);
                                });
                            })
                                .catch(function (response) {
                                _this.status = _this.ERROR;
                                console.log(response);
                            });
                        })
                            .catch(function (response) {
                            _this.status = _this.ERROR;
                            console.log(response);
                        });
                    })
                        .catch(function (response) {
                        _this.status = _this.ERROR;
                        console.log(response);
                    });
                })
                    .catch(function (response) {
                    _this.status = _this.ERROR;
                    console.log(response);
                });
            })
                .catch(function (response) {
                _this.status = _this.ERROR;
                console.log(response);
            });
        })
            .catch(function (response) {
            _this.status = _this.ERROR;
            console.log(response);
        });
    };
    LoteSalasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lote-salas',
            template: __webpack_require__(/*! ./lote-salas.component.html */ "./src/app/lote-salas/lote-salas.component.html"),
            styles: [__webpack_require__(/*! ./lote-salas.component.less */ "./src/app/lote-salas/lote-salas.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_salas_service__WEBPACK_IMPORTED_MODULE_11__["SalasService"], src_app_dados_service__WEBPACK_IMPORTED_MODULE_4__["DadosService"], src_app_faculdade_service__WEBPACK_IMPORTED_MODULE_5__["FaculdadeService"],
            src_app_pl_disciplinas_academicos_service__WEBPACK_IMPORTED_MODULE_9__["PlDisciplinasAcademicosService"], src_app_macro_service__WEBPACK_IMPORTED_MODULE_7__["MacroService"], src_app_periodo_letivos_service__WEBPACK_IMPORTED_MODULE_8__["PeriodoLetivosService"],
            src_app_cursos_service__WEBPACK_IMPORTED_MODULE_3__["CursosService"], src_app_usuario_service__WEBPACK_IMPORTED_MODULE_12__["UsuarioService"], _lote_salas_service__WEBPACK_IMPORTED_MODULE_13__["LoteSalasService"]])
    ], LoteSalasComponent);
    return LoteSalasComponent;
}(src_app_abstract_component__WEBPACK_IMPORTED_MODULE_2__["AbstractComponent"]));



/***/ }),

/***/ "./src/app/lote-salas/lote-salas.ts":
/*!******************************************!*\
  !*** ./src/app/lote-salas/lote-salas.ts ***!
  \******************************************/
/*! exports provided: LoteSalas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoteSalas", function() { return LoteSalas; });
var LoteSalas = /** @class */ (function () {
    function LoteSalas(id, descricao, periodo_letivo, faculdade, curso, is_salas_criadas, is_estudantes_inseridos) {
        this.salas = [];
        if (typeof id == "number") {
            this.id = id;
            this.descricao = descricao;
            this.periodo_letivo = periodo_letivo;
            this.faculdade = faculdade;
            this.curso = curso;
            this.is_salas_criadas = is_salas_criadas;
            this.is_estudantes_inseridos = is_estudantes_inseridos;
        }
        else {
            this.id = parseInt(id['id']);
            this.descricao = id['descricao'];
            this.periodo_letivo = id['periodo_letivo_id'];
            this.faculdade = id['faculdade_id'];
            this.curso = id['curso_id'];
            this.is_salas_criadas = id['is_salas_criadas'] ? (eval(id['is_salas_criadas']) ? true : false) : false;
            this.is_estudantes_inseridos = id['is_estudantes_inseridos'] ? (eval(id['is_estudantes_inseridos']) ? true : false) : false;
        }
    }
    LoteSalas.generateList = function (list, faculdade) {
        var loteSalasList = [];
        for (var i = 0; i < list.length; i++) {
            var loteSalas = new LoteSalas(list[i]);
            //if (faculdade)
            //loteSalas.faculdade = faculdade;
            loteSalasList.push(loteSalas);
        }
        return loteSalasList;
    };
    LoteSalas.generateListPlus = function (list, periodoLetivoIndex, faculdadeIndex, cursoIndex) {
        var loteSalasList = [];
        for (var i = 0; i < list.length; i++) {
            loteSalasList.push(LoteSalas.generate(list[i], periodoLetivoIndex, faculdadeIndex, cursoIndex));
        }
        return loteSalasList;
    };
    LoteSalas.generate = function (dados, periodoLetivoIndex, faculdadeIndex, cursoIndex) {
        if (dados && periodoLetivoIndex && faculdadeIndex && cursoIndex) {
            var loteSalas = new LoteSalas(dados);
            loteSalas.periodo_letivo = periodoLetivoIndex.get(loteSalas.periodo_letivo);
            loteSalas.faculdade = faculdadeIndex.get(loteSalas.faculdade);
            loteSalas.curso = cursoIndex.get(loteSalas.curso);
            return loteSalas;
        }
        else
            return new LoteSalas(0, '', 0, 0, 0, false, false);
    };
    LoteSalas.prototype.clone = function () {
        return new LoteSalas(this.id, this.descricao, this.periodo_letivo, this.faculdade, this.curso, this.is_salas_criadas, this.is_estudantes_inseridos);
    };
    return LoteSalas;
}());



/***/ }),

/***/ "./src/app/macro-super-macro.service.ts":
/*!**********************************************!*\
  !*** ./src/app/macro-super-macro.service.ts ***!
  \**********************************************/
/*! exports provided: MacroSuperMacroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MacroSuperMacroService", function() { return MacroSuperMacroService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _array_indexador__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./array-indexador */ "./src/app/array-indexador.ts");
/* harmony import */ var _macro_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./macro.service */ "./src/app/macro.service.ts");
/* harmony import */ var _periodo_letivos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./periodo-letivos.service */ "./src/app/periodo-letivos.service.ts");
/* harmony import */ var _super_macro_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./super-macro.service */ "./src/app/super-macro.service.ts");
/* harmony import */ var _super_macro_macro_super_macro_macro_super_macro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./super-macro/macro-super-macro/macro-super-macro */ "./src/app/super-macro/macro-super-macro/macro-super-macro.ts");








var MacroSuperMacroService = /** @class */ (function () {
    function MacroSuperMacroService(http, periodoLetivosService, macroService, superMacroService) {
        this.http = http;
        this.periodoLetivosService = periodoLetivosService;
        this.macroService = macroService;
        this.superMacroService = superMacroService;
        this.macroSuperMacros = [];
        this.msmIndex = null;
        this.msmIndexOrder = null;
        this.CAMPOS = [];
        this.OPERADORES = [];
        this.getCampos();
        this.getOperadores();
    }
    MacroSuperMacroService.prototype.listar = function (superMacro) {
        var _this = this;
        var superMacroId = typeof superMacro == 'object' ? superMacro.id : superMacro;
        return this.http.get("/super-macro/msm/" + superMacroId)
            .toPromise()
            .then(function (response) {
            _this.macroSuperMacros = _super_macro_macro_super_macro_macro_super_macro__WEBPACK_IMPORTED_MODULE_7__["MacroSuperMacro"].generateListPlus(response.json(), _this.macroService.macros, _this.macroService.macrosIndex, _this.superMacroService.superMacrosIndex);
            _this.msmIndex = new _array_indexador__WEBPACK_IMPORTED_MODULE_3__["ArrayIndexador"](_this.macroSuperMacros);
            _this.msmIndexOrder = new _array_indexador__WEBPACK_IMPORTED_MODULE_3__["ArrayIndexador"](_this.macroSuperMacros, 'ordem');
            return _this.macroSuperMacros;
        });
    };
    MacroSuperMacroService.prototype.create = function (msm) {
        var _this = this;
        return this.http.post("/super-macro/msm", msm.getPost())
            .toPromise()
            .then(function (response) {
            return _this.listar(msm.super_macro);
        });
    };
    MacroSuperMacroService.prototype.update = function (msm) {
        var _this = this;
        return this.http.put("/super-macro/msm/" + msm.id, msm.getPost())
            .toPromise()
            .then(function (response) {
            return _this.listar(msm.super_macro);
        });
    };
    MacroSuperMacroService.prototype.delete = function (msm) {
        var _this = this;
        return this.http.delete("/super-macro/msm/" + msm.id)
            .toPromise()
            .then(function (response) {
            return _this.listar(msm.super_macro);
        });
    };
    MacroSuperMacroService.prototype.order = function (msm1, msm2, superMacro) {
        var _this = this;
        var m1id = typeof msm1 == 'object' ? msm1.id : this.msmIndexOrder.get(msm1).id;
        var m2id = typeof msm2 == 'object' ? msm2.id : this.msmIndexOrder.get(msm2).id;
        return this.http.get('/super-macro/msm/order/' + m1id + "/" + m2id)
            .toPromise()
            .then(function (response) {
            return _this.listar(superMacro);
        });
    };
    MacroSuperMacroService.prototype.getCampos = function () {
        var _this = this;
        return this.http.get('/super-macro/msm/campos')
            .toPromise()
            .then(function (response) {
            return _this.CAMPOS = response.json();
        });
    };
    MacroSuperMacroService.prototype.getOperadores = function () {
        var _this = this;
        return this.http.get('/super-macro/msm/operadores')
            .toPromise()
            .then(function (response) {
            return _this.OPERADORES = response.json();
        });
    };
    MacroSuperMacroService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _periodo_letivos_service__WEBPACK_IMPORTED_MODULE_5__["PeriodoLetivosService"], _macro_service__WEBPACK_IMPORTED_MODULE_4__["MacroService"], _super_macro_service__WEBPACK_IMPORTED_MODULE_6__["SuperMacroService"]])
    ], MacroSuperMacroService);
    return MacroSuperMacroService;
}());



/***/ }),

/***/ "./src/app/macro.service.ts":
/*!**********************************!*\
  !*** ./src/app/macro.service.ts ***!
  \**********************************/
/*! exports provided: MacroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MacroService", function() { return MacroService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _arquivo_arquivo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./arquivo/arquivo */ "./src/app/arquivo/arquivo.ts");
/* harmony import */ var _macro_macro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./macro/macro */ "./src/app/macro/macro.ts");
/* harmony import */ var _buscadores_buscador__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buscadores/buscador */ "./src/app/buscadores/buscador.ts");
/* harmony import */ var _periodo_letivos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./periodo-letivos.service */ "./src/app/periodo-letivos.service.ts");







var MacroService = /** @class */ (function () {
    function MacroService(http, periodoLetivosService) {
        this.http = http;
        this.periodoLetivosService = periodoLetivosService;
        this.ENTRADAS = [];
        this.files = [];
        this.filesIndex = {};
        this.macros = [];
        this.macrosIndex = {};
        this.resetMacroSelecionada();
    }
    MacroService.prototype.resetMacroSelecionada = function () {
        this.macroSelecionada = new _macro_macro__WEBPACK_IMPORTED_MODULE_4__["Macro"](0, "", null, null, null, []);
    };
    MacroService.prototype.getListFiles = function () {
        var _this = this;
        return this.http.get("/files").toPromise()
            .then(function (response) {
            var files = response.json();
            _this.files = [];
            _this.filesIndex = {};
            for (var i in files) {
                var a = new _arquivo_arquivo__WEBPACK_IMPORTED_MODULE_3__["Arquivo"](files[i]);
                _this.files.push(a);
                _this.filesIndex[a.name] = i;
            }
            return _this.files;
        });
    };
    MacroService.prototype.getMacros = function () {
        var _this = this;
        return this.http.get("/macro/all").toPromise()
            .then(function (response) {
            var macros = response.json();
            _this.macros = [];
            _this.macrosIndex = {};
            for (var i in macros) {
                if (macros[i].arquivo)
                    macros[i].arquivo = _this.files[_this.filesIndex[macros[i].arquivo]];
                macros[i].periodo_letivo_id = _this.periodoLetivosService.periodoLetivos[_this.periodoLetivosService.periodoLetivosIndex[macros[i].periodo_letivo_id]];
                var macro = new _macro_macro__WEBPACK_IMPORTED_MODULE_4__["Macro"](macros[i]);
                _this.macros.push(macro);
                _this.macrosIndex[macro.id] = i;
            }
            return _this.macros;
        });
    };
    MacroService.prototype.criarAlterarMacro = function () {
        return this.http.post("/macro/name", { 'nome': this.macroSelecionada.nome, 'id': this.macroSelecionada.id, 'link_servidor_moodle': this.macroSelecionada.link_servidor_moodle, 'periodo_letivo_id': (this.macroSelecionada.periodo_letivo ? this.macroSelecionada.periodo_letivo.id : '') }).toPromise();
    };
    MacroService.prototype.delMacro = function (macroId) {
        return this.http.delete("/macro/" + macroId).toPromise();
    };
    MacroService.prototype.addBuscador = function (buscador) {
        return this.http.put("/macro/" + this.macroSelecionada.id + "/buscador", buscador).toPromise();
    };
    MacroService.prototype.delBuscador = function (buscador) {
        return this.http.delete("/macro/buscador/" + buscador.id).toPromise();
    };
    MacroService.prototype.getEntradasBuscadores = function () {
        var _this = this;
        return this.http.get("/macro/entradas").toPromise()
            .then(function (response) {
            _this.ENTRADAS = response.json();
            return _this.ENTRADAS;
        });
    };
    MacroService.prototype.getBuscadores = function () {
        var _this = this;
        return this.http.get("/macro/" + this.macroSelecionada.id + "/buscador").toPromise()
            .then(function (response) {
            var buscadores = response.json();
            _this.macroSelecionada.buscadores = [];
            for (var i in buscadores) {
                _this.macroSelecionada.buscadores.push(new _buscadores_buscador__WEBPACK_IMPORTED_MODULE_5__["Buscador"](buscadores[i]));
            }
        });
    };
    MacroService.prototype.onFileUpload = function (data) {
        var formData = new FormData();
        var file = data.files[0];
        if (file) {
            formData.append('arquivo', file, file.name);
            formData.append('macroId', "" + this.macroSelecionada.id);
            return this.http.post("/macro/file", formData).toPromise()
                .then(function (r) {
                return r.json();
            });
        }
    };
    MacroService.prototype.changeArquivo = function (nomeFile) {
        var _this = this;
        return this.http.post("macro/mudararquivo", { "nomeFile": nomeFile, "macroId": this.macroSelecionada.id }).toPromise()
            .then(function (response) {
            var macroAlterada = response.json();
            macroAlterada.arquivo = _this.files[_this.filesIndex[macroAlterada.arquivo]];
            macroAlterada.periodo_letivo_id = _this.periodoLetivosService.periodoLetivos[_this.periodoLetivosService.periodoLetivosIndex[macroAlterada.periodo_letivo_id]];
            var macro = new _macro_macro__WEBPACK_IMPORTED_MODULE_4__["Macro"](macroAlterada);
            if (macro.id) {
                _this.macros[_this.macrosIndex[macro.id]] = macro;
            }
            return macro;
        });
    };
    MacroService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _periodo_letivos_service__WEBPACK_IMPORTED_MODULE_6__["PeriodoLetivosService"]])
    ], MacroService);
    return MacroService;
}());



/***/ }),

/***/ "./src/app/macro/macro.component.html":
/*!********************************************!*\
  !*** ./src/app/macro/macro.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n        Macros\n    </div>\n        <div class=\"row\">\n            <div class=\"col-md-8\"  style=\"padding-right: 0px; border-right: 1px solid #ddd\">\n                <div>\n                    <table class=\"table\"style=\"margin-bottom: 0px\">\n                        <colgroup>\n                            <col width=\"50px\"/>\n                            <col width=\"100%\"/>\n                            <col width=\"82px\"/>\n                            <col width=\"100%\"/>\n                            <col width=\"100%\"/>\n                            <col width=\"90px\"/>\n                            <col width=\"39px\"/>\n                            <col width=\"39px\"/>\n                            <col width=\"15px\"/>\n                        </colgroup>\n                        <thead class=\"thead-light\">\n                            <tr>\n                                <th style=\"text-align: center\">ID</th>\n                                <th class=\"celula-trunca-texto\" title=\"NOME\">NOME</th>\n                                <th class=\"celula-trunca-texto\" title=\"PERÍODO LETIVO\">P. LETIVO</th>\n                                <th class=\"celula-trunca-texto\" title=\"LINK PARA SERVIDOR MOODLE\">LINK MOODLE</th>\n                                <th class=\"celula-trunca-texto\" title=\" ARQUIVO\">ARQUIVO</th>\n                                <th></th>\n                                <th></th>\n                                <th></th>\n                                <th></th>\n                            </tr>\n                        </thead>\n                    </table>\n                </div>\n                <div redimensionar=\"261\" style=\"overflow-y: scroll;\">\n                    <table class=\"table\" data-toggle=\"table\" >\n                        <colgroup>\n                            <col width=\"50px\"/>\n                            <col width=\"100%\"/>\n                            <col width=\"82px\"/>\n                            <col width=\"100%\"/>\n                            <col width=\"100%\"/>\n                            <col width=\"90px\"/>\n                            <col width=\"39px\"/>\n                            <col width=\"39px\"/>\n                        </colgroup>\n                        <tbody>\n                            <tr *ngFor=\"let macro of macros\" class=\"clickable-row\" (click)=\"selecionarMacro(macro)\" [ngClass]=\"{'linha-selecionada': macro.id == macroSelecionada.id}\">\n                                <td style=\"text-align: center\">{{macro.id}}</td>\n                                <td class=\"celula-trunca-texto\" title=\"\">\n                                    {{macro.nome}}\n                                </td>\n                                <td>\n                                    {{macro.periodo_letivo.nome}}\n                                </td>\n                                <td class=\"celula-trunca-texto\" title=\"{{macro.link_servidor_moodle}}\">\n                                    {{macro.link_servidor_moodle}}\n                                </td>\n                                <td class=\"celula-trunca-texto\" title=\"Alterar\">\n                                    <button *ngIf=\"!macro.arquivo\" style=\"text-align: center; margin-right: 2px;\" title=\"Alterar Arquivo\" type=\"button\" class=\"btn btn-primary botao-reduzido\" data-toggle=\"modal\" data-target=\"#dialogArquivos\" (click)=\"selecionarMacro(macro)\">\n                                        <span class=\"glyphicon glyphicon-plus\"></span>\n                                    </button>\n                                    <a style=\"cursor: pointer\"  data-toggle=\"modal\" data-target=\"#dialogArquivos\">{{macro.arquivo?.name}}</a>\n                                </td>\n                                <td class=\"celula-trunca-texto\">{{macro.arquivo? (macro.arquivo.created | formatadorData) : ''}}</td>\n                                <td>\n                                    <button style=\"text-align: center; margin-left: 2px;\" title=\"Editar Nome\" type=\"button\" class=\"btn btn-info botao-reduzido\" data-toggle=\"modal\" data-target=\"#dialogCriar\" (click)=\"selecionarMacro(macro)\">\n                                        <span class=\"glyphicon glyphicon-edit\"></span>\n                                    </button>\n                                </td>\n                                <td>\n                                    <button style=\"text-align: center; margin-left: -2px;\" title=\"Remover Macro\" type=\"button\" class=\"btn btn-danger botao-reduzido\" (click)=\"delMacro(macro)\">\n                                        <span class=\"glyphicon glyphicon-remove\"></span>\n                                    </button>\n                                </td>\n                            </tr>\n                        </tbody>\n                        <tfoot class=\"status-tabela\">\n                            <tr *ngIf=\"status == LOADING\"><td colspan=\"6\"><i>Carregando Macros...</i></td></tr>\n                            <tr *ngIf=\"macros != null && macros.length == 0 && status == COMPLETE\"><td colspan=\"6\"><i>Não Há Macros para serem listadas</i></td></tr>\n                            <tr *ngIf=\"status == ERROR\"><td class=\"erro\" colspan=\"6\"><i>Falha na obtenção das Macros!</i></td></tr>\n                        </tfoot>\n                    </table>\n                </div>\n                <div class=\"panel-footer\">\n                    <button type=\"button\" class=\"btn btn-primary botao-barra\" data-toggle=\"modal\" data-target=\"#dialogCriar\" (click)=\"selecionarMacro(null)\" [disabled]=\"!editavel\">Nova</button>\n                </div>\n            </div>\n            <div class=\"col-md-4\" style=\"padding-left: 0px; \">\n                <div class=\"barra-titulo\">\n                    <table class=\"table\">\n                        <tbody>\n                            <tr>\n                                <td colspan=\"3\" class=\"celula-trunca-texto\" style=\"text-align: center;\">\n                                    <h4 *ngIf=\"macroSelecionada.id == 0\" style=\"display: inline-block; color: gray;\" title=\"\"><i>Selecione uma macro...</i></h4>\n                                    <h4 *ngIf=\"macroSelecionada.id > 0\" style=\"display: inline-block\" title=\"\">{{macroSelecionada.nome}}</h4>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n                <div>\n                    <app-buscadores [ancestral]=\"eu\">Carregando...</app-buscadores>\n                </div>\n            </div>\n        </div>\n</div>\n\n    \n\n<div class=\"modal fade\" id=\"dialogArquivos\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialogArquivosTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Selecionar Arquivo</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\" style=\"width: 500px;\">\n                    <app-arquivo [ancestral]=\"eu\">Carregando...</app-arquivo>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\">Fechar</button>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"modal fade\" id=\"dialogCriar\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialogCriarTitle\" aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">{{macroSelecionada.id > 0 ? 'Alterar Macro' : 'Criar Macro'}}</h5>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\" style=\"width: 350px;\">\n                    <label class=\"style1\">{{macroSelecionada.id > 0 ? 'Alterar Nome:' : 'Nome para a Macro:'}}</label><br>\n                    <input class=\"form-control\" [(ngModel)]=\"macroSelecionada.nome\" [readonly]=\"!editavel\" maxlength=\"31\"/><p></p>\n                    <label class=\"style1\">Período Letivo</label><br>\n                    <select class=\"form-control\" name=\"periodo-letivo\" [(ngModel)]=\"periodoLetivoTempIndex\" (change)=\"aplicarPeriodoLetivo()\" [disabled]=\"!editavel\" required>   \n                        <option hidden disabled [value]=\"0\" selected> -- Selecione -- </option>  \n                        <option *ngFor=\"let p of periodoLetivos\" [value]=\"p.id\">{{p.nome + (p.descricao ? \" (\" + p.descricao + \")\" : \"\")}}</option>       \n                    </select><br>\n                    <label class=\"style1\">Link para Servidor Moodle</label><br>\n                    <select class=\"form-control\" name=\"links-moodle\" [(ngModel)]=\"macroSelecionada.link_servidor_moodle\" [disabled]=\"!editavel\" required>   \n                        <option hidden disabled [value]=\"null\" selected> -- Selecione -- </option>  \n                        <option *ngFor=\"let l of linksMoodles\" [value]=\"l\">{{l}}</option>       \n                    </select><br>\n                    <!--input class=\"form-control\" [(ngModel)]=\"macroSelecionada.link_servidor_moodle\" [readonly]=\"!editavel\" maxlength=\"63\"/><p></p-->\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-primary botao-barra\" (click)=\"criarAlterarMacro()\" [disabled]=\"!editavel\">Ok</button>\n                    <button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\">Fechar</button>\n                </div>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/macro/macro.component.less":
/*!********************************************!*\
  !*** ./src/app/macro/macro.component.less ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hY3JvL21hY3JvLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/macro/macro.component.ts":
/*!******************************************!*\
  !*** ./src/app/macro/macro.component.ts ***!
  \******************************************/
/*! exports provided: MacroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MacroComponent", function() { return MacroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _macro_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../macro.service */ "./src/app/macro.service.ts");
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../abstract-component */ "./src/app/abstract-component.ts");
/* harmony import */ var _periodo_letivos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../periodo-letivos.service */ "./src/app/periodo-letivos.service.ts");
/* harmony import */ var _servidores_moodle_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../servidores-moodle.service */ "./src/app/servidores-moodle.service.ts");






var MacroComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MacroComponent, _super);
    function MacroComponent(macroService, periodoLetivosService, servidoresMoodleService) {
        var _this = _super.call(this) || this;
        _this.macroService = macroService;
        _this.periodoLetivosService = periodoLetivosService;
        _this.servidoresMoodleService = servidoresMoodleService;
        _this.periodoLetivoTempIndex = 0;
        _this.linksMoodles = [];
        return _this;
    }
    Object.defineProperty(MacroComponent.prototype, "files", {
        get: function () {
            return this.macroService.files;
        },
        set: function (files) {
            this.macroService.files = files;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MacroComponent.prototype, "macros", {
        get: function () {
            return this.macroService.macros;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MacroComponent.prototype, "macroSelecionada", {
        get: function () {
            return this.macroService.macroSelecionada;
        },
        set: function (macro) {
            this.macroService.macroSelecionada = macro;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MacroComponent.prototype, "entradas", {
        get: function () {
            return this.macroService.ENTRADAS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MacroComponent.prototype, "periodoLetivos", {
        get: function () {
            return this.periodoLetivosService.periodoLetivos;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MacroComponent.prototype, "eu", {
        get: function () {
            return this;
        },
        enumerable: true,
        configurable: true
    });
    MacroComponent.prototype.criarAlterarMacro = function () {
        var _this = this;
        var posSelecionar = this.macroSelecionada.id ? this.macroService.macrosIndex[this.macroSelecionada.id] : this.macroService.macros.length;
        this.macroService.criarAlterarMacro()
            .then(function (response) {
            _this.macroService.getMacros()
                .then(function (response) {
                _this.selecionarMacro(_this.macroService.macros[posSelecionar]);
                jQuery('#dialogCriar').modal('hide');
            })
                .catch(function (r) {
                alert(_this.erroHttp(r));
            });
        })
            .catch(function (r) {
            alert(_this.erroHttp(r));
        });
    };
    MacroComponent.prototype.aplicarPeriodoLetivo = function () {
        this.macroSelecionada.periodo_letivo = this.periodoLetivosService.periodoLetivos[this.periodoLetivosService.periodoLetivosIndex[this.periodoLetivoTempIndex]];
    };
    MacroComponent.prototype.delMacro = function (macro) {
        var _this = this;
        if (confirm("Confirmar exclusão da macro '" + macro.nome + "'?"))
            this.macroService.delMacro(macro.id)
                .then(function (response) {
                _this.macroService.getMacros();
            })
                .catch(function (r) {
                alert(_this.erroHttp(r));
            });
    };
    MacroComponent.prototype.selecionarMacro = function (macro) {
        var _this = this;
        if (macro == null) {
            this.macroService.resetMacroSelecionada();
            this.periodoLetivoTempIndex = 0;
        }
        else {
            this.macroSelecionada = macro.clone();
            this.editavel = false;
            this.periodoLetivoTempIndex = this.macroSelecionada.periodo_letivo.id;
            this.macroService.getBuscadores()
                .then(function (response) {
                _this.editavel = true;
            })
                .catch(function (r) {
                alert(_this.erroHttp(r));
            });
        }
    };
    MacroComponent.prototype.ngOnInit = function () {
        this.editavel = true;
        this.carregarLista();
    };
    MacroComponent.prototype.carregarLista = function () {
        var _this = this;
        return this.macroService.getEntradasBuscadores()
            .then(function (response) {
            _this.macroService.getListFiles()
                .then(function (response) {
                _this.periodoLetivosService.getPeriodoLetivos()
                    .then(function (response) {
                    _this.servidoresMoodleService.getLinksServidoresMoodle()
                        .then(function (response) {
                        _this.linksMoodles = response;
                        _this.macroService.getMacros()
                            .then(function (response) {
                            _this.status = _this.COMPLETE;
                            return response;
                        })
                            .catch(function (r) {
                            alert(_this.erroHttp(r));
                        });
                    })
                        .catch(function (r) {
                        alert(_this.erroHttp(r));
                    });
                })
                    .catch(function (r) {
                    alert(_this.erroHttp(r));
                });
            })
                .catch(function (r) {
                alert(_this.erroHttp(r));
            });
        })
            .catch(function (r) {
            alert(_this.erroHttp(r));
        });
    };
    MacroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-macro',
            template: __webpack_require__(/*! ./macro.component.html */ "./src/app/macro/macro.component.html"),
            styles: [__webpack_require__(/*! ./macro.component.less */ "./src/app/macro/macro.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_macro_service__WEBPACK_IMPORTED_MODULE_2__["MacroService"], _periodo_letivos_service__WEBPACK_IMPORTED_MODULE_4__["PeriodoLetivosService"], _servidores_moodle_service__WEBPACK_IMPORTED_MODULE_5__["ServidoresMoodleService"]])
    ], MacroComponent);
    return MacroComponent;
}(_abstract_component__WEBPACK_IMPORTED_MODULE_3__["AbstractComponent"]));



/***/ }),

/***/ "./src/app/macro/macro.ts":
/*!********************************!*\
  !*** ./src/app/macro/macro.ts ***!
  \********************************/
/*! exports provided: Macro */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Macro", function() { return Macro; });
/* harmony import */ var _arquivo_arquivo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../arquivo/arquivo */ "./src/app/arquivo/arquivo.ts");
/* harmony import */ var _buscadores_buscador__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../buscadores/buscador */ "./src/app/buscadores/buscador.ts");
/* harmony import */ var _periodo_letivos_periodo_letivo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../periodo-letivos/periodo-letivo */ "./src/app/periodo-letivos/periodo-letivo.ts");



var Macro = /** @class */ (function () {
    function Macro(id, nome, arquivo, periodo_letivo, link_servidor_moodle, buscadores) {
        if (typeof id == "number") {
            this.id = id;
            this.nome = nome;
            this.arquivo = arquivo == null ? null : new _arquivo_arquivo__WEBPACK_IMPORTED_MODULE_0__["Arquivo"](arquivo);
            this.periodo_letivo = periodo_letivo == null ? null : new _periodo_letivos_periodo_letivo__WEBPACK_IMPORTED_MODULE_2__["PeriodoLetivo"](periodo_letivo);
            this.link_servidor_moodle = link_servidor_moodle;
            this.buscadores = [];
            for (var i in buscadores) {
                this.buscadores.push(new _buscadores_buscador__WEBPACK_IMPORTED_MODULE_1__["Buscador"](buscadores[i]));
            }
        }
        else {
            this.id = id.id;
            this.nome = id.nome;
            this.arquivo = id.arquivo == null ? null : new _arquivo_arquivo__WEBPACK_IMPORTED_MODULE_0__["Arquivo"](id.arquivo);
            this.periodo_letivo = id.periodo_letivo_id == null ? null : id.periodo_letivo_id;
            this.link_servidor_moodle = id.link_servidor_moodle;
            this.buscadores = [];
            for (var i in id.buscadores) {
                this.buscadores.push(new _buscadores_buscador__WEBPACK_IMPORTED_MODULE_1__["Buscador"](id.buscadores[i]));
            }
        }
    }
    Macro.generate = function () {
        return new Macro(0, "", null, 0, "", []);
    };
    Macro.prototype.clone = function () {
        return new Macro(this.id, this.nome, this.arquivo, this.periodo_letivo, this.link_servidor_moodle, this.buscadores);
    };
    return Macro;
}());



/***/ }),

/***/ "./src/app/periodo-letivos-categorias.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/periodo-letivos-categorias.service.ts ***!
  \*******************************************************/
/*! exports provided: PeriodoLetivosCategoriasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeriodoLetivosCategoriasService", function() { return PeriodoLetivosCategoriasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _periodo_letivos_categorias_periodo_letivo_categoria__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./periodo-letivos-categorias/periodo-letivo-categoria */ "./src/app/periodo-letivos-categorias/periodo-letivo-categoria.ts");
/* harmony import */ var _array_indexador__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./array-indexador */ "./src/app/array-indexador.ts");





var PeriodoLetivosCategoriasService = /** @class */ (function () {
    function PeriodoLetivosCategoriasService(http) {
        this.http = http;
        this.periodoLetivosCategorias = [];
        this.periodoLetivosCategoriasIndex = null;
    }
    PeriodoLetivosCategoriasService.prototype.getPeriodoLetivosCategrias = function (periodoLetivoId) {
        var _this = this;
        return this.http.get("/periodo-letivos-categorias/all/" + periodoLetivoId).toPromise()
            .then(function (response) {
            var plcs = response.json();
            _this.periodoLetivosCategorias = _periodo_letivos_categorias_periodo_letivo_categoria__WEBPACK_IMPORTED_MODULE_3__["PeriodoLetivoCategoria"].generateList(response.json());
            _this.periodoLetivosCategoriasIndex = new _array_indexador__WEBPACK_IMPORTED_MODULE_4__["ArrayIndexador"](_this.periodoLetivosCategorias, "curso");
            return _this.periodoLetivosCategoriasIndex;
        });
    };
    PeriodoLetivosCategoriasService.prototype.setCategoriaId = function (periodoLetivoId, cursoId, categoriaId) {
        var _this = this;
        return this.http.post("/periodo-letivos-categorias", { 'periodo_letivo_id': periodoLetivoId, 'curso_id': cursoId, 'categoria_id': categoriaId }).toPromise()
            .then(function (response) {
            _this.periodoLetivosCategoriasIndex.get(cursoId).categoria_id = categoriaId;
            return categoriaId;
        });
    };
    PeriodoLetivosCategoriasService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], PeriodoLetivosCategoriasService);
    return PeriodoLetivosCategoriasService;
}());



/***/ }),

/***/ "./src/app/periodo-letivos-categorias/periodo-letivo-categoria.ts":
/*!************************************************************************!*\
  !*** ./src/app/periodo-letivos-categorias/periodo-letivo-categoria.ts ***!
  \************************************************************************/
/*! exports provided: PeriodoLetivoCategoria */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeriodoLetivoCategoria", function() { return PeriodoLetivoCategoria; });
var PeriodoLetivoCategoria = /** @class */ (function () {
    function PeriodoLetivoCategoria(id, curso, periodo_letivo, categoria_id) {
        if (typeof id == "number") {
            this.id = id;
            this.curso = curso;
            this.periodo_letivo = periodo_letivo;
            this.categoria_id = categoria_id;
        }
        else {
            this.id = parseInt(id['id']);
            this.curso = id['curso_id'];
            this.periodo_letivo = id['periodo_letivo_id'];
            this.categoria_id = id['categoria_id'];
        }
    }
    PeriodoLetivoCategoria.generateList = function (list) {
        var periodoLetivoCategorias = [];
        for (var i = 0; i < list.length; i++) {
            var per = new PeriodoLetivoCategoria(list[i]);
            periodoLetivoCategorias.push(per);
        }
        return periodoLetivoCategorias;
    };
    PeriodoLetivoCategoria.prototype.clone = function () {
        return new PeriodoLetivoCategoria(this.id, this.curso, this.periodo_letivo, this.categoria_id);
    };
    return PeriodoLetivoCategoria;
}());



/***/ }),

/***/ "./src/app/periodo-letivos-categorias/periodo-letivos-categorias.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/periodo-letivos-categorias/periodo-letivos-categorias.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n        Periodo Letivos - Categorias\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-3\"  style=\"padding-right: 0px; border-right: 1px solid #ddd\">\n            <div>\n                <table class=\"table\" style=\"margin-bottom: 0px\">\n                    <colgroup>\n                        <col width=\"40px\"/>\n                        <col width=\"100%\"/>\n                        <!--col width=\"130px\"/-->\n                        <col width=\"15px\"/>\n                    </colgroup>\n                    <thead class=\"thead-light\">\n                        <tr>\n                            <th>#</th>\n                            <th class=\"celula-trunca-texto\" title=\"PERÍODO LETIVO\">PERÍODO LETIVO</th>\n                            <!--th class=\"celula-trunca-texto\" title=\"Referência de Início de IDs de Categorias\">Cat. IDs Início</th-->\n                            <th></th>\n                        </tr>\n                    </thead>\n                </table>\n            </div>\n            <div redimensionar=\"204\" style=\"overflow-y: scroll;\">\n                <table class=\"table\">\n                    <colgroup>\n                        <col width=\"40px\"/>\n                        <col width=\"100%\"/>\n                        <!--col width=\"130px\"/-->\n                    </colgroup>\n                    <tbody>\n                        <tr *ngFor=\"let pl of periodoLetivos\"  class=\"clickable-row\" (click)=\"selecionarPeriodoLetivo(pl)\" [ngClass]=\"{'linha-selecionada': pl.id == periodoLetivo.id}\">\n                            <td>{{pl.id}}</td>\n                            <td class=\"celula-trunca-texto\" title=\"{{pl.nome}}\">{{pl.nome}}</td>\n                            <!--td class=\"celula-trunca-texto\" title=\"{{pl.}}\">{{pl.}}</td-->\n                        </tr>\n                    </tbody>\n                    <tfoot class=\"status-tabela\">\n                        <tr *ngIf=\"status == LOADING\"><td colspan=\"3\"><i>Carregando Período Letivos...</i></td></tr>\n                        <tr *ngIf=\"periodoLetivos != null && periodoLetivos.length == 0 && status == COMPLETE\"><td colspan=\"3\"><i>Não Há Período Letivos para serem listados</i></td></tr>\n                        <tr *ngIf=\"status == ERROR\"><td class=\"erro\" colspan=\"3\"><i>Falha na obtenção de Período Letivos!</i></td></tr>\n                    </tfoot>\n                </table>\n            </div>\n        </div>\n        <div class=\"col-md-9\" style=\"padding-left: 0px; \">\n            <div class=\"barra-titulo\">\n                <table class=\"table\">\n                    <tbody>\n                        <tr>\n                            <td colspan=\"3\" class=\"celula-trunca-texto\" style=\"text-align: center;\">\n                                <h4 *ngIf=\"periodoLetivo.id == 0\" style=\"display: inline-block; color: gray;\" title=\"\"><i>Selecione um Período Letivo...</i></h4>\n                                <h4 *ngIf=\"periodoLetivo.id > 0\" style=\"display: inline-block\" title=\"\">Período Letivo: {{periodoLetivo.nome}}</h4>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            <div>\n                <div>\n                    <table class=\"table\" style=\"margin-bottom: 0px\">\n                        <caption>\n                            <table>\n                                <tr>\n                                    <td class=\"col-md-1\"><label for=\"filtro\" class=\"col-md-1 control-label\">Buscar:</label></td>\n                                    <td class=\"col-md-7\"><input id=\"filtro\" type=\"text\" class=\"form-control\" name=\"filtro\" [(ngModel)]=\"criteria\"></td>\n                                </tr>\n                            </table>\n                        </caption>\n                        <colgroup>\n                            <col width=\"40px\"/>\n                            <col width=\"20%\"/>\n                            <col width=\"60%\"/>\n                            <col width=\"20%\"/>\n                            <col width=\"39px\"/>\n                            <col width=\"39px\"/>\n                            <col width=\"15px\"/>\n                        </colgroup>\n                        <thead class=\"thead-light\">\n                            <tr>\n                                <th style=\"text-align: center\">#</th>\n                                <th class=\"celula-trunca-texto\" title=\"FACULDADE\">FACULDADE</th>\n                                <th class=\"celula-trunca-texto\" title=\"CURSO\">CURSO</th>\n                                <th class=\"celula-trunca-texto\" title=\"Categoria ID\">Categoria ID</th>\n                                <th></th>\n                            </tr>\n                        </thead>\n                    </table>\n                </div>\n                <div redimensionar=\"310\" style=\"overflow-y: scroll;\">\n                    <table class=\"table\">\n                        <colgroup>\n                            <col width=\"40px\"/>\n                            <col width=\"20%\"/>\n                            <col width=\"60%\"/>\n                            <col width=\"20%\"/>\n                            <col width=\"39px\"/>\n                            <col width=\"39px\"/>\n                        </colgroup>\n                        <tbody>\n                            <ng-container *ngFor=\"let faculdade of (faculdades | filtroCursos:criteria)\">\n                                <tr *ngFor=\"let curso of faculdade.cursos\" >\n                                    <td></td>\n                                    <td [ngClass]=\"{'celula-desativada' : !faculdade.ativo}\" class=\"celula-trunca-texto\" title=\"{{faculdade.nome}}\">{{faculdade.sigla}}</td>\n                                    <td [ngClass]=\"{'celula-desativada' : !curso.ativo}\" class=\"celula-trunca-texto\" title=\"{{curso.nome}}\">{{curso.nome}}</td>\n                                    <ng-container *ngIf=\"cursoSelecionado.id != curso.id\">\n                                        <td>{{getCategoriaId(curso)}}</td>\n                                        <td class=\"celula-trunca-texto\" title=\"Editar\">\n                                            <button style=\"text-align: center; margin-left: 2px;\" title=\"Editar\" type=\"button\" class=\"btn btn-info botao-reduzido\" (click)=\"selecionarCurso(curso)\" [disabled]=\"!editavel || periodoLetivo.id == 0\">\n                                                <span class=\"glyphicon glyphicon-edit\"></span>\n                                            </button>\n                                        </td>\n                                        <td class=\"celula-trunca-texto\" title=\"Anular\">\n                                            <button style=\"text-align: center; margin-left: 2px;\" title=\"Anular\" type=\"button\" class=\"btn btn-danger botao-reduzido\" (click)=\"anularCategoria(curso)\" [disabled]=\"!editavel || periodoLetivo.id == 0\">\n                                                <span class=\"glyphicon glyphicon-remove\"></span>\n                                            </button>\n                                        </td>\n                                    </ng-container>\n                                    <ng-container *ngIf=\"cursoSelecionado.id == curso.id\">\n                                        <td>\n                                            <input id=\"categoriaIdInput\" class=\"form-control form-control-micro\" [(ngModel)]=\"categoriaIdTemp\">\n                                        </td>\n                                        <td class=\"celula-trunca-texto\" title=\"Concluir Edição\" style=\"text-align: center;\">\n                                            <button style=\"text-align: center; margin-left: 2px;\" title=\"Concluir Edição\" type=\"button\" class=\"btn btn-success botao-reduzido\" (click)=\"concluirEdicaoCategoria(curso)\" [disabled]=\"!editavel || periodoLetivo.id == 0\">\n                                                <span class=\"glyphicon glyphicon-ok\"></span>\n                                            </button>\n                                        </td>\n                                        <td class=\"celula-trunca-texto\" title=\"Cancelar\" style=\"text-align: center;\">\n                                            <button style=\"text-align: center; margin-left: 2px;\" title=\"Cancelar\" type=\"button\" class=\"btn btn-secondary botao-reduzido\" (click)=\"resetCursoSelecionado()\" [disabled]=\"!editavel || periodoLetivo.id == 0\">\n                                                <span class=\"glyphicon glyphicon-retweet\"></span>\n                                            </button>\n                                        </td>\n                                    </ng-container>\n                                </tr>\n                            </ng-container>\n                        </tbody>\n                        <tfoot class=\"status-tabela\">\n                            <tr *ngIf=\"status == LOADING\"><td colspan=\"6\"><i>Carregando Cursos...</i></td></tr>\n                            <tr *ngIf=\"faculdades != null && (faculdades | filtroCursos:criteria).length == 0 && status == COMPLETE\"><td colspan=\"6\"><i>Não Há Cursos para serem listados</i></td></tr>\n                            <tr *ngIf=\"status == ERROR\"><td class=\"erro\" colspan=\"6\"><i>Falha na obtenção de Cursos!</i></td></tr>\n                        </tfoot>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/periodo-letivos-categorias/periodo-letivos-categorias.component.less":
/*!**************************************************************************************!*\
  !*** ./src/app/periodo-letivos-categorias/periodo-letivos-categorias.component.less ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlcmlvZG8tbGV0aXZvcy1jYXRlZ29yaWFzL3BlcmlvZG8tbGV0aXZvcy1jYXRlZ29yaWFzLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/periodo-letivos-categorias/periodo-letivos-categorias.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/periodo-letivos-categorias/periodo-letivos-categorias.component.ts ***!
  \************************************************************************************/
/*! exports provided: PeriodoLetivosCategoriasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeriodoLetivosCategoriasComponent", function() { return PeriodoLetivosCategoriasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstract-component */ "./src/app/abstract-component.ts");
/* harmony import */ var _periodo_letivos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../periodo-letivos.service */ "./src/app/periodo-letivos.service.ts");
/* harmony import */ var _periodo_letivos_categorias_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../periodo-letivos-categorias.service */ "./src/app/periodo-letivos-categorias.service.ts");
/* harmony import */ var _periodo_letivos_periodo_letivo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../periodo-letivos/periodo-letivo */ "./src/app/periodo-letivos/periodo-letivo.ts");
/* harmony import */ var _faculdade_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../faculdade.service */ "./src/app/faculdade.service.ts");
/* harmony import */ var _cursos_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../cursos.service */ "./src/app/cursos.service.ts");
/* harmony import */ var _cursos_curso__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../cursos/curso */ "./src/app/cursos/curso.ts");









var PeriodoLetivosCategoriasComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PeriodoLetivosCategoriasComponent, _super);
    function PeriodoLetivosCategoriasComponent(periodoLetivosService, periodoLetivoCategoriasService, faculdadeService, cursosService) {
        var _this = _super.call(this) || this;
        _this.periodoLetivosService = periodoLetivosService;
        _this.periodoLetivoCategoriasService = periodoLetivoCategoriasService;
        _this.faculdadeService = faculdadeService;
        _this.cursosService = cursosService;
        _this.periodoLetivo = _periodo_letivos_periodo_letivo__WEBPACK_IMPORTED_MODULE_5__["PeriodoLetivo"].generatePeriodoLetivo();
        _this.emAlteracao = false;
        _this.cursoSelecionado = _cursos_curso__WEBPACK_IMPORTED_MODULE_8__["Curso"].generateCurso();
        _this.criteria = "";
        return _this;
    }
    Object.defineProperty(PeriodoLetivosCategoriasComponent.prototype, "periodoLetivos", {
        get: function () {
            return this.periodoLetivosService.periodoLetivos;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PeriodoLetivosCategoriasComponent.prototype, "faculdades", {
        get: function () {
            return this.faculdadeService.faculdades;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PeriodoLetivosCategoriasComponent.prototype, "periodoLetivosCategoriasIndex", {
        get: function () {
            return this.periodoLetivoCategoriasService.periodoLetivosCategoriasIndex;
        },
        enumerable: true,
        configurable: true
    });
    PeriodoLetivosCategoriasComponent.prototype.selecionarPeriodoLetivo = function (pl) {
        this.periodoLetivo = pl;
        this.editavel = false;
        this.getPeriodoLetivosCategorias();
        this.resetCursoSelecionado();
    };
    PeriodoLetivosCategoriasComponent.prototype.getCategoriaId = function (curso) {
        if (this.periodoLetivo.id && curso.id && this.periodoLetivosCategoriasIndex) {
            return this.periodoLetivosCategoriasIndex.get(curso.id).categoria_id;
        }
        return 0;
    };
    PeriodoLetivosCategoriasComponent.prototype.selecionarCurso = function (curso) {
        this.cursoSelecionado = curso;
        this.categoriaIdTemp = this.getCategoriaId(curso);
        setTimeout(function () {
            var categoriaIdInput = document.getElementById('categoriaIdInput');
            categoriaIdInput.focus();
            categoriaIdInput.setSelectionRange(0, (this.categoriaIdTemp + "").length);
        }, 150);
    };
    PeriodoLetivosCategoriasComponent.prototype.anularCategoria = function (curso) {
        var _this = this;
        if (confirm("Confirmar Anulação desta Categoria?") && this.periodoLetivo.id && curso.id && this.periodoLetivosCategoriasIndex) {
            this.editavel = false;
            this.periodoLetivoCategoriasService.setCategoriaId(this.periodoLetivo.id, curso.id, 0)
                .then(function (r) {
                _this.editavel = true;
            }).catch(function (response) {
                _this.erroAviso = true;
                _this.aviso = _this.erroHttp(response);
                alert(_this.aviso);
                _this.resetCursoSelecionado();
                _this.editavel = true;
            });
        }
    };
    PeriodoLetivosCategoriasComponent.prototype.concluirEdicaoCategoria = function (curso) {
        var _this = this;
        if (this.periodoLetivo.id && curso.id && this.periodoLetivosCategoriasIndex) {
            this.editavel = false;
            this.periodoLetivoCategoriasService.setCategoriaId(this.periodoLetivo.id, curso.id, this.categoriaIdTemp)
                .then(function (r) {
                _this.editavel = true;
                _this.resetCursoSelecionado();
            }).catch(function (response) {
                _this.erroAviso = true;
                _this.aviso = _this.erroHttp(response);
                alert(_this.aviso);
                _this.resetCursoSelecionado();
                _this.editavel = true;
            });
        }
    };
    PeriodoLetivosCategoriasComponent.prototype.resetCursoSelecionado = function () {
        this.cursoSelecionado = _cursos_curso__WEBPACK_IMPORTED_MODULE_8__["Curso"].generateCurso();
    };
    PeriodoLetivosCategoriasComponent.prototype.getPeriodoLetivosCategorias = function () {
        var _this = this;
        this.periodoLetivoCategoriasService.getPeriodoLetivosCategrias(this.periodoLetivo.id)
            .then(function (r) {
            _this.editavel = true;
        }).catch(function (response) {
            _this.erroAviso = true;
            _this.aviso = _this.erroHttp(response);
            alert(_this.aviso);
        });
    };
    PeriodoLetivosCategoriasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.faculdadeService.listar()
            .then(function (response) {
            _this.periodoLetivosService.getPeriodoLetivos()
                .then(function (r) {
                _this.status = _this.COMPLETE;
                _this.editavel = true;
            }).catch(function (response) {
                _this.erroAviso = true;
                _this.aviso = _this.erroHttp(response);
                _this.status = _this.ERROR;
                alert(_this.aviso);
            });
        })
            .catch(function (response) {
            _this.erroAviso = true;
            _this.aviso = _this.erroHttp(response);
            _this.status = _this.ERROR;
            alert(_this.aviso);
        });
    };
    PeriodoLetivosCategoriasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-periodo-letivos-categorias',
            template: __webpack_require__(/*! ./periodo-letivos-categorias.component.html */ "./src/app/periodo-letivos-categorias/periodo-letivos-categorias.component.html"),
            styles: [__webpack_require__(/*! ./periodo-letivos-categorias.component.less */ "./src/app/periodo-letivos-categorias/periodo-letivos-categorias.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_periodo_letivos_service__WEBPACK_IMPORTED_MODULE_3__["PeriodoLetivosService"], _periodo_letivos_categorias_service__WEBPACK_IMPORTED_MODULE_4__["PeriodoLetivosCategoriasService"],
            _faculdade_service__WEBPACK_IMPORTED_MODULE_6__["FaculdadeService"], _cursos_service__WEBPACK_IMPORTED_MODULE_7__["CursosService"]])
    ], PeriodoLetivosCategoriasComponent);
    return PeriodoLetivosCategoriasComponent;
}(_abstract_component__WEBPACK_IMPORTED_MODULE_2__["AbstractComponent"]));



/***/ }),

/***/ "./src/app/periodo-letivos.service.ts":
/*!********************************************!*\
  !*** ./src/app/periodo-letivos.service.ts ***!
  \********************************************/
/*! exports provided: PeriodoLetivosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeriodoLetivosService", function() { return PeriodoLetivosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _array_indexador__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./array-indexador */ "./src/app/array-indexador.ts");
/* harmony import */ var _periodo_letivos_periodo_letivo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./periodo-letivos/periodo-letivo */ "./src/app/periodo-letivos/periodo-letivo.ts");





var PeriodoLetivosService = /** @class */ (function () {
    function PeriodoLetivosService(http) {
        this.http = http;
        this.periodoLetivos = [];
        this.periodoLetivosIndex = {};
    }
    PeriodoLetivosService.prototype.getPeriodoLetivos = function () {
        var _this = this;
        return this.http.get("/periodo-letivos/all").toPromise()
            .then(function (response) {
            var pls = response.json();
            _this.periodoLetivos = [];
            _this.periodoLetivosIndex = {};
            for (var i in pls) {
                var pl = new _periodo_letivos_periodo_letivo__WEBPACK_IMPORTED_MODULE_4__["PeriodoLetivo"](pls[i]);
                _this.periodoLetivos.push(pl);
                _this.periodoLetivosIndex[pl.id] = i;
            }
            _this.periodoLetivosIdIndex = new _array_indexador__WEBPACK_IMPORTED_MODULE_3__["ArrayIndexador"](_this.periodoLetivos);
            _this.periodoLetivosKeyIndex = new _array_indexador__WEBPACK_IMPORTED_MODULE_3__["ArrayIndexador"](_this.periodoLetivos, 'id_sigecad');
            _this.periodoLetivosNameIndex = new _array_indexador__WEBPACK_IMPORTED_MODULE_3__["ArrayIndexador"](_this.periodoLetivos, 'nome');
            return _this.periodoLetivos;
        });
    };
    PeriodoLetivosService.prototype.getPeriodoLetivosSigecad = function () {
        return this.http.get("/periodo-letivos/sigecad").toPromise()
            .then(function (response) {
            var pls = response.json();
            var periodoLetivosSigecad = [];
            for (var i in pls) {
                var pl = new _periodo_letivos_periodo_letivo__WEBPACK_IMPORTED_MODULE_4__["PeriodoLetivo"](pls[i]);
                periodoLetivosSigecad.push(pl);
            }
            return periodoLetivosSigecad;
        });
    };
    PeriodoLetivosService.prototype.getPeriodoLetivoIdPadrao = function () {
        return this.http.get("/periodo-letivos/id-padrao").toPromise()
            .then(function (response) {
            return response.json();
        });
    };
    PeriodoLetivosService.prototype.createUpdate = function (pl) {
        var _this = this;
        if (pl.id) {
            return this.http.put("/periodo-letivos/" + pl.id, pl).toPromise()
                .then(function (response) {
                _this.getPeriodoLetivos();
                return response.json();
            });
        }
        else {
            return this.http.post("/periodo-letivos/", pl).toPromise()
                .then(function (response) {
                _this.getPeriodoLetivos();
                return response.json();
            });
        }
    };
    PeriodoLetivosService.prototype.delete = function (pl) {
        var _this = this;
        return this.http.delete("/periodo-letivos/" + pl.id).toPromise()
            .then(function (response) {
            _this.getPeriodoLetivos();
            return response.json();
        });
    };
    PeriodoLetivosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(
        //{providedIn: 'root'}
        ),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], PeriodoLetivosService);
    return PeriodoLetivosService;
}());



/***/ }),

/***/ "./src/app/periodo-letivos/periodo-letivo.ts":
/*!***************************************************!*\
  !*** ./src/app/periodo-letivos/periodo-letivo.ts ***!
  \***************************************************/
/*! exports provided: PeriodoLetivo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeriodoLetivo", function() { return PeriodoLetivo; });
var PeriodoLetivo = /** @class */ (function () {
    function PeriodoLetivo(id, nome, id_sigecad, descricao, sufixo, inicio_auto_increment, ativo) {
        if (typeof id == "number") {
            this.id = id;
            this.nome = nome;
            this.id_sigecad = id_sigecad;
            this.descricao = descricao;
            this.sufixo = sufixo;
            this.inicio_auto_increment = inicio_auto_increment;
            this.ativo = ativo;
        }
        else {
            this.id = parseInt(id['id']);
            this.nome = id['nome'];
            this.id_sigecad = id['id_sigecad'];
            this.descricao = id['descricao'];
            this.sufixo = id['sufixo'];
            this.inicio_auto_increment = id['inicio_auto_increment'];
            this.ativo = id['ativo'];
        }
    }
    PeriodoLetivo.generatePeriodoLetivo = function () {
        return new PeriodoLetivo(0, "", "", "", "", 0, true);
    };
    PeriodoLetivo.prototype.clone = function () {
        return new PeriodoLetivo(this.id, this.nome, this.id_sigecad, this.descricao, this.sufixo, this.inicio_auto_increment, this.ativo);
    };
    return PeriodoLetivo;
}());



/***/ }),

/***/ "./src/app/periodo-letivos/periodo-letivos.component.html":
/*!****************************************************************!*\
  !*** ./src/app/periodo-letivos/periodo-letivos.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-8\" style=\"margin: auto; float: initial;\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">Período Letivos</div>\n            <div>\n                <table class=\"table\" style=\"margin-bottom: 0px\">\n                    <colgroup>\n                        <col width=\"40px\"/>\n                        <col width=\"25%\"/>\n                        <col width=\"150px\"/>\n                        <col width=\"50%\"/>\n                        <col width=\"25%\"/>\n                        <col width=\"180px\"/>\n                        <col width=\"32px\"/>\n                        <col width=\"32px\"/>\n                        <col width=\"15px\"/>\n                    </colgroup>\n                    <thead class=\"thead-light\">\n                        <tr>\n                            <th style=\"text-align: center\">ID</th>\n                            <th class=\"celula-trunca-texto\" title=\"NOME\">NOME</th>\n                            <th class=\"celula-trunca-texto\" style=\"text-align: center;\" title=\"ID do Período Letivo no SIGECAD\">ID SIGECAD</th>\n                            <th class=\"celula-trunca-texto\" title=\"NOME\">DESCRIÇÃO</th>\n                            <th class=\"celula-trunca-texto\" title=\"NOME\">SUFIXO</th>\n                            <th class=\"celula-trunca-texto\" style=\"text-align: center;\" title=\"Referência de Início de IDs de Categorias\">Categorias IDs Início</th>\n                            <th colspan=\"2\" style=\"text-align: center\">AÇÕES</th>\n                            <th></th>\n                        </tr>\n                    </thead>\n                </table>\n            </div>\n            <div redimensionar=\"259\" style=\"overflow-y: scroll;\">\n                <table class=\"table\">\n                    <colgroup>\n                        <col width=\"40px\"/>\n                        <col width=\"25%\"/>\n                        <col width=\"150px\"/>\n                        <col width=\"50%\"/>\n                        <col width=\"25%\"/>\n                        <col width=\"180px\"/>\n                        <col width=\"32px\"/>\n                        <col width=\"32px\"/>\n                    </colgroup>\n                    <tbody>\n                        <tr *ngFor=\"let pl of periodoLetivos\" [ngClass]=\"{'linha-desativada' : !pl.ativo}\">\n                            <td>{{pl.id}}</td>\n                            <td class=\"celula-trunca-texto\" title=\"{{pl.nome}}\">{{pl.nome}}</td>\n                            <td class=\"celula-trunca-texto\" style=\"text-align: center;\" title=\"{{pl.id_sigecad}}\">{{pl.id_sigecad}}</td>\n                            <td class=\"celula-trunca-texto\" title=\"{{pl.descricao}}\">{{pl.descricao}}</td>\n                            <td class=\"celula-trunca-texto\" title=\"{{pl.sufixo}}\">{{pl.sufixo}}</td>\n                            <td class=\"celula-trunca-texto\" style=\"text-align: center;\" title=\"{{pl.inicio_auto_increment}}\">{{pl.inicio_auto_increment}}</td>\n                            <td>\n                                <button style=\"text-align: center; margin-left: -2px;\" title=\"Editar\" type=\"button\" class=\"btn btn-info botao-reduzido\"  data-toggle=\"modal\" data-target=\"#dialogCreate\" (click)=\"selecionaPeriodoLetivo(pl)\">\n                                    <span class=\"glyphicon glyphicon-edit\"></span>\n                                </button>\n                            </td>\n                            <td>\n                                <button style=\"text-align: center; margin-left: -2px;\" title=\"Remover\" type=\"button\" class=\"btn btn-danger botao-reduzido\" (click)=\"removePeriodoLetivo(pl)\">\n                                    <span class=\"glyphicon glyphicon-remove\"></span>\n                                </button>\n                            </td>\n                        </tr>\n                    </tbody>\n                    <tfoot class=\"status-tabela\">\n                        <tr *ngIf=\"status == LOADING\"><td colspan=\"7\"><i>Carregando Período Letivos...</i></td></tr>\n                        <tr *ngIf=\"periodoLetivos != null && periodoLetivos.length == 0 && status == COMPLETE\"><td colspan=\"6\"><i>Não Há Período Letivos para serem listados</i></td></tr>\n                        <tr *ngIf=\"status == ERROR\"><td class=\"erro\" colspan=\"7\"><i>Falha na obtenção de Período Letivos!</i></td></tr>\n                    </tfoot>\n                </table>\n            </div>\n            <div class=\"panel-footer\">\n                <button type=\"button\" class=\"btn btn-primary botao-barra\" data-toggle=\"modal\" data-target=\"#dialogLoadSigecad\" (click)=\"novoPeriodoLetivo()\" [disabled]=\"!editavel\">Novo</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"dialogCreate\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialogCreateTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Período Letivo</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <fieldset>\n                    <form id=\"periodoLetivoForm\" class=\"form-group\" style=\"text-align: left; width: 300px; margin: 15px auto;\" (submit)=\"criaAlteraPeriodoLetivo($event)\">\n                        <div class=\"alert alert-info\" [ngClass]=\"{'alert-info': !erroAviso, 'alert-danger': erroAviso}\" *ngIf=\"aviso\">\n                            <strong *ngIf=\"!erroAviso\">Informação!</strong><strong *ngIf=\"erroAviso\">Falha!</strong> {{aviso}}\n                        </div>\n                        <label class=\"style1\">Nome: *</label><br>\n                        <input class=\"form-control\" type=\"text\" name=\"nome\" placeholder=\"Ano - Semestre\" [(ngModel)]=\"periodoLetivo.nome\" size=\"60\" [disabled]=\"!editavel\" required><p></p>\n\n                        <label class=\"style1\" for=\"id-sigecad\">ID do Período Letivo no SIGECAD: </label><br>\n                        <input class=\"form-control\" type=\"number\" name=\"id-sigecad\" placeholder=\"0\" [(ngModel)]=\"periodoLetivo.id_sigecad\" [disabled]=\"!editavel\" required><p></p>\n                        \n                        <label class=\"style1\">Descrição: </label><br>\n                        <input class=\"form-control\" type=\"text\" name=\"descricao\" placeholder=\"Ex. Regular, Especial, Inverno\" [(ngModel)]=\"periodoLetivo.descricao\" size=\"60\" [disabled]=\"!editavel\"><p></p>\n\n                        <label class=\"style1\">Sufixo: </label><br>\n                        <input class=\"form-control\" type=\"text\" name=\"sufixo\" placeholder=\"(Ano.Semestre)\" [(ngModel)]=\"periodoLetivo.sufixo\" size=\"60\" [disabled]=\"!editavel\"><p></p>\n\n                        <label class=\"style1\" for=\"inicio-auto-increment\">Referência de Início de IDs de Categorias: </label><br>\n                        <input class=\"form-control\" type=\"number\" name=\"inicio-auto-increment\" placeholder=\"0\" [(ngModel)]=\"periodoLetivo.inicio_auto_increment\" [disabled]=\"!editavel\"><p></p>\n\n                        <label class=\"style1\" for=\"pl-ativo\">Ativo: </label><br>\n                        <span class=\"big-check\">\n                            <input  type=\"checkbox\" name=\"pl-ativo\" [(ngModel)]=\"periodoLetivo.ativo\" [disabled]=\"!editavel\">\n                        </span><p></p>\n                    </form>\n                </fieldset>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"submit\" form=\"periodoLetivoForm\" class=\"btn btn-primary botao-barra\"  [disabled]=\"!editavel\">Enviar</button>\n                <button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\">Fechar</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"modal fade\" id=\"dialogLoadSigecad\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialogLoadSigecadTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Período Letivos Atuais no SIGECAD</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <div>\n                    <table class=\"table\" style=\"margin-bottom: 0px\">\n                        <colgroup>\n                            <col width=\"100%\"/>\n                            <col width=\"200px\"/>\n                            <col width=\"100px\"/>\n                            <col width=\"15px\"/>\n                        </colgroup>\n                        <thead class=\"thead-light\">\n                            <tr>\n                                <th class=\"celula-trunca-texto\" title=\"NOME\">NOME</th>\n                                <th style=\"text-align: center\">ID SIGECAD</th>\n                                <th colspan=\"2\" style=\"text-align: center\">SELECIONAR</th>\n                                <th></th>\n                            </tr>\n                        </thead>\n                    </table>\n                </div>\n                <div redimensionar=\"306\" style=\"overflow-y: scroll;\">\n                    <table class=\"table\">\n                        <colgroup>\n                            <col width=\"100%\"/>\n                            <col width=\"200px\"/>\n                            <col width=\"100px\"/>\n                        </colgroup>\n                        <tbody>\n                            <tr *ngFor=\"let pl of periodoLetivosSigecad\">\n                                <td class=\"celula-trunca-texto\" title=\"{{pl.nome}}\">{{pl.nome}}</td>\n                                <td class=\"celula-trunca-texto\" style=\"text-align: center;\" title=\"{{pl.id_sigecad}}\">{{pl.id_sigecad}}</td>\n                                <td style=\"text-align: center;\">\n                                    <button style=\"text-align: center; margin-left: -2px;\" title=\"Selecionar\" type=\"button\" class=\"btn btn-success botao-reduzido\"  data-dismiss=\"modal\" data-toggle=\"modal\" data-target=\"#dialogCreate\" (click)=\"selecionaPeriodoLetivo(pl)\">\n                                        <span class=\"glyphicon glyphicon-check\"></span>\n                                    </button>\n                                </td>\n                            </tr>\n                        </tbody>\n                        <tfoot class=\"status-tabela\">\n                            <tr *ngIf=\"statusPLS == LOADING\"><td colspan=\"3\"><i>Carregando Período Letivos...</i></td></tr>\n                            <tr *ngIf=\"periodoLetivosSigecad != null && periodoLetivosSigecad.length == 0 && statusPLS == COMPLETE\"><td colspan=\"3\"><i>Não Há Carregando Período Letivos para serem listados</i></td></tr>\n                            <tr *ngIf=\"statusPLS == ERROR\"><td class=\"erro\" colspan=\"3\"><i>Falha na obtenção de Período Letivos!</i></td></tr>\n                        </tfoot>\n                    </table>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\">Fechar</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/periodo-letivos/periodo-letivos.component.less":
/*!****************************************************************!*\
  !*** ./src/app/periodo-letivos/periodo-letivos.component.less ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlcmlvZG8tbGV0aXZvcy9wZXJpb2RvLWxldGl2b3MuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/periodo-letivos/periodo-letivos.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/periodo-letivos/periodo-letivos.component.ts ***!
  \**************************************************************/
/*! exports provided: PeriodoLetivosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeriodoLetivosComponent", function() { return PeriodoLetivosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstract-component */ "./src/app/abstract-component.ts");
/* harmony import */ var _periodo_letivos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../periodo-letivos.service */ "./src/app/periodo-letivos.service.ts");
/* harmony import */ var _periodo_letivo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./periodo-letivo */ "./src/app/periodo-letivos/periodo-letivo.ts");





var PeriodoLetivosComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PeriodoLetivosComponent, _super);
    function PeriodoLetivosComponent(periodoLetivosService) {
        var _this = _super.call(this) || this;
        _this.periodoLetivosService = periodoLetivosService;
        _this.periodoLetivo = _periodo_letivo__WEBPACK_IMPORTED_MODULE_4__["PeriodoLetivo"].generatePeriodoLetivo();
        _this.periodoLetivosSigecad = [];
        _this.statusPLS = _this.LOADING;
        return _this;
    }
    Object.defineProperty(PeriodoLetivosComponent.prototype, "periodoLetivos", {
        get: function () {
            return this.periodoLetivosService.periodoLetivos;
        },
        enumerable: true,
        configurable: true
    });
    PeriodoLetivosComponent.prototype.novoPeriodoLetivo = function () {
        this.periodoLetivo = _periodo_letivo__WEBPACK_IMPORTED_MODULE_4__["PeriodoLetivo"].generatePeriodoLetivo();
        this.aviso = "";
        this.erroAviso = false;
        this.carregarListaSigecad();
    };
    PeriodoLetivosComponent.prototype.criaAlteraPeriodoLetivo = function (ev) {
        var _this = this;
        ev.preventDefault();
        var periodoLetivoForm = jQuery('#periodoLetivoForm')[0];
        if (periodoLetivoForm.reportValidity()) {
            this.periodoLetivosService.createUpdate(this.periodoLetivo)
                .then(function (r) {
                jQuery('#dialogCreate').modal('hide');
            }).catch(function (response) {
                _this.erroAviso = true;
                _this.aviso = _this.erroHttp(response);
            });
        }
    };
    PeriodoLetivosComponent.prototype.selecionaPeriodoLetivo = function (pl) {
        this.aviso = "";
        this.erroAviso = false;
        this.periodoLetivo = pl.clone();
    };
    PeriodoLetivosComponent.prototype.removePeriodoLetivo = function (pl) {
        var _this = this;
        if (confirm("Confirmar Exclusão deste Período Letivo")) {
            this.periodoLetivosService.delete(pl)
                .then(function (r) {
            }).catch(function (response) {
                _this.erroAviso = true;
                _this.aviso = _this.erroHttp(response);
                alert(_this.aviso);
            });
        }
    };
    PeriodoLetivosComponent.prototype.carregarListaSigecad = function () {
        var _this = this;
        this.statusPLS = this.LOADING;
        this.periodoLetivosSigecad = [];
        this.periodoLetivosService.getPeriodoLetivosSigecad()
            .then(function (r) {
            _this.statusPLS = _this.COMPLETE;
            _this.periodoLetivosSigecad = r;
            //jQuery('#dialogLoadSigecad').modal('hide');
            //jQuery('#dialogCreate').modal('show');
        }).catch(function (response) {
            _this.erroAviso = true;
            _this.aviso = _this.erroHttp(response);
            _this.statusPLS = _this.ERROR;
            alert(_this.aviso);
        });
    };
    PeriodoLetivosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.periodoLetivosService.getPeriodoLetivos()
            .then(function (r) {
            _this.status = _this.COMPLETE;
            _this.editavel = true;
        }).catch(function (response) {
            _this.erroAviso = true;
            _this.aviso = _this.erroHttp(response);
            _this.status = _this.ERROR;
            alert(_this.aviso);
        });
    };
    PeriodoLetivosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-periodo-letivos',
            template: __webpack_require__(/*! ./periodo-letivos.component.html */ "./src/app/periodo-letivos/periodo-letivos.component.html"),
            styles: [__webpack_require__(/*! ./periodo-letivos.component.less */ "./src/app/periodo-letivos/periodo-letivos.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_periodo_letivos_service__WEBPACK_IMPORTED_MODULE_3__["PeriodoLetivosService"]])
    ], PeriodoLetivosComponent);
    return PeriodoLetivosComponent;
}(_abstract_component__WEBPACK_IMPORTED_MODULE_2__["AbstractComponent"]));



/***/ }),

/***/ "./src/app/pessoas-estatus-lotacao.service.ts":
/*!****************************************************!*\
  !*** ./src/app/pessoas-estatus-lotacao.service.ts ***!
  \****************************************************/
/*! exports provided: PessoasEstatusLotacaoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PessoasEstatusLotacaoService", function() { return PessoasEstatusLotacaoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _arvore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./arvore */ "./src/app/arvore.ts");




var PessoasEstatusLotacaoService = /** @class */ (function () {
    function PessoasEstatusLotacaoService(http) {
        this.http = http;
        this.TIPO_PESSOA_ACADEMICO_GRADUACAO = "academico_graduacao";
        this.TIPO_PESSOA_ACADEMICO_POS = "academico_pos";
        this.TIPO_PESSOA_FUNCIONARIO = "funcionario";
        this.TIPOS_PESSOAS = [
            this.TIPO_PESSOA_ACADEMICO_GRADUACAO,
            this.TIPO_PESSOA_ACADEMICO_POS,
            this.TIPO_PESSOA_FUNCIONARIO
        ];
        this.estatusList = null;
        this.faculdades = [];
        this.cursos = [];
        this.arvoreLotacoes = new _arvore__WEBPACK_IMPORTED_MODULE_3__["Arvore"](0, null);
        this.lotacaoIndexFull = {};
    }
    PessoasEstatusLotacaoService.prototype.getEstatusList = function () {
        var _this_1 = this;
        return this.http.get("/formulario-pessoas-estatus-lotacao/estatus")
            .toPromise()
            .then(function (response) {
            _this_1.estatusList = response.json();
            return _this_1.estatusList;
        });
    };
    PessoasEstatusLotacaoService.prototype.getLotacoesList = function (estatus) {
        var _this_1 = this;
        return this.http.post("/formulario-pessoas-estatus-lotacao/lotacoes", { estatus: estatus })
            .toPromise()
            .then(function (response) {
            var lotacaoIndex = {};
            var lotacoes = response.json();
            if (lotacoes) {
                lotacoes = lotacoes.map(function (e) {
                    var l = e.lotacao.split(" - ");
                    return { caminho: l[0].trim().replace(" ", "/").split("/"), nome: l[1], caminhoFull: l[0].trim() };
                });
            }
            for (var i in lotacoes) {
                lotacoes[i].sigla = lotacoes[i].caminho[0];
                lotacaoIndex[lotacoes[i].caminhoFull] = lotacoes[i];
            }
            _this_1.arvoreLotacoes = _this_1.geraArvoreLotacao(lotacaoIndex);
            return _this_1.arvoreLotacoes;
        });
    };
    PessoasEstatusLotacaoService.prototype.getDescLotacaoNodo = function (lotacaoNodo) {
        if (lotacaoNodo.dado) {
            if (lotacaoNodo.dado.sigla)
                return lotacaoNodo.dado.nome ? lotacaoNodo.dado.sigla + " - " + lotacaoNodo.dado.nome : lotacaoNodo.dado.sigla;
            else
                return lotacaoNodo.dado.nome ? lotacaoNodo.dado.nome : lotacaoNodo.dado.caminho;
        }
        return "null";
    };
    PessoasEstatusLotacaoService.prototype.geraArvoreLotacao = function (lotacaoIndex) {
        var nodoIndex = {};
        var incrementador = 0;
        var _this = this;
        var getCaminhoPars = function (caminho, idPars, caminhoFull) {
            var ret = caminho[idPars];
            for (var i = idPars + 1; i < caminho.length; i++) {
                if (caminhoFull.search(" ") >= 0 && caminhoFull.search(ret + " " + caminho[i]) >= 0)
                    ret += " " + caminho[i];
                else
                    ret += "/" + caminho[i];
            }
            return ret;
        };
        var sortFunctionPorDado = function (a1, a2) {
            var nome1 = _this.getDescLotacaoNodo(a1);
            var nome2 = _this.getDescLotacaoNodo(a2);
            if (nome1.toLowerCase() == nome2.toLowerCase())
                return 0;
            return nome1.toLowerCase() < nome2.toLowerCase() ? -1 : 1;
        };
        var arvoreLotacao = new _arvore__WEBPACK_IMPORTED_MODULE_3__["Arvore"](0, null);
        arvoreLotacao.sortFilhosArray = sortFunctionPorDado;
        for (var caminhoFull in lotacaoIndex) {
            var arvore = arvoreLotacao;
            var caminhoArr = lotacaoIndex[caminhoFull].caminho;
            for (var i = caminhoArr.length - 1; i >= 0; i--) {
                var caminhoPars = getCaminhoPars(caminhoArr, i, caminhoFull);
                var nomeLot = "";
                var siglaLot = "";
                var lotacaoIndexCaminhoPars = this.lotacaoIndexFull[caminhoPars];
                if (lotacaoIndexCaminhoPars) {
                    nomeLot = lotacaoIndexCaminhoPars.nome;
                    siglaLot = lotacaoIndexCaminhoPars.sigla;
                }
                var nodo = nodoIndex[caminhoPars];
                if (nodo) {
                }
                else {
                    incrementador++;
                    nodo = new _arvore__WEBPACK_IMPORTED_MODULE_3__["Arvore"](incrementador, { caminho: caminhoPars, nome: nomeLot, sigla: siglaLot, id: incrementador });
                    nodo.sortFilhosArray = sortFunctionPorDado;
                    nodoIndex[caminhoPars] = nodo;
                }
                arvore.insert(nodo);
                arvore = nodo;
            }
        }
        return arvoreLotacao;
    };
    PessoasEstatusLotacaoService.prototype.getLotacoesFullList = function () {
        var _this_1 = this;
        return this.http.get("/formulario-pessoas-estatus-lotacao/lotacoes-full")
            .toPromise()
            .then(function (response) {
            _this_1.lotacaoIndexFull = {};
            var lotacoes = response.json();
            if (lotacoes) {
                lotacoes = lotacoes.map(function (e) {
                    var l = e.lotacao.split(" - ");
                    //l = l.split(" - ");
                    return { caminho: l[0].trim().replace(" ", "/").split("/"), nome: l[1], caminhoFull: l[0].trim() };
                });
            }
            for (var i in lotacoes) {
                lotacoes[i].sigla = lotacoes[i].caminho[0];
                _this_1.lotacaoIndexFull[lotacoes[i].caminhoFull] = lotacoes[i];
            }
            //this.arvoreLotacoes = this.geraArvoreLotacao(this.lotacaoIndexFull);
            return _this_1.lotacaoIndexFull;
        });
    };
    PessoasEstatusLotacaoService.prototype.getFaculdadesList = function (estatus) {
        var _this_1 = this;
        return this.http.post("/formulario-pessoas-estatus-lotacao/faculdades", { estatus: estatus })
            .toPromise()
            .then(function (response) {
            var faculdades = response.json();
            if (faculdades)
                faculdades = faculdades.map(function (e) { return e.faculdade; });
            _this_1.faculdades = faculdades;
            return faculdades;
        });
    };
    PessoasEstatusLotacaoService.prototype.getCursosFaculdadeList = function (estatus, faculdade) {
        var _this_1 = this;
        return this.http.post("/formulario-pessoas-estatus-lotacao/cursos-faculdade", { estatus: estatus, faculdade: faculdade })
            .toPromise()
            .then(function (response) {
            var cursos = response.json();
            if (cursos)
                cursos = cursos.map(function (e) { return e.lotacao; });
            _this_1.cursos = cursos;
            return cursos;
        });
    };
    PessoasEstatusLotacaoService.prototype.getDadosAcademico = function (estatus, faculdade, curso) {
        return this.http.post("/formulario-pessoas-estatus-lotacao/academico", { estatus: estatus, faculdade: faculdade, curso: curso })
            .toPromise()
            .then(function (response) {
            return response.json();
        });
    };
    PessoasEstatusLotacaoService.prototype.getDadosFuncionario = function (estatus, faculdade, curso) {
        return this.http.post("/formulario-pessoas-estatus-lotacao/funcionario", { estatus: estatus, faculdade: faculdade, curso: curso })
            .toPromise()
            .then(function (response) {
            return response.json();
        });
    };
    PessoasEstatusLotacaoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], PessoasEstatusLotacaoService);
    return PessoasEstatusLotacaoService;
}());



/***/ }),

/***/ "./src/app/pl-disciplinas-academicos.service.ts":
/*!******************************************************!*\
  !*** ./src/app/pl-disciplinas-academicos.service.ts ***!
  \******************************************************/
/*! exports provided: PlDisciplinasAcademicosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlDisciplinasAcademicosService", function() { return PlDisciplinasAcademicosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _pl_disciplinas_academicos_pl_disciplinas_academicos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pl-disciplinas-academicos/pl-disciplinas-academicos */ "./src/app/pl-disciplinas-academicos/pl-disciplinas-academicos.ts");
/* harmony import */ var _array_indexador__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./array-indexador */ "./src/app/array-indexador.ts");
/* harmony import */ var _pl_disciplinas_academicos_estudante__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pl-disciplinas-academicos/estudante */ "./src/app/pl-disciplinas-academicos/estudante.ts");






var PlDisciplinasAcademicosService = /** @class */ (function () {
    //plDisciplinasAcademicosCodigoIndex:ArrayIndexador<PlDisciplinasAcademicos> = null;
    function PlDisciplinasAcademicosService(http) {
        this.http = http;
        this.plDisciplinasAcademicos = [];
        this.plDisciplinasAcademicosIndex = null;
        this.plDisciplinasAcademicosNameIndex = null;
    }
    PlDisciplinasAcademicosService.prototype.getPlDisciplinasAcademicos = function (periodoLetivoId, cursoId, cursosKeyIndex, periodoLetivosNomeIndex) {
        var _this = this;
        return this.http.get("/pl-disciplinas-academicos/find/" + periodoLetivoId + "/" + cursoId).toPromise()
            .then(function (response) {
            if (cursosKeyIndex)
                _this.plDisciplinasAcademicos = _pl_disciplinas_academicos_pl_disciplinas_academicos__WEBPACK_IMPORTED_MODULE_3__["PlDisciplinasAcademicos"].generateListPlus(response.json(), cursosKeyIndex, periodoLetivosNomeIndex);
            else
                _this.plDisciplinasAcademicos = _pl_disciplinas_academicos_pl_disciplinas_academicos__WEBPACK_IMPORTED_MODULE_3__["PlDisciplinasAcademicos"].generateList(response.json());
            _this.plDisciplinasAcademicos = _this.difereTurmas(_this.plDisciplinasAcademicos);
            _this.plDisciplinasAcademicosNameIndex = new _array_indexador__WEBPACK_IMPORTED_MODULE_4__["ArrayIndexador"](_this.plDisciplinasAcademicos, "disciplina");
            //this.plDisciplinasAcademicosNameIndex = new ArrayIndexador<PlDisciplinasAcademicos>(this.plDisciplinasAcademicos,"disciplina_key");
            _this.plDisciplinasAcademicosIndex = new _array_indexador__WEBPACK_IMPORTED_MODULE_4__["ArrayIndexador"](_this.plDisciplinasAcademicos);
            return _this.plDisciplinasAcademicosIndex;
        });
    };
    PlDisciplinasAcademicosService.prototype.difereTurmas = function (plDAList) {
        var indices = {}; //new ArrayIndexador<PlDisciplinasAcademicos>(plDAList, "disciplina");
        var pares = {};
        for (var i = 0; i < plDAList.length; i++) {
            if (indices.hasOwnProperty(plDAList[i]['disciplina'])) {
                if (pares.hasOwnProperty(plDAList[i]['disciplina']))
                    pares[plDAList[i]['disciplina']].push(i);
                else
                    pares[plDAList[i]['disciplina']] = [indices[plDAList[i]['disciplina']], i];
            }
            else
                indices[plDAList[i]['disciplina']] = i;
        }
        for (var j in pares) {
            for (var k in pares[j]) {
                plDAList[pares[j][k]].disciplina = j + " - " + plDAList[pares[j][k]].turma_nome;
            }
        }
        return plDAList;
    };
    PlDisciplinasAcademicosService.prototype.criarAlterarDisciplina = function (plDisciplinasAcademicos) {
        var _this = this;
        var res = function (response) {
            if (plDisciplinasAcademicos.id)
                this.plDisciplinasAcademicos = _pl_disciplinas_academicos_pl_disciplinas_academicos__WEBPACK_IMPORTED_MODULE_3__["PlDisciplinasAcademicos"].generateList(response.json());
            this.plDisciplinasAcademicosIndex = new _array_indexador__WEBPACK_IMPORTED_MODULE_4__["ArrayIndexador"](this.plDisciplinasAcademicos);
            return this.plDisciplinasAcademicosIndex;
        };
        if (plDisciplinasAcademicos.id)
            return this.http.put("/pl-disciplinas-academicos/" + plDisciplinasAcademicos.id, plDisciplinasAcademicos.toForm()).toPromise()
                .then(function (r) {
                var plc = r.json();
                _this.plDisciplinasAcademicosIndex.get(plc.id).disciplina = plc.disciplina;
                return plc.id;
            });
        else
            return this.http.post("/pl-disciplinas-academicos", plDisciplinasAcademicos.toForm()).toPromise()
                .then(function (r) {
                var plc = r.json();
                _this.plDisciplinasAcademicosIndex.add(new _pl_disciplinas_academicos_pl_disciplinas_academicos__WEBPACK_IMPORTED_MODULE_3__["PlDisciplinasAcademicos"](plc.id, plc.curso_id, plc.periodo_letivo_id, plc.disciplina, []));
                console.log(_this.plDisciplinasAcademicos);
                return plc.id;
            });
    };
    PlDisciplinasAcademicosService.prototype.removeDisciplina = function (plcId) {
        var _this = this;
        return this.http.delete("/pl-disciplinas-academicos/" + plcId).toPromise()
            .then(function (response) {
            _this.plDisciplinasAcademicosIndex.remove(plcId);
            return plcId;
        });
    };
    PlDisciplinasAcademicosService.prototype.getEstudantes = function (plDisciplinasAcademicosId, isListaCompleta) {
        return this.http.get("/pl-disciplinas-academicos/estudantes/" + plDisciplinasAcademicosId + (isListaCompleta ? "/" + isListaCompleta : "")).toPromise()
            .then(function (response) {
            var estudantes = _pl_disciplinas_academicos_estudante__WEBPACK_IMPORTED_MODULE_5__["Estudante"].converteJSONParaEstudantes(response.text());
            return estudantes;
        });
    };
    PlDisciplinasAcademicosService.prototype.setEstudantes = function (plDisciplinasAcademicosId, estudantes) {
        return this.http.put("/pl-disciplinas-academicos/estudantes/" + plDisciplinasAcademicosId, { 'estudantes': _pl_disciplinas_academicos_estudante__WEBPACK_IMPORTED_MODULE_5__["Estudante"].converteEstudantesParaJSON(estudantes) }).toPromise()
            .then(function (response) {
            var estudantes = _pl_disciplinas_academicos_estudante__WEBPACK_IMPORTED_MODULE_5__["Estudante"].converteJSONParaEstudantes(response.text());
            return estudantes;
        });
    };
    PlDisciplinasAcademicosService.prototype.uploadFileEstudantes = function (periodoLetivoId, file) {
        var formData = new FormData();
        if (periodoLetivoId && file) {
            formData.append('arquivo', file, file.name);
            return this.http.post("/pl-disciplinas-academicos/estudantes/" + periodoLetivoId, formData).toPromise()
                .then(function (r) {
                return r.json();
            });
        }
    };
    PlDisciplinasAcademicosService.prototype.getCursosSigecad = function (periodoLetivoId) {
        return this.http.get("/pl-disciplinas-academicos/carrega-cursos-sigecad/" + periodoLetivoId).toPromise()
            .then(function (response) {
            return response.json();
        });
    };
    PlDisciplinasAcademicosService.prototype.getDisciplinasCursoSigecad = function (periodoLetivoIdSigecad, siglaFaculdade, codCurso) {
        return this.http.get("/pl-disciplinas-academicos/disciplinas-curso-sigecad/" + periodoLetivoIdSigecad + "/" + siglaFaculdade + "/" + codCurso).toPromise()
            .then(function (response) {
            return response.json();
        });
    };
    PlDisciplinasAcademicosService.prototype.getAcademicosDisciplinasSigecad = function (codDisciplina, periodoLetivoIdSigecad, turmaId, turmaNome, salaId) {
        return this.http.get("/pl-disciplinas-academicos/academicos-disciplinas-sigecad/" + codDisciplina + "/" + periodoLetivoIdSigecad + "/" + turmaId + "/" + turmaNome + "/" + salaId).toPromise()
            .then(function (response) {
            //return response.json();
            var estudantes = _pl_disciplinas_academicos_estudante__WEBPACK_IMPORTED_MODULE_5__["Estudante"].converteJSONParaEstudantes(_pl_disciplinas_academicos_estudante__WEBPACK_IMPORTED_MODULE_5__["Estudante"].converteEstudantesParaJSON(response.json()));
            return estudantes;
        });
    };
    PlDisciplinasAcademicosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], PlDisciplinasAcademicosService);
    return PlDisciplinasAcademicosService;
}());



/***/ }),

/***/ "./src/app/pl-disciplinas-academicos/estudante.ts":
/*!********************************************************!*\
  !*** ./src/app/pl-disciplinas-academicos/estudante.ts ***!
  \********************************************************/
/*! exports provided: Estudante */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Estudante", function() { return Estudante; });
var Estudante = /** @class */ (function () {
    function Estudante(username, email, fullname, is_professor, senha) {
        this.is_professor = false;
        this.username = username;
        this.email = email;
        this.fullname = fullname;
        this.is_professor = is_professor ? is_professor : false;
        this.senha = senha;
    }
    Estudante.prototype.isValid = function () {
        return this.username.length > 0 && this.email.length > 0 && this.fullname.length > 0;
    };
    Estudante.prototype.equals = function (estudante) {
        return this.username == estudante.username &&
            this.email == estudante.email &&
            this.fullname == estudante.fullname &&
            this.is_professor == estudante.is_professor &&
            this.senha == estudante.senha;
    };
    Estudante.processaCSV = function (allText) {
        var allTextLines = allText.split(/\r\n|\n/);
        var headers = allTextLines[0].split(',');
        var linhas = [];
        //linhas.push (headers);
        var i = headers[0] == "username" ? 1 : 0;
        for (; i < allTextLines.length; i++) {
            var data = allTextLines[i].split(',');
            if (data.length == headers.length) {
                var tupla = new Estudante(data[0], data[1], data[2], false);
                linhas.push(tupla);
            }
        }
        return linhas;
    };
    Estudante.converteEstudantesParaJSON = function (estudantes) {
        var linhas = [];
        for (var i = 0; i < estudantes.length; i++) {
            var tupla = [estudantes[i].username, estudantes[i].email, estudantes[i].fullname, estudantes[i].is_professor];
            linhas.push(tupla);
        }
        return JSON.stringify(linhas);
    };
    Estudante.converteJSONParaEstudantes = function (estudantesJSON) {
        var linhas = [];
        if (estudantesJSON) {
            var estudantesArr = JSON.parse(estudantesJSON);
            for (var i = 0; i < estudantesArr.length; i++) {
                var tupla = new Estudante(estudantesArr[i][0], estudantesArr[i][1], estudantesArr[i][2], estudantesArr[i][4]);
                linhas.push(tupla);
            }
        }
        return linhas;
    };
    Estudante.processaCSVcomSenha = function (allText) {
        var allTextLines = allText.split(/\r\n|\n|\r/);
        var headers = allTextLines[0].split(',');
        var linhas = [];
        //linhas.push (headers);
        var i = headers[0] == "username" ? 1 : 0;
        for (; i < allTextLines.length; i++) {
            var data = allTextLines[i].split(',');
            if (data.length == 4) {
                var tupla = new Estudante(data[0], data[1], data[2], false, data[3]);
                linhas.push(tupla);
            }
            if (data.length == 3) {
                var tupla = new Estudante(data[0], data[1], data[2], false, "");
                linhas.push(tupla);
            }
        }
        return linhas;
    };
    Estudante.converteEstudantesParaJSONcomSenha = function (estudantes) {
        var linhas = [];
        for (var i = 0; i < estudantes.length; i++) {
            var tupla = [estudantes[i].username, estudantes[i].email, estudantes[i].fullname, estudantes[i].senha, estudantes[i].is_professor];
            linhas.push(tupla);
        }
        return JSON.stringify(linhas);
    };
    Estudante.converteJSONParaEstudantesComSenha = function (estudantesJSON) {
        var linhas = [];
        if (estudantesJSON) {
            var estudantesArr = JSON.parse(estudantesJSON);
            for (var i = 0; i < estudantesArr.length; i++) {
                var tupla = new Estudante(estudantesArr[i][0], estudantesArr[i][1], estudantesArr[i][2], estudantesArr[i][3], estudantesArr[i][4]);
                linhas.push(tupla);
            }
        }
        return linhas;
    };
    Estudante.converteObjectParaEstudantesComSenha = function (estudantesObj) {
        var estudantes = [];
        for (var i = 0; i < estudantesObj.length; i++) {
            estudantes.push(new Estudante(estudantesObj[i].username, estudantesObj[i].email, estudantesObj[i].fullname, estudantesObj[i].is_professor, estudantesObj[i].senha));
        }
        return estudantes;
    };
    Estudante.generateEstudante = function () {
        return new Estudante("", "", "", false, null);
    };
    return Estudante;
}());



/***/ }),

/***/ "./src/app/pl-disciplinas-academicos/obtem-plda/obtem-plda.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/pl-disciplinas-academicos/obtem-plda/obtem-plda.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<fieldset [disabled]=\"!editavel\">\n    <form id=\"filtrosForm\" class=\"form-horizontal\">\n        <br>\n        <div class=\"form-group\">\n            <label for=\"periodoLetivoFiltro\" class=\"col-md-3 control-label\">Período Letivo:</label>\n            <div class=\"col-md-8\">\n                <table>\n                    <colgroup>\n                        <col width=\"100%\"/>\n                        <col width=\"269px\">\n                    </colgroup>\n                    <tr>\n                        <td>\n                            <select class=\"form-control\" id=\"periodoLetivoFiltro\" name=\"periodo-letivo\" [(ngModel)]=\"periodoLetivoSelecionadoId\" (change)=\"selecionaPeriodoLetivo()\" required>   \n                                <option hidden disabled selected value> -- Selecione -- </option> \n                                <option *ngFor=\"let p of periodoLetivos\" [value]=\"p.id\">{{p.nome}}</option>       \n                            </select>\n                        </td>\n                    </tr>\n                </table>\n            </div>\n            \n        </div>\n        <div class=\"form-group\">\n            <label for=\"faculdadeFiltro\" class=\"col-md-3 control-label\">Faculdade:</label>\n            <div class=\"col-md-8\">\n                <ng-container *ngIf=\"!periodoLetivoSelecionadoId\">\n                    <select class=\"form-control\" id=\"faculdadeFiltro\" name=\"faculdadeFiltro\"  disabled >   \n                        <option hidden disabled selected value> -- </option>\n                    </select>\n                </ng-container>\n                <ng-container *ngIf=\"periodoLetivoSelecionadoId && faculdades.length == 0\">\n                    <select class=\"form-control\" id=\"faculdadeFiltro\" name=\"faculdadeFiltro\"  disabled >   \n                        <option hidden disabled selected value> -- Não há Faculdades para serem selecionadas -- </option>\n                    </select>\n                </ng-container>\n                <ng-container *ngIf=\"periodoLetivoSelecionadoId && faculdades.length > 0\">\n                    <select class=\"form-control\" id=\"faculdadeFiltro\" name=\"faculdadeFiltro\" [(ngModel)]=\"faculdadeSelecionadaId\" (change)=\"selecionaFaculdade()\" required>   \n                        <option hidden disabled selected value> -- Selecione -- </option>                \n                        <option *ngFor=\"let f of faculdades\" [value]=\"f.id\">{{f.sigla}}</option>\n                    </select>\n                </ng-container>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"cursoFiltro\" class=\"col-md-3 control-label\">Curso:</label>\n            <div class=\"col-md-8\">\n                <ng-container *ngIf=\"!faculdadeSelecionadaId\">\n                    <select class=\"form-control\" id=\"cursoFiltro\" name=\"curso\"  disabled >   \n                        <option hidden disabled selected value> -- </option>\n                    </select>\n                </ng-container>\n                <ng-container *ngIf=\"faculdadeSelecionadaId && faculdadeTemp.cursos.length == 0\">\n                    <select class=\"form-control\" id=\"cursoFiltro\" name=\"curso\"  disabled >   \n                        <option hidden disabled selected value> -- Não há Cursos para serem selecionados -- </option>\n                    </select>\n                </ng-container>\n                <ng-container *ngIf=\"faculdadeSelecionadaId && faculdadeTemp.cursos.length > 0\">\n                    <select class=\"form-control\" id=\"cursoFiltro\" name=\"curso\"  [(ngModel)]=\"cursoSelecionadoId\" (change)=\"selecionaCurso()\" required>   \n                        <option hidden disabled selected value> -- Selecione -- </option>                    \n                        <option *ngFor=\"let c of faculdadeTemp.cursos\" [value]=\"c.id\">{{c.curso_key + \" - \" + c.nome}}</option>\n                    </select>\n                </ng-container>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"diciplinaFiltro\" class=\"col-md-3 control-label\">Disciplina:</label>\n            <div class=\"col-md-8\">\n                <table>\n                    <colgroup>\n                        <col width=\"100%\"/>\n                        <col width=\"269px\">\n                    </colgroup>\n                    <tr>\n                        <td>\n                            <ng-container *ngIf=\"!cursoSelecionadoId\">\n                                <select class=\"form-control\" id=\"diciplinaFiltro\" name=\"disciplinaFiltro\"  disabled >   \n                                    <option hidden disabled selected value> -- </option>\n                                </select>\n                            </ng-container>\n                            <ng-container *ngIf=\"!carregandoEstudantesFlag && cursoSelecionadoId && plDisciplinasAcademicos.length == 0\">\n                                <select class=\"form-control\" id=\"diciplinaFiltro\" name=\"diciplinaFiltro\"  disabled >   \n                                    <option hidden disabled selected value> -- Não há Disciplinas para serem selecionadas -- </option>\n                                </select>\n                            </ng-container>\n                            <ng-container *ngIf=\"carregandoEstudantesFlag && cursoSelecionadoId && plDisciplinasAcademicos.length == 0\">\n                                <select class=\"form-control\" id=\"diciplinaFiltro\" name=\"diciplinaFiltro\"  disabled >   \n                                    <option hidden disabled selected value> -- Carregando... -- </option>\n                                </select>\n                            </ng-container>\n                            <ng-container *ngIf=\"cursoSelecionadoId && plDisciplinasAcademicos.length > 0 && !modoLista\">\n                                <select name=\"diciplinaFiltro\" id=\"diciplinaFiltro\" class=\"form-control\" [(ngModel)]=\"disciplinaSelecionadaNome\" (change)=\"selecionaDisciplina()\">\n                                    <option hidden disabled selected value> -- Selecione -- </option>\n                                    <option *ngFor=\"let d of plDisciplinasAcademicos\" [value]=\"d.disciplina\">{{d.disciplina}}</option>\n                                </select>\n                            </ng-container>\n                            <ng-container *ngIf=\"cursoSelecionadoId && plDisciplinasAcademicos.length > 0 && modoLista\">\n                                <select name=\"diciplinaFiltro\" id=\"diciplinaFiltro\" class=\"form-control\" [(ngModel)]=\"disciplinaSelecionadaNomes\" (change)=\"selecionaDisciplina()\" multiple>\n                                    <option *ngFor=\"let d of plDisciplinasAcademicos\" [value]=\"d.disciplina\">{{d.disciplina}}</option>\n                                </select>\n                            </ng-container>\n                        </td>\n                    </tr>\n                </table>\n                \n            </div>\n        </div>\n    </form>\n</fieldset>"

/***/ }),

/***/ "./src/app/pl-disciplinas-academicos/obtem-plda/obtem-plda.component.less":
/*!********************************************************************************!*\
  !*** ./src/app/pl-disciplinas-academicos/obtem-plda/obtem-plda.component.less ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsLWRpc2NpcGxpbmFzLWFjYWRlbWljb3Mvb2J0ZW0tcGxkYS9vYnRlbS1wbGRhLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/pl-disciplinas-academicos/obtem-plda/obtem-plda.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pl-disciplinas-academicos/obtem-plda/obtem-plda.component.ts ***!
  \******************************************************************************/
/*! exports provided: ObtemPldaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObtemPldaComponent", function() { return ObtemPldaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_abstract_component_child__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/abstract-component-child */ "./src/app/abstract-component-child.ts");
/* harmony import */ var src_app_cursos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/cursos.service */ "./src/app/cursos.service.ts");
/* harmony import */ var src_app_faculdade_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/faculdade.service */ "./src/app/faculdade.service.ts");
/* harmony import */ var src_app_faculdades_faculdade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/faculdades/faculdade */ "./src/app/faculdades/faculdade.ts");
/* harmony import */ var src_app_periodo_letivos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/periodo-letivos.service */ "./src/app/periodo-letivos.service.ts");
/* harmony import */ var src_app_pl_disciplinas_academicos_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pl-disciplinas-academicos.service */ "./src/app/pl-disciplinas-academicos.service.ts");
/* harmony import */ var _estudante__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../estudante */ "./src/app/pl-disciplinas-academicos/estudante.ts");
/* harmony import */ var _pl_disciplinas_academicos__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pl-disciplinas-academicos */ "./src/app/pl-disciplinas-academicos/pl-disciplinas-academicos.ts");










var ObtemPldaComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ObtemPldaComponent, _super);
    function ObtemPldaComponent(periodoLetivosService, plDisciplinasAcademicosService, faculdadeService, cursosService) {
        var _this = _super.call(this) || this;
        _this.periodoLetivosService = periodoLetivosService;
        _this.plDisciplinasAcademicosService = plDisciplinasAcademicosService;
        _this.faculdadeService = faculdadeService;
        _this.cursosService = cursosService;
        _this.estudantes = [];
        _this.estudanteTemp = _estudante__WEBPACK_IMPORTED_MODULE_8__["Estudante"].generateEstudante();
        _this.faculdadeTemp = src_app_faculdades_faculdade__WEBPACK_IMPORTED_MODULE_5__["Faculdade"].generateFaculdade();
        _this.nomeDisciplinaTemp = "";
        _this.disciplinaKeyTemp = "";
        _this.carregandoEstudantesFlag = false;
        _this.plus = false;
        return _this;
    }
    Object.defineProperty(ObtemPldaComponent.prototype, "periodoLetivos", {
        get: function () {
            return this.periodoLetivosService.periodoLetivos;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObtemPldaComponent.prototype, "faculdades", {
        get: function () {
            return this.faculdadeService.faculdades;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObtemPldaComponent.prototype, "plDisciplinasAcademicos", {
        get: function () {
            return this.plDisciplinasAcademicosService.plDisciplinasAcademicos;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObtemPldaComponent.prototype, "plDisciplinasAcademicosTemp", {
        get: function () {
            return this.ancestral.plDisciplinasAcademicosTemp;
        },
        set: function (plDisciplinasAcademicos) {
            this.ancestral.plDisciplinasAcademicosTemp = plDisciplinasAcademicos;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObtemPldaComponent.prototype, "plDisciplinasAcademicosTempList", {
        get: function () {
            return this.ancestral.plDisciplinasAcademicosTempList;
        },
        set: function (plDisciplinasAcademicosList) {
            this.ancestral.plDisciplinasAcademicosTempList = plDisciplinasAcademicosList;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObtemPldaComponent.prototype, "modoLista", {
        get: function () {
            return this.ancestral.modoLista;
        },
        set: function (modoLista) {
            this.ancestral.modoLista = modoLista;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObtemPldaComponent.prototype, "periodoLetivoSelecionadoId", {
        get: function () {
            return this.ancestral.periodoLetivoSelecionadoId;
        },
        set: function (p) {
            this.ancestral.periodoLetivoSelecionadoId = p;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObtemPldaComponent.prototype, "cursoSelecionadoId", {
        get: function () {
            return this.ancestral.cursoSelecionadoId;
        },
        set: function (cursoId) {
            this.ancestral.cursoSelecionadoId = cursoId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObtemPldaComponent.prototype, "faculdadeSelecionadaId", {
        get: function () {
            return this.ancestral.faculdadeSelecionadaId;
        },
        set: function (faculdadeId) {
            this.ancestral.faculdadeSelecionadaId = faculdadeId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObtemPldaComponent.prototype, "disciplinaSelecionadaNome", {
        get: function () {
            return this.ancestral.disciplinaSelecionadaNome;
        },
        set: function (nomeDisciplina) {
            this.ancestral.disciplinaSelecionadaNome = nomeDisciplina;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObtemPldaComponent.prototype, "disciplinaSelecionadaNomes", {
        get: function () {
            return this.ancestral.disciplinaSelecionadaNomes;
        },
        set: function (nomeDisciplinas) {
            this.ancestral.disciplinaSelecionadaNomes = nomeDisciplinas;
        },
        enumerable: true,
        configurable: true
    });
    ObtemPldaComponent.prototype.selecionaPeriodoLetivo = function () {
        if (this.periodoLetivoSelecionadoId) {
            this.faculdadeTemp = src_app_faculdades_faculdade__WEBPACK_IMPORTED_MODULE_5__["Faculdade"].generateFaculdade();
            this.faculdadeSelecionadaId = "";
            this.cursoSelecionadoId = "";
            this.disciplinaSelecionadaNome = "";
            this.plDisciplinasAcademicosTemp = _pl_disciplinas_academicos__WEBPACK_IMPORTED_MODULE_9__["PlDisciplinasAcademicos"].generatePlDisciplinasAcademicos();
            this.nomeDisciplinaTemp = "";
        }
    };
    ObtemPldaComponent.prototype.selecionaFaculdade = function () {
        if (this.faculdadeSelecionadaId) {
            this.faculdadeTemp = this.faculdadeService.faculdadesIndex.get(this.faculdadeSelecionadaId);
            this.cursoSelecionadoId = "";
            this.disciplinaSelecionadaNome = "";
            this.plDisciplinasAcademicosTemp = _pl_disciplinas_academicos__WEBPACK_IMPORTED_MODULE_9__["PlDisciplinasAcademicos"].generatePlDisciplinasAcademicos();
            this.nomeDisciplinaTemp = "";
        }
    };
    ObtemPldaComponent.prototype.selecionaCurso = function () {
        var _this = this;
        if (this.cursoSelecionadoId) {
            this.disciplinaSelecionadaNome = "";
            this.plDisciplinasAcademicosTemp = _pl_disciplinas_academicos__WEBPACK_IMPORTED_MODULE_9__["PlDisciplinasAcademicos"].generatePlDisciplinasAcademicos();
            this.nomeDisciplinaTemp = "";
            this.editavel = false;
            this.carregandoEstudantesFlag = true;
            this.plDisciplinasAcademicosService.getPlDisciplinasAcademicos(this.periodoLetivoSelecionadoId, this.cursoSelecionadoId, this.plus ? this.cursosService.cursosKeyIndex : null, this.plus ? this.periodoLetivosService.periodoLetivosNameIndex : null)
                .then(function (r) {
                _this.editavel = true;
                _this.carregandoEstudantesFlag = false;
            }).catch(function (response) {
                _this.erroAviso = true;
                _this.aviso = _this.erroHttp(response);
                alert(_this.aviso);
                _this.editavel = true;
                _this.carregandoEstudantesFlag = false;
            });
        }
    };
    ObtemPldaComponent.prototype.selecionaDisciplina = function () {
        if (this.modoLista) {
            this.plDisciplinasAcademicosTempList = [];
            if (this.disciplinaSelecionadaNomes.length)
                for (var i in this.disciplinaSelecionadaNomes)
                    this.plDisciplinasAcademicosTempList.push(this.plDisciplinasAcademicosService.plDisciplinasAcademicosNameIndex.get(this.disciplinaSelecionadaNomes[i]));
        }
        else if (this.disciplinaSelecionadaNome)
            this.plDisciplinasAcademicosTemp = this.plDisciplinasAcademicosService.plDisciplinasAcademicosNameIndex.get(this.disciplinaSelecionadaNome);
        else
            this.plDisciplinasAcademicosTemp = _pl_disciplinas_academicos__WEBPACK_IMPORTED_MODULE_9__["PlDisciplinasAcademicos"].generatePlDisciplinasAcademicos();
    };
    ObtemPldaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.faculdadeService.listar()
            .then(function (response) {
            _this.periodoLetivosService.getPeriodoLetivos()
                .then(function (r) {
                _this.status = _this.COMPLETE;
                _this.editavel = true;
            }).catch(function (response) {
                _this.erroAviso = true;
                _this.aviso = _this.erroHttp(response);
                _this.status = _this.ERROR;
                alert(_this.aviso);
            });
        })
            .catch(function (response) {
            _this.erroAviso = true;
            _this.aviso = _this.erroHttp(response);
            _this.status = _this.ERROR;
            alert(_this.aviso);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ObtemPldaComponent.prototype, "plus", void 0);
    ObtemPldaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-obtem-plda',
            template: __webpack_require__(/*! ./obtem-plda.component.html */ "./src/app/pl-disciplinas-academicos/obtem-plda/obtem-plda.component.html"),
            styles: [__webpack_require__(/*! ./obtem-plda.component.less */ "./src/app/pl-disciplinas-academicos/obtem-plda/obtem-plda.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_periodo_letivos_service__WEBPACK_IMPORTED_MODULE_6__["PeriodoLetivosService"], src_app_pl_disciplinas_academicos_service__WEBPACK_IMPORTED_MODULE_7__["PlDisciplinasAcademicosService"],
            src_app_faculdade_service__WEBPACK_IMPORTED_MODULE_4__["FaculdadeService"], src_app_cursos_service__WEBPACK_IMPORTED_MODULE_3__["CursosService"]])
    ], ObtemPldaComponent);
    return ObtemPldaComponent;
}(src_app_abstract_component_child__WEBPACK_IMPORTED_MODULE_2__["AbstractComponentChild"]));



/***/ }),

/***/ "./src/app/pl-disciplinas-academicos/pl-disciplinas-academicos.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/pl-disciplinas-academicos/pl-disciplinas-academicos.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-8\" style=\"margin: auto; float: initial;\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">Disciplinas e Estudantes</div>\n            <fieldset [disabled]=\"!editavel\">\n                <form id=\"filtrosForm\" class=\"form-horizontal\">\n                    <br>\n                    <div class=\"form-group\">\n                        <label for=\"periodoLetivoFiltro\" class=\"col-md-3 control-label\">Período Letivo:</label>\n                        <div class=\"col-md-8\">\n                            <table>\n                                <colgroup>\n                                    <col width=\"100%\"/>\n                                    <col width=\"269px\">\n                                </colgroup>\n                                <tr>\n                                    <td>\n                                        <select class=\"form-control\" id=\"periodoLetivoFiltro\" name=\"periodo-letivo\" [(ngModel)]=\"periodoLetivoSelecionadoId\" (change)=\"selecionaPeriodoLetivo()\" required>   \n                                            <option hidden disabled selected value> -- Selecione -- </option> \n                                            <option *ngFor=\"let p of periodoLetivos\" [value]=\"p.id\">{{p.nome}}</option>       \n                                        </select>\n                                    </td>\n                                    <td>\n                                        <button style=\"margin-left: 10px; width: 170px;\" type=\"button\" class=\"btn btn-warning\" data-toggle=\"modal\" data-target=\"#dialogImportacao\" (click)=\"preparaDialogImportacao()\" [disabled]=\"!editavel\">Importação de Dados</button>\n                                    </td>\n                                </tr>\n                            </table>\n                        </div>\n                        \n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"faculdadeFiltro\" class=\"col-md-3 control-label\">Faculdade:</label>\n                        <div class=\"col-md-8\">\n                            <ng-container *ngIf=\"!periodoLetivoSelecionadoId\">\n                                <select class=\"form-control\" id=\"faculdadeFiltro\" name=\"faculdadeFiltro\"  disabled >   \n                                    <option hidden disabled selected value> -- </option>\n                                </select>\n                            </ng-container>\n                            <ng-container *ngIf=\"periodoLetivoSelecionadoId && faculdades.length == 0\">\n                                <select class=\"form-control\" id=\"faculdadeFiltro\" name=\"faculdadeFiltro\"  disabled >   \n                                    <option hidden disabled selected value> -- Não há Faculdades para serem selecionadas -- </option>\n                                </select>\n                            </ng-container>\n                            <ng-container *ngIf=\"periodoLetivoSelecionadoId && faculdades.length > 0\">\n                                <select class=\"form-control\" id=\"faculdadeFiltro\" name=\"faculdadeFiltro\" [(ngModel)]=\"faculdadeSelecionadaId\" (change)=\"selecionaFaculdade()\" required>   \n                                    <option hidden disabled selected value> -- Selecione -- </option>                \n                                    <option *ngFor=\"let f of faculdades\" [value]=\"f.id\">{{f.sigla}}</option>\n                                </select>\n                            </ng-container>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"cursoFiltro\" class=\"col-md-3 control-label\">Curso:</label>\n                        <div class=\"col-md-8\">\n                            <ng-container *ngIf=\"!faculdadeSelecionadaId\">\n                                <select class=\"form-control\" id=\"cursoFiltro\" name=\"curso\"  disabled >   \n                                    <option hidden disabled selected value> -- </option>\n                                </select>\n                            </ng-container>\n                            <ng-container *ngIf=\"faculdadeSelecionadaId && faculdadeTemp.cursos.length == 0\">\n                                <select class=\"form-control\" id=\"faculdadeFiltro\" name=\"faculdadeFiltro\"  disabled >   \n                                    <option hidden disabled selected value> -- Não há Cursos para serem selecionados -- </option>\n                                </select>\n                            </ng-container>\n                            <ng-container *ngIf=\"faculdadeSelecionadaId && faculdadeTemp.cursos.length > 0\">\n                                <select class=\"form-control\" id=\"cursoFiltro\" name=\"curso\"  [disabled]=\"!editavel\" [(ngModel)]=\"cursoSelecionadoId\" (change)=\"selecionaCurso()\" required>   \n                                    <option hidden disabled selected value> -- Selecione -- </option>                    \n                                    <option *ngFor=\"let c of faculdadeTemp.cursos\" [value]=\"c.id\">{{c.curso_key + \" - \" + c.nome}}</option>\n                                </select>\n                            </ng-container>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"diciplinaFiltro\" class=\"col-md-3 control-label\">Disciplina:</label>\n                        <div class=\"col-md-8\">\n                            <table>\n                                <colgroup>\n                                    <col width=\"100%\"/>\n                                    <col width=\"269px\">\n                                </colgroup>\n                                <tr>\n                                    <td>\n                                        <ng-container *ngIf=\"!cursoSelecionadoId\">\n                                            <select class=\"form-control\" id=\"diciplinaFiltro\" name=\"disciplinaFiltro\"  disabled >   \n                                                <option hidden disabled selected value> -- </option>\n                                            </select>\n                                        </ng-container>\n                                        <ng-container *ngIf=\"cursoSelecionadoId && plDisciplinasAcademicos.length == 0\">\n                                            <select class=\"form-control\" id=\"diciplinaFiltro\" name=\"diciplinaFiltro\"  disabled >   \n                                                <option hidden disabled selected value> -- Não há Disciplinas para serem selecionadas -- </option>\n                                            </select>\n                                        </ng-container>\n                                        <ng-container *ngIf=\"cursoSelecionadoId && plDisciplinasAcademicos.length > 0\">\n                                            <select name=\"diciplinaFiltro\" id=\"diciplinaFiltro\" class=\"form-control\" [(ngModel)]=\"disciplinaSelecionadaId\" (change)=\"selecionaDisciplina()\"  [disabled]=\"!editavel\">\n                                                <option hidden disabled selected value> -- Selecione -- </option>\n                                                <option *ngFor=\"let d of plDisciplinasAcademicos\" [value]=\"d.id\">{{d.disciplina}}</option>\n                                            </select>\n                                        </ng-container>\n                                    </td>\n                                    <td>\n                                        <button style=\"margin-left: 10px; width: 170px;\" type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#dialogDisciplina\" (click)=\"preparaCriaAlteraDisciplina()\" [disabled]=\"!editavel || !cursoSelecionadoId\">{{disciplinaSelecionadaId ? 'Editar Disciplina' : 'Nova Disciplina'}}</button>\n                                    </td>\n                                </tr>\n                            </table>\n                            \n                        </div>\n                    </div>\n                    <div class=\"form-group\" *ngIf=\"disciplinaSelecionadaId\">\n                        <label class=\"col-md-3 control-label\">Estudantes:</label>\n                    </div>\n                    <ng-container *ngIf=\"disciplinaSelecionadaId\">\n                        <div>\n                            <table class=\"table\">\n                                <colgroup>\n                                    <col width=\"33%\"/>\n                                    <col width=\"33%\"/>\n                                    <col width=\"34%\"/>\n                                    <col width=\"36px\"/>\n                                    <col width=\"17px\"/>\n                                </colgroup>\n                                <thead class=\"thead-light\">\n                                    <tr>\n                                        <th>USER</th>\n                                        <th>EMAIL</th>\n                                        <th>NOME</th>\n                                        <th>\n                                            <button style=\"text-align: center;\" title=\"Limpar Todos\" type=\"button\" class=\"btn btn-danger botao-reduzido\" (click)=\"limparEstudantes()\"  [disabled]=\"!editavel || estudantes.length == 0\">\n                                                <span class=\"glyphicon glyphicon-trash\"></span>\n                                            </button>\n                                        </th>\n                                    </tr>\n                                </thead>\n                            </table>\n                            <div [redimensionar]=\"520\" style=\"overflow-y: scroll; min-height: 120px;\">\n                                <table class=\"table\">\n                                    <colgroup>\n                                        <col width=\"33%\"/>\n                                        <col width=\"33%\"/>\n                                        <col width=\"34%\"/>\n                                        <col width=\"36px\"/>\n                                    </colgroup>\n                                    <tbody>\n                                        <tr *ngIf=\"estudantes.length == 0\"><td colspan=\"4\" style=\"color: gray; text-align: center;\"><i>Não há Estudantes para Serem Listados</i></td></tr>\n                                        <tr *ngFor=\"let e of estudantes\">\n                                            <td class=\"celula-trunca-texto\" title=\"{{e.username}}\">{{e.username}}</td>\n                                            <td class=\"celula-trunca-texto\" title=\"{{e.email}}\">{{e.email}}</td>\n                                            <td class=\"celula-trunca-texto\" title=\"{{e.fullname}}\">{{e.fullname}}</td>\n                                            <td>\n                                                <button style=\"text-align: center;\" title=\"Remover\" type=\"button\" class=\"btn btn-danger botao-reduzido\" (click)=\"removerEstudante(e)\"  [disabled]=\"!editavel\">\n                                                    <span class=\"glyphicon glyphicon-remove\"></span>\n                                                </button>\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                            <div class=\"panel-footer\">\n                                <button  title=\"Adicionar Estudante\" style=\"width: 170px;\" type=\"button\" data-toggle=\"modal\" data-target=\"#dialogEstudante\" class=\"btn btn-primary\" [disabled]=\"!editavel\">Adicionar Estudante</button>\n                            </div>\n                        </div>\n                    </ng-container>\n                </form>\n            </fieldset>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"dialogEstudante\" tabindex=\"-1\" role=\"dialog\" data-backdrop=\"static\" aria-labelledby=\"dialogEstudanteTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\">Estudante</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\" style=\"width: 350px;\">\n                <label class=\"style1\">Usuário</label><br>\n                <input class=\"form-control\" type=\"text\" name=\"username\" placeholder=\"11122233344\" [(ngModel)]=\"estudanteTemp.username\"><p></p>\n\n                <label class=\"style1\">E-mail: *</label><br>\n                <input class=\"form-control\" type=\"email\" name=\"email\" placeholder=\"user@email.com\" [(ngModel)]=\"estudanteTemp.email\"><p></p>\n\n                <label class=\"style1\">Nome Completo: *</label><br>\n                <input class=\"form-control\" type=\"text\" name=\"fullname\" placeholder=\"Fulano da Silva\" [(ngModel)]=\"estudanteTemp.fullname\"><p></p>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-primary botao-barra\" (click)=\"adicionarEstudante()\">Adicionar</button>\n                <button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\">Fechar</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"dialogImportacao\" tabindex=\"-1\" role=\"dialog\" data-backdrop=\"static\" aria-labelledby=\"dialogImportacaoTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\">Importação de Dados</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\" style=\"width: 350px;\">\n                <div class=\"alert alert-info\" [ngClass]=\"{'alert-info': !erroAviso, 'alert-danger': erroAviso}\" *ngIf=\"aviso\">\n                    <strong *ngIf=\"!erroAviso\">Informação!</strong><strong *ngIf=\"erroAviso\">Falha!</strong> {{aviso}}\n                </div>\n                <label for=\"periodoLetivoFiltroSel\" class=\"control-label\">Período Letivo: *</label>\n                <select class=\"form-control\" id=\"periodoLetivoFiltroSel\" name=\"periodo-letivo\" [(ngModel)]=\"periodoLetivoSelecionadoId\" (change)=\"selecionaPeriodoLetivo()\" required>   \n                    <option hidden disabled selected value> -- Selecione -- </option> \n                    <option *ngFor=\"let p of periodoLetivos\" [value]=\"p.id\">{{p.nome}}</option>       \n                </select>\n                <br>\n                <label for=\"tipoImportFiltroSel\" class=\"control-label\">Modo de Imortação: *</label>\n                <select id=\"tipoImportFiltroSel\" name=\"tipoImportFiltroSel\" class=\"form-control\" [(ngModel)]=\"tipoImportFiltro\">\n                    <option hidden disabled selected value> -- Selecione -- </option> \n                    <option *ngFor=\"let t of TIPOS_IMPORT_FILTRO\" [value]=\"t.key\">{{t.nome}}</option>  \n                </select>\n                <br>\n                <ng-container *ngIf=\"tipoImportFiltro == 'CURSOS_SIGECAD'\">\n                    <button type=\"button\" class=\"btn btn-primary form-control\" (click)=\"importarCursosSigecad()\">Importar Cursos do SIGECAD</button>\n                </ng-container>\n                <ng-container *ngIf=\"tipoImportFiltro == 'DISCIPLINAS_SIGECAD'\">\n                    <button type=\"button\" class=\"btn btn-primary form-control\" (click)=\"importarDisciplinasSigecad()\" >Importar Disciplinas do SIGECAD</button>\n                </ng-container>\n                <ng-container *ngIf=\"tipoImportFiltro == 'UPLOAD'\">\n                    <label class=\"style1\">Upload de Arquivo:</label> \n                    <button data-toggle=\"modal\" data-target=\"#dialogAjudaUpload\" class=\"btn btn-info botao-tooltip\"><span class=\"glyphicon glyphicon-info-sign\"></span></button>\n                    <p-fileUpload #uploador name=\"uploadEstudantes\" styleClass=\"ui-fileupload-override\" chooseLabel=\"Adicionar\" cancelLabel=\"Cancelar\"\n                        (onSelect)=\"onSelectFile()\" (onRemove)=\"onCancelFile()\" (onClear)=\"onCancelFile()\"  [showUploadButton]=\"false\"\n                        customUpload=\"true\" [disabled]=\"!editavel || !periodoLetivoSelecionadoId\"></p-fileUpload>\n                </ng-container>\n                \n            </div>\n            <div class=\"modal-footer\">\n                <button *ngIf=\"tipoImportFiltro == 'UPLOAD'\" type=\"button\" class=\"btn btn-primary botao-barra\" (click)=\"uploadArquivoEstudantes()\" [disabled]=\"!editavel || !periodoLetivoSelecionadoId || !fileTemp\">Executar</button>\n                <button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\">Fechar</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"modal fade\" id=\"dialogDisciplina\" tabindex=\"-1\" role=\"dialog\" data-backdrop=\"static\" aria-labelledby=\"dialogDisciplinaTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\">Disciplina</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\" style=\"width: 350px;\">\n                <label class=\"style1\">Nome da Disciplina: *</label><br>\n                <input class=\"form-control\" type=\"text\" name=\"disciplina\" placeholder=\"Ex.: Algoritmos\" [(ngModel)]=\"nomeDisciplinaTemp\"><p></p>\n                <label class=\"style1\">Disciplina ID:</label><br>\n                <input class=\"form-control\" type=\"number\" name=\"disciplina_id\" placeholder=\"12345678\" [(ngModel)]=\"disciplinaKeyTemp\">\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-success botao-barra\" (click)=\"adicionarAlterarDisciplina()\" [disabled]=\"!editavel\">{{disciplinaSelecionadaId ? 'Alterar' : 'Criar'}}</button>\n                <button type=\"button\" class=\"btn btn-danger botao-barra\" (click)=\"removerDisciplina()\" [disabled]=\"!editavel || !disciplinaSelecionadaId\">Excluir</button>\n                <button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\">Fechar</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"dialogAjudaUpload\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialogAjudaUploadTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\" style=\"width: 600px;\">\n                Importa um arquivo CSV que contêm dados sobre faculdades, seus cursos, suas disciplinas e seus estudantes; o formato do arquivo deve seguir o seguinte padrão:<br>\n                <div style=\"overflow: auto;\">\n                    <pre style=\"font-size: 12px; width: max-content;\">\n\"sigla_faculdade\",\"nome_faculdade\",\"nome_curso\",\"nome_estudante\",\"nome_disciplina\",\"codigo_faculdade\",\"codigo_disciplina\",\"username\",\"email\"\nFAC,FACULDADE TAL,BACHARELADO EM ALGUMA COISA,FULANO DA SILVA,DISCIPLINA TAL,\"1111\",\"12345678\",\"12345678909\",fulano_silva@email.com\n...</pre>\n                </div>\n                \n                * Não requer necessariamente ter os mesmos nomes, mas a ordem deve ser obedecida\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\">Fechar</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pl-disciplinas-academicos/pl-disciplinas-academicos.component.less":
/*!************************************************************************************!*\
  !*** ./src/app/pl-disciplinas-academicos/pl-disciplinas-academicos.component.less ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsLWRpc2NpcGxpbmFzLWFjYWRlbWljb3MvcGwtZGlzY2lwbGluYXMtYWNhZGVtaWNvcy5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/pl-disciplinas-academicos/pl-disciplinas-academicos.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pl-disciplinas-academicos/pl-disciplinas-academicos.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PlDisciplinasAcademicosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlDisciplinasAcademicosComponent", function() { return PlDisciplinasAcademicosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _estudante__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./estudante */ "./src/app/pl-disciplinas-academicos/estudante.ts");
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../abstract-component */ "./src/app/abstract-component.ts");
/* harmony import */ var _periodo_letivos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../periodo-letivos.service */ "./src/app/periodo-letivos.service.ts");
/* harmony import */ var _faculdade_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../faculdade.service */ "./src/app/faculdade.service.ts");
/* harmony import */ var _cursos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cursos.service */ "./src/app/cursos.service.ts");
/* harmony import */ var _pl_disciplinas_academicos_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pl-disciplinas-academicos.service */ "./src/app/pl-disciplinas-academicos.service.ts");
/* harmony import */ var _faculdades_faculdade__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../faculdades/faculdade */ "./src/app/faculdades/faculdade.ts");
/* harmony import */ var _pl_disciplinas_academicos__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pl-disciplinas-academicos */ "./src/app/pl-disciplinas-academicos/pl-disciplinas-academicos.ts");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/fileupload */ "./node_modules/primeng/fileupload.js");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_fileupload__WEBPACK_IMPORTED_MODULE_10__);











var PlDisciplinasAcademicosComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PlDisciplinasAcademicosComponent, _super);
    function PlDisciplinasAcademicosComponent(periodoLetivosService, plDisciplinasAcademicosService, faculdadeService, cursosService) {
        var _this = _super.call(this) || this;
        _this.periodoLetivosService = periodoLetivosService;
        _this.plDisciplinasAcademicosService = plDisciplinasAcademicosService;
        _this.faculdadeService = faculdadeService;
        _this.cursosService = cursosService;
        _this.estudantes = [];
        _this.estudanteTemp = _estudante__WEBPACK_IMPORTED_MODULE_2__["Estudante"].generateEstudante();
        _this.plDisciplinasAcademicosTemp = _pl_disciplinas_academicos__WEBPACK_IMPORTED_MODULE_9__["PlDisciplinasAcademicos"].generatePlDisciplinasAcademicos();
        _this.faculdadeTemp = _faculdades_faculdade__WEBPACK_IMPORTED_MODULE_8__["Faculdade"].generateFaculdade();
        _this.nomeDisciplinaTemp = "";
        _this.cursoSelecionadoId = "";
        _this.faculdadeSelecionadaId = "";
        _this.periodoLetivoSelecionadoId = "";
        _this.disciplinaSelecionadaId = "";
        _this.disciplinaKeyTemp = "";
        _this.TIPOS_IMPORT_FILTRO = [
            { key: "UPLOAD", nome: "Upload de Arquivo" },
            { key: "CURSOS_SIGECAD", nome: "Cursos do SIGECAD" },
        ];
        _this.tipoImportFiltro = "";
        _this.fileTemp = null;
        return _this;
    }
    Object.defineProperty(PlDisciplinasAcademicosComponent.prototype, "periodoLetivos", {
        get: function () {
            return this.periodoLetivosService.periodoLetivos;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlDisciplinasAcademicosComponent.prototype, "faculdades", {
        get: function () {
            return this.faculdadeService.faculdades;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlDisciplinasAcademicosComponent.prototype, "plDisciplinasAcademicos", {
        get: function () {
            return this.plDisciplinasAcademicosService.plDisciplinasAcademicos;
        },
        enumerable: true,
        configurable: true
    });
    PlDisciplinasAcademicosComponent.prototype.selecionaPeriodoLetivo = function () {
        if (this.periodoLetivoSelecionadoId) {
            this.faculdadeTemp = _faculdades_faculdade__WEBPACK_IMPORTED_MODULE_8__["Faculdade"].generateFaculdade();
            this.faculdadeSelecionadaId = "";
            this.cursoSelecionadoId = "";
            this.disciplinaSelecionadaId = "";
            this.plDisciplinasAcademicosTemp = _pl_disciplinas_academicos__WEBPACK_IMPORTED_MODULE_9__["PlDisciplinasAcademicos"].generatePlDisciplinasAcademicos();
            this.nomeDisciplinaTemp = "";
        }
    };
    PlDisciplinasAcademicosComponent.prototype.selecionaFaculdade = function () {
        if (this.faculdadeSelecionadaId) {
            this.faculdadeTemp = this.faculdadeService.faculdadesIndex.get(this.faculdadeSelecionadaId);
            this.cursoSelecionadoId = "";
            this.disciplinaSelecionadaId = "";
            this.plDisciplinasAcademicosTemp = _pl_disciplinas_academicos__WEBPACK_IMPORTED_MODULE_9__["PlDisciplinasAcademicos"].generatePlDisciplinasAcademicos();
            this.nomeDisciplinaTemp = "";
        }
    };
    PlDisciplinasAcademicosComponent.prototype.selecionaCurso = function () {
        var _this = this;
        if (this.cursoSelecionadoId) {
            this.disciplinaSelecionadaId = "";
            this.plDisciplinasAcademicosTemp = _pl_disciplinas_academicos__WEBPACK_IMPORTED_MODULE_9__["PlDisciplinasAcademicos"].generatePlDisciplinasAcademicos();
            this.nomeDisciplinaTemp = "";
            this.editavel = false;
            this.plDisciplinasAcademicosService.getPlDisciplinasAcademicos(this.periodoLetivoSelecionadoId, this.cursoSelecionadoId, this.cursosService.cursosKeyIndex, this.periodoLetivosService.periodoLetivosNameIndex)
                .then(function (r) {
                _this.editavel = true;
            }).catch(function (response) {
                _this.erroAviso = true;
                _this.aviso = _this.erroHttp(response);
                alert(_this.aviso);
                _this.editavel = true;
            });
        }
    };
    PlDisciplinasAcademicosComponent.prototype.selecionaDisciplina = function () {
        var _this = this;
        if (this.disciplinaSelecionadaId) {
            this.plDisciplinasAcademicosTemp = this.plDisciplinasAcademicosService.plDisciplinasAcademicosIndex.get(this.disciplinaSelecionadaId);
            this.editavel = false;
            this.plDisciplinasAcademicosService.getEstudantes(this.disciplinaSelecionadaId, false)
                .then(function (est) {
                _this.estudantes = est;
                _this.plDisciplinasAcademicosTemp.estudantes = est;
                _this.editavel = true;
            }).catch(function (response) {
                _this.erroAviso = true;
                _this.aviso = _this.erroHttp(response);
                alert(_this.aviso);
                _this.editavel = true;
            });
        }
    };
    PlDisciplinasAcademicosComponent.prototype.preparaCriaAlteraDisciplina = function () {
        this.nomeDisciplinaTemp = this.disciplinaSelecionadaId ? this.plDisciplinasAcademicosTemp.disciplina : "";
        this.disciplinaKeyTemp = this.disciplinaSelecionadaId ? this.plDisciplinasAcademicosTemp.disciplina_key : "";
    };
    PlDisciplinasAcademicosComponent.prototype.adicionarAlterarDisciplina = function () {
        var _this = this;
        if (!this.nomeDisciplinaTemp) {
            alert("Informe um nome para a Disciplina!");
            return;
        }
        this.editavel = false;
        var plc = new _pl_disciplinas_academicos__WEBPACK_IMPORTED_MODULE_9__["PlDisciplinasAcademicos"](this.disciplinaSelecionadaId == '' ? 0 : parseInt(this.disciplinaSelecionadaId), parseInt(this.cursoSelecionadoId), parseInt(this.periodoLetivoSelecionadoId), this.nomeDisciplinaTemp, [], this.disciplinaKeyTemp);
        this.plDisciplinasAcademicosService.criarAlterarDisciplina(plc)
            .then(function (r) {
            if (_this.disciplinaSelecionadaId == '')
                _this.estudantes = [];
            _this.plDisciplinasAcademicosTemp.id = r;
            _this.plDisciplinasAcademicosTemp.disciplina = _this.nomeDisciplinaTemp;
            _this.plDisciplinasAcademicosTemp.disciplina_key = _this.disciplinaKeyTemp;
            _this.disciplinaSelecionadaId = r;
            jQuery('#dialogDisciplina').modal('hide');
            _this.editavel = true;
        }).catch(function (response) {
            _this.erroAviso = true;
            _this.aviso = _this.erroHttp(response);
            alert(_this.aviso);
            _this.editavel = true;
        });
    };
    PlDisciplinasAcademicosComponent.prototype.removerDisciplina = function () {
        var _this = this;
        if (confirm("Confirmar remoção desta Disciplina?")) {
            this.editavel = false;
            this.plDisciplinasAcademicosService.removeDisciplina(this.disciplinaSelecionadaId)
                .then(function (r) {
                _this.disciplinaSelecionadaId = '';
                jQuery('#dialogDisciplina').modal('hide');
                _this.editavel = true;
            }).catch(function (response) {
                _this.erroAviso = true;
                _this.aviso = _this.erroHttp(response);
                alert(_this.aviso);
                _this.editavel = true;
            });
        }
    };
    PlDisciplinasAcademicosComponent.prototype.adicionarEstudante = function () {
        if (this.estudanteTemp.isValid()) {
            var estudantesParam = this.estudantes.slice(0);
            estudantesParam.push(new _estudante__WEBPACK_IMPORTED_MODULE_2__["Estudante"](this.estudanteTemp.username, this.estudanteTemp.email, this.estudanteTemp.fullname, this.estudanteTemp.is_professor));
            jQuery('#dialogEstudante').modal('hide');
            this.estudanteTemp = _estudante__WEBPACK_IMPORTED_MODULE_2__["Estudante"].generateEstudante();
            this.setEstudantes(estudantesParam);
        }
        else
            alert("Usuário Inválido!");
    };
    PlDisciplinasAcademicosComponent.prototype.removerEstudante = function (estudante) {
        if (!confirm("Deseja remover este estudante"))
            return;
        var estudantesParam = this.estudantes.slice(0);
        var i = 0;
        for (; i < estudantesParam.length; i++) {
            if (estudante.equals(estudantesParam[i]))
                break;
        }
        if (i < estudantesParam.length) {
            estudantesParam.splice(i, 1);
            this.setEstudantes(estudantesParam);
        }
    };
    PlDisciplinasAcademicosComponent.prototype.limparEstudantes = function () {
        if (confirm("Deseja remover todos os estudantes")) {
            var estudantesParam = this.estudantes.slice(0);
            estudantesParam = [];
            this.setEstudantes(estudantesParam);
        }
    };
    PlDisciplinasAcademicosComponent.prototype.setEstudantes = function (estudantesParam) {
        var _this = this;
        this.editavel = false;
        this.plDisciplinasAcademicosService.setEstudantes(this.disciplinaSelecionadaId, estudantesParam)
            .then(function (est) {
            _this.estudantes = est;
            _this.plDisciplinasAcademicosTemp.estudantes = est;
            _this.editavel = true;
        }).catch(function (response) {
            _this.erroAviso = true;
            _this.aviso = _this.erroHttp(response);
            alert(_this.aviso);
            _this.editavel = true;
        });
    };
    PlDisciplinasAcademicosComponent.prototype.preparaDialogImportacao = function () {
        //this.uploador.clear();
        this.tipoImportFiltro = "";
        this.erroAviso = false;
        this.aviso = "";
    };
    PlDisciplinasAcademicosComponent.prototype.onSelectFile = function () {
        if (this.uploador.files.length > 0)
            this.fileTemp = this.uploador.files[0];
    };
    PlDisciplinasAcademicosComponent.prototype.onCancelFile = function () {
        this.fileTemp = null;
    };
    PlDisciplinasAcademicosComponent.prototype.uploadArquivoEstudantes = function () {
        var _this = this;
        if (confirm("Esta ação irá substituir todos os atuais dados de Estudantes neste Período Letivo,\ndeseja confirmar?")) {
            this.editavel = false;
            this.plDisciplinasAcademicosService.uploadFileEstudantes(this.periodoLetivoSelecionadoId, this.fileTemp)
                .then(function (r) {
                _this.editavel = true;
                _this.selecionaPeriodoLetivo();
                alert("Upload Completo!");
                jQuery('#dialogImportacao').modal('hide');
            }).catch(function (response) {
                _this.editavel = true;
                _this.erroAviso = true;
                _this.aviso = _this.erroHttp(response);
            });
        }
    };
    PlDisciplinasAcademicosComponent.prototype.importarCursosSigecad = function () {
        var _this = this;
        this.editavel = false;
        if (confirm("Deseja Importar os Cursos do SIGECAD deste Período Letivo?")) {
            this.plDisciplinasAcademicosService.getCursosSigecad(this.periodoLetivoSelecionadoId)
                .then(function (r) {
                _this.faculdadeService.listar()
                    .then(function (response) {
                    _this.editavel = true;
                    _this.selecionaPeriodoLetivo();
                    alert("Importação Concluída!");
                    jQuery('#dialogImportacao').modal('hide');
                })
                    .catch(function (response) {
                    _this.erroAviso = true;
                    _this.aviso = _this.erroHttp(response);
                    _this.status = _this.ERROR;
                    alert(_this.aviso);
                });
            }).catch(function (response) {
                _this.erroAviso = true;
                _this.aviso = _this.erroHttp(response);
                alert(_this.aviso);
                _this.editavel = true;
            });
        }
    };
    PlDisciplinasAcademicosComponent.prototype.importarDisciplinasSigecad = function () {
    };
    PlDisciplinasAcademicosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.faculdadeService.listar()
            .then(function (response) {
            _this.periodoLetivosService.getPeriodoLetivos()
                .then(function (r) {
                _this.status = _this.COMPLETE;
                _this.editavel = true;
            }).catch(function (response) {
                _this.erroAviso = true;
                _this.aviso = _this.erroHttp(response);
                _this.status = _this.ERROR;
                alert(_this.aviso);
            });
        })
            .catch(function (response) {
            _this.erroAviso = true;
            _this.aviso = _this.erroHttp(response);
            _this.status = _this.ERROR;
            alert(_this.aviso);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('uploador'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", primeng_fileupload__WEBPACK_IMPORTED_MODULE_10__["FileUpload"])
    ], PlDisciplinasAcademicosComponent.prototype, "uploador", void 0);
    PlDisciplinasAcademicosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pl-disciplinas-academicos',
            template: __webpack_require__(/*! ./pl-disciplinas-academicos.component.html */ "./src/app/pl-disciplinas-academicos/pl-disciplinas-academicos.component.html"),
            styles: [__webpack_require__(/*! ./pl-disciplinas-academicos.component.less */ "./src/app/pl-disciplinas-academicos/pl-disciplinas-academicos.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_periodo_letivos_service__WEBPACK_IMPORTED_MODULE_4__["PeriodoLetivosService"], _pl_disciplinas_academicos_service__WEBPACK_IMPORTED_MODULE_7__["PlDisciplinasAcademicosService"],
            _faculdade_service__WEBPACK_IMPORTED_MODULE_5__["FaculdadeService"], _cursos_service__WEBPACK_IMPORTED_MODULE_6__["CursosService"]])
    ], PlDisciplinasAcademicosComponent);
    return PlDisciplinasAcademicosComponent;
}(_abstract_component__WEBPACK_IMPORTED_MODULE_3__["AbstractComponent"]));



/***/ }),

/***/ "./src/app/pl-disciplinas-academicos/pl-disciplinas-academicos.js":
/*!************************************************************************!*\
  !*** ./src/app/pl-disciplinas-academicos/pl-disciplinas-academicos.js ***!
  \************************************************************************/
/*! exports provided: PlDisciplinasAcademicos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlDisciplinasAcademicos", function() { return PlDisciplinasAcademicos; });
/* harmony import */ var _cursos_curso__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cursos/curso */ "./src/app/cursos/curso.ts");
/* harmony import */ var _periodo_letivos_periodo_letivo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../periodo-letivos/periodo-letivo */ "./src/app/periodo-letivos/periodo-letivo.ts");
/* harmony import */ var _estudante__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./estudante */ "./src/app/pl-disciplinas-academicos/estudante.ts");



var PlDisciplinasAcademicos = /** @class */ (function () {
    function PlDisciplinasAcademicos(id, curso, periodo_letivo, disciplina, estudantes, disciplina_key, carga_horaria_total_disciplina, grupo, turma_nome, turma_id, avaliacao, cpf_professor, periodo_letivo_key) {
        this.estudantes = [];
        if (typeof id == "number") {
            this.id = id;
            this.curso = curso;
            this.periodo_letivo = periodo_letivo;
            this.disciplina = disciplina;
            this.estudantes = estudantes;
            this.disciplina_key = disciplina_key;
            this.carga_horaria_total_disciplina = carga_horaria_total_disciplina;
            this.grupo = grupo;
            this.turma_nome = turma_nome;
            this.turma_id = turma_id;
            this.avaliacao = avaliacao;
            this.cpf_professor = cpf_professor;
            this.periodo_letivo_key = periodo_letivo_key;
        }
        else {
            var pl = null;
            if (id['periodo_letivo'] instanceof _periodo_letivos_periodo_letivo__WEBPACK_IMPORTED_MODULE_1__["PeriodoLetivo"])
                pl = id['periodo_letivo'];
            else if (id['periodo_letivo_id']) {
                if (parseInt(id['periodo_letivo_id']) == id['periodo_letivo_id'])
                    pl = parseInt(id['periodo_letivo_id']);
                else
                    pl = id['periodo_letivo_id'];
            }
            else if (id['periodo_letivo']) {
                if (parseInt(id['periodo_letivo']) == id['periodo_letivo'])
                    pl = parseInt(id['periodo_letivo']);
                else
                    pl = id['periodo_letivo'];
            }
            this.id = id['id'] ? parseInt(id['id']) : 0;
            this.curso = id['curso_id'];
            this.periodo_letivo = pl;
            this.disciplina = id['disciplina'] ? id['disciplina'] : id['nome_disciplina'];
            this.estudantes = id['estudantes'] ? _estudante__WEBPACK_IMPORTED_MODULE_2__["Estudante"].converteJSONParaEstudantes(id['estudantes']) : [];
            this.disciplina_key = id['disciplina_key'] ? id['disciplina_key'] : (id['codigo_disciplina'] ? id['codigo_disciplina'] : 0);
            this.carga_horaria_total_disciplina = id['carga_horaria_total_disciplina'];
            this.grupo = id['grupo'];
            this.turma_nome = id['turma_nome'];
            this.turma_id = id['turma_id'];
            this.avaliacao = id['avaliacao'];
            this.cpf_professor = id['cpf_professor'];
            this.periodo_letivo_key = id['periodo_letivo_id'];
        }
    }
    PlDisciplinasAcademicos.generateList = function (list) {
        var plDisciplinasAcademicos = [];
        for (var i = 0; i < list.length; i++) {
            var plda = new PlDisciplinasAcademicos(list[i]);
            plDisciplinasAcademicos.push(plda);
        }
        return plDisciplinasAcademicos;
    };
    PlDisciplinasAcademicos.generateListPlus = function (list, cursosKeyIndex, periodoLetivosNomeIndex) {
        var plDisciplinasAcademicos = [];
        for (var i = 0; i < list.length; i++) {
            if (cursosKeyIndex)
                list[i]['curso_id'] = cursosKeyIndex.get(list[i]['codigo_curso']);
            if (periodoLetivosNomeIndex)
                list[i]['periodo_letivo'] = periodoLetivosNomeIndex.get(list[i]['periodo_letivo']);
            var plda = new PlDisciplinasAcademicos(list[i]);
            plDisciplinasAcademicos.push(plda);
        }
        return plDisciplinasAcademicos;
    };
    PlDisciplinasAcademicos.generatePlDisciplinasAcademicos = function () {
        return new PlDisciplinasAcademicos(0, _cursos_curso__WEBPACK_IMPORTED_MODULE_0__["Curso"].generateCurso(), _periodo_letivos_periodo_letivo__WEBPACK_IMPORTED_MODULE_1__["PeriodoLetivo"].generatePeriodoLetivo(), "", [], "", "", "", "", "", "", "", 0);
    };
    PlDisciplinasAcademicos.prototype.toForm = function () {
        return {
            id: this.id,
            curso_id: typeof this.curso == 'object' ? this.curso.id : this.curso,
            periodo_letivo_id: typeof this.periodo_letivo == 'object' ? this.periodo_letivo.id : this.periodo_letivo,
            disciplina: this.disciplina,
            //estudantes: this.estudantes ? Estudante.converteEstudantesParaJSON(<Array<Estudante>>this.estudantes) : "",
            disciplina_key: this.disciplina_key,
            carga_horaria_total_disciplina: this.carga_horaria_total_disciplina,
            grupo: this.grupo,
            turma_nome: this.turma_nome,
            turma_id: this.turma_id,
            avaliacao: this.avaliacao,
            cpf_professor: this.cpf_professor
        };
    };
    PlDisciplinasAcademicos.prototype.toString = function () {
        if (typeof this.periodo_letivo == 'object' && this.periodo_letivo instanceof _periodo_letivos_periodo_letivo__WEBPACK_IMPORTED_MODULE_1__["PeriodoLetivo"])
            return this.periodo_letivo.id_sigecad;
        return this.periodo_letivo;
    };
    PlDisciplinasAcademicos.prototype.clone = function () {
        return new PlDisciplinasAcademicos(this.id, this.curso, this.periodo_letivo, this.disciplina, this.estudantes, this.disciplina_key, this.carga_horaria_total_disciplina, this.grupo, this.turma_nome, this.turma_id, this.avaliacao, this.cpf_professor, this.periodo_letivo_key);
    };
    return PlDisciplinasAcademicos;
}());

//# sourceMappingURL=pl-disciplinas-academicos.js.map

/***/ }),

/***/ "./src/app/pl-disciplinas-academicos/pl-disciplinas-academicos.ts":
/*!************************************************************************!*\
  !*** ./src/app/pl-disciplinas-academicos/pl-disciplinas-academicos.ts ***!
  \************************************************************************/
/*! exports provided: PlDisciplinasAcademicos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlDisciplinasAcademicos", function() { return PlDisciplinasAcademicos; });
/* harmony import */ var _cursos_curso__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cursos/curso */ "./src/app/cursos/curso.ts");
/* harmony import */ var _periodo_letivos_periodo_letivo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../periodo-letivos/periodo-letivo */ "./src/app/periodo-letivos/periodo-letivo.ts");
/* harmony import */ var _estudante__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./estudante */ "./src/app/pl-disciplinas-academicos/estudante.ts");



var PlDisciplinasAcademicos = /** @class */ (function () {
    function PlDisciplinasAcademicos(id, curso, periodo_letivo, disciplina, estudantes, disciplina_key, carga_horaria_total_disciplina, grupo, turma_nome, turma_id, avaliacao, cpf_professor, periodo_letivo_key) {
        this.estudantes = [];
        if (typeof id == "number") {
            this.id = id;
            this.curso = curso;
            this.periodo_letivo = periodo_letivo;
            this.disciplina = disciplina;
            this.estudantes = estudantes;
            this.disciplina_key = disciplina_key;
            this.carga_horaria_total_disciplina = carga_horaria_total_disciplina;
            this.grupo = grupo;
            this.turma_nome = turma_nome;
            this.turma_id = turma_id;
            this.avaliacao = avaliacao;
            this.cpf_professor = cpf_professor;
            this.periodo_letivo_key = periodo_letivo_key;
        }
        else {
            var pl = null;
            if (id['periodo_letivo'] instanceof _periodo_letivos_periodo_letivo__WEBPACK_IMPORTED_MODULE_1__["PeriodoLetivo"])
                pl = id['periodo_letivo'];
            else if (id['periodo_letivo_id']) {
                if (parseInt(id['periodo_letivo_id']) == id['periodo_letivo_id'])
                    pl = parseInt(id['periodo_letivo_id']);
                else
                    pl = id['periodo_letivo_id'];
            }
            else if (id['periodo_letivo']) {
                if (parseInt(id['periodo_letivo']) == id['periodo_letivo'])
                    pl = parseInt(id['periodo_letivo']);
                else
                    pl = id['periodo_letivo'];
            }
            this.id = id['id'] ? parseInt(id['id']) : 0;
            this.curso = id['curso_id'];
            this.periodo_letivo = pl;
            this.disciplina = id['disciplina'] ? id['disciplina'] : id['nome_disciplina'];
            this.estudantes = id['estudantes'] ? _estudante__WEBPACK_IMPORTED_MODULE_2__["Estudante"].converteJSONParaEstudantes(id['estudantes']) : [];
            this.disciplina_key = id['disciplina_key'] ? id['disciplina_key'] : (id['codigo_disciplina'] ? id['codigo_disciplina'] : 0);
            this.carga_horaria_total_disciplina = id['carga_horaria_total_disciplina'];
            this.grupo = id['grupo'];
            this.turma_nome = id['turma_nome'];
            this.turma_id = id['turma_id'];
            this.avaliacao = id['avaliacao'];
            this.cpf_professor = id['cpf_professor'];
            this.periodo_letivo_key = id['periodo_letivo_id'];
        }
    }
    PlDisciplinasAcademicos.generateList = function (list) {
        var plDisciplinasAcademicos = [];
        for (var i = 0; i < list.length; i++) {
            var plda = new PlDisciplinasAcademicos(list[i]);
            plDisciplinasAcademicos.push(plda);
        }
        return plDisciplinasAcademicos;
    };
    PlDisciplinasAcademicos.generateListPlus = function (list, cursosKeyIndex, periodoLetivosNomeIndex) {
        var plDisciplinasAcademicos = [];
        for (var i = 0; i < list.length; i++) {
            if (cursosKeyIndex)
                list[i]['curso_id'] = cursosKeyIndex.get(list[i]['codigo_curso']);
            if (periodoLetivosNomeIndex)
                list[i]['periodo_letivo'] = periodoLetivosNomeIndex.get(list[i]['periodo_letivo']);
            var plda = new PlDisciplinasAcademicos(list[i]);
            plDisciplinasAcademicos.push(plda);
        }
        return plDisciplinasAcademicos;
    };
    PlDisciplinasAcademicos.generatePlDisciplinasAcademicos = function () {
        return new PlDisciplinasAcademicos(0, _cursos_curso__WEBPACK_IMPORTED_MODULE_0__["Curso"].generateCurso(), _periodo_letivos_periodo_letivo__WEBPACK_IMPORTED_MODULE_1__["PeriodoLetivo"].generatePeriodoLetivo(), "", [], "", "", "", "", "", "", "", 0);
    };
    PlDisciplinasAcademicos.prototype.toForm = function () {
        return {
            id: this.id,
            curso_id: typeof this.curso == 'object' ? this.curso.id : this.curso,
            periodo_letivo_id: typeof this.periodo_letivo == 'object' ? this.periodo_letivo.id : this.periodo_letivo,
            disciplina: this.disciplina,
            //estudantes: this.estudantes ? Estudante.converteEstudantesParaJSON(<Array<Estudante>>this.estudantes) : "",
            disciplina_key: this.disciplina_key,
            carga_horaria_total_disciplina: this.carga_horaria_total_disciplina,
            grupo: this.grupo,
            turma_nome: this.turma_nome,
            turma_id: this.turma_id,
            avaliacao: this.avaliacao,
            cpf_professor: this.cpf_professor
        };
    };
    PlDisciplinasAcademicos.prototype.toString = function () {
        if (typeof this.periodo_letivo == 'object' && this.periodo_letivo instanceof _periodo_letivos_periodo_letivo__WEBPACK_IMPORTED_MODULE_1__["PeriodoLetivo"])
            return this.periodo_letivo.id_sigecad;
        return this.periodo_letivo;
    };
    PlDisciplinasAcademicos.prototype.clone = function () {
        return new PlDisciplinasAcademicos(this.id, this.curso, this.periodo_letivo, this.disciplina, this.estudantes, this.disciplina_key, this.carga_horaria_total_disciplina, this.grupo, this.turma_nome, this.turma_id, this.avaliacao, this.cpf_professor, this.periodo_letivo_key);
    };
    return PlDisciplinasAcademicos;
}());



/***/ }),

/***/ "./src/app/recurso.service.ts":
/*!************************************!*\
  !*** ./src/app/recurso.service.ts ***!
  \************************************/
/*! exports provided: RecursoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecursoService", function() { return RecursoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _recurso_recurso__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recurso/recurso */ "./src/app/recurso/recurso.ts");
/* harmony import */ var _usuarios_usuario__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./usuarios/usuario */ "./src/app/usuarios/usuario.ts");





var RecursoService = /** @class */ (function () {
    function RecursoService(http) {
        this.http = http;
        this.recursos = [];
        this.recursosIndex = {};
        this.recursoSelecionado = new _recurso_recurso__WEBPACK_IMPORTED_MODULE_3__["Recurso"](0, "", "");
    }
    RecursoService.prototype.listar = function () {
        var _this = this;
        return this.http.get("/recursos/listar").toPromise()
            .then(function (response) {
            var lista = response.json();
            _this.recursos = [];
            _this.recursosIndex = {};
            for (var i in lista) {
                var r = new _recurso_recurso__WEBPACK_IMPORTED_MODULE_3__["Recurso"](lista[i]);
                _this.recursos.push(r);
                _this.recursosIndex[r.id] = i;
            }
            return _this.recursos;
        });
    };
    RecursoService.prototype.obtemGestoresRecurso = function () {
        var _this = this;
        return this.http.get("/recursos/" + this.recursoSelecionado.id + "/gestores").toPromise()
            .then(function (response) {
            var lista = response.json();
            _this.recursoSelecionado.gestores = [];
            for (var i in lista) {
                var u = new _usuarios_usuario__WEBPACK_IMPORTED_MODULE_4__["Usuario"](lista[i]);
                _this.recursoSelecionado.gestores.push(u);
            }
            return _this.recursoSelecionado.gestores;
        });
    };
    RecursoService.prototype.adicionaGestorRecurso = function (usuario) {
        var _this = this;
        return this.http.get("/recursos/attach/" + this.recursoSelecionado.id + "/" + usuario.id).toPromise()
            .then(function (response) {
            _this.listar();
        });
    };
    RecursoService.prototype.removeGestorRecurso = function (usuario) {
        var _this = this;
        return this.http.get("/recursos/detach/" + this.recursoSelecionado.id + "/" + usuario.id).toPromise()
            .then(function (response) {
            _this.listar();
        });
    };
    RecursoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], RecursoService);
    return RecursoService;
}());



/***/ }),

/***/ "./src/app/recurso/recurso.component.html":
/*!************************************************!*\
  !*** ./src/app/recurso/recurso.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n        Recursos\n    </div>\n        <div class=\"row\">\n            <div class=\"col-md-7\"  style=\"padding-right: 0px; border-right: 1px solid #ddd\">\n                <div>\n                    <table class=\"table\"style=\"margin-bottom: 0px\">\n                        <colgroup>\n                            <col width=\"50px\"/>\n                            <col width=\"30%\"/>\n                            <col width=\"70%\"/>\n                            <col width=\"15px\"/>\n                        </colgroup>\n                        <thead class=\"thead-light\">\n                            <tr>\n                                <th style=\"text-align: center\">ID</th>\n                                <th class=\"celula-trunca-texto\" title=\"NOME\">NOME</th>\n                                <th class=\"celula-trunca-texto\" title=\"NOME\">DESCRICAO</th>\n                                <th></th>\n                            </tr>\n                        </thead>\n                    </table>\n                </div>\n                <div redimensionar=\"261\" style=\"overflow-y: scroll;\">\n                    <table class=\"table\" data-toggle=\"table\" >\n                        <colgroup>\n                            <col width=\"50px\"/>\n                            <col width=\"30%\"/>\n                            <col width=\"70%\"/>\n                        </colgroup>\n                        <tbody>\n                            <tr *ngFor=\"let recurso of recursos\" class=\"clickable-row\" (click)=\"selecionarRecurso(recurso)\" [ngClass]=\"{'linha-selecionada': recurso.id == recursoSelecionado.id}\">\n                                <td>{{recurso.id}}</td>\n                                <td class=\"celula-trunca-texto\" title=\"{{recurso.nome}}\">{{recurso.nome}}</td>\n                                <td class=\"celula-trunca-texto\" title=\"{{recurso.descricao}}\">{{recurso.descricao}}</td>\n                            </tr>\n                        </tbody>\n                        <tfoot class=\"status-tabela\">\n                            <tr *ngIf=\"status == LOADING\"><td colspan=\"6\"><i>Carregando Lista de Recursos...</i></td></tr>\n                            <tr *ngIf=\"macros != null && macros.length == 0 && status == COMPLETE\"><td colspan=\"6\"><i>Não Há Recursos para serem listadas</i></td></tr>\n                            <tr *ngIf=\"status == ERROR\"><td class=\"erro\" colspan=\"6\"><i>Falha na obtenção dos Recursos!</i></td></tr>\n                        </tfoot>\n                    </table>\n                </div>\n                <div class=\"panel-footer\">\n                    <button type=\"button\" class=\"btn btn-primary botao-barra\" data-toggle=\"modal\" data-target=\"#dialogCriar\" (click)=\"selecionarMacro(null)\" [disabled]=\"!editavel\">Novo</button>\n                </div>\n            </div>\n            <div class=\"col-md-5\" style=\"padding-left: 0px; \">\n                <div class=\"barra-titulo\">\n                    <table class=\"table\">\n                        <tbody>\n                            <tr>\n                                <td colspan=\"3\" class=\"celula-trunca-texto\" style=\"text-align: center;\">\n                                    <h4 *ngIf=\"recursoSelecionado == null || recursoSelecionado.id == 0\" style=\"display: inline-block; color: gray;\" title=\"\"><i>Selecione um Recurso...</i></h4>\n                                    <h4 *ngIf=\"recursoSelecionado != null && recursoSelecionado.id > 0\" style=\"display: inline-block;\" title=\"\">Recurso: {{recursoSelecionado.nome}}</h4>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n                <div>\n                    <div>\n                        <table class=\"table\"style=\"margin-bottom: 0px\">\n                            <colgroup>\n                                <col width=\"50px\"/>\n                                <col width=\"100%\"/>\n                                <col width=\"50px\"/>\n                                <col width=\"15px\"/>\n                            </colgroup>\n                            <thead class=\"thead-light\">\n                                <tr>\n                                    <th style=\"text-align: center\">ID</th>\n                                    <th class=\"celula-trunca-texto\" title=\"NOME\">GESTOR RECURSO</th>\n                                    <th class=\"celula-trunca-texto\" title=\"NOME\">X</th>\n                                    <th></th>\n                                </tr>\n                            </thead>\n                        </table>\n                    </div>\n                    <div redimensionar=\"261\" style=\"overflow-y: scroll;\">\n                        <table class=\"table\" data-toggle=\"table\" >\n                            <colgroup>\n                                <col width=\"50px\"/>\n                                <col width=\"100%\"/>\n                                <col width=\"50px\"/>\n                            </colgroup>\n                            <tbody *ngIf=\"status == COMPLETE_GESTORES\">\n                                <tr *ngFor=\"let gestor of recursoSelecionado.gestores\">\n                                    <td>{{gestor.id}}</td>\n                                    <td class=\"celula-trunca-texto\" title=\"{{gestor.name}}\">{{gestor.name}}</td>\n                                    <td>\n                                        <button style=\"text-align: center; margin-left: -2px;\" title=\"Remover Gestor\" type=\"button\" class=\"btn btn-danger botao-reduzido\" (click)=\"removeGestor(gestor)\">\n                                            <span class=\"glyphicon glyphicon-remove\"></span>\n                                        </button>\n                                    </td>\n                                </tr>\n                                <tr *ngIf=\"recursoSelecionado.id > 0 && recursoSelecionado.gestores != null && recursoSelecionado.gestores.length > 0 && statusGestores == COMPLETE_GESTORES\">\n                                    <td colspan=\"3\" style=\"text-align: center;\">\n                                        <button style=\"text-align: center;\" title=\"Adicionar\" type=\"button\"  data-toggle=\"modal\" data-target=\"#dialogUsuarios\" class=\"btn btn-primary botao-reduzido\">\n                                            <span class=\"glyphicon glyphicon-plus\"></span>\n                                        </button>\n                                    </td>\n                                </tr>\n                            </tbody>\n                            <tfoot class=\"status-tabela\">\n                                <tr *ngIf=\"recursoSelecionado.id == 0 || statusGestores == RECNULL_GESTORES\"><td colspan=\"6\"><i>Nenhum Recurso Selecionado</i></td></tr>\n                                <tr *ngIf=\"statusGestores == LOADING_GESTORES\"><td colspan=\"6\"><i>Carregando Lista de Gestores do Recurso...</i></td></tr>\n                                <tr *ngIf=\"recursoSelecionado.id > 0 && recursoSelecionado.gestores != null && recursoSelecionado.gestores.length == 0 && statusGestores == COMPLETE_GESTORES\"><td colspan=\"6\">\n                                    <i>Não Há Gestores para este Recurso</i><br>\n                                    <button style=\"text-align: center; margin-left: 2px; margin-top: 5px;\" title=\"Adicionar\" data-toggle=\"modal\" data-target=\"#dialogUsuarios\" type=\"button\" class=\"btn btn-primary botao-reduzido\">\n                                        <span class=\"glyphicon glyphicon-plus\"></span>\n                                    </button>\n                                </td></tr>\n                                <tr *ngIf=\"status == ERROR_GESTORES\"><td class=\"erro\" colspan=\"6\"><i>Falha na obtenção dos Gestores deste Recurso!</i></td></tr>\n                            </tfoot>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n</div>\n\n<div class=\"modal fade\" id=\"dialogUsuarios\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialogUsuariosTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Selecionar Gestor de Recurso</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\" style=\"width: 600px;\">\n                <app-select-usuario></app-select-usuario>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\">Fechar</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/recurso/recurso.component.less":
/*!************************************************!*\
  !*** ./src/app/recurso/recurso.component.less ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY3Vyc28vcmVjdXJzby5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/recurso/recurso.component.ts":
/*!**********************************************!*\
  !*** ./src/app/recurso/recurso.component.ts ***!
  \**********************************************/
/*! exports provided: RecursoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecursoComponent", function() { return RecursoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstract-component */ "./src/app/abstract-component.ts");
/* harmony import */ var _recurso_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../recurso.service */ "./src/app/recurso.service.ts");




var RecursoComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RecursoComponent, _super);
    function RecursoComponent(recursoService) {
        var _this = _super.call(this) || this;
        _this.recursoService = recursoService;
        _this.LOADING_GESTORES = 0;
        _this.COMPLETE_GESTORES = 1;
        _this.ERROR_GESTORES = 2;
        _this.RECNULL_GESTORES = 3;
        _this.statusGestores = _this.RECNULL_GESTORES;
        return _this;
    }
    Object.defineProperty(RecursoComponent.prototype, "recursos", {
        get: function () {
            return this.recursoService.recursos;
        },
        set: function (recursos) {
            this.recursoService.recursos = recursos;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecursoComponent.prototype, "recursoSelecionado", {
        get: function () {
            return this.recursoService.recursoSelecionado;
        },
        set: function (recurso) {
            this.recursoService.recursoSelecionado = recurso;
        },
        enumerable: true,
        configurable: true
    });
    RecursoComponent.prototype.selecionarRecurso = function (recurso) {
        var _this = this;
        if (this.recursoSelecionado.id != recurso.id) {
            this.recursoSelecionado = recurso;
            this.statusGestores = this.LOADING_GESTORES;
            this.recursoSelecionado.gestores = [];
            this.recursoService.obtemGestoresRecurso()
                .then(function (response) {
                _this.statusGestores = _this.COMPLETE_GESTORES;
            })
                .catch(function (response) {
                _this.statusGestores = _this.ERROR_GESTORES;
            });
        }
    };
    RecursoComponent.prototype.removeGestor = function (usuario) {
        if (confirm("Confirmar Remoção deste Gestor?"))
            this.recursoService.removeGestorRecurso(usuario)
                .then(function (response) {
            })
                .catch(function (response) {
            });
    };
    RecursoComponent.prototype.addGestor = function (usuario) {
        if (confirm("Confirmar Adição deste Gestor?"))
            this.recursoService.adicionaGestorRecurso(usuario)
                .then(function (response) {
            })
                .catch(function (response) {
            });
    };
    RecursoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.status = this.LOADING;
        this.recursoService.listar()
            .then(function (response) {
            _this.status = _this.COMPLETE;
        })
            .catch(function (response) {
            _this.status = _this.ERROR;
        });
    };
    RecursoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recurso',
            template: __webpack_require__(/*! ./recurso.component.html */ "./src/app/recurso/recurso.component.html"),
            styles: [__webpack_require__(/*! ./recurso.component.less */ "./src/app/recurso/recurso.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_recurso_service__WEBPACK_IMPORTED_MODULE_3__["RecursoService"]])
    ], RecursoComponent);
    return RecursoComponent;
}(_abstract_component__WEBPACK_IMPORTED_MODULE_2__["AbstractComponent"]));



/***/ }),

/***/ "./src/app/recurso/recurso.ts":
/*!************************************!*\
  !*** ./src/app/recurso/recurso.ts ***!
  \************************************/
/*! exports provided: Recurso */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Recurso", function() { return Recurso; });
var Recurso = /** @class */ (function () {
    function Recurso(id, nome, descricao) {
        if (typeof id == "object") {
            this.id = id['id'];
            this.nome = id['nome'];
            this.descricao = id['descricao'];
        }
        else {
            this.id = id;
            this.nome = nome;
            this.descricao = descricao;
        }
        this.gestores = [];
    }
    return Recurso;
}());



/***/ }),

/***/ "./src/app/redimensionar.directive.ts":
/*!********************************************!*\
  !*** ./src/app/redimensionar.directive.ts ***!
  \********************************************/
/*! exports provided: RedimensionarDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedimensionarDirective", function() { return RedimensionarDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dados_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dados.service */ "./src/app/dados.service.ts");
/* harmony import */ var _redimensionavel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redimensionavel */ "./src/app/redimensionavel.ts");




var RedimensionarDirective = /** @class */ (function () {
    function RedimensionarDirective(el, dadosService) {
        this.el = el;
        this.dadosService = dadosService;
        this.redimensionavel = null;
        jQuery(this.el.nativeElement).addClass('linha-full-height');
    }
    Object.defineProperty(RedimensionarDirective.prototype, "redimensionar", {
        get: function () {
            return this._redimensionar;
        },
        set: function (value) {
            this._redimensionar = value;
            this.processa();
        },
        enumerable: true,
        configurable: true
    });
    RedimensionarDirective.prototype.processa = function () {
        if (this.redimensionavel == null) {
            this.redimensionavel = new _redimensionavel__WEBPACK_IMPORTED_MODULE_3__["Redimensionavel"](this.el.nativeElement, this.redimensionar);
            this.dadosService.componentesHeight.push(this.redimensionavel);
        }
        else
            this.redimensionavel.base = this.redimensionar;
        this.dadosService.resizeFull();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
    ], RedimensionarDirective.prototype, "redimensionar", null);
    RedimensionarDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[redimensionar]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _dados_service__WEBPACK_IMPORTED_MODULE_2__["DadosService"]])
    ], RedimensionarDirective);
    return RedimensionarDirective;
}());



/***/ }),

/***/ "./src/app/redimensionavel.ts":
/*!************************************!*\
  !*** ./src/app/redimensionavel.ts ***!
  \************************************/
/*! exports provided: Redimensionavel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Redimensionavel", function() { return Redimensionavel; });
var Redimensionavel = /** @class */ (function () {
    function Redimensionavel(elemento, base, min, max, personalizado) {
        this.elemento = elemento;
        this.base = parseInt(base);
        this.min = min != null ? parseInt(min) : null;
        this.max = max != null ? parseInt(max) : null;
        this.personalizado = personalizado;
    }
    Redimensionavel.prototype.executarPersonalizado = function () {
        this.personalizado.funcao(this.personalizado.parametros);
    };
    return Redimensionavel;
}());



/***/ }),

/***/ "./src/app/reservas.service.ts":
/*!*************************************!*\
  !*** ./src/app/reservas.service.ts ***!
  \*************************************/
/*! exports provided: ReservasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservasService", function() { return ReservasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _reservas_evento__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reservas/evento */ "./src/app/reservas/evento.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _usuarios_usuario__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./usuarios/usuario */ "./src/app/usuarios/usuario.ts");
/* harmony import */ var _dados_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dados.service */ "./src/app/dados.service.ts");
/* harmony import */ var _recurso_recurso__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recurso/recurso */ "./src/app/recurso/recurso.ts");







var ReservasService = /** @class */ (function () {
    function ReservasService(http, dadosService) {
        this.http = http;
        this.dadosService = dadosService;
        this.evento = new _reservas_evento__WEBPACK_IMPORTED_MODULE_2__["EventoReserva"]();
        this.events = [];
        this.eventsIndex = {};
        this.recurso = new _recurso_recurso__WEBPACK_IMPORTED_MODULE_6__["Recurso"](0, "", "");
        this.usuario = new _usuarios_usuario__WEBPACK_IMPORTED_MODULE_4__["Usuario"](0, "", "", "", false);
    }
    ReservasService.prototype.create = function () {
        var _this = this;
        return this.http.post("/reservas", this.evento.gerarEventPost(this.dadosService.statuses[0])).toPromise()
            .then(function (response) {
            var e = _reservas_evento__WEBPACK_IMPORTED_MODULE_2__["EventoReserva"].obtemEventoGet(response.json(), _this.usuario);
            _this.eventsIndex[e.id] = _this.events.length;
            _this.events = _this.events.concat([
                //this.evento.gerarEventApi(this.events.length)
                e]);
            return response;
        });
    };
    ReservasService.prototype.update = function () {
        var _this = this;
        return this.http.put("/reservas/" + this.evento.id, this.evento.gerarEventPost()).toPromise()
            .then(function (response) {
            var e = _reservas_evento__WEBPACK_IMPORTED_MODULE_2__["EventoReserva"].obtemEventoGet(response.json(), _this.usuario);
            var copia = _this.events.slice();
            copia[_this.eventsIndex[e.id]] = e;
            _this.events = copia;
            return response;
        });
    };
    ReservasService.prototype.delete = function () {
        var _this = this;
        return this.http.delete("/reservas/" + this.evento.id).toPromise()
            .then(function (response) {
            var copia = _this.events.slice();
            copia.splice(_this.eventsIndex[_this.evento.id], 1);
            _this.events = copia;
            return response;
        });
    };
    ReservasService.prototype.listar = function () {
        var _this = this;
        return this.http.get("/reservas/listar").toPromise()
            .then(function (response) {
            var lista = response.json();
            _this.events = [];
            _this.eventsIndex = {};
            for (var i in lista) {
                var e = _reservas_evento__WEBPACK_IMPORTED_MODULE_2__["EventoReserva"].obtemEventoGet(lista[i], _this.usuario);
                _this.events.push(e);
                _this.eventsIndex[e.id] = i;
            }
            //console.log(lista)
            console.log(_this.events);
            return _this.events;
        });
    };
    ReservasService.prototype.usuarioLogadoRecurso = function () {
        var _this = this;
        return this.http.get("/reservas/usuario").toPromise()
            .then(function (response) {
            var u = new _usuarios_usuario__WEBPACK_IMPORTED_MODULE_4__["Usuario"](response.json());
            _this.usuario = u;
            return _this.usuario;
        });
    };
    ReservasService.prototype.recursoSelecionado = function () {
        var _this = this;
        return this.http.get("/reservas/recurso").toPromise()
            .then(function (response) {
            _this.recurso = new _recurso_recurso__WEBPACK_IMPORTED_MODULE_6__["Recurso"](response.json());
            return _this.recurso;
        });
    };
    ReservasService.prototype.cancelaReserva = function (justificativa) {
        var _this = this;
        return this.http.put("/reservas/cancelar/", { reservaId: this.evento.id, justificativa: justificativa }).toPromise()
            .then(function (response) {
            var e = _reservas_evento__WEBPACK_IMPORTED_MODULE_2__["EventoReserva"].obtemEventoGet(response.json(), _this.usuario);
            var copia = _this.events.slice();
            copia[_this.eventsIndex[e.id]] = e;
            _this.events = copia;
            return response;
        });
    };
    ReservasService.prototype.mudarStatusReserva = function (status, justificativa) {
        var _this = this;
        return this.http.put("/reservas/status/", { status: status, reservaId: this.evento.id, justificativa: justificativa }).toPromise()
            .then(function (response) {
            var e = _reservas_evento__WEBPACK_IMPORTED_MODULE_2__["EventoReserva"].obtemEventoGet(response.json(), _this.usuario);
            var copia = _this.events.slice();
            copia[_this.eventsIndex[e.id]] = e;
            _this.events = copia;
            return response;
        });
    };
    ReservasService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"], _dados_service__WEBPACK_IMPORTED_MODULE_5__["DadosService"]])
    ], ReservasService);
    return ReservasService;
}());



/***/ }),

/***/ "./src/app/reservas/evento.ts":
/*!************************************!*\
  !*** ./src/app/reservas/evento.ts ***!
  \************************************/
/*! exports provided: EventoReserva */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventoReserva", function() { return EventoReserva; });
/* harmony import */ var _usuarios_usuario__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../usuarios/usuario */ "./src/app/usuarios/usuario.ts");
/* harmony import */ var _status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../status */ "./src/app/status.ts");


var EventoReserva = /** @class */ (function () {
    /*
    groupIdurl:string;
    classNames:Array<string> = []
    editable:boolean;
    startEditable:boolean;
    durationEditable:boolean;
    resourceEditable:boolean;
    rendering:string; //('background|inverse-background');
    overlap:boolean
    constraint
    extendedProps
    source*/
    function EventoReserva() {
        this.id = 0;
        this.allDay = false;
        this.title = "";
        this.backgroundColor = EventoReserva.COR;
        this.maisDay = false;
        this.repeticao = false;
        this.status = new _status__WEBPACK_IMPORTED_MODULE_1__["Status"](0, "", "", "");
        this.start = EventoReserva.defaultDateStart;
        this.end = EventoReserva.defaultDateEnd;
        this.horaStart = EventoReserva.defaultDateStart;
        this.horaEnd = EventoReserva.defaultDateEnd;
    }
    EventoReserva.prototype.gerarEventApi = function (id) {
        var eventApi = { title: this.title, allDay: this.allDay, maisDay: this.maisDay };
        if (id)
            eventApi.id = id;
        if (this.allDay) {
            if (this.maisDay) {
                eventApi.start = this.start.toJSON().slice(0, 10);
                eventApi.end = this.end.toJSON().slice(0, 10);
                var end = new Date(this.end);
                end.setDate(this.end.getDate() + 1);
                eventApi.end = end.toJSON().slice(0, 10);
            }
            else {
                eventApi.start = this.start.toJSON().slice(0, 10);
                eventApi.end = null;
            }
        }
        else {
            if (this.maisDay) {
                eventApi.start = new Date(this.start.getFullYear(), this.start.getMonth(), this.start.getDate(), this.horaStart.getHours(), this.horaStart.getMinutes()).toJSON();
                eventApi.end = new Date(this.end.getFullYear(), this.end.getMonth(), this.end.getDate(), this.horaEnd.getHours(), this.horaEnd.getMinutes()).toJSON();
            }
            else {
                eventApi.start = new Date(this.start.getFullYear(), this.start.getMonth(), this.start.getDate(), this.horaStart.getHours(), this.horaStart.getMinutes()).toJSON();
                eventApi.end = new Date(this.start.getFullYear(), this.start.getMonth(), this.start.getDate(), this.horaEnd.getHours(), this.horaEnd.getMinutes()).toJSON();
            }
        }
        if (this.backgroundColor != EventoReserva.COR)
            eventApi.backgroundColor = this.backgroundColor;
        return eventApi;
    };
    EventoReserva.obtemEvento = function (ev, evIndex) {
        var evento = new EventoReserva();
        evento.id = ev.id ? parseInt(ev.id) : 0;
        evento.allDay = ev.allDay;
        if (ev.allDay) {
            evento.start = new Date(ev.start);
            evento.horaStart = new Date(ev.start);
            evento.horaStart.setHours(0, 0, 0);
            evento.horaEnd = new Date(ev.start);
            evento.horaEnd.setHours(23, 30, 0);
            if (ev.end) {
                // checar se é no mesmo dia
                var check = new Date(ev.end);
                check.setDate(check.getDate() - 1);
                if (evento.horaStart.getTime() >= check.getTime()) {
                    evento.maisDay = false;
                    evento.end = null;
                }
                else {
                    evento.maisDay = true;
                    evento.end = new Date(check);
                }
            }
            else {
                evento.maisDay = false;
                evento.end = null;
            }
            // tornar "novo evento" com allDay setado false
            //if (evento.id == 0)
            // evento.allDay = false;
        }
        else {
            evento.start = new Date(ev.start);
            evento.horaStart = new Date(ev.start);
            if (ev.end) {
                evento.end = new Date(ev.end);
                // tratamento continuidade
                evento.horaEnd = new Date(ev.end);
                evento.maisDay = evento.start.getDate() < evento.end.getDate();
            }
            else {
                evento.end = new Date(ev.start);
                evento.end.setHours(ev.start.getHours() + 1);
                evento.horaEnd = new Date(evento.end);
                evento.maisDay = evento.start.getDate() < evento.end.getDate();
            }
        }
        evento.title = ev.title;
        if (evIndex) {
            evento.observacao = evIndex.observacao;
            evento.status = _status__WEBPACK_IMPORTED_MODULE_1__["Status"].generateStatus(evIndex.status),
                evento.justificativa = evIndex.justificativa;
            evento.created_at = new Date(evIndex.created_at + " GMT");
            evento.updated_at = new Date(evIndex.updated_at + " GMT");
            evento.usuario = new _usuarios_usuario__WEBPACK_IMPORTED_MODULE_0__["Usuario"](evIndex.usuario_id, "", "", "", null);
        }
        evento.backgroundColor = ev.backgroundColor == null || ev.backgroundColor == "" ? evento.backgroundColor = EventoReserva.COR : ev.backgroundColor;
        return evento;
        //evento.borderColor
        //evento.textColor
    };
    EventoReserva.prototype.gerarEventPost = function (id) {
        var eventApi = { title: this.title, allDay: this.allDay, maisDay: this.maisDay, observacao: this.observacao, justificativa: this.justificativa };
        if (typeof id == 'number')
            eventApi.id = id;
        if (typeof id == 'object' && id instanceof _status__WEBPACK_IMPORTED_MODULE_1__["Status"])
            eventApi.status = id;
        else
            eventApi.status = this.status;
        if (this.allDay) {
            if (this.maisDay) {
                eventApi.start = this.start.toJSON().slice(0, 10);
                eventApi.end = this.end.toJSON().slice(0, 10);
                var end = new Date(this.end);
                end.setDate(this.end.getDate() + 1);
                eventApi.end = end.toJSON().slice(0, 10);
            }
            else {
                eventApi.start = this.start.toJSON().slice(0, 10);
                eventApi.end = null;
            }
        }
        else {
            if (this.maisDay) {
                eventApi.start = new Date(this.start.getFullYear(), this.start.getMonth(), this.start.getDate(), this.horaStart.getHours(), this.horaStart.getMinutes()).toJSON().slice(0, 19).replace('T', ' ');
                eventApi.end = new Date(this.end.getFullYear(), this.end.getMonth(), this.end.getDate(), this.horaEnd.getHours(), this.horaEnd.getMinutes()).toJSON().slice(0, 19).replace('T', ' ');
            }
            else {
                eventApi.start = new Date(this.start.getFullYear(), this.start.getMonth(), this.start.getDate(), this.horaStart.getHours(), this.horaStart.getMinutes()).toJSON().slice(0, 19).replace('T', ' ');
                eventApi.end = new Date(this.start.getFullYear(), this.start.getMonth(), this.start.getDate(), this.horaEnd.getHours(), this.horaEnd.getMinutes()).toJSON().slice(0, 19).replace('T', ' ');
            }
        }
        if (this.backgroundColor != EventoReserva.COR)
            eventApi.backgroundColor = this.backgroundColor;
        return eventApi;
    };
    EventoReserva.obtemEventoGet = function (ev, usuarioLogado) {
        ev.id = parseInt(ev.id);
        if (!ev.allDay) {
            ev.start = new Date(ev.start + " GMT");
            ev.end = new Date(ev.end + " GMT");
        }
        if (!ev.backgroundColor) {
            if (ev.status) {
                if (usuarioLogado.id != ev.usuario_id && !usuarioLogado.gestor && ev.status.chave == _status__WEBPACK_IMPORTED_MODULE_1__["Status"].CHAVES.ANALISE)
                    ev.backgroundColor = EventoReserva.COR_ANALISE_OUTRO;
                else
                    ev.backgroundColor = ev.status.cor;
            }
        }
        return ev;
        //evento.borderColor
        //evento.textColor
    };
    EventoReserva.NOW = new Date();
    EventoReserva.COR_ANALISE = "#ffd700";
    EventoReserva.COR_ANALISE_OUTRO = "#dadada";
    EventoReserva.COR_REJEITADO = "#ff5050";
    EventoReserva.COR_DEFERIDO = "#00b900";
    EventoReserva.COR = EventoReserva.COR_ANALISE;
    EventoReserva.defaultDateStart = new Date(EventoReserva.NOW.getFullYear(), EventoReserva.NOW.getMonth(), EventoReserva.NOW.getDate(), 0);
    EventoReserva.defaultDateEnd = new Date(EventoReserva.NOW.getFullYear(), EventoReserva.NOW.getMonth(), EventoReserva.NOW.getDate(), 23, 30);
    return EventoReserva;
}());



/***/ }),

/***/ "./src/app/reservas/reservas.component.html":
/*!**************************************************!*\
  !*** ./src/app/reservas/reservas.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-14\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\" title=\"{{recurso.descricao}}\">Reservar: {{recurso.nome}}</div>\n            <div class=\"panel-body\" redimensionar=\"222\">\n                <p-fullCalendar #fc [events]=\"events\" [options]=\"options\" (onSelect)=\"aee($event)\"></p-fullCalendar>\n            </div>\n            <div class=\"panel-footer\">\n                <table>\n                    <tr>\n                        <!--td style=\"width: 180px; padding: 0px 2px;\"><p-dropdown [options]=\"temas\" [(ngModel)]=\"selectedTheme\" (onChange)=\"onThemeSelect()\"></p-dropdown></td-->\n                        <td style=\"width: 60px; padding: 0px 5px;\"><p-button label=\"Novo\" data-toggle=\"modal\" data-target=\"#dialogEvento\" (click)=\"janela()\"></p-button></td>\n                    </tr>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"dialogEvento\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialogEventoTitle\" aria-hidden=\"true\" data-backdrop=\"static\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\" [style.backgroundColor]=\"evento.backgroundColor\">\n                <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Evento</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"resetEvento()\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\" style=\"width: 362px;\">\n                <ng-container *ngIf=\"!usuario.gestor\">\n                    <label>Solicitante</label><br>\n                    <input id=\"tituloInput\" class=\"form-control\" [(ngModel)]=\"evento.title\" [readonly]=\"!editavel\" autofocus/>\n                </ng-container>\n                <table *ngIf=\"usuario.gestor\">\n                    <colgroup>\n                        <col width=\"278px\"/>\n                        <col />\n                    </colgroup>\n                    <tr>\n                        <td>\n                            <label>Solicitante</label><br>\n                            <input id=\"tituloInput\" class=\"form-control\" [(ngModel)]=\"evento.title\" [readonly]=\"!editavel\" autofocus/>\n                        </td>\n                        <td style=\"padding-left: 10px;\">\n                            <label>Cor</label><br>\n                            <input type=\"color\" style=\"height: 34px; border-radius: 3px;\" id=\"head\" name=\"head\" [(ngModel)]=\"evento.backgroundColor\"  [disabled]=\"!editavel\">\n                        </td>\n                    </tr>\n                </table>\n                <p></p>\n                <label>Observações</label><br>\n                <textarea id=\"tituloInput\" class=\"form-control\" [(ngModel)]=\"evento.observacao\" [readonly]=\"!editavel\"></textarea>\n                <table>\n                    <tr>\n                        <td>\n                            <label>Data</label><br>\n                            <p-calendar [locale]=\"pt\" [(ngModel)]=\"evento.start\" [maxDate]=\"evento.maisDay ? evento.end : null\" dateFormat=\"dd/mm/yy\" [showIcon]=\"true\"  [disabled]=\"!editavel\"></p-calendar>\n                        </td>\n                        <td style=\"width: 10px;\"></td>\n                        <td *ngIf=\"evento.maisDay\">\n                            <label>Fim</label><br>\n                            <p-calendar [locale]=\"pt\" [(ngModel)]=\"evento.end\" [minDate]=\"evento.start\" dateFormat=\"dd/mm/yy\" [showIcon]=\"true\"  [disabled]=\"!editavel\"></p-calendar>\n                        </td>\n                    </tr>\n                </table>\n                <p></p>\n                <label *ngIf=\"evento.allDay\">* Dia Inteiro</label>\n                <ng-container *ngIf=\"!evento.allDay\">\n                    <table>\n                        <tr>\n                            <td>\n                                <label>Hora Início</label><br>\n                                <p-calendar [timeOnly]=\"true\" [stepMinute]=\"30\" [locale]=\"pt\" [maxDate]=\"evento.horaEnd\" [(ngModel)]=\"evento.horaStart\"  [disabled]=\"!editavel\"></p-calendar>\n                            </td>\n                            <td style=\"width: 10px;\"></td>\n                            <td>\n                                <label>Hora Fim</label><br>\n                                <p-calendar [timeOnly]=\"true\" [stepMinute]=\"30\" [locale]=\"pt\" [minDate]=\"evento.horaStart\" [(ngModel)]=\"evento.horaEnd\" [disabled]=\"!editavel\"></p-calendar>\n                            </td>\n                        </tr>\n                    </table>\n                </ng-container>\n                <p></p>\n                <div *ngIf=\"evento.justificativa\" class=\"alert alert-{{(evento.status.id && evento.status.chave == STATUS_TERMINADO) ? 'success' : 'danger'}}\" style=\"margin: auto;\" role=\"alert\">\n                    <label>{{evento.justificativa}}</label>\n                </div>\n                <div *ngIf=\"usuario.gestor && evento.id > 0 && (evento.status.id && evento.status.chave == STATUS_INICIAL_PADRAO)\" class=\"alert alert-warning\" style=\"margin: auto;\" role=\"alert\">\n                    <table style=\"text-align: center; margin: auto\">\n                        <tr>\n                            <td>\n                                <button class=\"btn btn-success botao-barra\" [disabled]=\"!editavel\" (click)=\"deferir()\">Deferir</button>\n                            </td>\n                            <td style=\"width: 10px;\"></td>\n                            <td>\n                                <button class=\"btn btn-danger botao-barra\"  [disabled]=\"!editavel\" (click)=\"indeferir()\">Indeferir</button>\n                            </td>\n                        </tr>\n                    </table>\n                </div>\n                <div *ngIf=\"evento.created_at\" style=\"text-align: right; font-size: 12px;\">\n                    <label>\n                        * solicitado em {{evento.created_at | formatadorData:true}}\n                    </label>\n                </div>\n                \n            </div>\n            <div class=\"modal-footer\">\n                <button *ngIf=\"usuario.gestor || evento.id == 0\" type=\"button\" class=\"btn btn-primary botao-barra\" (click)=\"addEvent()\" [disabled]=\"!editavel || (evento.status.id && evento.status.chave != STATUS_INICIAL_PADRAO)\">{{evento.id == 0 ? \"Solicitar\" : \"Editar\"}}</button>\n                <button *ngIf=\"(usuario.gestor && (evento.status.id && evento.status.chave == STATUS_TERMINADO) && evento.id > 0) || (!usuario.gestor && (evento.status.id && evento.status.chave == STATUS_INICIAL_PADRAO) && evento.id > 0 && evento.usuario.id == usuario.id)\" class=\"btn btn-danger botao-barra\" (click)=\"cancelarReserva()\" [disabled]=\"!editavel \">Cancelar</button>\n                <!--button type=\"button\" class=\"btn btn-danger botao-barra\" (click)=\"delEvent()\" [disabled]=\"!editavel || evento.id == 0\">Excluir</button-->\n                <button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\" (click)=\"resetEvento()\">Fechar</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/reservas/reservas.component.less":
/*!**************************************************!*\
  !*** ./src/app/reservas/reservas.component.less ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc2VydmFzL3Jlc2VydmFzLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/reservas/reservas.component.ts":
/*!************************************************!*\
  !*** ./src/app/reservas/reservas.component.ts ***!
  \************************************************/
/*! exports provided: ReservasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservasComponent", function() { return ReservasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/@fullcalendar/daygrid/main.esm.js");
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/timegrid */ "./node_modules/@fullcalendar/timegrid/main.esm.js");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullcalendar/interaction */ "./node_modules/@fullcalendar/interaction/main.esm.js");
/* harmony import */ var _fullcalendar_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/list */ "./node_modules/@fullcalendar/list/main.esm.js");
/* harmony import */ var primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/fullcalendar */ "./node_modules/primeng/fullcalendar.js");
/* harmony import */ var primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fullcalendar_core_locales_pt_br__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fullcalendar/core/locales/pt-br */ "./node_modules/@fullcalendar/core/locales/pt-br.js");
/* harmony import */ var _fullcalendar_core_locales_pt_br__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_core_locales_pt_br__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _redimensionavel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../redimensionavel */ "./src/app/redimensionavel.ts");
/* harmony import */ var _dados_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dados.service */ "./src/app/dados.service.ts");
/* harmony import */ var _theme_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../theme.service */ "./src/app/theme.service.ts");
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../abstract-component */ "./src/app/abstract-component.ts");
/* harmony import */ var _evento__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./evento */ "./src/app/reservas/evento.ts");
/* harmony import */ var _reservas_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../reservas.service */ "./src/app/reservas.service.ts");
/* harmony import */ var _status__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../status */ "./src/app/status.ts");


//import { ThemeService } from '../theme.service';




//import { Theme } from './theme';









var ReservasComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ReservasComponent, _super);
    function ReservasComponent(themeService, dadosService, reservasService) {
        var _this_1 = _super.call(this) || this;
        _this_1.themeService = themeService;
        _this_1.dadosService = dadosService;
        _this_1.reservasService = reservasService;
        _this_1.STATUS_INICIAL_PADRAO = _status__WEBPACK_IMPORTED_MODULE_14__["Status"].CHAVES.ANALISE;
        _this_1.STATUS_TERMINADO = _status__WEBPACK_IMPORTED_MODULE_14__["Status"].CHAVES.DEFERIDO;
        _this_1.data = new Date();
        _this_1.rangeDates = new Date();
        _this_1.temas = [];
        _this_1.intervalGamb = 0;
        _this_1.tamanho = 500;
        return _this_1;
        /*var themes: Theme[] = Theme.getThemes();

        for (var i in themes) {
            this.temas.push({ label: themes[i].name, value: themes[i] })
            if (themes[i].name == "luna-green")
                this.selectedTheme = themes[i];
        }*/
    }
    ReservasComponent.prototype.onThemeSelect = function () {
        //this.themeService.setTheme(this.selectedTheme.name);
    };
    Object.defineProperty(ReservasComponent.prototype, "evento", {
        get: function () {
            return this.reservasService.evento;
        },
        set: function (evento) {
            this.reservasService.evento = evento;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReservasComponent.prototype, "events", {
        get: function () {
            return this.reservasService.events;
        },
        set: function (events) {
            this.reservasService.events = events;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReservasComponent.prototype, "recurso", {
        get: function () {
            return this.reservasService.recurso;
        },
        set: function (recurso) {
            this.reservasService.recurso = recurso;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReservasComponent.prototype, "usuario", {
        get: function () {
            return this.reservasService.usuario;
        },
        set: function (usuario) {
            this.reservasService.usuario = usuario;
        },
        enumerable: true,
        configurable: true
    });
    ReservasComponent.prototype.ngOnInit = function () {
        var _this_1 = this;
        this.events = [];
        this.editavel = true;
        this.reservasService.usuarioLogadoRecurso().then(function (response) {
            _this_1.usuario = response;
        });
        this.dadosService.statusList()
            .then(function (response) {
            _this_1.reservasService.recursoSelecionado()
                .then(function (response) {
                _this_1.reservasService.listar()
                    .then(function (response) {
                    _this_1.status = _this_1.COMPLETE;
                })
                    .catch(function (response) {
                    _this_1.status = _this_1.ERROR;
                    console.log(response);
                });
            })
                .catch(function (response) {
                _this_1.status = _this_1.ERROR;
                console.log(response);
            });
        })
            .catch(function (response) {
            _this_1.status = _this_1.ERROR;
            console.log(response);
        });
        // Alterando o texto "Compromissos" para "Lista"
        _fullcalendar_core_locales_pt_br__WEBPACK_IMPORTED_MODULE_7___default.a.buttonText.list = "Lista";
        this.options = {
            plugins: [_fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_3__["default"], _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_2__["default"], _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_4__["default"], _fullcalendar_list__WEBPACK_IMPORTED_MODULE_5__["default"]],
            defaultDate: new Date(),
            header: {
                left: 'prev,next today',
                center: 'title',
                right: "timeGridWeek,dayGridMonth,listMonth" //"dayGridMonth,timeGridWeek,timeGridDay,listMonth  dayGridDay,dayGridWeek"
            },
            selectable: true,
            height: this.tamanho,
            locales: [_fullcalendar_core_locales_pt_br__WEBPACK_IMPORTED_MODULE_7___default.a],
            locale: "pt-br",
            //editable: true,
            //deepChangeDetection: true,
            //weekends: false,
            //showNonCurrentDates: true,
            dateClick: function (e) {
                //console.log (e);
            },
            select: function (e) {
                _this_1.evento = _evento__WEBPACK_IMPORTED_MODULE_12__["EventoReserva"].obtemEvento(e, e.id == null ? null : _this_1.reservasService.events[_this_1.reservasService.eventsIndex[e.id]]);
                //jQuery("#dialogEvento").modal('show');
                //console.log(this.evento)
            },
            unselect: function (e) {
                var _this = _this_1;
                _this_1.intervalGamb = setTimeout(function () {
                    if (_this.evento.id)
                        true;
                    else
                        _this.resetEvento();
                }, 20);
            },
            eventClick: function (e) {
                _this_1.evento = _evento__WEBPACK_IMPORTED_MODULE_12__["EventoReserva"].obtemEvento(e.event, _this_1.reservasService.events[_this_1.reservasService.eventsIndex[e.event.id]]);
                jQuery("#dialogEvento").modal('show');
                //this.modifyProp(0, "teste")
                //e.event.date = new Date()
                //e.el.style.borderColor = 'red';
                //console.log(this.evento)
            }
        };
        var _this = this;
        setTimeout(function () {
            _this.resize();
        }, 10);
        this.pt = {
            firstDayOfWeek: 0,
            dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
            dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
            dayNamesMin: ['Do', 'Se', 'Te', 'Qu', 'Qu', 'Se', 'Sa'],
            monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
                'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            today: 'Hoje',
            clear: 'Limpar'
        };
    };
    ReservasComponent.prototype.aee = function (event) {
        event.jsEvent.preventDefault(); // don't let the browser navigate
        console.log("event");
    };
    ReservasComponent.prototype.modifyProp = function (eventIndex, newTitle) {
        var calendarEvents = this.events.slice(); // a clone
        var singleEvent = Object.assign({}, calendarEvents[eventIndex]); // a clone
        singleEvent.title = newTitle;
        calendarEvents[eventIndex] = singleEvent;
        this.events = calendarEvents; // reassign the array
        //.fullCalendar( ‘renderEvent’, event [, stick ] )
    };
    ReservasComponent.prototype.resetEvento = function () {
        this.evento = new _evento__WEBPACK_IMPORTED_MODULE_12__["EventoReserva"]();
    };
    ReservasComponent.prototype.changeAllDay = function () {
        /*var nextDay = new Date(day);
        nextDay.setDate(day.getDate()+1);*/
    };
    ReservasComponent.prototype.changeMaisDay = function () {
        if (this.evento.maisDay) {
            this.evento.end = new Date(this.evento.start);
            this.evento.end.setDate(this.evento.start.getDate() + 1);
        }
    };
    ReservasComponent.prototype.addEvent = function () {
        if (!this.evento.title) {
            alert("Insira um Título");
            document.getElementById('tituloInput').focus();
            return;
        }
        if ((this.evento.end ? this.evento.start.getTime() > this.evento.end.getTime() : false) || (this.evento.horaEnd ? this.evento.horaStart.getTime() > this.evento.horaEnd.getTime() : false)) {
            alert("O início não pode ser depois do fim");
            return;
        }
        if (this.evento.id) {
            if (confirm("Confirmar alteração deste Evento?")) {
                this.reservasService.update()
                    .then(function (response) {
                    jQuery("#dialogEvento").modal('hide');
                })
                    .catch(function (response) {
                    alert("Falha na criação do evento!");
                });
            }
        }
        else {
            this.reservasService.create()
                .then(function (response) {
                jQuery("#dialogEvento").modal('hide');
            })
                .catch(function (response) {
                alert("Falha na criação do evento!");
            });
        }
    };
    ReservasComponent.prototype.delEvent = function (e) {
        if (this.evento.id > 0 && confirm("Confirmar exclusão deste Evento?"))
            this.reservasService.delete().then(function (response) {
                jQuery("#dialogEvento").modal('hide');
            });
    };
    ReservasComponent.prototype.deferir = function () {
        var justificativa = prompt("Insira algum comentário para o solicitante (Opcional):");
        justificativa = justificativa == "" ? null : justificativa;
        this.reservasService.mudarStatusReserva("DEFERIDO", justificativa)
            .then(function (response) {
            jQuery('#dialogEvento').modal('hide');
        })
            .catch(function (response) {
            alert("Falha na atualização do Status da Reserva!");
        });
    };
    ReservasComponent.prototype.indeferir = function () {
        var justificativa = prompt("Informe uma justificativa para rejeitar esta reserva:");
        if (!justificativa) {
            alert("Uma justificativa precisa ser informada");
            return;
        }
        this.reservasService.mudarStatusReserva("INDEFERIDO", justificativa)
            .then(function (response) {
            jQuery('#dialogEvento').modal('hide');
        })
            .catch(function (response) {
            alert("Falha na atualização do Status da Reserva!");
        });
    };
    ReservasComponent.prototype.cancelarReserva = function () {
        var justificativa = prompt("Informe uma justificativa para cancelar esta reserva:");
        if (!justificativa) {
            alert("Uma justificativa precisa ser informada");
            return;
        }
        this.reservasService.cancelaReserva(justificativa)
            .then(function (response) {
            jQuery('#dialogEvento').modal('hide');
        })
            .catch(function (response) {
            alert("Falha no cancelamento da Reserva!");
        });
    };
    ReservasComponent.prototype.update = function () {
        //incorrect
        /*this.events.push({
            "title": "Conference",
            "start": "2019-06-11",
            "end": "2019-06-13"
        });*/
        //correct
        /*this.events = [...this.events, {
            "title": "Conference",
            "start": "2019-06-12",
            "end": "2019-06-14"
        }];*/
        this.events = this.events.concat([{
                "title": "Conference",
                "date": this.data.toJSON()
            }]);
        //console.log (this.fc)
        //incorrect
        //this.options.weekends = false;
        //correct
        //this.options = [...this.options, { weekends: false }];
        //this.options = {...this.options, { height: 600 }};
    };
    ReservasComponent.prototype.janela = function () {
        this.editavel = true;
        if (this.intervalGamb) {
            clearTimeout(this.intervalGamb);
        }
        //this.evento = new EventoReserva();
        setTimeout(function () {
            document.getElementById('tituloInput').focus();
        }, 500);
    };
    ReservasComponent.prototype.resize = function () {
        var redimensionaAgenda = function (parametros) {
            parametros.componente.calendar.setOption('height', parametros.tamanho);
        };
        var red = new _redimensionavel__WEBPACK_IMPORTED_MODULE_8__["Redimensionavel"](null, 252, 450, null, { funcao: redimensionaAgenda, parametros: { componente: this.fc, tamanho: this.tamanho } });
        this.dadosService.componentesPersonalizados.push(red);
        this.dadosService.resizeFull();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fc'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_6__["FullCalendar"])
    ], ReservasComponent.prototype, "fc", void 0);
    ReservasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reservas',
            template: __webpack_require__(/*! ./reservas.component.html */ "./src/app/reservas/reservas.component.html"),
            styles: [__webpack_require__(/*! ./reservas.component.less */ "./src/app/reservas/reservas.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_theme_service__WEBPACK_IMPORTED_MODULE_10__["ThemeService"], _dados_service__WEBPACK_IMPORTED_MODULE_9__["DadosService"], _reservas_service__WEBPACK_IMPORTED_MODULE_13__["ReservasService"]])
    ], ReservasComponent);
    return ReservasComponent;
}(_abstract_component__WEBPACK_IMPORTED_MODULE_11__["AbstractComponent"]));



/***/ }),

/***/ "./src/app/sala-simplificada.service.ts":
/*!**********************************************!*\
  !*** ./src/app/sala-simplificada.service.ts ***!
  \**********************************************/
/*! exports provided: SalaSimplificadaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaSimplificadaService", function() { return SalaSimplificadaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _array_indexador__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./array-indexador */ "./src/app/array-indexador.ts");
/* harmony import */ var _cursos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cursos.service */ "./src/app/cursos.service.ts");
/* harmony import */ var _lote_salas_simplificado_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lote-salas-simplificado.service */ "./src/app/lote-salas-simplificado.service.ts");
/* harmony import */ var _periodo_letivos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./periodo-letivos.service */ "./src/app/periodo-letivos.service.ts");
/* harmony import */ var _sala_simplificada_sala_simplificada__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sala-simplificada/sala-simplificada */ "./src/app/sala-simplificada/sala-simplificada.ts");








var SalaSimplificadaService = /** @class */ (function () {
    function SalaSimplificadaService(http, loteSalasSimplificadoService, cursosService, periodoLetivosService) {
        this.http = http;
        this.loteSalasSimplificadoService = loteSalasSimplificadoService;
        this.cursosService = cursosService;
        this.periodoLetivosService = periodoLetivosService;
        this.salasSimplificadas = [];
        this.salasSimplificadasIndex = null;
        this.salaSimplificadaSelecionada = _sala_simplificada_sala_simplificada__WEBPACK_IMPORTED_MODULE_7__["SalaSimplificada"].generate();
    }
    Object.defineProperty(SalaSimplificadaService.prototype, "loteSalasSimplificadoSelecionado", {
        get: function () {
            return this.loteSalasSimplificadoService.loteSalasSimplificadoSelecionada;
        },
        enumerable: true,
        configurable: true
    });
    SalaSimplificadaService.prototype.reset = function () {
        this.salasSimplificadas = [];
        this.salasSimplificadasIndex = null;
        this.salaSimplificadaSelecionada = _sala_simplificada_sala_simplificada__WEBPACK_IMPORTED_MODULE_7__["SalaSimplificada"].generate();
    };
    SalaSimplificadaService.prototype.list = function (postSelectId) {
        var _this_1 = this;
        return this.http.get("/salas-simplificadas/list-lote/" + this.loteSalasSimplificadoSelecionado.id)
            .toPromise()
            .then(function (response) {
            _this_1.salasSimplificadas = _sala_simplificada_sala_simplificada__WEBPACK_IMPORTED_MODULE_7__["SalaSimplificada"].generateListPlus(response.json(), _this_1.cursosService.cursosIndex, _this_1.periodoLetivosService.periodoLetivosIdIndex, _this_1.loteSalasSimplificadoSelecionado);
            _this_1.salasSimplificadasIndex = new _array_indexador__WEBPACK_IMPORTED_MODULE_3__["ArrayIndexador"](_this_1.salasSimplificadas);
            if (postSelectId)
                _this_1.salaSimplificadaSelecionada = _this_1.salasSimplificadasIndex.get(postSelectId).clone();
            return _this_1.salasSimplificadas;
        });
    };
    SalaSimplificadaService.prototype.create = function (salaSimplificadaPost) {
        var _this_1 = this;
        return this.http.post("/salas-simplificadas", salaSimplificadaPost)
            .toPromise()
            .then(function (response) {
            return _this_1.list(response.json());
        });
    };
    SalaSimplificadaService.prototype.createAll = function (plDisciplinasAcademicos) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this, salasIds, createUno, _a, _b, _i, i, salaSimplificadaPost, salaId;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _this = this;
                        salasIds = [];
                        createUno = function (salaSimplificadaPost) {
                            return _this.http.post("/salas-simplificadas", salaSimplificadaPost)
                                .toPromise();
                        };
                        _a = [];
                        for (_b in plDisciplinasAcademicos)
                            _a.push(_b);
                        _i = 0;
                        _c.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        i = _a[_i];
                        salaSimplificadaPost = _sala_simplificada_sala_simplificada__WEBPACK_IMPORTED_MODULE_7__["SalaSimplificada"].generatePostSalaSimplificada(0, plDisciplinasAcademicos[i], '', plDisciplinasAcademicos[i].periodo_letivo, this.loteSalasSimplificadoService.loteSalasSimplificadoSelecionada.id);
                        return [4 /*yield*/, createUno(salaSimplificadaPost)];
                    case 2:
                        salaId = _c.sent();
                        salasIds.push(salaId.text());
                        _c.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, this.list()];
                }
            });
        });
    };
    SalaSimplificadaService.prototype.update = function (salaSimplificadaPost) {
        var _this_1 = this;
        return this.http.put("/salas-simplificadas/" + salaSimplificadaPost.id, salaSimplificadaPost)
            .toPromise()
            .then(function (response) {
            return _this_1.list(response.json());
        });
    };
    SalaSimplificadaService.prototype.refreshSala = function (salaId) {
        var _this_1 = this;
        return this.http.get("/salas-simplificadas/refresh/" + salaId)
            .toPromise()
            .then(function (response) {
            return _this_1.list(response.json());
        });
    };
    SalaSimplificadaService.prototype.delete = function (id) {
        var _this_1 = this;
        return this.http.delete("/salas-simplificadas/" + id)
            .toPromise()
            .then(function (response) {
            return _this_1.list();
        });
    };
    SalaSimplificadaService.prototype.exportarEstudantes = function (salaId) {
        return this.http.get("/salas-simplificadas/estudantes/" + salaId)
            .toPromise()
            .then(function (response) {
            return response.text();
        });
    };
    SalaSimplificadaService.prototype.executarRestauracaoSala = function (salaId, macroId, courseImportId) {
        return this.http.get('/salas-simplificadas/autorestore/' + salaId + "/" + macroId + (courseImportId ? "/" + courseImportId : '')).toPromise()
            .then(function (response) {
            return response.text();
        });
    };
    SalaSimplificadaService.prototype.getMacro = function (salaId) {
        return this.http.get("/salas-simplificadas/macro/" + salaId)
            .toPromise()
            .then(function (response) {
            return response.json();
        });
    };
    SalaSimplificadaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _lote_salas_simplificado_service__WEBPACK_IMPORTED_MODULE_5__["LoteSalasSimplificadoService"],
            _cursos_service__WEBPACK_IMPORTED_MODULE_4__["CursosService"], _periodo_letivos_service__WEBPACK_IMPORTED_MODULE_6__["PeriodoLetivosService"]])
    ], SalaSimplificadaService);
    return SalaSimplificadaService;
}());



/***/ }),

/***/ "./src/app/sala-simplificada/sala-simplificada.component.html":
/*!********************************************************************!*\
  !*** ./src/app/sala-simplificada/sala-simplificada.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\t<table class=\"table\" style=\"margin-bottom: 0px\">\n\t\t<colgroup>\n\t\t\t<col *ngIf=\"COLUNAS.id\" width=\"40px\"/>\n\t\t\t<col *ngIf=\"COLUNAS.periodo_letivo\" width=\"70px\"/>\n\t\t\t<col *ngIf=\"COLUNAS.nome_professor\" width=\"100%\"/>\n\t\t\t<col *ngIf=\"COLUNAS.faculdade\" width=\"70px\"/>\n\t\t\t<col *ngIf=\"COLUNAS.curso_key\" width=\"70px\"/>\n\t\t\t<col *ngIf=\"COLUNAS.curso\" width=\"100%\"/>\n\t\t\t<col *ngIf=\"COLUNAS.nome_sala\" width=\"100%\"/>\n\t\t\t<col *ngIf=\"COLUNAS.disciplina_key\" width=\"100px\"/>\n\t\t\t<col *ngIf=\"COLUNAS.carga_horaria_total_disciplina\" width=\"70px\"/>\n\t\t\t<col *ngIf=\"COLUNAS.avaliacao\" width=\"70px\"/>\n\t\t\t<col *ngIf=\"COLUNAS.turma_nome\" width=\"70px\"/>\n\t\t\t<col *ngIf=\"COLUNAS.turma_id\" width=\"70px\"/>\n\t\t\t<col *ngIf=\"COLUNAS.sala_moodle_id\" width=\"70px\"/>\n\t\t\t<col width=\"39px\" />\n\t\t\t<col width=\"39px\" />\n\t\t\t<col width=\"39px\" />\n\t\t\t<col width=\"39px\" />\n\t\t\t<col width=\"15px\" />\n\t\t</colgroup>\n\t\t<thead class=\"thead-light\">\n\t\t\t<tr style=\"cursor: pointer;\" data-toggle=\"modal\" data-target=\"#dialogCheckColunas\">\n\t\t\t\t<th *ngIf=\"COLUNAS.id\" style=\"text-align: center\">#</th>\n\t\t\t\t<th *ngIf=\"COLUNAS.periodo_letivo\" title=\"PERÍODO LETIVO\">PL</th>\n\t\t\t\t<th *ngIf=\"COLUNAS.nome_professor\" class=\"celula-trunca-texto\" title=\"PROFESSOR\">PROFESSOR</th>\n\t\t\t\t<th *ngIf=\"COLUNAS.faculdade\" title=\"FACULDADE\">FAC.</th>\n\t\t\t\t<th *ngIf=\"COLUNAS.curso_key\" title=\"CHAVE DO CURSO SIGECAD\">CR. KEY</th>\n\t\t\t\t<th *ngIf=\"COLUNAS.curso\" class=\"celula-trunca-texto\" title=\"CURSO\">CURSO</th>\n\t\t\t\t<th *ngIf=\"COLUNAS.nome_sala\" class=\"celula-trunca-texto\" title=\"SALA\">SALA</th>\n\t\t\t\t<th *ngIf=\"COLUNAS.disciplina_key\" title=\"CHAVE DA DISCIPLINA SIGECAD\">DISC. KEY</th>\n\t\t\t\t<th *ngIf=\"COLUNAS.carga_horaria_total_disciplina\" title=\"CARGA HORÁRIA\">C. HOR.</th>\n\t\t\t\t<th *ngIf=\"COLUNAS.avaliacao\" title=\"MÉTODO DE AVALIACAO\">AVAL.</th>\n\t\t\t\t<th *ngIf=\"COLUNAS.turma_nome\" title=\"TURMA\">TURMA</th>\n\t\t\t\t<th *ngIf=\"COLUNAS.turma_id\" title=\"ID DA TURMA SIGECAD\">TUR.ID</th>\n\t\t\t\t<th *ngIf=\"COLUNAS.sala_moodle_id\" title=\"ID DA SALA NO MOODLE\">SM ID</th>\n\t\t\t\t<th></th>\n\t\t\t\t<th></th>\n\t\t\t\t<th></th>\n\t\t\t\t<th></th>\n\t\t\t\t<th></th>\n\t\t\t</tr>\n\t\t</thead>\n\t</table>\n</div>\n<div redimensionar=\"316\" style=\"overflow-y: scroll;\">\n\t<table class=\"table\">\n\t\t<colgroup>\n\t\t\t<col *ngIf=\"COLUNAS.id\" width=\"40px\"/>\n\t\t\t<col *ngIf=\"COLUNAS.periodo_letivo\" width=\"70px\"/>\n\t\t\t<col *ngIf=\"COLUNAS.nome_professor\" width=\"100%\"/>\n\t\t\t<col *ngIf=\"COLUNAS.faculdade\" width=\"70px\"/>\n\t\t\t<col *ngIf=\"COLUNAS.curso_key\" width=\"70px\"/>\n\t\t\t<col *ngIf=\"COLUNAS.curso\" width=\"100%\"/>\n\t\t\t<col *ngIf=\"COLUNAS.nome_sala\" width=\"100%\"/>\n\t\t\t<col *ngIf=\"COLUNAS.disciplina_key\" width=\"100px\"/>\n\t\t\t<col *ngIf=\"COLUNAS.carga_horaria_total_disciplina\" width=\"70px\"/>\n\t\t\t<col *ngIf=\"COLUNAS.avaliacao\" width=\"70px\"/>\n\t\t\t<col *ngIf=\"COLUNAS.turma_nome\" width=\"70px\"/>\n\t\t\t<col *ngIf=\"COLUNAS.turma_id\" width=\"70px\"/>\n\t\t\t<col *ngIf=\"COLUNAS.sala_moodle_id\" width=\"70px\"/>\n\t\t\t<col width=\"39px\" />\n\t\t\t<col width=\"39px\" />\n\t\t\t<col width=\"39px\" />\n\t\t\t<col width=\"39px\" />\n\t\t</colgroup>\n\t\t<tbody>\n\t\t\t<tr *ngFor=\"let s of salasSimplificadas\" class=\"clickable-row\" (click)=\"selecionar(s)\" [ngClass]=\"{'linha-selecionada': s.id == salaSimplificadaTemp.id}\">\n\t\t\t\t<ng-container>\n\t\t\t\t\t<td *ngIf=\"COLUNAS.id\">{{s.id}}</td>\n\t\t\t\t\t<td *ngIf=\"COLUNAS.periodo_letivo\">{{s.periodo_letivo?.nome}}</td>\n\t\t\t\t\t<td *ngIf=\"COLUNAS.nome_professor\" class=\"celula-trunca-texto\" title=\"{{s.professor?.name}}\">{{s.professor?.name}}</td>\n\t\t\t\t\t<td *ngIf=\"COLUNAS.faculdade\" title=\"{{s.curso?.faculdade?.sigla}}\">{{s.curso?.faculdade?.sigla}}</td>\n\t\t\t\t\t<td *ngIf=\"COLUNAS.curso_key\" title=\"{{s.curso?.curso_key}}\">{{s.curso?.curso_key}}</td>\n\t\t\t\t\t<td *ngIf=\"COLUNAS.curso\" class=\"celula-trunca-texto\" title=\"{{s.curso?.nome}}\">{{s.curso?.nome}}</td>\n\t\t\t\t\t<td *ngIf=\"COLUNAS.nome_sala\" class=\"celula-trunca-texto\" title=\"{{s.nome_sala}}\">{{s.nome_sala}}</td>\n\t\t\t\t\t<td *ngIf=\"COLUNAS.disciplina_key\" title=\"{{s.disciplina_key}}\">{{s.disciplina_key}}</td>\n\t\t\t\t\t<td *ngIf=\"COLUNAS.carga_horaria_total_disciplina\" title=\"{{s.carga_horaria_total_disciplina}}\">{{s.carga_horaria_total_disciplina}}</td>\n\t\t\t\t\t<td *ngIf=\"COLUNAS.avaliacao\" title=\"{{s.avaliacao}}\">{{s.avaliacao}}</td>\n\t\t\t\t\t<td *ngIf=\"COLUNAS.turma_nome\" title=\"{{s.turma_nome}}\">{{s.turma_nome}}</td>\n\t\t\t\t\t<td *ngIf=\"COLUNAS.turma_id\" title=\"{{s.turma_id}}\">{{s.turma_id}}</td>\n\t\t\t\t\t<td *ngIf=\"COLUNAS.sala_moodle_id\" title=\"{{s.sala_moodle_id}}\" style=\"text-align: center;\">\n\t\t\t\t\t\t<ng-container *ngIf=\"s.link_moodle\"><a href=\"{{s.link_moodle}}\" target=\"_blank\">\n\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-link\"></span> {{s.sala_moodle_id}}</a>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t<ng-container *ngIf=\"!s.link_moodle\">{{s.sala_moodle_id}}</ng-container>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td title=\"Visualizar Dados\">\n\t\t\t\t\t\t<button style=\"text-align: center; margin-left: 2px;\" title=\"Visualizar Dados\" type=\"button\" data-toggle=\"modal\" \n\t\t\t\t\t\t\tdata-target=\"#dialogViewSalaSimplificada\" class=\"btn btn-info botao-reduzido\" [disabled]=\"!editavel\">\n\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-search\"></span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td *ngIf=\"!s.sala_moodle_id\" title=\"Exportar Para Moodle (para realizar a exportação, uma super-macro deve estar configurada no lote de salas e também a sala selecionada não pode já estar associada à um ID de uma sala moodle)\">\n\t\t\t\t\t\t<button style=\"text-align: center; margin-left: 2px;\" title=\"Exportar Para Moodle (para realizar a exportação, uma super-macro deve estar configurada no lote de salas e também a sala selecionada não pode já estar associada à um ID de uma sala moodle)\" type=\"button\" class=\"btn btn-primary botao-reduzido\" \n\t\t\t\t\t\t\tdata-toggle=\"modal\" data-target=\"#dialogRestore\" [disabled]=\"!loteSelecionado.super_macro || !editavel\" (click)=\"preparaRestauracaoAutomatica(s)\">\n\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-export\"></span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td *ngIf=\"s.sala_moodle_id\" title=\"Inserir Estudantes\">\n\t\t\t\t\t\t<button style=\"text-align: center; margin-left: 2px;\" title=\"Inserir Estudantes\" type=\"button\" \n\t\t\t\t\t\t\tclass=\"btn btn-info botao-reduzido\" (click)=\"exportarEstudantes(s)\" [disabled]=\"!editavel\">\n\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-user\"></span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td title=\"Editar\">\n\t\t\t\t\t\t<button style=\"text-align: center; margin-left: 2px;\" title=\"Editar\" type=\"button\" data-toggle=\"modal\" \n\t\t\t\t\t\t\tdata-target=\"#dialogCreateSalaSimplificada\" class=\"btn btn-info botao-reduzido\" [disabled]=\"!editavel\">\n\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-edit\"></span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td title=\"Excluir\">\n\t\t\t\t\t\t<button style=\"text-align: center; margin-left: 2px;\" title=\"Excluir\" type=\"button\"\n\t\t\t\t\t\t\tclass=\"btn btn-danger botao-reduzido\" (click)=\"deletar(s)\" [disabled]=\"!editavel\">\n\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-remove\"></span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</td>\n\t\t\t\t</ng-container>\n\t\t\t</tr>\n\t\t\t<tr *ngIf=\"loteSelecionado != null && loteSelecionado.id > 0 && salasSimplificadas.length > 0 && status == COMPLETE\">\n\t\t\t\t<td class=\"celula-trunca-texto\" title=\"Nova\" style=\"text-align: center;\"\n\t\t\t\t\tcolspan=\"17\">\n\t\t\t\t\t<button style=\"text-align: center; margin-left: 2px;\" title=\"Nova\" type=\"button\" [disabled]=\"!editavel\"\n\t\t\t\t\t\tclass=\"btn btn-primary botao-reduzido\" data-toggle=\"modal\" data-target=\"#dialogCreateSalaSimplificada\" (click)=\"novo()\">\n\t\t\t\t\t\t<span class=\"glyphicon glyphicon-plus\"></span>\n\t\t\t\t\t</button>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</tbody>\n\t\t<tfoot class=\"status-tabela\">\n\t\t\t<tr *ngIf=\"status == LOADING\">\n\t\t\t\t<td colspan=\"17\"><i>Carregando Salas...</i></td>\n\t\t\t</tr>\n\t\t\t<tr *ngIf=\"salasSimplificadas != null && salasSimplificadas.length == 0 && status == COMPLETE\">\n\t\t\t\t<td colspan=\"17\">\n\t\t\t\t\t<i>Não Há Salas para serem listadas</i><br />\n\t\t\t\t\t<button *ngIf=\"loteSelecionado.id > 0\" style=\"text-align: center; margin-left: 2px; margin-top: 5px;\" data-toggle=\"modal\" data-target=\"#dialogCreateSalaSimplificada\"\n\t\t\t\t\t\ttitle=\"Nova\" type=\"button\" class=\"btn btn-primary botao-reduzido\" (click)=\"novo()\">\n\t\t\t\t\t\t<span class=\"glyphicon glyphicon-plus\"></span>\n\t\t\t\t\t</button>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr *ngIf=\"status == ERROR\">\n\t\t\t\t<td class=\"erro\" colspan=\"17\"><i>Falha na obtenção das Salas!</i></td>\n\t\t\t</tr>\n\n\t\t</tfoot>\n\t</table>\n</div>\n\n<div class=\"modal fade\" id=\"dialogCreateSalaSimplificada\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h5 class=\"modal-title\">Novo Lote de Salas Simplificado</h5>\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<fieldset>\n\t\t\t\t\t<form id=\"salaSimplificadaForm\" class=\"form-group\"\n\t\t\t\t\t\tstyle=\"text-align: left; width: 400px; margin: 15px auto;\"\n\t\t\t\t\t\t(submit)=\"criarAlterarSalaSimplificada($event)\">\n\t\t\t\t\t\t<div class=\"alert alert-info\" [ngClass]=\"{'alert-info': !erroAviso, 'alert-danger': erroAviso}\"\n\t\t\t\t\t\t\t*ngIf=\"aviso\">\n\t\t\t\t\t\t\t<strong *ngIf=\"!erroAviso\">Informação!</strong><strong *ngIf=\"erroAviso\">Falha!</strong>\n\t\t\t\t\t\t\t{{aviso}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<label class=\"style1\">Disciplina: *</label><br>\n\t\t\t\t\t\t<table style=\"width: 100%;\">\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td style=\"width: 100%;\">\n\t\t\t\t\t\t\t\t\t<input style=\"width: 310px; font-weight: normal;\" class=\"form-control celula-trunca-texto\" id=\"plda-disciplina\" placeholder=\"-- Selecione uma Disciplina --\"\n\t\t\t\t\t\t\t\t\t title=\"{{plDisciplinasAcademicosSelecionado.disciplina}}\" [value]=\"plDisciplinasAcademicosSelecionado.disciplina\" readonly required>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td style=\"vertical-align: baseline;\"><button type=\"button\" style=\"margin-left: 5px;\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#dialogBuscaPLDA\" [disabled]=\"!editavel\"><span class=\"glyphicon glyphicon-search\"></span></button></td>\n\t\t\t\t\t\t\t\t<td style=\"vertical-align: baseline;\"><button type=\"button\" style=\"margin-left: 5px;\" class=\"btn btn-warning\" title=\"Buscar e Atualizar com Informações mais Recentes\" (click)=\"refreshSala()\" [disabled]=\"!editavel || !salaSimplificadaTemp.id\"><span class=\"glyphicon glyphicon-repeat\"></span></button></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t\t<p></p>\n\t\t\t\t\t\t<label class=\"style1\">Sala Moodle ID:</label><br>\n\t\t\t\t\t\t<input class=\"form-control\" type=\"number\" name=\"sala-moodle-id\" [(ngModel)]=\"salaMoodleId\" [disabled]=\"!editavel\" placeholder=\"-- ID da Sala no Moodle --\">\n\t\t\t\t\t\t<ng-container *ngIf=\"checkSalaMoodleId()\">\n\t\t\t\t\t\t\t<p></p>\n\t\t\t\t\t\t\t<label class=\"style1\">Link Moodle:</label><br>\n\t\t\t\t\t\t\t<input class=\"form-control\" name=\"link-moodle\" [(ngModel)]=\"linkMoodle\" [disabled]=\"!editavel\" placeholder=\"-- Link da Sala no Moodle --\">\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t</form>\n\t\t\t\t</fieldset>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"submit\" form=\"salaSimplificadaForm\" class=\"btn btn-primary botao-barra\" [disabled]=\"!editavel\">{{salaSimplificadaTemp.id ? 'Alterar' : 'Criar'}}</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\">Fechar</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"modal fade\" id=\"dialogViewSalaSimplificada\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n\t\t\t\t<h5 class=\"modal-title\">Dados da Sala Simplificada</h5>\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n            </div>\n            <div class=\"modal-body\"  redimensionar=\"285\" style=\"overflow-y: scroll;\" style=\"width: 500px;\">\n\t\t\t\t<label>Professor:</label>\n                <div class=\"form-control\">{{salaSimplificadaTemp.professor?.name}}</div>\n\t\t\t\t<p></p>\n\t\t\t\t<label>Sala Moodle ID:</label>\n                <div class=\"form-control\">{{salaSimplificadaTemp.sala_moodle_id}}</div>\n\t\t\t\t<p></p>\n\t\t\t\t<label>Período Letivo:</label>\n                <div class=\"form-control\">{{salaSimplificadaTemp.periodo_letivo?.nome}} ({{salaSimplificadaTemp.periodo_letivo?.descricao}})</div>\n\t\t\t\t<p></p>\n\t\t\t\t<label>Faculdade:</label>\n                <div class=\"form-control\">{{salaSimplificadaTemp.curso?.faculdade?.sigla}} - {{salaSimplificadaTemp.curso?.faculdade?.nome}}</div>\n\t\t\t\t<p></p>\n\t\t\t\t<label>Curso:</label>\n                <div class=\"form-control\">{{salaSimplificadaTemp.curso?.nome}}</div>\n\t\t\t\t<p></p>\n\t\t\t\t<label>Disciplina:</label>\n                <div class=\"form-control\">{{salaSimplificadaTemp.nome_sala}}</div>\n\t\t\t\t<p></p>\n\t\t\t\t<label>Chave da Disciplina:</label>\n                <div class=\"form-control\">{{salaSimplificadaTemp.disciplina_key}}</div>\n\t\t\t\t<p></p>\n\t\t\t\t<label>Turma ID:</label>\n                <div class=\"form-control\">{{salaSimplificadaTemp.turma_id}}</div>\n\t\t\t\t<p></p>\n\t\t\t\t<label>Turma Nome:</label>\n                <div class=\"form-control\">{{salaSimplificadaTemp.turma_nome}}</div>\n\t\t\t\t<p></p>\n\t\t\t\t<label>Carga Horária Disciplina:</label>\n                <div class=\"form-control\">{{salaSimplificadaTemp.carga_horaria_total_disciplina}}</div>\n\t\t\t\t<p></p>\n\t\t\t\t<label>Tipo de Avaliação:</label>\n                <div class=\"form-control\">{{salaSimplificadaTemp.avaliacao}}</div>\n\t\t\t\t<p></p>\n\t\t\t\t<label>Período Letivo Key:</label>\n                <div class=\"form-control\">{{salaSimplificadaTemp.periodo_letivo_key}}</div>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\">Fechar</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"dialogBuscaPLDA\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialogBuscaImportTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n\t\t\t\t<h5 class=\"modal-title\">Buscar Sala</h5>\n            </div>\n            <div class=\"modal-body\" style=\"width: 800px;\">\n                <app-obtem-plda [ancestral]=\"eu\" [plus]=\"true\">Carregando...</app-obtem-plda>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" *ngIf=\"plDisciplinasAcademicos.length && cursoSelecionadoId\" class=\"btn btn-info\" (click)=\"toggleModoLista()\" \n\t\t\t\t\t[disabled]=\"!editavel\" style=\"float: left;\">\n\t\t\t\t\tModo de Seleção: {{modoLista ? 'Múltipla' : 'Simples'}}\n\t\t\t\t</button>\n\t\t\t\t<button *ngIf=\"!modoLista\" type=\"button\" class=\"btn btn-success botao-barra\" (click)=\"selecionaPLDA()\" [disabled]=\"!editavel || plDisciplinasAcademicosTemp.disciplina == ''\" data-dismiss=\"modal\">Selecionar</button>\n                <button *ngIf=\"modoLista\" type=\"button\" class=\"btn btn-success\" (click)=\"criarListaDisciplinasCurso()\" [disabled]=\"!editavel || plDisciplinasAcademicosTempList.length == 0\" data-dismiss=\"modal\">Criar Selecionadas</button>\n                <button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\">Fechar</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"dialogRestore\" tabindex=\"-1\" role=\"dialog\"  aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Restauração de Backup Automática</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\" style=\"width: 600px;\">\n                <div class=\"alert alert-info\" [ngClass]=\"{'alert-info': !erroAviso, 'alert-danger': erroAviso}\" *ngIf=\"aviso\">\n                    <strong *ngIf=\"!erroAviso\">Informação!</strong><strong *ngIf=\"erroAviso\">Falha!</strong> {{aviso}}\n                </div>\n                <label class=\"style1\">Macro:</label>\n                <select class=\"form-control\" name=\"macro-padrao\" style=\"width: 200px; display: initial; margin-left: 10px;\" [(ngModel)]=\"macroTempId\" [disabled]=\"!editavel\" required>   \n                    <option hidden disabled [value]=\"0\" selected> -- Selecione -- </option>  \n                    <option *ngFor=\"let m of macros\" [value]=\"m.id\">{{m.nome}}</option>       \n                </select><br>\n                <hr style=\"border-color: #ccc;\">\n                <div redimensionar=\"300\" style=\"max-height: 250px;\" id=\"saidaRestore\"></div>\n            </div>\n            <div class=\"modal-footer\">\n                <span *ngIf=\"!salaSimplificadaTemp.sala_moodle_id\" style=\"float: left;\">\n                    <label class=\"style1\">Importar de:</label>\n                    <input class=\"form-control\" style=\"width: 80px; display: initial; margin: 0px 3px;\" type=\"number\" name=\"course-import-id\" placeholder=\"import id\" [(ngModel)]=\"courseImportId\" size=\"10\">\n                    <button type=\"button\" class=\"btn btn-primary\" style=\"width: 170px;vertical-align: top;\" (click)=\"executarRestauracaoAutomatica()\" [disabled]=\"!editavel || blockAutoRestore\">Executar Restauração</button>\n                </span>\n\t\t\t\t<button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\" [disabled]=\"!editavel\">Fechar</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"dialogCheckColunas\" tabindex=\"-1\" role=\"dialog\" data-backdrop=\"static\" aria-labelledby=\"dialogCheckColunasTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Mostrar/Ocultar Colunas</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\" style=\"width: 350px;\">\n                <table>\n                    <tr><td><label class=\"style1\">ID</label></td>\n                    <td><input type=\"checkbox\" [(ngModel)]=\"COLUNAS.id\"></td></tr>\n                    <tr><td><label class=\"style1\">Período Letivo</label></td>\n                    <td><input type=\"checkbox\" [(ngModel)]=\"COLUNAS.periodo_letivo\"></td></tr>\n                    <tr><td><label class=\"style1\">Nome Professor</label></td>\n                    <td><input type=\"checkbox\" [(ngModel)]=\"COLUNAS.nome_professor\"></td></tr>\n                    <tr><td><label class=\"style1\">Faculdade</label></td>\n                    <td><input type=\"checkbox\" [(ngModel)]=\"COLUNAS.faculdade\"></td></tr>\n                    <tr><td><label class=\"style1\">Curso Key</label></td>\n                    <td><input type=\"checkbox\" [(ngModel)]=\"COLUNAS.curso_key\"></td></tr>\n                    <tr><td><label class=\"style1\">Nome Curso</label></td>\n                    <td><input type=\"checkbox\" [(ngModel)]=\"COLUNAS.curso\"></td></tr>\n                    <tr><td><label class=\"style1\">Nome Sala</label></td>\n                    <td><input type=\"checkbox\" [(ngModel)]=\"COLUNAS.nome_sala\"></td></tr>\n                    <tr><td><label class=\"style1\">Disciplina Key</label></td>\n                    <td><input type=\"checkbox\" [(ngModel)]=\"COLUNAS.disciplina_key\"></td></tr>\n                    <tr><td><label class=\"style1\">Carga Horária Disciplina</label></td>\n                    <td><input type=\"checkbox\" [(ngModel)]=\"COLUNAS.carga_horaria_total_disciplina\"></td></tr>\n                    <tr><td><label class=\"style1\">Método de Avaliação da Disciplina</label></td>\n                    <td><input type=\"checkbox\" [(ngModel)]=\"COLUNAS.avaliacao\"></td></tr>\n                    <tr><td><label class=\"style1\">Turma</label></td>\n                    <td><input type=\"checkbox\" [(ngModel)]=\"COLUNAS.turma_nome\"></td></tr>\n                    <tr><td><label class=\"style1\">Turma ID</label></td>\n                    <td><input type=\"checkbox\" [(ngModel)]=\"COLUNAS.turma_id\"></td></tr>\n                    <tr><td><label class=\"style1\">Sala Moodle ID</label></td>\n                    <td><input type=\"checkbox\" [(ngModel)]=\"COLUNAS.sala_moodle_id\"></td></tr>\n                </table>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\">Fechar</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/sala-simplificada/sala-simplificada.component.less":
/*!********************************************************************!*\
  !*** ./src/app/sala-simplificada/sala-simplificada.component.less ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhbGEtc2ltcGxpZmljYWRhL3NhbGEtc2ltcGxpZmljYWRhLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/sala-simplificada/sala-simplificada.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/sala-simplificada/sala-simplificada.component.ts ***!
  \******************************************************************/
/*! exports provided: SalaSimplificadaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaSimplificadaComponent", function() { return SalaSimplificadaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _abstract_component_child__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstract-component-child */ "./src/app/abstract-component-child.ts");
/* harmony import */ var _cursos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cursos.service */ "./src/app/cursos.service.ts");
/* harmony import */ var _lote_salas_simplificado_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lote-salas-simplificado.service */ "./src/app/lote-salas-simplificado.service.ts");
/* harmony import */ var _macro_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../macro.service */ "./src/app/macro.service.ts");
/* harmony import */ var _periodo_letivos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../periodo-letivos.service */ "./src/app/periodo-letivos.service.ts");
/* harmony import */ var _pl_disciplinas_academicos_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pl-disciplinas-academicos.service */ "./src/app/pl-disciplinas-academicos.service.ts");
/* harmony import */ var _pl_disciplinas_academicos_pl_disciplinas_academicos__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pl-disciplinas-academicos/pl-disciplinas-academicos */ "./src/app/pl-disciplinas-academicos/pl-disciplinas-academicos.ts");
/* harmony import */ var _sala_simplificada_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sala-simplificada.service */ "./src/app/sala-simplificada.service.ts");
/* harmony import */ var _sala_simplificada__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sala-simplificada */ "./src/app/sala-simplificada/sala-simplificada.ts");











var SalaSimplificadaComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SalaSimplificadaComponent, _super);
    function SalaSimplificadaComponent(salaSimplificadaService, loteSalasSimplificadoService, periodoLetivosService, cursosService, plDisciplinasAcademicosService, macroService) {
        var _this = _super.call(this) || this;
        _this.salaSimplificadaService = salaSimplificadaService;
        _this.loteSalasSimplificadoService = loteSalasSimplificadoService;
        _this.periodoLetivosService = periodoLetivosService;
        _this.cursosService = cursosService;
        _this.plDisciplinasAcademicosService = plDisciplinasAcademicosService;
        _this.macroService = macroService;
        _this.emCriacao = false;
        _this.courseImportId = "";
        _this.COLUNAS = {
            id: true,
            periodo_letivo: false,
            nome_professor: false,
            faculdade: false,
            curso_key: false,
            curso: false,
            nome_sala: true,
            disciplina_key: false,
            turma_nome: false,
            turma_id: false,
            carga_horaria_total_disciplina: false,
            avaliacao: false,
            sala_moodle_id: true,
        };
        _this.plDisciplinasAcademicosSelecionado = _pl_disciplinas_academicos_pl_disciplinas_academicos__WEBPACK_IMPORTED_MODULE_8__["PlDisciplinasAcademicos"].generatePlDisciplinasAcademicos();
        _this.plDisciplinasAcademicosSelecionadoList = [];
        _this.salaMoodleId = "";
        _this.linkMoodle = "";
        // AbstractPLDAComponent
        _this.plDisciplinasAcademicosTemp = _pl_disciplinas_academicos_pl_disciplinas_academicos__WEBPACK_IMPORTED_MODULE_8__["PlDisciplinasAcademicos"].generatePlDisciplinasAcademicos();
        _this.plDisciplinasAcademicosTempList = [];
        _this.modoLista = false;
        _this.periodoLetivoSelecionadoId = "";
        _this.cursoSelecionadoId = "";
        _this.faculdadeSelecionadaId = "";
        _this.disciplinaSelecionadaNome = "";
        _this.disciplinaSelecionadaNomes = [];
        _this.macroTempId = "";
        _this.blockAutoRestore = false;
        return _this;
    }
    Object.defineProperty(SalaSimplificadaComponent.prototype, "salasSimplificadas", {
        get: function () {
            return this.salaSimplificadaService.salasSimplificadas;
        },
        set: function (salasSimplificadas) {
            this.salaSimplificadaService.salasSimplificadas = salasSimplificadas;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SalaSimplificadaComponent.prototype, "plDisciplinasAcademicos", {
        get: function () {
            return this.plDisciplinasAcademicosService.plDisciplinasAcademicos;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SalaSimplificadaComponent.prototype, "salaSimplificadaTemp", {
        get: function () {
            return this.salaSimplificadaService.salaSimplificadaSelecionada;
        },
        set: function (salaSimplificadaTemp) {
            this.salaSimplificadaService.salaSimplificadaSelecionada = salaSimplificadaTemp;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SalaSimplificadaComponent.prototype, "loteSelecionado", {
        get: function () {
            return this.loteSalasSimplificadoService.loteSalasSimplificadoSelecionada;
        },
        set: function (lote) {
            this.loteSalasSimplificadoService.loteSalasSimplificadoSelecionada = lote;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SalaSimplificadaComponent.prototype, "macros", {
        get: function () {
            return this.macroService.macros;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SalaSimplificadaComponent.prototype, "eu", {
        get: function () {
            return this;
        },
        enumerable: true,
        configurable: true
    });
    SalaSimplificadaComponent.prototype.selecionaPLDA = function () {
        this.plDisciplinasAcademicosSelecionado = this.plDisciplinasAcademicosTemp.clone();
        this.plDisciplinasAcademicosSelecionadoList = [];
        for (var i in this.plDisciplinasAcademicosTempList)
            this.plDisciplinasAcademicosSelecionadoList.push(this.plDisciplinasAcademicosTempList[i].clone());
    };
    SalaSimplificadaComponent.prototype.resetPLDA = function () {
        this.plDisciplinasAcademicosSelecionado = _pl_disciplinas_academicos_pl_disciplinas_academicos__WEBPACK_IMPORTED_MODULE_8__["PlDisciplinasAcademicos"].generatePlDisciplinasAcademicos();
        this.plDisciplinasAcademicosSelecionadoList = [];
    };
    SalaSimplificadaComponent.prototype.criarAlterarSalaSimplificada = function (ev) {
        ev.preventDefault();
        var loteSalasForm = jQuery('#salaSimplificadaForm')[0];
        jQuery('#plda-disciplina').prop('readonly', false);
        if (loteSalasForm.reportValidity()) {
            jQuery('#plda-disciplina').prop('readonly', true);
            if (this.salaSimplificadaTemp.id)
                this.alterar();
            else
                this.criar();
        }
        else
            jQuery('#plda-disciplina').prop('readonly', true);
    };
    SalaSimplificadaComponent.prototype.criar = function () {
        var _this = this;
        this.editavel = false;
        this.salaSimplificadaService.create(_sala_simplificada__WEBPACK_IMPORTED_MODULE_10__["SalaSimplificada"].generatePostSalaSimplificada(0, this.plDisciplinasAcademicosSelecionado, this.salaMoodleId, this.periodoLetivosService.periodoLetivosIdIndex.get(this.periodoLetivoSelecionadoId), this.loteSalasSimplificadoService.loteSalasSimplificadoSelecionada.id, null, this.salaMoodleId ? this.linkMoodle : '')).then(function (response) {
            _this.editavel = true;
            jQuery('#dialogCreateSalaSimplificada').modal('hide');
        }).catch(function (response) {
            _this.editavel = true;
            //this.erroAviso = true;
            _this.aviso = _this.erroHttp(response);
            _this.status = _this.ERROR;
            alert(_this.aviso);
        });
    };
    SalaSimplificadaComponent.prototype.toggleModoLista = function () {
        this.modoLista = !this.modoLista;
    };
    SalaSimplificadaComponent.prototype.criarListaDisciplinasCurso = function () {
        var _this = this;
        if (confirm("Deseja adicionar todas as disciplinas selecionadas deste curso?")) {
            this.selecionaPLDA();
            this.editavel = false;
            this.salaSimplificadaService.createAll(this.plDisciplinasAcademicosSelecionadoList)
                .then(function (response) {
                _this.editavel = true;
                jQuery('#dialogBuscaPLDA').modal('hide');
                jQuery('#dialogCreateSalaSimplificada').modal('hide');
            }).catch(function (response) {
                _this.editavel = true;
                //this.erroAviso = true;
                _this.aviso = _this.erroHttp(response);
                _this.status = _this.ERROR;
                alert(_this.aviso);
            });
        }
    };
    SalaSimplificadaComponent.prototype.alterar = function () {
        var _this = this;
        this.editavel = false;
        this.salaSimplificadaService.update(_sala_simplificada__WEBPACK_IMPORTED_MODULE_10__["SalaSimplificada"].generatePostSalaSimplificada(this.salaSimplificadaTemp.id, this.plDisciplinasAcademicosSelecionado, this.salaMoodleId, this.periodoLetivosService.periodoLetivosIdIndex.get(this.periodoLetivoSelecionadoId), this.loteSalasSimplificadoService.loteSalasSimplificadoSelecionada.id, this.salaSimplificadaTemp.professor, this.salaMoodleId ? this.linkMoodle : '')).then(function (response) {
            _this.editavel = true;
            jQuery('#dialogCreateSalaSimplificada').modal('hide');
        }).catch(function (response) {
            _this.editavel = true;
            //this.erroAviso = true;
            _this.aviso = _this.erroHttp(response);
            _this.status = _this.ERROR;
            alert(_this.aviso);
        });
    };
    SalaSimplificadaComponent.prototype.refreshSala = function () {
        var _this = this;
        if (!confirm("Deseja buscar e atualizar com informações mais recentes esta sala?"))
            return;
        this.editavel = false;
        this.salaSimplificadaService.refreshSala(this.salaSimplificadaTemp.id)
            .then(function (response) {
            _this.editavel = true;
            jQuery('#dialogCreateSalaSimplificada').modal('hide');
        }).catch(function (response) {
            _this.editavel = true;
            //this.erroAviso = true;
            _this.aviso = _this.erroHttp(response);
            _this.status = _this.ERROR;
            alert(_this.aviso);
        });
    };
    SalaSimplificadaComponent.prototype.novo = function () {
        this.limpar();
        this.salaSimplificadaTemp = _sala_simplificada__WEBPACK_IMPORTED_MODULE_10__["SalaSimplificada"].generate();
        this.plDisciplinasAcademicosTemp = _pl_disciplinas_academicos_pl_disciplinas_academicos__WEBPACK_IMPORTED_MODULE_8__["PlDisciplinasAcademicos"].generatePlDisciplinasAcademicos();
        this.periodoLetivoSelecionadoId = '';
        this.faculdadeSelecionadaId = '';
        this.cursoSelecionadoId = '';
        this.salaMoodleId = '';
        this.linkMoodle = '';
        this.disciplinaSelecionadaNome = '';
        this.selecionaPLDA();
        this.emCriacao = true;
    };
    SalaSimplificadaComponent.prototype.selecionar = function (salaSimplificada) {
        this.limpar();
        this.salaSimplificadaTemp = salaSimplificada.clone();
        this.plDisciplinasAcademicosTemp = new _pl_disciplinas_academicos_pl_disciplinas_academicos__WEBPACK_IMPORTED_MODULE_8__["PlDisciplinasAcademicos"](salaSimplificada.id, salaSimplificada.curso, salaSimplificada.periodo_letivo, salaSimplificada.nome_sala, "", salaSimplificada.disciplina_key, salaSimplificada.carga_horaria_total_disciplina, null, salaSimplificada.turma_nome, salaSimplificada.turma_id, salaSimplificada.avaliacao, null);
        this.periodoLetivoSelecionadoId = '' + salaSimplificada.periodo_letivo.id;
        this.faculdadeSelecionadaId = ''; //+ (<Faculdade>(<Curso>salaSimplificada.curso).faculdade).id;
        this.cursoSelecionadoId = ''; //+ (<Curso>salaSimplificada.curso).id;
        this.disciplinaSelecionadaNome = ''; //+ salaSimplificada.nome_sala;
        this.salaMoodleId = salaSimplificada.sala_moodle_id;
        this.linkMoodle = this.salaMoodleId ? salaSimplificada.link_moodle : '';
        this.selecionaPLDA();
        this.emCriacao = false;
    };
    SalaSimplificadaComponent.prototype.limpar = function () {
        this.aviso = '';
        this.status = this.COMPLETE;
        this.modoLista = false;
    };
    SalaSimplificadaComponent.prototype.reset = function () {
        this.emCriacao = false;
        this.salaSimplificadaTemp = _sala_simplificada__WEBPACK_IMPORTED_MODULE_10__["SalaSimplificada"].generate();
    };
    SalaSimplificadaComponent.prototype.deletar = function (salaSimplificada) {
        var _this = this;
        if (confirm("Deseja excuir esta Sala Simplificada?")) {
            this.editavel = false;
            this.salaSimplificadaService.delete(salaSimplificada.id)
                .then(function (response) {
                _this.salaSimplificadaTemp = _sala_simplificada__WEBPACK_IMPORTED_MODULE_10__["SalaSimplificada"].generate();
                _this.editavel = true;
                _this.emCriacao = false;
            })
                .catch(function (response) {
                //this.erroAviso = true;
                _this.aviso = _this.erroHttp(response);
                _this.status = _this.ERROR;
                alert(_this.aviso);
            });
        }
    };
    SalaSimplificadaComponent.prototype.exportarEstudantes = function (salaSimplificada) {
        var _this = this;
        if (!confirm("Deseja inserir os estudantes nesta sala?"))
            return;
        this.erroAviso = false;
        this.aviso = '';
        jQuery('#dialogExportResult').modal('show');
        jQuery('#saidaExport').html("<i>Aguarde...<i>");
        this.editavel = false;
        this.salaSimplificadaService.exportarEstudantes(salaSimplificada.id)
            .then(function (response) {
            jQuery('#saidaExport').html(response);
            _this.editavel = true;
        })
            .catch(function (response) {
            _this.erroAviso = true;
            _this.aviso = _this.erroHttp(response);
            _this.editavel = true;
            jQuery('#saidaExport').html('<span style="color: red;">' + _this.aviso + "</span>");
        });
    };
    SalaSimplificadaComponent.prototype.preparaRestauracaoAutomatica = function (salaSimplificada) {
        var _this = this;
        this.editavel = false;
        this.courseImportId = "";
        this.salaSimplificadaService.getMacro(salaSimplificada.id)
            .then(function (response) {
            jQuery('#dialogRestore').modal('show');
            jQuery('#saidaRestore').html('');
            _this.macroTempId = response;
            _this.blockAutoRestore = false;
            _this.editavel = true;
        })
            .catch(function (response) {
            jQuery('#dialogRestore').modal('show');
            _this.erroAviso = true;
            _this.aviso = _this.erroHttp(response);
            _this.editavel = true;
        });
    };
    SalaSimplificadaComponent.prototype.executarRestauracaoAutomatica = function () {
        var _this = this;
        this.editavel = false;
        this.blockAutoRestore = true;
        this.salaSimplificadaService.executarRestauracaoSala(this.salaSimplificadaTemp.id, this.macroTempId, this.courseImportId)
            .then(function (response) {
            jQuery('#saidaRestore').html(response);
            _this.salaSimplificadaService.list(_this.salaSimplificadaTemp.id);
            _this.editavel = true;
        })
            .catch(function (response) {
            _this.erroAviso = true;
            _this.aviso = _this.erroHttp(response);
            _this.editavel = true;
            jQuery('#saidaRestore').html('<span style="color: red;">' + _this.aviso + "</span>");
        });
    };
    SalaSimplificadaComponent.prototype.checkSalaMoodleId = function () {
        return !isNaN(parseInt(this.salaMoodleId)) && parseInt(this.salaMoodleId) != 0;
    };
    SalaSimplificadaComponent.prototype.ngOnInit = function () {
    };
    SalaSimplificadaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sala-simplificada',
            template: __webpack_require__(/*! ./sala-simplificada.component.html */ "./src/app/sala-simplificada/sala-simplificada.component.html"),
            styles: [__webpack_require__(/*! ./sala-simplificada.component.less */ "./src/app/sala-simplificada/sala-simplificada.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sala_simplificada_service__WEBPACK_IMPORTED_MODULE_9__["SalaSimplificadaService"], _lote_salas_simplificado_service__WEBPACK_IMPORTED_MODULE_4__["LoteSalasSimplificadoService"], _periodo_letivos_service__WEBPACK_IMPORTED_MODULE_6__["PeriodoLetivosService"],
            _cursos_service__WEBPACK_IMPORTED_MODULE_3__["CursosService"], _pl_disciplinas_academicos_service__WEBPACK_IMPORTED_MODULE_7__["PlDisciplinasAcademicosService"], _macro_service__WEBPACK_IMPORTED_MODULE_5__["MacroService"]])
    ], SalaSimplificadaComponent);
    return SalaSimplificadaComponent;
}(_abstract_component_child__WEBPACK_IMPORTED_MODULE_2__["AbstractComponentChild"]));



/***/ }),

/***/ "./src/app/sala-simplificada/sala-simplificada.ts":
/*!********************************************************!*\
  !*** ./src/app/sala-simplificada/sala-simplificada.ts ***!
  \********************************************************/
/*! exports provided: SalaSimplificada */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaSimplificada", function() { return SalaSimplificada; });
/* harmony import */ var _periodo_letivos_periodo_letivo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../periodo-letivos/periodo-letivo */ "./src/app/periodo-letivos/periodo-letivo.ts");
/* harmony import */ var _usuarios_usuario__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../usuarios/usuario */ "./src/app/usuarios/usuario.ts");


var SalaSimplificada = /** @class */ (function () {
    function SalaSimplificada(id, nome_sala, professor, curso, periodo_letivo_key, disciplina_key, periodo_letivo, turma_id, turma_nome, carga_horaria_total_disciplina, avaliacao, sala_moodle_id, link_moodle, lote) {
        if (typeof id == "number") {
            this.id = id;
            this.nome_sala = nome_sala;
            this.professor = professor;
            this.curso = curso;
            this.periodo_letivo_key = periodo_letivo_key;
            this.disciplina_key = disciplina_key;
            this.periodo_letivo = periodo_letivo;
            this.turma_id = turma_id;
            this.turma_nome = turma_nome;
            this.carga_horaria_total_disciplina = carga_horaria_total_disciplina;
            this.avaliacao = avaliacao;
            this.sala_moodle_id = sala_moodle_id;
            this.link_moodle = link_moodle;
            this.lote = lote;
        }
        else {
            this.id = id['id'];
            this.nome_sala = id['nome_sala'];
            this.professor = id['professor'];
            this.curso = id['curso_id'];
            this.periodo_letivo_key = id['periodo_letivo_key'];
            this.disciplina_key = id['disciplina_key'];
            this.periodo_letivo = id['periodo_letivo_id'];
            this.turma_id = id['turma_id'];
            this.turma_nome = id['turma_nome'];
            this.carga_horaria_total_disciplina = id['carga_horaria_total_disciplina'];
            this.avaliacao = id['avaliacao'];
            this.sala_moodle_id = id['sala_moodle_id'];
            this.link_moodle = id['link_moodle'];
            this.lote = id['lote_id'];
        }
    }
    SalaSimplificada.generate = function () {
        return new SalaSimplificada(0, "");
    };
    SalaSimplificada.generateList = function (list) {
        var salas = [];
        for (var i = 0; i < list.length; i++) {
            var sala = new SalaSimplificada(list[i]);
            salas.push(sala);
        }
        return salas;
    };
    SalaSimplificada.generateListPlus = function (list, cursosIndex, periodoletivosIndex, loteSelecionado) {
        var salas = [];
        for (var i = 0; i < list.length; i++) {
            var sala = new SalaSimplificada(list[i]);
            var temp = null;
            if (cursosIndex) {
                temp = cursosIndex.get(sala.curso);
                if (temp)
                    sala.curso = temp.clone();
            }
            if (periodoletivosIndex) {
                temp = periodoletivosIndex.get(sala.periodo_letivo);
                if (temp)
                    sala.periodo_letivo = temp.clone();
            }
            if (loteSelecionado.id == sala.lote)
                sala.lote = loteSelecionado;
            sala.professor = sala.professor ? new _usuarios_usuario__WEBPACK_IMPORTED_MODULE_1__["Usuario"](sala.professor['id'], sala.professor['name'], sala.professor['email']) : null;
            salas.push(sala);
        }
        return salas;
    };
    SalaSimplificada.generatePostSalaSimplificada = function (id, plda, sala_moodle_id, periodo_letivo, lote_id, professor, link_moodle) {
        var periodo_letivo_key = plda.periodo_letivo_key;
        if (!periodo_letivo_key)
            periodo_letivo_key = plda.periodo_letivo instanceof _periodo_letivos_periodo_letivo__WEBPACK_IMPORTED_MODULE_0__["PeriodoLetivo"] ? plda.periodo_letivo.id_sigecad : (typeof plda.periodo_letivo == 'number' ? plda.periodo_letivo : null);
        //var periodo_letivo_nome = plda.periodo_letivo instanceof PeriodoLetivo ? plda.periodo_letivo.nome : (typeof plda.periodo_letivo == 'string' ? plda.periodo_letivo : null);
        return {
            id: id,
            nome_sala: plda.disciplina,
            cpf_professor: plda.cpf_professor,
            professor_id: professor ? professor.id : null,
            periodo_letivo_key: periodo_letivo_key,
            periodo_letivo_nome: periodo_letivo.nome,
            curso_id: plda.curso.id,
            disciplina_key: plda.disciplina_key,
            turma_id: plda.turma_id,
            turma_nome: plda.turma_nome,
            carga_horaria_total_disciplina: plda.carga_horaria_total_disciplina,
            avaliacao: plda.avaliacao,
            sala_moodle_id: sala_moodle_id,
            link_moodle: link_moodle,
            lote_id: lote_id,
        };
    };
    SalaSimplificada.prototype.clone = function () {
        return new SalaSimplificada(this.id, this.nome_sala, this.professor, this.curso, this.periodo_letivo_key, this.disciplina_key, this.periodo_letivo, this.turma_id, this.turma_nome, this.carga_horaria_total_disciplina, this.avaliacao, this.sala_moodle_id, this.link_moodle, this.lote);
    };
    return SalaSimplificada;
}());



/***/ }),

/***/ "./src/app/salas-old.service.ts":
/*!**************************************!*\
  !*** ./src/app/salas-old.service.ts ***!
  \**************************************/
/*! exports provided: SalasOldService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalasOldService", function() { return SalasOldService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _salas_old_sala_old__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./salas-old/sala-old */ "./src/app/salas-old/sala-old.ts");




var SalasOldService = /** @class */ (function () {
    function SalasOldService(http) {
        this.http = http;
    }
    SalasOldService.prototype.atualizarSala = function (sala) {
        var _this = this;
        return this.http.post('salas-old/' + sala.id, sala)
            .toPromise()
            .then(function (response) {
            for (var i in _this.salas)
                if (_this.salas[i].id == sala.id) {
                    _this.salas[i] = sala;
                    return null;
                }
            return response;
        })
            .catch(function (response) {
            return response;
        });
    };
    SalasOldService.prototype.listar = function () {
        var _this = this;
        return this.http.get("/salas-old/listar")
            .toPromise()
            .then(function (response) {
            _this.salas = _salas_old_sala_old__WEBPACK_IMPORTED_MODULE_3__["SalaOld"].generateList(response.json().reverse());
            /*this.salasIndex = {};
            var ss = response.json();
            for (var i = 0; i < ss.length; i++) {
                var sala = this.criaSala(ss[i]);
                this.salasIndex[sala.id] = sala;
                this.salas.push( sala );
            }
            this.salas.sort(this.sortSalas);*/
            return _this.salas;
        });
    };
    SalasOldService.prototype.getMensagemSala = function (sala) {
        return this.http.get("/salas-old/mensagem/" + sala.id)
            .toPromise()
            .then(function (response) {
            return response.text();
        });
    };
    SalasOldService.prototype.statusSala = function (sala, status, mensagem) {
        return this.http.patch('/salas-old/status/' + sala.id, { status: status, mensagem: mensagem })
            .toPromise()
            .then(function (response) {
            var s = response.json();
            sala.status = s.status;
            return null;
        })
            .catch(function (response) {
            return response;
        });
    };
    SalasOldService.prototype.getModalidades = function () {
        var _this = this;
        return this.http.get('/salas/modalidades').toPromise()
            .then(function (response) {
            var m = response.json();
            _this.modalidades = m;
            return m;
        });
    };
    SalasOldService.prototype.getObjetivosSalas = function () {
        var _this = this;
        return this.http.get('/salas/objetivos').toPromise()
            .then(function (response) {
            var o = response.json();
            _this.objetivosSalas = o;
            return o;
        });
    };
    SalasOldService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(
        //{ providedIn: 'root'}
        ),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], SalasOldService);
    return SalasOldService;
}());



/***/ }),

/***/ "./src/app/salas-old/sala-old.ts":
/*!***************************************!*\
  !*** ./src/app/salas-old/sala-old.ts ***!
  \***************************************/
/*! exports provided: SalaOld */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaOld", function() { return SalaOld; });
/* harmony import */ var _status__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../status */ "./src/app/status.ts");

var SalaOld = /** @class */ (function () {
    function SalaOld(id, curso, email, faculdade, mensagem, nome_professor, nome_sala, modalidade, objetivo_sala, observacao, senha_aluno, senha_professor, status, created_at) {
        this.id = id;
        this.curso = curso;
        this.email = email;
        this.faculdade = faculdade;
        this.mensagem = mensagem;
        this.nome_professor = nome_professor;
        this.nome_sala = nome_sala;
        this.modalidade = modalidade;
        this.objetivo_sala = objetivo_sala;
        this.observacao = observacao;
        this.senha_aluno = senha_aluno;
        this.senha_professor = senha_professor;
        this.status = status;
        this.created_at = created_at;
    }
    SalaOld.generateList = function (list) {
        var _this = this;
        var salaList = [];
        list.forEach(function (salaAny) {
            var sala = _this.generateSala(salaAny);
            salaList.push(sala);
        });
        return salaList;
    };
    ;
    SalaOld.generateSala = function (salaAny) {
        return new SalaOld(salaAny.id, salaAny.curso, salaAny.email, salaAny.faculdade, salaAny.mensagem, salaAny.nome_professor, salaAny.nome_sala, salaAny.modalidade, salaAny.objetivo_sala, salaAny.observacao, salaAny.senha_aluno, salaAny.senha_professor, _status__WEBPACK_IMPORTED_MODULE_0__["Status"].generateStatus(salaAny.status), new Date(salaAny.created_at + " GMT"));
    };
    SalaOld.prototype.clone = function () {
        return SalaOld.generateSala(this);
    };
    return SalaOld;
}());



/***/ }),

/***/ "./src/app/salas-old/salas-old.component.html":
/*!****************************************************!*\
  !*** ./src/app/salas-old/salas-old.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-14\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n                Lista de Solicitações de Criação de Salas\n            </div>\n            <div>\n                <table class=\"table\" style=\"margin-bottom: 0px\">\n                    <caption>\n                        <table>\n                            <tr>\n                                <td class=\"col-md-1\"><label for=\"filtro\" class=\"col-md-1 control-label\">Buscar:</label></td>\n                                <td class=\"col-md-8\"><input id=\"filtro\" type=\"text\" class=\"form-control\" name=\"filtro\" [(ngModel)]=\"criteria\" required autofocus></td>\n                            </tr>\n                        </table>\n                    </caption>\n                    <colgroup>\n                        <col width=\"40px\"/>\n                        <col width=\"25%\"/>\n                        <col width=\"70px\"/>\n                        <col width=\"25%\"/>\n                        <col width=\"25%\"/>\n                        <col width=\"25%\"/>\n                        <col width=\"125px\"/>\n                        <col width=\"100px\"/>\n                        <col width=\"32px\"/>\n                        <col width=\"32px\"/>\n                        <col width=\"32px\"/>\n                        <col width=\"36px\"/>\n                        <col width=\"15px\"/>\n                    </colgroup>\n                    <thead class=\"thead-light\">\n                        <tr>\n                            <th style=\"text-align: center\">ID</th>\n                            <th class=\"celula-trunca-texto\" title=\"PROFESSOR\">PROFESSOR</th>\n                            <th class=\"celula-trunca-texto\" title=\"FACULDADE\">FAC.</th>\n                            <th class=\"celula-trunca-texto\" title=\"CURSO\">CURSO</th>\n                            <th class=\"celula-trunca-texto\" title=\"SALA\">SALA</th>\n                            <th class=\"celula-trunca-texto\" title=\"OBSERVACAO\">OBSERVACAO</th>\n                            <th>DATA/HORA</th>\n                            <th style=\"text-align: center\">STATUS</th>\n                            <th colspan=\"4\" style=\"text-align: center\">AÇÕES</th>\n                            <th></th>\n                        </tr>\n                    </thead>\n                </table>\n            </div>\n            <div redimensionar=\"256\" style=\"overflow-y: scroll;\">\n                <table class=\"table\">\n                    <colgroup>\n                        <col width=\"40px\"/>\n                        <col width=\"25%\"/>\n                        <col width=\"70px\"/>\n                        <col width=\"25%\"/>\n                        <col width=\"25%\"/>\n                        <col width=\"25%\"/>\n                        <col width=\"125px\"/>\n                        <col width=\"100px\"/>\n                        <col width=\"32px\"/>\n                        <col width=\"32px\"/>\n                        <col width=\"32px\"/>\n                        <col width=\"36px\"/>\n                    </colgroup>\n                    <tbody>\n                        <tr *ngFor=\"let sala of (salas | filtroSalas:criteria)\">\n                            <td>{{sala.id | zeros:4}}</td>\n                            <td class=\"celula-trunca-texto\" title=\"{{sala.nome_professor}}\">{{sala.nome_professor}}</td>\n                            <td title=\"{{sala.faculdade}}\">{{sala.faculdade}}</td>\n                            <td class=\"celula-trunca-texto\" title=\"{{sala.curso}}\">{{sala.curso}}</td>\n                            <td class=\"celula-trunca-texto\" title=\"{{sala.nome_sala}}\">{{sala.nome_sala}}</td>\n                            <td class=\"celula-trunca-texto\" title=\"{{sala.observacao}}\">{{sala.observacao}}</td>\n                            <td>{{sala.created_at | formatadorData:true}}</td>\n                            <td class=\"celula-status {{sala.status.chave}}\">{{sala.status.descricao}}</td>\n                            <td >\n                                <a title=\"Gerar Backup\" style=\"text-align: center; margin-left: -2px;\" type=\"button\" class=\"btn btn-primary botao-reduzido\" href=\"/exec-old/{{sala.id}}\">\n                                    <span class=\"glyphicon glyphicon-save\"></span>\n                                </a>\n                            </td>\n                            <td>\n                                <button style=\"text-align: center; margin-left: -2px;\" title=\"{{sala.status.chave == STATUS_INICIAL_PADRAO ? 'Editar' : 'Vizualizar'}}\" type=\"button\" class=\"btn btn-info botao-reduzido\"  data-toggle=\"modal\" data-target=\"#dialogSalas\" (click)=\"editarVisualizar(sala)\">\n                                    <span class=\"glyphicon glyphicon-{{sala.status.chave == STATUS_INICIAL_PADRAO ? 'edit' : 'search'}}\"></span>\n                                </button>\n                            </td>\n                            <td>\n                                <button style=\"text-align: center; margin-left: -2px;\" title=\"Demanda Concluída\" type=\"button\" class=\"btn btn-success botao-reduzido\" data-toggle=\"modal\" data-target=\"#dialogStatus\" (click)=\"preparaSetStatusSala(sala,true)\" [disabled]=\"sala.status.chave != STATUS_INICIAL_PADRAO\">\n                                    <span class=\"glyphicon glyphicon-ok\"></span>\n                                </button>\n                            </td>\n                            <td>\n                                <button style=\"text-align: center; margin-left: -2px;\" title=\"Rejeitar Demanda\" type=\"button\" class=\"btn btn-danger botao-reduzido\" data-toggle=\"modal\" data-target=\"#dialogStatus\" (click)=\"preparaSetStatusSala(sala,false)\"  [disabled]=\"sala.status.chave != STATUS_INICIAL_PADRAO\">\n                                    <span class=\"glyphicon glyphicon-remove\"></span>\n                                </button>\n                            </td>\n                        </tr>\n                    </tbody>\n                    <tfoot class=\"status-tabela\">\n                        <tr *ngIf=\"status == LOADING\"><td colspan=\"12\"><i>Carregando Salas...</i></td></tr>\n                        <tr *ngIf=\"salas != null && (salas | filtroSalas:criteria).length == 0 && status == COMPLETE\"><td colspan=\"12\"><i>Não Há Salas para serem listadas</i></td></tr>\n                        <tr *ngIf=\"status == ERROR\"><td class=\"erro\" colspan=\"12\"><i>Falha na obtenção de Salas!</i></td></tr>\n                    </tfoot>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>\n    \n<!-- Modal -->\n<div class=\"modal fade\" id=\"dialogSalas\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialogSalasTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Sala #{{sala.id | zeros:4}}</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\" redimensionar=\"285\">\n                <fieldset>\n                    <form id=\"salaForm\" class=\"form-group\" style=\"max-width: 500px;\">\n                        <div class=\"alert alert-info\" [ngClass]=\"{'alert-info': !erroAviso, 'alert-danger': erroAviso}\" *ngIf=\"aviso\">\n                            <strong *ngIf=\"!erroAviso\">Informação!</strong><strong *ngIf=\"erroAviso\">Falha!</strong> {{aviso}}\n                        </div>\n                        <label class=\"style1\">Nome completo: *</label><br>\n                        <input class=\"form-control\" type=\"text\" name=\"nome_professor\" placeholder=\"Nome completo\" [(ngModel)]=\"sala.nome_professor\" size=\"60\" [readonly]=\"!editavel\" ><p></p>\n\n                        <label class=\"style1\">E-mail: *</label><br>\n                        <input class=\"form-control\" type=\"email\" name=\"email\" placeholder=\"Preferência institucional\" [(ngModel)]=\"sala.email\" size=\"60\" [readonly]=\"!editavel\"><p></p>\n\n                        <label class=\"style1\">Faculdade: *</label><br>\n                        <input class=\"form-control\" type=\"text\" name=\"faculdade\" placeholder=\"Ex.: FACET\" [(ngModel)]=\"sala.faculdade\" size=\"60\" [readonly]=\"!editavel\"><p></p>\n\n                        <label class=\"style1\">Curso: *</label><br>\n                        <input class=\"form-control\" type=\"text\" name=\"curso\" placeholder=\"Ex.: Sistemas de Informação\" [(ngModel)]=\"sala.curso\" size=\"60\" [readonly]=\"!editavel\"><p></p>\n\n                        <label class=\"style1\">Nome da Disciplina: *</label><br>\n                        <input class=\"form-control\" type=\"text\" name=\"nome_sala\" placeholder=\"Ex.: Algoritimos III\" [(ngModel)]=\"sala.nome_sala\" size=\"60\" [readonly]=\"!editavel\"><p></p>\n\n                        <label class=\"style1\">Modalidade da Disciplina: *</label><br>\n                        <select class=\"form-control\" name=\"modalidade\" [(ngModel)]=\"sala.modalidade\" [disabled]=\"!editavel\">                         \n                            <option *ngFor=\"let m of modalidades\" value=\"{{m.sigla}}\">{{m.descricao}}</option>\n                        </select><br>\n                        \n                        <label class=\"style1\">Objetivo da Disciplina: *</label><br>\n                        <select class=\"form-control\" name=\"objetivo_sala\" [(ngModel)]=\"sala.objetivo_sala\" [disabled]=\"!editavel\">                         \n                            <option *ngFor=\"let o of objetivosSalas\" value=\"{{o.sigla}}\">{{o.descricao}}</option>\n                        </select><br>\n                        \n                        <label class=\"style1\">Chave de Inscrição para Estudantes acessarem a sala:</label><br>\n                        <input class=\"form-control\" type=\"text\" name=\"senha_aluno\" placeholder=\"\" [(ngModel)]=\"sala.senha_aluno\" size=\"60\" [readonly]=\"!editavel\"><p></p>\n\n                        <label class=\"style1\">Chave de Inscrição para o Professor acessar a sala: *</label><br>\n                        <input class=\"form-control\" type=\"text\" name=\"senha_professor\" placeholder=\"\" [(ngModel)]=\"sala.senha_professor\" size=\"60\" [readonly]=\"!editavel\"><p></p>\n\n                        <label class=\"style1\">Observações:</label><br>\n                        <textarea class=\"form-control\" name=\"observacao\" placeholder=\"Ex:. Utilizem o conteúdo da sala do ano passado: Link da sala\" [(ngModel)]=\"sala.observacao\" [readonly]=\"!editavel\"></textarea><p></p>\n                        \n                    </form>\n                </fieldset>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-primary botao-barra\" (click)=\"atualizarSala()\" [disabled]=\"!editavel\">Atualizar</button>\n                <button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\">Fechar</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"dialogStatus\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialogStatusTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Atualizar Status: {{statusTemp}}</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\" style=\"width: 350px;\">\n                <label class=\"style1\">{{tituloMensagem}}</label><br>\n                <textarea class=\"form-control\" [(ngModel)]=\"mensagem\" [readonly]=\"!editavel\"></textarea><p></p>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-primary botao-barra\" (click)=\"statusSala()\" [disabled]=\"!editavel\">Ok</button>\n                <button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\">Fechar</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/salas-old/salas-old.component.less":
/*!****************************************************!*\
  !*** ./src/app/salas-old/salas-old.component.less ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhbGFzLW9sZC9zYWxhcy1vbGQuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/salas-old/salas-old.component.ts":
/*!**************************************************!*\
  !*** ./src/app/salas-old/salas-old.component.ts ***!
  \**************************************************/
/*! exports provided: SalasOldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalasOldComponent", function() { return SalasOldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _salas_old_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../salas-old.service */ "./src/app/salas-old.service.ts");
/* harmony import */ var _sala_old__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sala-old */ "./src/app/salas-old/sala-old.ts");
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../abstract-component */ "./src/app/abstract-component.ts");
/* harmony import */ var _dados_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dados.service */ "./src/app/dados.service.ts");
/* harmony import */ var _status__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../status */ "./src/app/status.ts");







var SalasOldComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SalasOldComponent, _super);
    function SalasOldComponent(salasService, dadosService) {
        var _this = _super.call(this) || this;
        _this.salasService = salasService;
        _this.dadosService = dadosService;
        _this.STATUS_INICIAL_PADRAO = _status__WEBPACK_IMPORTED_MODULE_6__["Status"].CHAVES.PROCESSO;
        _this.STATUS_CONCLUIDO_PADRAO = _status__WEBPACK_IMPORTED_MODULE_6__["Status"].CHAVES.CONCLUIDO;
        _this.STATUS_REJEITADO_PADRAO = _status__WEBPACK_IMPORTED_MODULE_6__["Status"].CHAVES.REJEITADO;
        _this.criteria = "";
        _this.sala = new _sala_old__WEBPACK_IMPORTED_MODULE_3__["SalaOld"](0, '', '', '', '', '', '', '', '', '', '', '', null, new Date());
        _this.statusTemp = "";
        _this.tituloMensagem = "";
        _this.mensagem = "";
        return _this;
    }
    Object.defineProperty(SalasOldComponent.prototype, "salas", {
        get: function () {
            return this.salasService.salas;
        },
        set: function (salas) {
            this.salasService.salas = salas;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SalasOldComponent.prototype, "modalidades", {
        get: function () {
            return this.salasService.modalidades;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SalasOldComponent.prototype, "objetivosSalas", {
        get: function () {
            return this.salasService.objetivosSalas;
        },
        enumerable: true,
        configurable: true
    });
    SalasOldComponent.prototype.editarVisualizar = function (sala) {
        this.sala = sala.clone();
        console.log(this.sala);
        this.aviso = "";
        if (sala.status.chave == this.STATUS_INICIAL_PADRAO) {
            this.editavel = true;
            //window.location.href = '/salas/' + sala.id + '/edit';
        }
        else
            this.editavel = false;
        //window.location.href = ('/salas/' + sala.id + '/' + (sala.status.chave == STATUS_INICIAL_PADRAO ? 'edit' : ''));
    };
    SalasOldComponent.prototype.preparaSetStatusSala = function (sala, isConcluido) {
        this.sala = sala;
        this.editavel = true;
        this.mensagem = "";
        if (isConcluido) {
            this.statusTemp = this.STATUS_CONCLUIDO_PADRAO;
            this.tituloMensagem = "Informe o link da sala criada:";
        }
        else {
            this.statusTemp = this.STATUS_REJEITADO_PADRAO;
            this.tituloMensagem = "Informe uma justificativa para a rejeição:";
        }
    };
    SalasOldComponent.prototype.statusSala = function () {
        var _this = this;
        this.editavel = false;
        this.salasService.statusSala(this.sala, this.statusTemp, this.mensagem)
            .then(function (response) {
            if (response) {
                alert(_this.erroHttp(response));
                return;
            }
            jQuery('#dialogStatus').modal('hide');
        })
            .catch(function (response) {
            alert(_this.erroHttp(response));
            jQuery('#dialogStatus').modal('hide');
        });
    };
    SalasOldComponent.prototype.atualizarSala = function () {
        var _this = this;
        this.salasService.atualizarSala(this.sala)
            .then(function (response) {
            if (response) {
                _this.erroAviso = true;
                _this.aviso = _this.erroHttp(response);
            }
            else {
                _this.erroAviso = false;
                _this.aviso = "Sala Atualizada!";
                jQuery('#dialogSalas').modal('hide');
            }
        }).catch(function (response) {
            _this.erroAviso = true;
            _this.aviso = _this.erroHttp(response);
        });
    };
    SalasOldComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dadosService.statusList()
            .then(function (response) {
            _this.salasService.getObjetivosSalas()
                .then(function (response) {
                _this.salasService.getModalidades()
                    .then(function (response) {
                    _this.salasService.listar()
                        .then(function (response) {
                        _this.status = _this.COMPLETE;
                    })
                        .catch(function (response) {
                        _this.status = _this.ERROR;
                        console.log(response);
                    });
                })
                    .catch(function (response) {
                    _this.status = _this.ERROR;
                    console.log(response);
                });
            })
                .catch(function (response) {
                _this.status = _this.ERROR;
                console.log(response);
            });
        })
            .catch(function (response) {
            _this.status = _this.ERROR;
            console.log(response);
        });
    };
    SalasOldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-salas-old',
            template: __webpack_require__(/*! ./salas-old.component.html */ "./src/app/salas-old/salas-old.component.html"),
            styles: [__webpack_require__(/*! ./salas-old.component.less */ "./src/app/salas-old/salas-old.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_salas_old_service__WEBPACK_IMPORTED_MODULE_2__["SalasOldService"], _dados_service__WEBPACK_IMPORTED_MODULE_5__["DadosService"]])
    ], SalasOldComponent);
    return SalasOldComponent;
}(_abstract_component__WEBPACK_IMPORTED_MODULE_4__["AbstractComponent"]));



/***/ }),

/***/ "./src/app/salas.service.ts":
/*!**********************************!*\
  !*** ./src/app/salas.service.ts ***!
  \**********************************/
/*! exports provided: SalasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalasService", function() { return SalasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _salas_sala__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./salas/sala */ "./src/app/salas/sala.ts");
/* harmony import */ var _cursos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cursos.service */ "./src/app/cursos.service.ts");
/* harmony import */ var _periodo_letivos_periodo_letivo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./periodo-letivos/periodo-letivo */ "./src/app/periodo-letivos/periodo-letivo.ts");
/* harmony import */ var _periodo_letivos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./periodo-letivos.service */ "./src/app/periodo-letivos.service.ts");







var SalasService = /** @class */ (function () {
    function SalasService(http, cursosService, periodoLetivoService) {
        this.http = http;
        this.cursosService = cursosService;
        this.periodoLetivoService = periodoLetivoService;
    }
    SalasService.prototype.atualizarSala = function (sala) {
        var _this = this;
        return this.http.post('salas/' + sala.id, sala)
            .toPromise()
            .then(function (response) {
            _this.salas = _this.salas.slice(0);
            for (var i in _this.salas)
                if (_this.salas[i].id == sala.id) {
                    _this.salas[i] = sala;
                    if (typeof sala.curso == 'number' || typeof sala.curso == 'string') {
                        _this.salas[i].curso = _this.cursosService.cursosIndex.get(sala.curso);
                    }
                    return null;
                }
            return response;
        })
            .catch(function (response) {
            return response;
        });
    };
    SalasService.prototype.listar = function () {
        var _this = this;
        return this.http.get("/salas/listar")
            .toPromise()
            .then(function (response) {
            _this.salas = _salas_sala__WEBPACK_IMPORTED_MODULE_3__["Sala"].generateListPlus(response.json().reverse(), _this.cursosService.cursosIndex);
            /*this.salasIndex = {};
            var ss = response.json();
            for (var i = 0; i < ss.length; i++) {
                var sala = this.criaSala(ss[i]);
                this.salasIndex[sala.id] = sala;
                this.salas.push( sala );
            }
            this.salas.sort(this.sortSalas);*/
            return _this.salas;
        });
    };
    SalasService.prototype.getMensagemSala = function (sala) {
        return this.http.get("/salas/mensagem/" + sala.id)
            .toPromise()
            .then(function (response) {
            return response.text();
        });
    };
    SalasService.prototype.statusSala = function (sala, status, mensagem) {
        return this.http.patch('/salas/status/' + sala.id, { status: status, mensagem: mensagem })
            .toPromise()
            .then(function (response) {
            var s = response.json();
            sala.status = s.status;
            return null;
        })
            .catch(function (response) {
            return response;
        });
    };
    SalasService.prototype.preparaCreate = function () {
        return this.http.get("/salas/preparacreate").toPromise()
            .then(function (response) {
            var r = response.json();
            var s = _salas_sala__WEBPACK_IMPORTED_MODULE_3__["Sala"].geraNovaSala();
            s.nome_professor = r.nome_professor;
            s.email = r.email;
            s.periodo_letivo_id = r.periodo_letivo_id;
            return s;
        });
    };
    SalasService.prototype.aplicarPlDisciplina = function (sala, plda) {
        sala.carga_horaria_total_disciplina = plda.carga_horaria_total_disciplina;
        sala.turma_nome = plda.turma_nome;
        sala.avaliacao = plda.avaliacao;
        sala.turma_id = plda.turma_id;
        if (typeof plda.periodo_letivo == 'object' && plda.periodo_letivo instanceof _periodo_letivos_periodo_letivo__WEBPACK_IMPORTED_MODULE_5__["PeriodoLetivo"])
            sala.periodo_letivo_key = plda.periodo_letivo.id_sigecad;
        else
            sala.periodo_letivo_key = plda.periodo_letivo.toString();
        //sala.curso_key = plda.curso; 
        sala.disciplina_key = plda.disciplina_key;
        return sala;
    };
    SalasService.prototype.create = function (sala) {
        return this.http.post("/salas/", sala).toPromise()
            .then(function (response) {
            return response.json();
        });
    };
    SalasService.prototype.executarRestauracaoAutomatica = function (sala, courseImportId) {
        return this.http.post('/salas/autorestore/' + sala.id, { sala_moodle_id: sala.sala_moodle_id, macro_id: sala.macro_id, courseImportId: courseImportId }).toPromise()
            .then(function (response) {
            return response.text();
        });
    };
    SalasService.prototype.exportarEstudantesMoodle = function (sala) {
        return this.http.post('/salas/autorestore-estudantes/' + sala.id, { sala_moodle_id: sala.sala_moodle_id, macro_id: sala.macro_id }).toPromise()
            .then(function (response) {
            return response.text();
        });
    };
    SalasService.prototype.getModalidades = function () {
        var _this = this;
        return this.http.get('/salas/modalidades').toPromise()
            .then(function (response) {
            var m = response.json();
            _this.modalidades = m;
            return m;
        });
    };
    SalasService.prototype.getObjetivosSalas = function () {
        var _this = this;
        return this.http.get('/salas/objetivos').toPromise()
            .then(function (response) {
            var o = response.json();
            _this.objetivosSalas = o;
            return o;
        });
    };
    SalasService.prototype.convertCreatedSala = function (s, sala, status) {
        if (!sala)
            sala = _salas_sala__WEBPACK_IMPORTED_MODULE_3__["Sala"].geraNovaSala();
        else
            sala.id = s.id;
        sala.email = s.email;
        sala.curso = this.cursosService.cursosIndex.get(s.curso_id);
        //sala.mensagem = s.mensagem;
        sala.nome_professor = s.nome_professor;
        sala.nome_sala = s.nome_sala;
        sala.modalidade = s.modalidade;
        sala.objetivo_sala = s.objetivo_sala;
        sala.observacao = s.observacao;
        sala.senha_aluno = s.senha_aluno;
        //sala.estudantes = s.estudantes;
        sala.periodo_letivo_id = s.periodo_letivo_id;
        sala.carga_horaria_total_disciplina = s.carga_horaria_total_disciplina;
        sala.avaliacao = s.avaliacao;
        sala.turma_nome = s.turma_nome;
        sala.turma_id = s.turma_id;
        sala.periodo_letivo_key = s.periodo_letivo_key;
        sala.curso_key = sala.curso.curso_key;
        sala.disciplina_key = s.disciplina_key;
        sala.macro_id = s.macro_id;
        sala.status = s.status ? s.status : status;
        //sala.solicitante_id = s.solicitante_id;   
        return sala;
    };
    //converte dados brutos da sala do sigecad para Sala da view
    SalasService.prototype.convertChargedSala = function (s, sala, status) {
        if (!sala)
            sala = _salas_sala__WEBPACK_IMPORTED_MODULE_3__["Sala"].geraNovaSala();
        //sala.id = s.id;
        //sala.email = s.email;
        if (s.hasOwnProperty('codigo_curso'))
            sala.curso = this.cursosService.cursosKeyIndex.get(s.codigo_curso);
        else {
            sala.curso = this.cursosService.cursosIndex.get(s.curso_id);
            s.codigo_curso = sala.curso.curso_key;
        }
        //sala.mensagem = s.mensagem;
        //sala.nome_professor = s.nome_professor;
        sala.nome_sala = s.nome_disciplina;
        //sala.modalidade = s.modalidade;
        //sala.objetivo_sala = s.objetivo_sala;
        //sala.observacao = s.observacao;
        //sala.senha_aluno = s.senha_aluno;
        //sala.estudantes = s.estudantes;
        //sala.periodo_letivo_id =  this.periodoLetivoService.periodoLetivosKeyIndex.get( s.periodo_letivo_id ).id.toString();
        sala.periodo_letivo_id = this.periodoLetivoService.periodoLetivosNameIndex.get(s.periodo_letivo).id.toString();
        sala.carga_horaria_total_disciplina = s.carga_horaria_total_disciplina;
        sala.avaliacao = s.avaliacao;
        sala.turma_nome = s.turma_nome;
        sala.turma_id = s.turma_id;
        sala.periodo_letivo_key = s.periodo_letivo_id;
        sala.curso_key = s.codigo_curso;
        sala.disciplina_key = s.codigo_disciplina;
        if (status)
            sala.status = status;
        //sala.solicitante_id = s.solicitante_id;   
        return sala;
    };
    SalasService.prototype.chargeSala = function (sala, plKey, codigoCurso, codigoDiscoplina, salaTurma) {
        var _this = this;
        return this.http.get('/salas/charge/' + plKey + "/" + codigoCurso + "/" + codigoDiscoplina + "/" + salaTurma).toPromise()
            .then(function (response) {
            if (response.text()) {
                var s = response.json();
                _this.convertChargedSala(s, sala);
            }
            return sala;
        });
    };
    SalasService.prototype.getSufixoNomeSala = function () {
        return this.http.get('/sufixonome').toPromise()
            .then(function (response) {
            return response.text();
        });
    };
    SalasService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(
        //{ providedIn: 'root'}
        ),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _cursos_service__WEBPACK_IMPORTED_MODULE_4__["CursosService"], _periodo_letivos_service__WEBPACK_IMPORTED_MODULE_6__["PeriodoLetivosService"]])
    ], SalasService);
    return SalasService;
}());



/***/ }),

/***/ "./src/app/salas/cria-salas/cria-salas.component.html":
/*!************************************************************!*\
  !*** ./src/app/salas/cria-salas/cria-salas.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">Nova Solicitação de Criação de Sala no Moodle</div>\n        <fieldset>\n            <div redimensionar=\"166\">\n                <form id=\"salaForm\" class=\"form-group\" style=\"text-align: left; width: 500px; margin: 15px auto;\" (submit)=\"criaSala($event)\">\n                    <div class=\"alert alert-info\" [ngClass]=\"{'alert-info': !erroAviso, 'alert-danger': erroAviso}\" *ngIf=\"aviso\">\n                        <strong *ngIf=\"!erroAviso\">Informação!</strong><strong *ngIf=\"erroAviso\">Falha!</strong> {{aviso}}\n                    </div>\n                    <label class=\"style1\">Nome completo: *</label><br>\n                    <input *ngIf=\"usuarios.length == 0\" class=\"form-control\" type=\"text\" name=\"nome_professor\" placeholder=\"Nome completo\" [(ngModel)]=\"sala.nome_professor\" size=\"60\" disabled>\n                    <ng-container *ngIf=\"usuarios.length > 0\">\n                        <p-autoComplete class=\"prime-autocomplete\" name=\"nome_professor\" [suggestions]=\"filteredUsuarios\" placeholder=\"Nome do Professor\" (onSelect)=\"selecionaUsuario($event)\"\n                        (completeMethod)=\"buscaUsuario($event)\" (onClear)=\"limpaUsuario($event)\" [readonly]=\"!editavel\" [(ngModel)]=\"nome_professor_temp\" [required]=\"true\" [forceSelection]=\"true\"></p-autoComplete>\n                        <br>\n                    </ng-container><p></p>\n\n                    <label class=\"style1\">E-mail: *</label><br>\n                    <input class=\"form-control\" type=\"email\" name=\"email\" placeholder=\"Preferência institucional\" [(ngModel)]=\"sala.email\" size=\"60\" [readonly]=\"!editavel\" required><p></p>\n                    \n                    <label class=\"style1\">Confirmar E-mail: * </label> \n                    <input type=\"checkbox\" name=\"verificacao\" value=\"\" required><br><p></p>\n\n                    <label class=\"style1\">Período Letivo: *</label><br>\n                    <select class=\"form-control\" name=\"periodo_letivo\"  [disabled]=\"!editavel\" [(ngModel)]=\"sala.periodo_letivo_id\" (change)=\"selecionaPeriodoLetivo()\" required>   \n                        <option hidden disabled selected value> -- Selecione -- </option>\n                        <ng-container *ngFor=\"let pl of periodoLetivos\">\n                            <option *ngIf=\"pl.ativo || sala.periodo_letivo_id == pl.id.toString()\" [value]=\"pl.id\">{{pl.nome + (pl.descricao ? \" (\" + pl.descricao + \")\" : \"\")}}</option>\n                        </ng-container>  \n                    </select><p></p>\n\n                    <label class=\"style1\">Faculdade: *</label><br>\n                    <!--p-dropdown name=\"faculdade\" [options]=\"faculdadesOptions\" [(ngModel)]=\"faculdadeTemp\" [disabled]=\"!editavel\" [required]=\"true\"\n                        placeholder=\"-- Selecione --\" styleClass=\"prime-combobox\" (change)=\"selecionaFaculdade()\"></p-dropdown-->\n                    <select class=\"form-control\" name=\"faculdade\"  [disabled]=\"!editavel\" [(ngModel)]=\"faculdadeSelecionadaId\" (change)=\"selecionaFaculdade()\" required>   \n                        <option hidden disabled selected value> -- Selecione -- </option>\n                        <ng-container *ngFor=\"let f of faculdades\">\n                            <option *ngIf=\"f.ativo || faculdadeSelecionadaId == f.id.toString()\" [value]=\"f.id\">{{f.sigla}}</option>\n                        </ng-container>  \n                    </select><p></p>\n\n                    <label class=\"style1\">Curso: *</label><br>\n                    <ng-container *ngIf=\"!faculdadeSelecionadaId\">\n                        <select class=\"form-control\" name=\"curso\"  disabled >   \n                            <option hidden disabled selected value> -- </option>\n                        </select>\n                    </ng-container>\n                    <ng-container *ngIf=\"faculdadeSelecionadaId\">\n                        <select class=\"form-control\" name=\"curso\"  [disabled]=\"!editavel\" [(ngModel)]=\"sala.curso\" (change)=\"selecionaCurso()\" required>   \n                            <option hidden disabled selected value> -- Selecione -- </option>\n                            <ng-container *ngFor=\"let c of faculdadeTemp.cursos\">\n                                <option  *ngIf=\"c.ativo || sala.curso == c.id\" [value]=\"c.id\">{{c.curso_key ? c.curso_key + \" - \" + c.nome : c.nome}}</option>\n                            </ng-container>\n                        </select>\n                    </ng-container><p></p>\n\n                    <label class=\"style1\">Nome da Disciplina: *</label><br>\n                    <!--input pInputText class=\"form-control prime-form-control\" type=\"text\" name=\"nome_sala\" placeholder=\"Ex.: Algoritimos III\" [(ngModel)]=\"sala.nome_sala\" size=\"60\" [readonly]=\"!editavel\" required-->\n                    <p-autoComplete class=\"prime-autocomplete\" name=\"nome_sala\" [suggestions]=\"filteredDisciplina\" placeholder=\"Ex.: Algoritmos\" (onSelect)=\"selecionaDisciplina($event)\"\n                    (completeMethod)=\"buscaDisciplina($event)\" [readonly]=\"!editavel || sala.curso == ''\" [(ngModel)]=\"sala.nome_sala\" [required]=\"true\"></p-autoComplete>\n                    <br><p></p>\n\n                    <label class=\"style1\">Modalidade da Disciplina: *</label><br>\n                    <select class=\"form-control\" name=\"modalidade\" [(ngModel)]=\"sala.modalidade\" [disabled]=\"!editavel\" required>   \n                        <option hidden disabled selected value> -- Selecione -- </option>  \n                        <option *ngFor=\"let m of modalidades\" [hidden]=\"!m.visivel\" value=\"{{m.sigla}}\">{{m.descricao}}</option>\n                    </select><p></p>\n                    \n                    <label class=\"style1\">Objetivo da Disciplina: *</label><br>\n                    <select class=\"form-control\" name=\"objetivo_sala\" [(ngModel)]=\"sala.objetivo_sala\" [disabled]=\"!editavel\" required>   \n                        <option hidden disabled selected value> -- Selecione -- </option>                      \n                        <option *ngFor=\"let o of objetivosSalas\" [hidden]=\"!o.visivel\" value=\"{{o.sigla}}\">{{o.descricao}}</option>\n                    </select><p></p>\n                    \n                    <label class=\"style1\">Chave de Inscrição para Estudantes acessarem a sala:</label><br>\n                    <input class=\"form-control\" type=\"text\" name=\"senha_aluno\" placeholder=\"\" [(ngModel)]=\"sala.senha_aluno\" size=\"60\" [readonly]=\"!editavel\"><p></p>\n\n                    <label class=\"style1\">Observações:</label><br>\n                    <textarea class=\"form-control\" name=\"observacao\" placeholder=\"Ex:. Utilizem o conteúdo da sala do ano passado: Link da sala\" [(ngModel)]=\"sala.observacao\" [readonly]=\"!editavel\"></textarea><p></p>\n                    \n                    <!--label class=\"style1\">Estudantes:</label><br>\n                    <table class=\"table\">\n                        <caption *ngIf=\"estudantes.length == 0\">\n                            <div  class=\"custom-file\" style=\"text-align: center;\">\n                                <input type=\"file\" class=\"custom-file-input\" id=\"customFile\" (change)=\"lerAlunosCSV($event)\"  [disabled]=\"!editavel\">\n                                <label class=\"custom-file-label btn btn-primary\" [ngClass]=\"{'disabled': !editavel}\" for=\"customFile\">Selecione um Arquivo com os Estudantes (csv)</label>\n                            </div>\n                        </caption>\n                        <colgroup>\n                            <col width=\"33%\"/>\n                            <col width=\"33%\"/>\n                            <col width=\"34%\"/>\n                            <col width=\"36px\"/>\n                            <col width=\"17px\"/>\n                        </colgroup>\n                        <thead class=\"thead-light\">\n                            <tr>\n                                <th>USER</th>\n                                <th>EMAIL</th>\n                                <th>NOME</th>\n                                <th>\n                                    <button style=\"text-align: center;\" title=\"Limpar Todos\" type=\"button\" class=\"btn btn-danger botao-reduzido\" (click)=\"limparEstudantes()\"  [disabled]=\"!editavel\">\n                                        <span class=\"glyphicon glyphicon-trash\"></span>\n                                    </button>\n                                </th>\n                            </tr>\n                        </thead>\n                    </table>\n                    <div style=\"overflow-y: scroll; max-height: 160px;\">\n                        <table class=\"table\">\n                            <colgroup>\n                                <col width=\"33%\"/>\n                                <col width=\"33%\"/>\n                                <col width=\"34%\"/>\n                                <col width=\"36px\"/>\n                            </colgroup>\n                            <tbody>\n                                <tr *ngFor=\"let e of estudantes\">\n                                    <td class=\"celula-trunca-texto\" title=\"{{e.username}}\">{{e.username}}</td>\n                                    <td class=\"celula-trunca-texto\" title=\"{{e.email}}\">{{e.email}}</td>\n                                    <td class=\"celula-trunca-texto\" title=\"{{e.fullname}}\">{{e.fullname}}</td>\n                                    <td>\n                                        <button style=\"text-align: center;\" title=\"Remover\" type=\"button\" class=\"btn btn-danger botao-reduzido\" (click)=\"removerEstudante(e)\"  [disabled]=\"!editavel\">\n                                            <span class=\"glyphicon glyphicon-remove\"></span>\n                                        </button>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td colspan=\"4\" style=\"text-align: center;\">\n                                        <button style=\"text-align: center;\" title=\"Adicionar\" type=\"button\" data-toggle=\"modal\" data-target=\"#dialogEstudante\" class=\"btn btn-primary botao-reduzido\" [disabled]=\"!editavel\">\n                                            <span class=\"glyphicon glyphicon-plus\"></span>\n                                        </button>\n                                    </td>\n                                </tr>\n                                \n                            </tbody>\n                        </table>\n                    </div-->\n                    <button type=\"submit\" form=\"salaForm\" class=\"btn btn-primary botao-barra\"  [disabled]=\"!editavel\">Enviar</button>\n                    <!--p><label>Se você necessita de uma Sala personalizada, clique <a href=\"/salas-old/create/\">Aqui</a>.</label></p-->\n                </form>\n            </div>\n        </fieldset>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"dialogCreate\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialogCreateTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Criação de Sala Realizada!</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\" style=\"width: 700px;\">\n                <h2 style=\"font-weight: normal;\">Solicitação de criação de sala: <b>{{ salaResp.nome_sala }}</b></h2>\n                <p></p>\n                <p>Nome: <b>{{ salaResp.nome_professor }}</b></p>\n                <p>Faculdade: <b>{{ salaResp.curso?.faculdade?.sigla }}</b></p>\n                <p>Curso: <b>{{ salaResp.curso?.nome }}</b></p>\n                <p>Senha para Estudantes acessarem a sala: <b *ngIf=\"salaResp.senha_aluno != null && salaResp.senha_aluno != ''\">{{ salaResp.senha_aluno }}</b> <i *ngIf=\"salaResp.senha_aluno == null || salaResp.senha_aluno == ''\" style=\"color: gray;\">sem senha</i></p>\n                <p *ngIf=\"salaResp.observacao != null && salaResp.observacao != ''\">Observação: <b>{{salaResp.observacao }}</b></p>\n                <p>Status: <b><span style=\" padding: 3px\">{{ salaResp.status.descricao }}</span></b>\n                <ng-container  *ngIf=\"salaResp.mensagem != null && salaResp.mensagem != ''\">\n                    <br/>\n                    <ng-container  *ngIf=\"salaResp.status.chave == STATUS_CONCLUIDO_PADRAO\">\n                        Link da Sala: <b><a href=\"{{ salaResp.mensagem }}\">{{ salaResp.mensagem }}</a></b>\n                    </ng-container>\n                    <ng-container  *ngIf=\"salaResp.status.chave == STATUS_REJEITADO_PADRAO\">\n                        Justificativa: <b><span style=\"color: red\">{{  salaResp.mensagem }}</span></b>\n                    </ng-container>\n                </ng-container>\n                </p>\n                <p></p>\n                <br/>\n                <br/>\n                <p style=\"color: gray;\"><i>Este é um email automático enviado pelo sistema, não responda este email!</i> </p>\n                <p></p>\n                © Equipe EAD <br/>\n                <p>Contato: <a href=\"mailto:{{emailResp}}\">{{emailResp}}</a></p>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-primary botao-barra\" style=\"width: 200px;\" type=\"button\" onclick=\"window.location.href = '/salas'\">Lista de Salas</button>\n                <button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\">Fechar</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"dialogMensagem\" tabindex=\"-1\" role=\"dialog\"  data-backdrop=\"static\" aria-labelledby=\"dialogMensagemTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-body\" style=\"width: 400px;\">\n                <div class=\"alert\"  [ngClass]=\"{'alert-info': !erroAviso, 'alert-danger': erroAviso}\">\n                    <strong>{{mensagemDialog}}</strong> \n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/salas/cria-salas/cria-salas.component.less":
/*!************************************************************!*\
  !*** ./src/app/salas/cria-salas/cria-salas.component.less ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhbGFzL2NyaWEtc2FsYXMvY3JpYS1zYWxhcy5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/salas/cria-salas/cria-salas.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/salas/cria-salas/cria-salas.component.ts ***!
  \**********************************************************/
/*! exports provided: CriaSalasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriaSalasComponent", function() { return CriaSalasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_abstract_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/abstract-component */ "./src/app/abstract-component.ts");
/* harmony import */ var src_app_salas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/salas.service */ "./src/app/salas.service.ts");
/* harmony import */ var _sala__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sala */ "./src/app/salas/sala.ts");
/* harmony import */ var src_app_status__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/status */ "./src/app/status.ts");
/* harmony import */ var src_app_faculdade_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/faculdade.service */ "./src/app/faculdade.service.ts");
/* harmony import */ var src_app_faculdades_faculdade__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/faculdades/faculdade */ "./src/app/faculdades/faculdade.ts");
/* harmony import */ var src_app_cursos_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/cursos.service */ "./src/app/cursos.service.ts");
/* harmony import */ var src_app_pl_disciplinas_academicos_pl_disciplinas_academicos_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/pl-disciplinas-academicos/pl-disciplinas-academicos.js */ "./src/app/pl-disciplinas-academicos/pl-disciplinas-academicos.js");
/* harmony import */ var src_app_pl_disciplinas_academicos_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/pl-disciplinas-academicos.service */ "./src/app/pl-disciplinas-academicos.service.ts");
/* harmony import */ var src_app_usuario_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/usuario.service */ "./src/app/usuario.service.ts");
/* harmony import */ var src_app_periodo_letivos_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/periodo-letivos.service */ "./src/app/periodo-letivos.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");














var CriaSalasComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CriaSalasComponent, _super);
    function CriaSalasComponent(salasService, faculdadeService, cursosService, periodoLetivoService, usuarioService, plDisciplinasAcademicosService, route) {
        var _this = _super.call(this) || this;
        _this.salasService = salasService;
        _this.faculdadeService = faculdadeService;
        _this.cursosService = cursosService;
        _this.periodoLetivoService = periodoLetivoService;
        _this.usuarioService = usuarioService;
        _this.plDisciplinasAcademicosService = plDisciplinasAcademicosService;
        _this.route = route;
        _this.STATUS_INICIAL_PADRAO = src_app_status__WEBPACK_IMPORTED_MODULE_5__["Status"].CHAVES.PROCESSO;
        _this.STATUS_CONCLUIDO_PADRAO = src_app_status__WEBPACK_IMPORTED_MODULE_5__["Status"].CHAVES.CONCLUIDO;
        _this.STATUS_REJEITADO_PADRAO = src_app_status__WEBPACK_IMPORTED_MODULE_5__["Status"].CHAVES.REJEITADO;
        _this.sala = _sala__WEBPACK_IMPORTED_MODULE_4__["Sala"].geraNovaSala();
        _this.salaResp = _sala__WEBPACK_IMPORTED_MODULE_4__["Sala"].geraNovaSala();
        _this.emailResp = "";
        _this.redirectLink = "";
        _this.mensagemDialog = "Carregando dados...";
        _this.faculdadeTemp = src_app_faculdades_faculdade__WEBPACK_IMPORTED_MODULE_7__["Faculdade"].generateFaculdade();
        _this.faculdadeSelecionadaId = "";
        //faculdadesOptions = [];
        _this.plDisciplinasAcademicosTemp = src_app_pl_disciplinas_academicos_pl_disciplinas_academicos_js__WEBPACK_IMPORTED_MODULE_9__["PlDisciplinasAcademicos"].generatePlDisciplinasAcademicos();
        _this.filteredDisciplina = [];
        _this.usuarios = [];
        _this.filteredUsuarios = [];
        _this.nome_professor_temp = "";
        return _this;
    }
    Object.defineProperty(CriaSalasComponent.prototype, "faculdades", {
        get: function () {
            return this.faculdadeService.faculdades;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CriaSalasComponent.prototype, "modalidades", {
        get: function () {
            return this.salasService.modalidades;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CriaSalasComponent.prototype, "objetivosSalas", {
        get: function () {
            return this.salasService.objetivosSalas;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CriaSalasComponent.prototype, "plDisciplinasAcademicosList", {
        get: function () {
            return this.plDisciplinasAcademicosService.plDisciplinasAcademicos;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CriaSalasComponent.prototype, "periodoLetivos", {
        get: function () {
            return this.periodoLetivoService.periodoLetivos;
        },
        enumerable: true,
        configurable: true
    });
    CriaSalasComponent.prototype.criaSala = function (ev) {
        var _this = this;
        ev.preventDefault();
        var salaForm = jQuery('#salaForm')[0];
        if (salaForm.reportValidity()) {
            this.editavel = false;
            if (this.plDisciplinasAcademicosService.plDisciplinasAcademicosNameIndex && this.plDisciplinasAcademicosService.plDisciplinasAcademicosNameIndex.get(this.sala.nome_sala))
                this.salasService.aplicarPlDisciplina(this.sala, this.plDisciplinasAcademicosService.plDisciplinasAcademicosNameIndex.get(this.sala.nome_sala));
            this.salasService.create(this.sala)
                .then(function (r) {
                _this.salaResp = r.sala;
                _this.salaResp.curso = _this.cursosService.cursosIndex.get(r.sala.curso_id);
                _this.emailResp = r.email;
                _this.redirectLink = r.redirect;
                if (_this.redirectLink) {
                    window.location.href = _this.redirectLink;
                }
                else {
                    jQuery('#dialogCreate').modal('show');
                    _this.sala = _sala__WEBPACK_IMPORTED_MODULE_4__["Sala"].geraNovaSala();
                    _this.sala.nome_professor = _this.salaResp.nome_professor;
                    _this.sala.email = _this.salaResp.email;
                    _this.faculdadeSelecionadaId = "";
                }
                _this.editavel = true;
            }).catch(function (response) {
                _this.erroAviso = true;
                _this.aviso = _this.erroHttp(response);
                _this.editavel = true;
            });
        }
    };
    CriaSalasComponent.prototype.geraStatus = function () {
    };
    CriaSalasComponent.prototype.selecionaPeriodoLetivo = function () {
        if (this.sala.periodo_letivo_id) {
            this.sala.curso = "";
            this.sala.nome_sala = "";
        }
    };
    CriaSalasComponent.prototype.selecionaFaculdade = function () {
        if (this.faculdadeSelecionadaId) {
            this.faculdadeTemp = this.faculdadeService.faculdadesIndex.get(this.faculdadeSelecionadaId);
            this.sala.curso = "";
            this.sala.nome_sala = "";
        }
    };
    CriaSalasComponent.prototype.selecionaCurso = function (disciplinaPrevia) {
        var _this = this;
        if (this.sala.curso) {
            this.plDisciplinasAcademicosTemp = src_app_pl_disciplinas_academicos_pl_disciplinas_academicos_js__WEBPACK_IMPORTED_MODULE_9__["PlDisciplinasAcademicos"].generatePlDisciplinasAcademicos();
            //this.sala.nome_sala = "";
            this.editavel = false;
            if (!disciplinaPrevia)
                jQuery('#dialogMensagem').modal('show');
            this.plDisciplinasAcademicosService.getPlDisciplinasAcademicos(this.sala.periodo_letivo_id, this.sala.curso)
                .then(function (r) {
                _this.editavel = true;
                _this.filteredDisciplina = _this.filterDisciplina("", _this.plDisciplinasAcademicosList);
                if (disciplinaPrevia) {
                    var pl = _this.plDisciplinasAcademicosService.plDisciplinasAcademicosNameIndex.get(disciplinaPrevia);
                    if (!pl)
                        pl = _this.plDisciplinasAcademicosService.plDisciplinasAcademicosNameIndex.get(disciplinaPrevia + " - " + _this.sala.turma_nome);
                    _this.sala.nome_sala = pl ? pl.disciplina : "";
                }
                else {
                    _this.sala.nome_sala = "";
                }
                jQuery('#dialogMensagem').modal('hide');
            }).catch(function (response) {
                _this.erroAviso = true;
                _this.aviso = _this.erroHttp(response);
                alert(_this.aviso);
                _this.editavel = true;
                jQuery('#dialogMensagem').modal('hide');
            });
        }
    };
    CriaSalasComponent.prototype.buscaDisciplina = function (event) {
        this.filteredDisciplina = this.filterDisciplina(event.query, this.plDisciplinasAcademicosList);
    };
    CriaSalasComponent.prototype.buscaUsuario = function (event) {
        if (event.query.length > 1)
            this.filteredUsuarios = this.filterUsuario(event.query, this.usuarios);
        else
            this.filteredUsuarios = [];
    };
    CriaSalasComponent.prototype.selecionaUsuario = function (event) {
        var id = event.substring(0, event.indexOf(' - '));
        console.log(id);
        this.sala.solicitante_id = id;
        this.nome_professor_temp = event.substring(event.indexOf(' - ') + 3);
    };
    CriaSalasComponent.prototype.limpaUsuario = function (event) {
        this.sala.solicitante_id = "";
    };
    CriaSalasComponent.prototype.filterDisciplina = function (query, plcs) {
        var filtered = [];
        for (var i = 0; i < plcs.length; i++) {
            var plc = plcs[i];
            if (plc.disciplina.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(plc.disciplina);
            }
        }
        return filtered;
    };
    CriaSalasComponent.prototype.filterUsuario = function (query, users) {
        var filtered = [];
        for (var i = 0; i < users.length; i++) {
            var u = users[i];
            if (u.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(u.id + " - " + u.name);
            }
        }
        return filtered;
    };
    CriaSalasComponent.prototype.selecionaDisciplina = function (value) {
        //console.log(this.plDisciplinasAcademicosService.plDisciplinasAcademicosNameIndex.get(value))
    };
    /*private preparaOptions() {
        this.faculdadesOptions = [
            //{label:' -- Selecione -- ', value:null}
        ]
        for (var i = 0; i < this.faculdades.length; i++) {
            this.faculdadesOptions.push({label:this.faculdades[i].sigla, value: this.faculdades[i]});
        }
    }*/
    CriaSalasComponent.prototype.checaIfChargedSala = function () {
        //http://suporte-ead-ms/salas/create/133/0623/04000564/P2
        var pars = null;
        this.route.params.subscribe(function (p) {
            if (p.hasOwnProperty('periodoLetivoKey') &&
                p.hasOwnProperty('codigoCurso') &&
                p.hasOwnProperty('codigoDisciplina') &&
                p.hasOwnProperty('salaTurma')) {
                pars = p;
                return pars;
            }
        });
        return pars;
    };
    CriaSalasComponent.prototype.ngOnInit = function () {
        var _this = this;
        jQuery('#dialogMensagem').modal('show');
        this.periodoLetivoService.getPeriodoLetivos()
            .then(function (response) {
            _this.usuarioService.listaUsuariosCriaSala()
                .then(function (response) {
                _this.usuarios = response;
                _this.faculdadeService.listar()
                    .then(function (response) {
                    _this.salasService.getObjetivosSalas()
                        .then(function (response) {
                        _this.salasService.getModalidades()
                            .then(function (response) {
                            _this.salasService.preparaCreate()
                                .then(function (r) {
                                _this.sala = r;
                                _this.nome_professor_temp = _this.sala.nome_professor;
                                //this.preparaOptions();
                                var chargeParams = _this.checaIfChargedSala();
                                if (chargeParams) {
                                    _this.salasService.chargeSala(_this.sala, chargeParams.periodoLetivoKey, chargeParams.codigoCurso, chargeParams.codigoDisciplina, chargeParams.salaTurma)
                                        .then(function (r) {
                                        //jQuery('#dialogMensagem').modal('hide');
                                        if (_this.sala.curso) {
                                            _this.faculdadeSelecionadaId = _this.sala.curso.faculdade.id.toString();
                                            _this.faculdadeTemp = _this.faculdadeService.faculdadesIndex.get(_this.faculdadeSelecionadaId);
                                            _this.sala.curso = _this.sala.curso.id;
                                            _this.selecionaCurso(_this.sala.nome_sala);
                                        }
                                        else
                                            jQuery('#dialogMensagem').modal('hide');
                                        _this.editavel = true;
                                    }).catch(function (response) {
                                        _this.erroAviso = true;
                                        _this.aviso = _this.erroHttp(response);
                                    });
                                }
                                else {
                                    jQuery('#dialogMensagem').modal('hide');
                                    _this.editavel = true;
                                }
                            }).catch(function (response) {
                                _this.status = _this.ERROR;
                                _this.erroAviso = true;
                                _this.mensagemDialog = _this.erroHttp(response);
                            });
                        })
                            .catch(function (response) {
                            _this.status = _this.ERROR;
                            _this.erroAviso = true;
                            _this.mensagemDialog = _this.erroHttp(response);
                            console.log(response);
                        });
                    })
                        .catch(function (response) {
                        _this.status = _this.ERROR;
                        _this.erroAviso = true;
                        _this.mensagemDialog = _this.erroHttp(response);
                        console.log(response);
                    });
                })
                    .catch(function (response) {
                    _this.status = _this.ERROR;
                    _this.erroAviso = true;
                    _this.mensagemDialog = _this.erroHttp(response);
                    console.log(response);
                });
            })
                .catch(function (response) {
                _this.status = _this.ERROR;
                _this.erroAviso = true;
                _this.mensagemDialog = _this.erroHttp(response);
                console.log(response);
            });
        })
            .catch(function (response) {
            _this.status = _this.ERROR;
            _this.erroAviso = true;
            _this.mensagemDialog = _this.erroHttp(response);
            console.log(response);
        });
    };
    CriaSalasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cria-salas',
            template: __webpack_require__(/*! ./cria-salas.component.html */ "./src/app/salas/cria-salas/cria-salas.component.html"),
            styles: [__webpack_require__(/*! ./cria-salas.component.less */ "./src/app/salas/cria-salas/cria-salas.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_salas_service__WEBPACK_IMPORTED_MODULE_3__["SalasService"], src_app_faculdade_service__WEBPACK_IMPORTED_MODULE_6__["FaculdadeService"], src_app_cursos_service__WEBPACK_IMPORTED_MODULE_8__["CursosService"], src_app_periodo_letivos_service__WEBPACK_IMPORTED_MODULE_12__["PeriodoLetivosService"],
            src_app_usuario_service__WEBPACK_IMPORTED_MODULE_11__["UsuarioService"], src_app_pl_disciplinas_academicos_service__WEBPACK_IMPORTED_MODULE_10__["PlDisciplinasAcademicosService"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"]])
    ], CriaSalasComponent);
    return CriaSalasComponent;
}(src_app_abstract_component__WEBPACK_IMPORTED_MODULE_2__["AbstractComponent"]));



/***/ }),

/***/ "./src/app/salas/sala.ts":
/*!*******************************!*\
  !*** ./src/app/salas/sala.ts ***!
  \*******************************/
/*! exports provided: Sala */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sala", function() { return Sala; });
/* harmony import */ var _status__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../status */ "./src/app/status.ts");

var Sala = /** @class */ (function () {
    function Sala(id, curso, email, mensagem, nome_professor, nome_sala, modalidade, objetivo_sala, observacao, senha_aluno, status, estudantes, periodo_letivo_id, macro_id, sala_moodle_id, created_at) {
        this.periodo_letivo_id = "";
        this.carga_horaria_total_disciplina = "";
        this.turma_nome = "";
        this.avaliacao = "";
        this.turma_id = "";
        this.periodo_letivo_key = "";
        this.curso_key = "";
        this.disciplina_key = "";
        this.solicitante_id = "";
        this.macro_id = 0;
        this.sala_moodle_id = 0;
        this.lote_salas_id = 0;
        this.username_professor = "";
        this.cpf_professor = "";
        this.id = id;
        this.curso = curso;
        this.email = email;
        this.mensagem = mensagem;
        this.nome_professor = nome_professor;
        this.nome_sala = nome_sala;
        this.modalidade = modalidade;
        this.objetivo_sala = objetivo_sala;
        this.observacao = observacao;
        this.senha_aluno = senha_aluno;
        this.status = status;
        this.estudantes = estudantes;
        this.periodo_letivo_id = periodo_letivo_id ? periodo_letivo_id : "";
        this.macro_id = macro_id;
        this.sala_moodle_id = sala_moodle_id;
        this.created_at = created_at;
    }
    Sala.generateList = function (list) {
        var _this = this;
        var salaList = [];
        list.forEach(function (salaAny) {
            var sala = _this.generateSala(salaAny);
            salaList.push(sala);
        });
        return salaList;
    };
    ;
    Sala.generateListPlus = function (list, cursosIndex) {
        var _this = this;
        var salaList = [];
        list.forEach(function (salaAny) {
            salaAny.curso = cursosIndex.get(salaAny.curso_id);
            var sala = _this.generateSala(salaAny);
            salaList.push(sala);
        });
        return salaList;
    };
    ;
    Sala.generateSala = function (salaAny) {
        var sala = new Sala(salaAny.id, salaAny.curso, salaAny.email, salaAny.mensagem, salaAny.nome_professor, salaAny.nome_sala, salaAny.modalidade, salaAny.objetivo_sala, salaAny.observacao, salaAny.senha_aluno, _status__WEBPACK_IMPORTED_MODULE_0__["Status"].generateStatus(salaAny.status), salaAny.estudantes, salaAny.periodo_letivo_id, salaAny.macro_id, salaAny.sala_moodle_id, new Date(salaAny.created_at + " GMT"));
        sala.carga_horaria_total_disciplina = salaAny.carga_horaria_total_disciplina ? salaAny.carga_horaria_total_disciplina : "";
        sala.turma_nome = salaAny.turma_nome ? salaAny.turma_nome : "";
        sala.avaliacao = salaAny.avaliacao ? salaAny.avaliacao : "";
        sala.turma_id = salaAny.turma_id ? salaAny.turma_id : "";
        sala.periodo_letivo_key = salaAny.periodo_letivo_key ? salaAny.periodo_letivo_key : "";
        sala.curso_key = salaAny.curso_key ? salaAny.curso_key : "";
        sala.disciplina_key = salaAny.disciplina_key ? salaAny.disciplina_key : "";
        return sala;
    };
    Sala.geraNovaSala = function () {
        return new Sala(0, "", "", "", "", "", "", "", "", "", _status__WEBPACK_IMPORTED_MODULE_0__["Status"].novoStatus(), "", "", 0, 0, new Date());
    };
    Sala.prototype.clone = function () {
        return Sala.generateSala(this);
    };
    return Sala;
}());



/***/ }),

/***/ "./src/app/salas/salas.component.html":
/*!********************************************!*\
  !*** ./src/app/salas/salas.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-14\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n                Lista de Solicitações de Criação de Salas\n            </div>\n            <div>\n                <table class=\"table\" style=\"margin-bottom: 0px\">\n                    <caption>\n                        <table>\n                            <tr>\n                                <td class=\"col-md-1\"><label for=\"filtro\" class=\"col-md-1 control-label\">Buscar:</label></td>\n                                <td class=\"col-md-8\"><input id=\"filtro\" type=\"text\" class=\"form-control\" name=\"filtro\" [(ngModel)]=\"criteria\" required autofocus></td>\n                            </tr>\n                        </table>\n                    </caption>\n                    <colgroup>\n                        <col width=\"40px\"/>\n                        <col width=\"25%\"/>\n                        <col width=\"70px\"/>\n                        <col width=\"25%\"/>\n                        <col width=\"25%\"/>\n                        <col width=\"25%\"/>\n                        <col width=\"125px\"/>\n                        <col width=\"100px\"/>\n                        <col width=\"32px\"/>\n                        <col width=\"32px\"/>\n                        <col width=\"32px\"/>\n                        <col width=\"32px\"/>\n                        <col width=\"32px\"/>\n                        <col width=\"36px\"/>\n                        <col width=\"15px\"/>\n                    </colgroup>\n                    <thead class=\"thead-light\">\n                        <tr>\n                            <th style=\"text-align: center\">ID</th>\n                            <th class=\"celula-trunca-texto\" title=\"PROFESSOR\">PROFESSOR</th>\n                            <th class=\"celula-trunca-texto\" title=\"FACULDADE\">FAC.</th>\n                            <th class=\"celula-trunca-texto\" title=\"CURSO\">CURSO</th>\n                            <th class=\"celula-trunca-texto\" title=\"SALA\">SALA</th>\n                            <th class=\"celula-trunca-texto\" title=\"OBSERVACAO\">OBSERVACAO</th>\n                            <th>DATA/HORA</th>\n                            <th style=\"text-align: center\">STATUS</th>\n                            <th colspan=\"6\" style=\"text-align: center\">AÇÕES</th>\n                            <th></th>\n                        </tr>\n                    </thead>\n                </table>\n            </div>\n            <cdk-virtual-scroll-viewport  redimensionar=\"256\" itemSize=\"40\" style=\"width: 100%;\"> \n                <table class=\"table\">\n                    <colgroup>\n                        <col width=\"40px\"/>\n                        <col width=\"25%\"/>\n                        <col width=\"70px\"/>\n                        <col width=\"25%\"/>\n                        <col width=\"25%\"/>\n                        <col width=\"25%\"/>\n                        <col width=\"125px\"/>\n                        <col width=\"110px\"/>\n                        <col width=\"32px\"/>\n                        <col width=\"32px\"/>\n                        <col width=\"32px\"/>\n                        <col width=\"32px\"/>\n                        <col width=\"32px\"/>\n                        <col width=\"36px\"/>\n                    </colgroup>\n                    <tbody>  \n                        <tr *cdkVirtualFor=\"let sala of (salas | filtroSalas:criteria)\">\n                            <td>{{sala.id | zeros:4}}</td>\n                            <td class=\"celula-trunca-texto\" title=\"{{sala.nome_professor}}\">{{sala.nome_professor}}</td>\n                            <td title=\"{{sala.curso?.faculdade?.sigla}}\">{{sala.curso?.faculdade?.sigla}}</td>\n                            <td class=\"celula-trunca-texto\" title=\"{{sala.curso?.nome}}\">{{sala.curso?.nome}}</td>\n                            <td class=\"celula-trunca-texto\" title=\"{{sala.nome_sala}}\">{{sala.nome_sala}}</td>\n                            <td class=\"celula-trunca-texto\" title=\"{{sala.observacao}}\">{{sala.observacao}}</td>\n                            <td>{{sala.created_at | formatadorData:true}}</td>\n                            <td class=\"celula-status {{sala.status.chave}}\">{{sala.status.descricao}}</td>\n                            <td >\n                                <a title=\"Gerar Backup\" style=\"text-align: center; margin-left: -2px;\" type=\"button\" class=\"btn btn-primary botao-reduzido\" href=\"/exec/{{sala.id}}\">\n                                    <span class=\"glyphicon glyphicon-save\"></span>\n                                </a>\n                            </td>\n                            <td>\n                                <button style=\"text-align: center; margin-left: -2px;\" title=\"Exportar Para Moodle\" type=\"button\" class=\"btn btn-primary botao-reduzido\"  data-toggle=\"modal\" data-target=\"#dialogRestore\" (click)=\"preparaRestauracaoAutomatica(sala)\">\n                                    <span class=\"glyphicon glyphicon-export\"></span>\n                                </button>\n                            </td>\n                            <td>\n                                <button style=\"text-align: center; margin-left: -2px;\" title=\"{{sala.status.chave == STATUS_INICIAL_PADRAO ? 'Editar' : 'Vizualizar'}}\" type=\"button\" class=\"btn btn-info botao-reduzido\"  data-toggle=\"modal\" data-target=\"#dialogSalas\" (click)=\"editarVisualizar(sala, false)\">\n                                    <span class=\"glyphicon glyphicon-{{sala.status.chave == STATUS_INICIAL_PADRAO ? 'edit' : 'search'}}\"></span>\n                                </button>\n                            </td>\n                            <td>\n                                <button style=\"text-align: center; margin-left: -2px;\" title=\"Estudantes\" type=\"button\" class=\"btn btn-{{(sala.estudantes != null && sala.estudantes.length > 0 && sala.estudantes != '[]') ? 'info' : 'warning'}} botao-reduzido\"  data-toggle=\"modal\" data-target=\"#dialogMasterEstudantes\" (click)=\"editarVisualizar(sala, true)\">\n                                    <span class=\"glyphicon glyphicon-user\"></span>\n                                </button>\n                            </td>\n                            <td>\n                                <button style=\"text-align: center; margin-left: -2px;\" title=\"Demanda Concluída\" type=\"button\" class=\"btn btn-success botao-reduzido\" data-toggle=\"modal\" data-target=\"#dialogStatus\" (click)=\"preparaSetStatusSala(sala,true)\" [disabled]=\"sala.status.chave != STATUS_INICIAL_PADRAO\">\n                                    <span class=\"glyphicon glyphicon-ok\"></span>\n                                </button>\n                            </td>\n                            <td>\n                                <button style=\"text-align: center; margin-left: -2px;\" title=\"Rejeitar Demanda\" type=\"button\" class=\"btn btn-danger botao-reduzido\" data-toggle=\"modal\" data-target=\"#dialogStatus\" (click)=\"preparaSetStatusSala(sala,false)\"  [disabled]=\"sala.status.chave != STATUS_INICIAL_PADRAO\">\n                                    <span class=\"glyphicon glyphicon-remove\"></span>\n                                </button>\n                            </td>\n                        </tr>\n                    </tbody>\n                    <tfoot class=\"status-tabela\">\n                        <tr *ngIf=\"status == LOADING\"><td colspan=\"14\"><i>Carregando Salas...</i></td></tr>\n                        <tr *ngIf=\"salas != null && (salas | filtroSalas:criteria).length == 0 && status == COMPLETE\"><td colspan=\"14\"><i>Não Há Salas para serem listadas</i></td></tr>\n                        <tr *ngIf=\"status == ERROR\"><td class=\"erro\" colspan=\"14\"><i>Falha na obtenção de Salas!</i></td></tr>\n                    </tfoot>\n                </table>\n            </cdk-virtual-scroll-viewport>\n        </div>\n    </div>\n</div>\n    \n<!-- Modal -->\n<div class=\"modal fade\" id=\"dialogSalas\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialogSalasTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Sala #{{sala.id | zeros:4}}</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\" redimensionar=\"285\" style=\"overflow-y: scroll;\">\n                <fieldset>\n                    <form id=\"salaForm\" class=\"form-group\" style=\"max-width: 500px;\">\n                        <div class=\"alert alert-info\" [ngClass]=\"{'alert-info': !erroAviso, 'alert-danger': erroAviso}\" *ngIf=\"aviso\">\n                            <strong *ngIf=\"!erroAviso  && sala.status.chave == STATUS_INICIAL_PADRAO\">Informação!</strong><strong *ngIf=\"erroAviso && sala.status.chave == STATUS_INICIAL_PADRAO\">Falha!</strong> {{aviso}}\n                        </div>\n                        <label class=\"style1\">Nome completo: *</label><br>\n                        <input *ngIf=\"usuarios.length == 0\" class=\"form-control\" type=\"text\" name=\"nome_professor\" placeholder=\"Nome completo\" [(ngModel)]=\"sala.nome_professor\" size=\"60\" disabled>\n                        <ng-container *ngIf=\"usuarios.length > 0\">\n                            <p-autoComplete class=\"prime-autocomplete\" name=\"nome_professor\" [suggestions]=\"filteredUsuarios\" placeholder=\"Nome do Professor\" (onSelect)=\"selecionaUsuario($event)\"\n                            (completeMethod)=\"buscaUsuario($event)\" (onClear)=\"limpaUsuario($event)\" size=\"60\" [readonly]=\"!editavel\" [(ngModel)]=\"nome_professor_temp\" [required]=\"true\" [forceSelection]=\"true\"></p-autoComplete>\n                            <br>\n                        </ng-container><p></p>\n\n\n                        <label class=\"style1\">E-mail: *</label><br>\n                        <input class=\"form-control\" type=\"email\" name=\"email\" placeholder=\"Preferência institucional\" [(ngModel)]=\"sala.email\" size=\"60\" [readonly]=\"!editavel\"><p></p>\n                         \n                        <label class=\"style1\">Período Letivo: *</label><br>\n                        <select class=\"form-control\" name=\"periodo_letivo\"  [disabled]=\"!editavel\" [(ngModel)]=\"sala.periodo_letivo_id\" (change)=\"selecionaPeriodoLetivo()\" required>   \n                            <option hidden disabled selected value> -- Selecione -- </option>\n                            <ng-container *ngFor=\"let pl of periodoLetivos\">\n                                <option *ngIf=\"pl.ativo || sala.periodo_letivo_id == pl.id\" [value]=\"pl.id\">{{pl.nome + (pl.descricao ? \" (\" + pl.descricao + \")\" : \"\")}}</option>\n                            </ng-container>  \n                        </select><p></p>\n\n                        <label class=\"style1\">Faculdade: *</label><br>\n                        <select class=\"form-control\" name=\"faculdade\"  [disabled]=\"!editavel\" [(ngModel)]=\"faculdadeSelecionadaId\" (change)=\"selecionaFaculdade()\" required>   \n                            <option hidden disabled selected value> -- Selecione -- </option>      \n                            <ng-container *ngFor=\"let f of faculdades\">\n                                <option *ngIf=\"f.ativo || faculdadeSelecionadaId == f.id\" [value]=\"f.id\">{{f.sigla}}</option>\n                            </ng-container>        \n                        </select><p></p>\n        \n                        <label class=\"style1\">Curso: *</label><br>\n                        <ng-container *ngIf=\"!faculdadeSelecionadaId\">\n                            <select class=\"form-control\" name=\"curso\"  disabled >   \n                                <option hidden disabled selected value> -- </option>\n                            </select>\n                        </ng-container>\n                        <ng-container *ngIf=\"faculdadeSelecionadaId\">\n                            <select class=\"form-control\" name=\"curso\"  [disabled]=\"!editavel\" [(ngModel)]=\"sala.curso\"  (change)=\"selecionaCurso()\" required>   \n                                <option hidden disabled selected value> -- Selecione -- </option>    \n                                <ng-container *ngFor=\"let c of faculdadeTemp.cursos\">\n                                    <option  *ngIf=\"c.ativo || sala.curso == c.id\" [value]=\"c.id\">{{c.nome}}</option>\n                                </ng-container>\n                            </select>\n                        </ng-container><p></p>\n\n                        <label class=\"style1\">Nome da Disciplina: *</label><br>\n                        <p-autoComplete class=\"prime-autocomplete\" name=\"nome_sala\" [suggestions]=\"filteredDisciplina\" placeholder=\"Ex.: Algoritmos\" (onSelect)=\"selecionaDisciplina($event)\"\n                        (completeMethod)=\"buscaDisciplina($event)\" [readonly]=\"!editavel || sala.curso == ''\" [(ngModel)]=\"sala.nome_sala\" [required]=\"true\"></p-autoComplete>\n                        <br><p></p>\n\n                        <label class=\"style1\">Modalidade da Disciplina: *</label><br>\n                        <select class=\"form-control\" name=\"modalidade\" [(ngModel)]=\"sala.modalidade\" [disabled]=\"!editavel\">                         \n                            <option *ngFor=\"let m of modalidades\" value=\"{{m.sigla}}\">{{m.descricao}}</option>\n                        </select><p></p>\n\n                        <label class=\"style1\">Objetivo da Disciplina: *</label><br>\n                        <select class=\"form-control\" name=\"objetivo_sala\" [(ngModel)]=\"sala.objetivo_sala\" [disabled]=\"!editavel\">                         \n                            <option *ngFor=\"let o of objetivosSalas\" value=\"{{o.sigla}}\">{{o.descricao}}</option>\n                        </select><p></p>\n\n                        <label class=\"style1\">Chave de Inscrição para Estudantes acessarem a sala:</label><br>\n                        <input class=\"form-control\" type=\"text\" name=\"senha_aluno\" placeholder=\"\" [(ngModel)]=\"sala.senha_aluno\" size=\"60\" [readonly]=\"!editavel\"><p></p>\n\n                        <label class=\"style1\">Observações:</label><br>\n                        <textarea class=\"form-control\" name=\"observacao\" placeholder=\"Ex:. Utilizem o conteúdo da sala do ano passado: Link da sala\" [(ngModel)]=\"sala.observacao\" [readonly]=\"!editavel\"></textarea><p></p>\n                        \n                        <button *ngIf=\"!mostraMais\" style=\"width: 100%;\" type=\"button\" (click)=\"mostraMais = true\">˅ ˅ Mais ˅ ˅ </button>\n                        <ng-container *ngIf=\"mostraMais\">\n                            <hr style=\"border-color: #ccc;\">\n                            <label>Turma: </label><br>\n                            <label class=\"form-control form-control-read\">{{sala.turma_nome}} {{sala.turma_id ? '(id: '+sala.turma_id+')' : ''}}</label><p></p>\n                            <label>Carga Horária Disciplina: </label><br>\n                            <label class=\"form-control form-control-read\">{{sala.carga_horaria_total_disciplina}}</label><p></p>\n                            <label>Tipo de Avaliação: </label><br>\n                            <label class=\"form-control form-control-read\">{{sala.avaliacao}}</label><p></p>\n                            <label>Chave da Disciplina: </label><br>\n                            <label class=\"form-control form-control-read\">{{sala.disciplina_key}}</label><p></p>\n                            <button type=\"button\"(click)=\"mostraMais = false\" style=\"width: 100%;\">˄ ˄ Menos ˄ ˄ </button>\n                        </ng-container>\n                    </form>\n                </fieldset>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-primary botao-barra\" (click)=\"atualizarSala()\" [disabled]=\"!editavel\">Atualizar</button>\n                <button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\">Fechar</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"dialogMasterEstudantes\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialogMasterEstudantesTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Estudantes na Sala #{{sala.id | zeros:4}}</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\" redimensionar=\"285\" style=\"overflow-y: scroll;\">\n                <fieldset>\n                    <form id=\"salaFormEstudantes\" class=\"form-group\" style=\"max-width: 500px;\">\n                        <div class=\"alert alert-info\" [ngClass]=\"{'alert-info': !erroAviso, 'alert-danger': erroAviso}\" *ngIf=\"aviso\">\n                            <strong *ngIf=\"!erroAviso  && sala.status.chave == STATUS_INICIAL_PADRAO\">Informação!</strong><strong *ngIf=\"erroAviso && sala.status.chave == STATUS_INICIAL_PADRAO\">Falha!</strong> {{aviso}}\n                        </div>\n                        \n                        <label class=\"style1\"><span *ngIf=\"estudantes.length == 0\">Carregar </span> Estudantes:</label> \n                        <button *ngIf=\"estudantes.length == 0\" data-toggle=\"modal\" data-target=\"#dialogAjudaEstudantes\" \n                         class=\"btn btn-info botao-tooltip\"><span class=\"glyphicon glyphicon-info-sign\"></span></button><br>\n                        <table class=\"table\">\n                            <caption *ngIf=\"estudantes.length == 0\">\n                                <div  class=\"custom-file col-md-3\">\n                                    <input type=\"file\" class=\"custom-file-input\" id=\"customFile\" (change)=\"lerAlunosCSV($event)\"  [disabled]=\"!editavel\">\n                                    <label class=\"custom-file-label btn btn-primary\" [ngClass]=\"{'disabled': !editavel}\" for=\"customFile\">Arquivo CSV</label>\n                                </div>\n                                <div class=\" col-md-4\">\n                                    <button class=\"btn btn-primary\" style=\"width: 125px; margin-left: 48px;\"  data-toggle=\"modal\" data-target=\"#dialogBuscaEstudantes\" (click)=selecionaCurso(false)>Base de Dados</button>\n                                </div>\n                                <div class=\" col-md-4\" style=\"margin-left: 41px; padding-right: 0px;\">\n                                    <button class=\"btn btn-primary\" style=\"width: 125px; float: right;\"  data-toggle=\"modal\" data-target=\"#dialogBuscaEstudantesSigecad\" (click)=selecionaCurso(false)>SIGECAD</button>\n                                </div>\n                            </caption>\n                            <colgroup>\n                                <col width=\"33%\"/>\n                                <col width=\"33%\"/>\n                                <col width=\"34%\"/>\n                                <col width=\"36px\"/>\n                                <col width=\"17px\"/>\n                            </colgroup>\n                            <thead class=\"thead-light\">\n                                <tr>\n                                    <th>USER</th>\n                                    <th>EMAIL</th>\n                                    <th>NOME</th>\n                                    <th>\n                                        <button style=\"text-align: center;\" title=\"Limpar Todos\" type=\"button\" class=\"btn btn-danger botao-reduzido\" (click)=\"limparEstudantes()\"  [disabled]=\"!editavel\">\n                                            <span class=\"glyphicon glyphicon-trash\"></span>\n                                        </button>\n                                    </th>\n                                    <th></th>\n                                </tr>\n                            </thead>\n                        </table>\n                        <div style=\"overflow-y: scroll; max-height: 160px;\">\n                            <table class=\"table\">\n                                <colgroup>\n                                    <col width=\"33%\"/>\n                                    <col width=\"33%\"/>\n                                    <col width=\"34%\"/>\n                                    <col width=\"36px\"/>\n                                </colgroup>\n                                <tbody>\n                                    <tr *ngFor=\"let e of estudantes\">\n                                        <td class=\"celula-trunca-texto\" title=\"{{e.username}}\">{{e.username}}</td>\n                                        <td class=\"celula-trunca-texto\" title=\"{{e.email}}\">{{e.email}}</td>\n                                        <td class=\"celula-trunca-texto\" title=\"{{e.fullname}}\">{{e.fullname}}</td>\n                                        <td>\n                                            <button style=\"text-align: center;\" title=\"Remover\" type=\"button\" class=\"btn btn-danger botao-reduzido\" (click)=\"removerEstudante(e)\"  [disabled]=\"!editavel\">\n                                                <span class=\"glyphicon glyphicon-remove\"></span>\n                                            </button>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td colspan=\"4\" style=\"text-align: center;\">\n                                            <button style=\"text-align: center;\" title=\"Adicionar\" type=\"button\" data-toggle=\"modal\" data-target=\"#dialogEstudante\" class=\"btn btn-primary botao-reduzido\" [disabled]=\"!editavel\">\n                                                <span class=\"glyphicon glyphicon-plus\"></span>\n                                            </button>\n                                        </td>\n                                    </tr>\n                                    \n                                </tbody>\n                            </table>\n                        </div>\n                    </form>\n                </fieldset>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-primary botao-barra\" (click)=\"atualizarSala()\" [disabled]=\"!editavel\">Atualizar</button>\n                <button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\">Fechar</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"dialogEstudante\" tabindex=\"-1\" role=\"dialog\" data-backdrop=\"static\" aria-labelledby=\"dialogEstudanteTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Estudante</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\" style=\"width: 350px;\">\n                <label class=\"style1\">Usuário</label><br>\n                <input class=\"form-control\" type=\"text\" name=\"username\" placeholder=\"11122233344\" [(ngModel)]=\"estudanteTemp.username\" size=\"60\"><p></p>\n\n                <label class=\"style1\">E-mail: *</label><br>\n                <input class=\"form-control\" type=\"email\" name=\"email\" placeholder=\"user@email.com\" [(ngModel)]=\"estudanteTemp.email\" size=\"60\"><p></p>\n\n                <label class=\"style1\">Nome Completo: *</label><br>\n                <input class=\"form-control\" type=\"text\" name=\"fullname\" placeholder=\"Fulano da Silva\" [(ngModel)]=\"estudanteTemp.fullname\" size=\"60\"><p></p>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-primary botao-barra\" (click)=\"adicionarEstudante()\">Adicionar</button>\n                <button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\">Fechar</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"dialogRestore\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialogRestoreTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Restauração de Backup Automática</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\" style=\"width: 600px;\">\n                <div class=\"alert alert-info\" [ngClass]=\"{'alert-info': !erroAviso, 'alert-danger': erroAviso}\" *ngIf=\"aviso\">\n                    <strong *ngIf=\"!erroAviso  && sala.status.chave == STATUS_INICIAL_PADRAO\">Informação!</strong><strong *ngIf=\"erroAviso && sala.status.chave == STATUS_INICIAL_PADRAO\">Falha!</strong> {{aviso}}\n                </div>\n                <label class=\"style1\">Course ID Moodle (ID da Sala):</label>\n                <input class=\"form-control\" style=\"width: 80px; display: initial; margin-left: 10px;\" type=\"number\" name=\"courseid\" placeholder=\"courseid\" [(ngModel)]=\"sala.sala_moodle_id\" size=\"10\"><p></p>\n                <label class=\"style1\">Macro:</label>\n                <select class=\"form-control\" name=\"macro-padrao\" style=\"width: 200px; display: initial; margin-left: 10px;\" [(ngModel)]=\"sala.macro_id\" [disabled]=\"!editavel\" required>   \n                    <option hidden disabled [value]=\"0\" selected> -- Selecione -- </option>  \n                    <option *ngFor=\"let m of macros\" [value]=\"m.id\">{{m.nome}}</option>       \n                </select><br>\n                <hr style=\"border-color: #ccc;\">\n                <div redimensionar=\"300\" style=\"max-height: 250px;\" id=\"saidaRestore\"></div>\n            </div>\n            <div class=\"modal-footer\">\n                <button *ngIf=\"sala.sala_moodle_id\" type=\"button\" class=\"btn btn-primary\" style=\"width: 170px; float: left;\" (click)=\"exportarEstudantesMoodle(sala)\" [disabled]=\"!editavel || blockAutoRestore\">Exportar Estudantes</button>\n                <span *ngIf=\"!sala.sala_moodle_id\" style=\"float: left;\">\n                    <label class=\"style1\">Importar de:</label>\n                    <input class=\"form-control\" style=\"width: 80px; display: initial; margin: 0px 3px;\" type=\"number\" name=\"course-import-id\" placeholder=\"import id\" [(ngModel)]=\"courseImportId\" size=\"10\">\n                    <button type=\"button\" class=\"btn btn-primary\" style=\"width: 170px;vertical-align: top;\" (click)=\"executarRestauracaoAutomatica()\" [disabled]=\"!editavel || blockAutoRestore\">Executar Restauração</button>\n                </span>\n                <button type=\"button\" class=\"btn btn-primary botao-barra\" style=\"vertical-align: top;\" (click)=\"atualizarSala()\" [disabled]=\"!editavel\">Atualizar</button>\n                <button type=\"button\" class=\"btn btn-secondary botao-barra\" style=\"vertical-align: top;\" data-dismiss=\"modal\" [disabled]=\"!editavel\">Fechar</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"dialogStatus\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialogStatusTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Atualizar Status: {{statusTemp}}</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\" style=\"width: 350px;\">\n                <label class=\"style1\">{{tituloMensagem}}</label><br>\n                <textarea class=\"form-control\" [(ngModel)]=\"mensagem\" [readonly]=\"!editavel\"></textarea><p></p>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-primary botao-barra\" (click)=\"statusSala()\" [disabled]=\"!editavel\">Ok</button>\n                <button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\">Fechar</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"dialogBuscaEstudantes\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialogBuscaEstudantesTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Buscar Estudantes</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\" style=\"width: 400px;\">\n                <label for=\"diciplinaFiltro\" class=\"control-label\">Selecione uma Disciplina para Importar Estudantes:</label>\n                <ng-container *ngIf=\"!sala.curso\">\n                    <select class=\"form-control\" id=\"diciplinaFiltro\" style=\"font-style: italic;\" name=\"disciplinaFiltro\"  disabled >   \n                        <option hidden disabled selected value> &lt;&lt; Selecione um Curso Primeiro... &gt;&gt; </option>\n                    </select>\n                </ng-container>\n                <ng-container *ngIf=\"sala.curso && plDisciplinasAcademicosList.length == 0\">\n                    <select class=\"form-control\" id=\"diciplinaFiltro\" name=\"diciplinaFiltro\"  disabled >   \n                        <option hidden disabled selected value> -- Não há Disciplinas para serem selecionadas -- </option>\n                    </select>\n                </ng-container>\n                <ng-container *ngIf=\"sala.curso && plDisciplinasAcademicosList.length > 0\">\n                    <select name=\"diciplinaFiltro\" id=\"diciplinaFiltro\" class=\"form-control\" [(ngModel)]=\"disciplinaSelecionadaId\" [disabled]=\"!editavel\">\n                        <option hidden disabled selected value> -- Selecione -- </option>\n                        <option *ngFor=\"let d of plDisciplinasAcademicosList\" [value]=\"d.disciplina\">{{d.disciplina}}</option>\n                    </select>\n                </ng-container>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-primary botao-barra\" (click)=\"carregarEstudantes()\" [disabled]=\"!editavel || !disciplinaSelecionadaId\">Ok</button>\n                <button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\">Fechar</button>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"modal fade\" id=\"dialogBuscaEstudantesSigecad\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialogBuscaEstudantesSigecadTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Buscar Estudantes no SIGECAD</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\" style=\"width: 400px;\">\n                <label for=\"diciplinaFiltroSigecad\" class=\"control-label\">Selecione uma Disciplina para Importar Estudantes:</label>\n                <ng-container *ngIf=\"!sala.curso\">\n                    <select class=\"form-control\" id=\"diciplinaFiltroSigecad\" style=\"font-style: italic;\" name=\"disciplinaFiltroSigecad\"  disabled >   \n                        <option hidden disabled selected value> &lt;&lt; Selecione um Curso Primeiro... &gt;&gt; </option>\n                    </select>\n                </ng-container>\n                <ng-container *ngIf=\"sala.curso && plDisciplinasAcademicosList.length == 0\">\n                    <select class=\"form-control\" id=\"diciplinaFiltroSigecad\" name=\"diciplinaFiltroSigecad\"  disabled >   \n                        <option hidden disabled selected value> -- Não há Disciplinas para serem selecionadas -- </option>\n                    </select>\n                </ng-container>\n                <ng-container *ngIf=\"sala.curso && plDisciplinasAcademicosList.length > 0\">\n                    <select name=\"diciplinaFiltroSigecad\" id=\"diciplinaFiltroSigecad\" class=\"form-control\" [(ngModel)]=\"disciplinaSelecionadaId\" [disabled]=\"!editavel\">\n                        <option hidden disabled selected value> -- Selecione -- </option>\n                        <option *ngFor=\"let d of plDisciplinasAcademicosList\" [value]=\"d.disciplina\">{{d.disciplina}}</option>\n                    </select>\n                </ng-container>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-primary botao-barra\" (click)=\"carregarEstudantesSigecad()\" [disabled]=\"!editavel || !disciplinaSelecionadaId\">Ok</button>\n                <button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\">Fechar</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"dialogAjudaEstudantes\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialogAjudaEstudantesTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\" style=\"width: 600px;\">\n                <b>Selecionar um Arquivo CSV: </b><br>\n                importa um arquivo CSV que contêm os estudantes desta disciplina; o formato do arquivo deve seguir o seguinte padrão:<br>\n                <pre style=\"font-size: 12px;\">\nusername,email,fullname\n11122233344,fulano.silva111@academico.ufgd.edu.br,Fulano da Silva\nBeltranoOliveira,BeltranoOliveira@ufgd.edu.br,Beltrano dos Santos Oliveira</pre>\n                <br>\n                <b>Carregar da Base de Dados: </b><br>\n                Importa os estudantes para esta sala de alguma disciplina que há cadastrada no banco de dados<br>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\">Fechar</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/salas/salas.component.less":
/*!********************************************!*\
  !*** ./src/app/salas/salas.component.less ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhbGFzL3NhbGFzLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/salas/salas.component.ts":
/*!******************************************!*\
  !*** ./src/app/salas/salas.component.ts ***!
  \******************************************/
/*! exports provided: SalasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalasComponent", function() { return SalasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _salas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../salas.service */ "./src/app/salas.service.ts");
/* harmony import */ var _sala__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sala */ "./src/app/salas/sala.ts");
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../abstract-component */ "./src/app/abstract-component.ts");
/* harmony import */ var _dados_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dados.service */ "./src/app/dados.service.ts");
/* harmony import */ var _faculdade_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../faculdade.service */ "./src/app/faculdade.service.ts");
/* harmony import */ var _faculdades_faculdade__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../faculdades/faculdade */ "./src/app/faculdades/faculdade.ts");
/* harmony import */ var _pl_disciplinas_academicos_estudante__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pl-disciplinas-academicos/estudante */ "./src/app/pl-disciplinas-academicos/estudante.ts");
/* harmony import */ var _pl_disciplinas_academicos_pl_disciplinas_academicos__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pl-disciplinas-academicos/pl-disciplinas-academicos */ "./src/app/pl-disciplinas-academicos/pl-disciplinas-academicos.ts");
/* harmony import */ var _usuario_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../usuario.service */ "./src/app/usuario.service.ts");
/* harmony import */ var _pl_disciplinas_academicos_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pl-disciplinas-academicos.service */ "./src/app/pl-disciplinas-academicos.service.ts");
/* harmony import */ var _periodo_letivos_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../periodo-letivos.service */ "./src/app/periodo-letivos.service.ts");
/* harmony import */ var _macro_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../macro.service */ "./src/app/macro.service.ts");
/* harmony import */ var _status__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../status */ "./src/app/status.ts");
/* harmony import */ var _cursos_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../cursos.service */ "./src/app/cursos.service.ts");
















var SalasComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SalasComponent, _super);
    function SalasComponent(salasService, dadosService, faculdadeService, periodoLetivoService, usuarioService, plDisciplinasAcademicosService, macroService, cursosService) {
        var _this_1 = _super.call(this) || this;
        _this_1.salasService = salasService;
        _this_1.dadosService = dadosService;
        _this_1.faculdadeService = faculdadeService;
        _this_1.periodoLetivoService = periodoLetivoService;
        _this_1.usuarioService = usuarioService;
        _this_1.plDisciplinasAcademicosService = plDisciplinasAcademicosService;
        _this_1.macroService = macroService;
        _this_1.cursosService = cursosService;
        _this_1.STATUS_INICIAL_PADRAO = _status__WEBPACK_IMPORTED_MODULE_14__["Status"].CHAVES.PROCESSO;
        _this_1.STATUS_CONCLUIDO_PADRAO = _status__WEBPACK_IMPORTED_MODULE_14__["Status"].CHAVES.CONCLUIDO;
        _this_1.STATUS_REJEITADO_PADRAO = _status__WEBPACK_IMPORTED_MODULE_14__["Status"].CHAVES.REJEITADO;
        _this_1.criteria = "";
        _this_1.sala = _sala__WEBPACK_IMPORTED_MODULE_3__["Sala"].geraNovaSala();
        _this_1.statusTemp = "";
        _this_1.tituloMensagem = "";
        _this_1.mensagem = "";
        _this_1.mostraMais = false;
        _this_1.estudantes = [];
        _this_1.estudanteTemp = new _pl_disciplinas_academicos_estudante__WEBPACK_IMPORTED_MODULE_8__["Estudante"]("", "", "", false);
        _this_1.saidaRestore = "";
        _this_1.blockAutoRestore = false;
        _this_1.faculdadeTemp = _faculdades_faculdade__WEBPACK_IMPORTED_MODULE_7__["Faculdade"].generateFaculdade();
        _this_1.faculdadeSelecionadaId = "";
        _this_1.disciplinaSelecionadaId = "";
        _this_1.plDisciplinasAcademicosTemp = _pl_disciplinas_academicos_pl_disciplinas_academicos__WEBPACK_IMPORTED_MODULE_9__["PlDisciplinasAcademicos"].generatePlDisciplinasAcademicos();
        _this_1.filteredDisciplina = [];
        _this_1.usuarios = [];
        _this_1.filteredUsuarios = [];
        _this_1.nome_professor_temp = "";
        _this_1.sufixoNomeSala = "";
        _this_1.courseImportId = "";
        _this_1.TOOLTIP = '<b>Selecionar um Arquivo CSV: </b><br>'
            + 'importa um arquivo CSV que contêm os estudantes desta disciplina; o formato do arquivo deve seguir o seguinte padrão:<br>'
            + '<table>'
            + '<tr><td>username,email,fullname</td></tr>'
            + '<tr><td>11122233344,fulano.silva111@academico.ufgd.edu.br,Fulano da Silva</td></tr>'
            + '<tr><td>BeltranoOliveira,BeltranoOliveira@ufgd.edu.br,Beltrano dos Santos Oliveira</td></tr>'
            + '</table>'
            + '<br><br>'
            + '<b>Carregar da Base de Dados: </b><br>'
            + 'Importa os estudantes para esta sala de alguma disciplina que há cadastrada no banco de dados<br>';
        return _this_1;
    }
    Object.defineProperty(SalasComponent.prototype, "salas", {
        get: function () {
            return this.salasService.salas;
        },
        set: function (salas) {
            this.salasService.salas = salas;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SalasComponent.prototype, "faculdades", {
        get: function () {
            return this.faculdadeService.faculdades;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SalasComponent.prototype, "macros", {
        get: function () {
            return this.macroService.macros;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SalasComponent.prototype, "modalidades", {
        get: function () {
            return this.salasService.modalidades;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SalasComponent.prototype, "objetivosSalas", {
        get: function () {
            return this.salasService.objetivosSalas;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SalasComponent.prototype, "plDisciplinasAcademicosList", {
        get: function () {
            return this.plDisciplinasAcademicosService.plDisciplinasAcademicos;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SalasComponent.prototype, "periodoLetivos", {
        get: function () {
            return this.periodoLetivoService.periodoLetivos;
        },
        enumerable: true,
        configurable: true
    });
    SalasComponent.prototype.eu = function () {
        return this;
    };
    SalasComponent.prototype.editarVisualizar = function (sala, outrosDados) {
        var _this_1 = this;
        if (outrosDados === void 0) { outrosDados = false; }
        this.sala = sala.clone();
        this.estudantes = _pl_disciplinas_academicos_estudante__WEBPACK_IMPORTED_MODULE_8__["Estudante"].converteJSONParaEstudantes(this.sala.estudantes);
        this.faculdadeTemp = this.sala.curso ? this.sala.curso.faculdade : _faculdades_faculdade__WEBPACK_IMPORTED_MODULE_7__["Faculdade"].generateFaculdade();
        this.faculdadeSelecionadaId = this.faculdadeTemp.id ? this.sala.curso.faculdade.id : "";
        this.disciplinaSelecionadaId = "";
        this.nome_professor_temp = this.sala.nome_professor;
        this.sala.curso = this.sala.curso.id;
        if (sala.status.chave == this.STATUS_INICIAL_PADRAO) {
            this.aviso = "";
            this.erroAviso = false;
            //window.location.href = '/salas/' + sala.id + '/edit';
        }
        else {
            this.aviso = this.sala.mensagem;
            this.erroAviso = sala.status.chave == this.STATUS_REJEITADO_PADRAO;
        }
        this.editavel = false;
        this.mostraMais = false;
        this.plDisciplinasAcademicosService.getPlDisciplinasAcademicos(this.sala.periodo_letivo_id, this.sala.curso)
            .then(function (r) {
            var plda = _this_1.plDisciplinasAcademicosService.plDisciplinasAcademicosNameIndex.get(_this_1.sala.nome_sala);
            if (plda)
                _this_1.disciplinaSelecionadaId = plda.disciplina;
            else
                _this_1.disciplinaSelecionadaId = "";
            _this_1.editavel = sala.status.chave == _this_1.STATUS_INICIAL_PADRAO || outrosDados;
        }).catch(function (response) {
            _this_1.erroAviso = true;
            _this_1.aviso = _this_1.erroHttp(response);
            alert(_this_1.aviso);
            _this_1.editavel = sala.status.chave == _this_1.STATUS_INICIAL_PADRAO;
        });
        //window.location.href = ('/salas/' + sala.id + '/' + (sala.status.chave == STATUS_INICIAL_PADRAO ? 'edit' : ''));
    };
    SalasComponent.prototype.preparaSetStatusSala = function (sala, isConcluido) {
        var _this_1 = this;
        this.sala = sala;
        this.editavel = true;
        this.mensagem = "";
        if (isConcluido) {
            this.salasService.getMensagemSala(sala)
                .then(function (response) {
                _this_1.mensagem = response;
            });
            this.statusTemp = this.STATUS_CONCLUIDO_PADRAO;
            this.tituloMensagem = "Informe o link da sala criada:";
        }
        else {
            this.statusTemp = this.STATUS_REJEITADO_PADRAO;
            this.tituloMensagem = "Informe uma justificativa para a rejeição:";
        }
    };
    SalasComponent.prototype.statusSala = function () {
        var _this_1 = this;
        this.editavel = false;
        this.salasService.statusSala(this.sala, this.statusTemp, this.mensagem)
            .then(function (response) {
            if (response) {
                alert(_this_1.erroHttp(response));
                return;
            }
            jQuery('#dialogStatus').modal('hide');
        })
            .catch(function (response) {
            alert(_this_1.erroHttp(response));
            jQuery('#dialogStatus').modal('hide');
        });
    };
    SalasComponent.prototype.atualizarSala = function () {
        var _this_1 = this;
        this.sala.estudantes = _pl_disciplinas_academicos_estudante__WEBPACK_IMPORTED_MODULE_8__["Estudante"].converteEstudantesParaJSON(this.estudantes);
        if (this.plDisciplinasAcademicosService.plDisciplinasAcademicosNameIndex.get(this.sala.nome_sala.replace(" " + this.sufixoNomeSala, "")))
            this.salasService.aplicarPlDisciplina(this.sala, this.plDisciplinasAcademicosService.plDisciplinasAcademicosNameIndex.get(this.sala.nome_sala.replace(" " + this.sufixoNomeSala, "")));
        else
            this.salasService.aplicarPlDisciplina(this.sala, _pl_disciplinas_academicos_pl_disciplinas_academicos__WEBPACK_IMPORTED_MODULE_9__["PlDisciplinasAcademicos"].generatePlDisciplinasAcademicos());
        this.salasService.atualizarSala(this.sala)
            .then(function (response) {
            if (response) {
                _this_1.erroAviso = true;
                _this_1.aviso = _this_1.erroHttp(response);
            }
            else {
                _this_1.erroAviso = false;
                _this_1.aviso = "Sala Atualizada!";
                jQuery('#dialogSalas').modal('hide');
            }
        }).catch(function (response) {
            _this_1.erroAviso = true;
            _this_1.aviso = _this_1.erroHttp(response);
        });
    };
    SalasComponent.prototype.adicionarEstudante = function () {
        if (this.estudanteTemp.isValid()) {
            this.estudantes.push(new _pl_disciplinas_academicos_estudante__WEBPACK_IMPORTED_MODULE_8__["Estudante"](this.estudanteTemp.username, this.estudanteTemp.email, this.estudanteTemp.fullname, this.estudanteTemp.is_professor));
            jQuery('#dialogEstudante').modal('hide');
            this.estudanteTemp = new _pl_disciplinas_academicos_estudante__WEBPACK_IMPORTED_MODULE_8__["Estudante"]("", "", "", false);
        }
        else
            alert("Usuário Inválido!");
    };
    SalasComponent.prototype.removerEstudante = function (estudante) {
        if (!confirm("Deseja remover este estudante"))
            return;
        var i = 0;
        for (; i < this.estudantes.length; i++) {
            if (estudante.equals(this.estudantes[i]))
                break;
        }
        if (i < this.estudantes.length) {
            this.estudantes.splice(i, 1);
        }
    };
    SalasComponent.prototype.limparEstudantes = function () {
        if (confirm("Deseja remover todos os estudantes"))
            this.estudantes = [];
    };
    SalasComponent.prototype.lerAlunosCSV = function (event) {
        var fileExtension = /.*\.csv/;
        var fileTobeRead = event.target.files[0];
        if (fileTobeRead.name.toLowerCase().match(fileExtension)) {
            var fileReader = new FileReader();
            var _this = this;
            fileReader.onload = function (e) {
                _this.estudantes = _pl_disciplinas_academicos_estudante__WEBPACK_IMPORTED_MODULE_8__["Estudante"].processaCSV(fileReader.result);
            };
            fileReader.readAsText(fileTobeRead);
        }
        else {
            alert("Por favor selecione arquivo csv");
        }
    };
    SalasComponent.prototype.carregarEstudantes = function () {
        var _this_1 = this;
        this.plDisciplinasAcademicosTemp = this.disciplinaSelecionadaId ? this.plDisciplinasAcademicosService.plDisciplinasAcademicosNameIndex.get(this.disciplinaSelecionadaId) : null;
        if (this.plDisciplinasAcademicosTemp && confirm("Confirmar carregamento de lista de Estudantes?")) {
            this.editavel = false;
            this.plDisciplinasAcademicosService.getEstudantes(this.plDisciplinasAcademicosTemp.id, true)
                .then(function (est) {
                _this_1.estudantes = est;
                _this_1.plDisciplinasAcademicosTemp.estudantes = est;
                _this_1.editavel = true;
                jQuery('#dialogBuscaEstudantes').modal('hide');
            }).catch(function (response) {
                _this_1.erroAviso = true;
                _this_1.aviso = _this_1.erroHttp(response);
                alert(_this_1.aviso);
                _this_1.editavel = true;
            });
        }
    };
    SalasComponent.prototype.carregarEstudantesSigecad = function () {
        var _this_1 = this;
        this.plDisciplinasAcademicosTemp = this.disciplinaSelecionadaId ? this.plDisciplinasAcademicosService.plDisciplinasAcademicosNameIndex.get(this.disciplinaSelecionadaId) : null;
        if (this.plDisciplinasAcademicosTemp && confirm("Confirmar carregamento de lista de Estudantes do SIGECAD?")) {
            this.editavel = false;
            //this.plDisciplinasAcademicosService.getAcademicosDisciplinasSigecad(this.plDisciplinasAcademicosTemp.disciplina_key,this.sala.periodo_letivo_id,this.plDisciplinasAcademicosTemp.turma_id, this.sala.id)
            this.plDisciplinasAcademicosService.getAcademicosDisciplinasSigecad(this.plDisciplinasAcademicosTemp.disciplina_key, this.sala.periodo_letivo_id, this.plDisciplinasAcademicosTemp.turma_id, this.plDisciplinasAcademicosTemp.turma_nome, this.sala.id)
                .then(function (est) {
                _this_1.estudantes = est;
                _this_1.plDisciplinasAcademicosTemp.estudantes = est;
                _this_1.editavel = true;
                jQuery('#dialogBuscaEstudantesSigecad').modal('hide');
            }).catch(function (response) {
                _this_1.erroAviso = true;
                _this_1.aviso = _this_1.erroHttp(response);
                alert(_this_1.aviso);
                _this_1.editavel = true;
            });
        }
    };
    SalasComponent.prototype.preparaRestauracaoAutomatica = function (sala) {
        this.editarVisualizar(sala, true);
        this.erroAviso = false;
        jQuery('#saidaRestore').html('<div  style="text-align: center"><b>...</b></div>');
        this.courseImportId = "";
        //this.editavel = true;
        this.blockAutoRestore = false;
    };
    SalasComponent.prototype.executarRestauracaoAutomatica = function () {
        var _this_1 = this;
        this.editavel = false;
        this.blockAutoRestore = true;
        this.salasService.executarRestauracaoAutomatica(this.sala, this.courseImportId)
            .then(function (response) {
            jQuery('#saidaRestore').html(response);
            _this_1.editavel = true;
        })
            .catch(function (response) {
            _this_1.erroAviso = true;
            _this_1.aviso = _this_1.erroHttp(response);
            _this_1.editavel = true;
            jQuery('#saidaRestore').html('<span style="color: red;">' + _this_1.aviso + "</span>");
        });
    };
    SalasComponent.prototype.exportarEstudantesMoodle = function (sala) {
        var _this_1 = this;
        if (!confirm('confirmar exportação de estudantes para sala?'))
            return;
        //jQuery('#dialogRestore').modal('show');
        //this.preparaRestauracaoAutomatica(sala);
        this.blockAutoRestore = true;
        this.salasService.exportarEstudantesMoodle(this.sala)
            .then(function (response) {
            jQuery('#saidaRestore').html(response);
            _this_1.editavel = true;
        })
            .catch(function (response) {
            _this_1.erroAviso = true;
            _this_1.aviso = _this_1.erroHttp(response);
            _this_1.editavel = true;
            jQuery('#saidaRestore').html('<span style="color: red;">' + _this_1.aviso + "</span>");
        });
    };
    SalasComponent.prototype.selecionaPeriodoLetivo = function () {
        if (this.sala.periodo_letivo_id) {
            this.sala.curso = "";
            this.sala.nome_sala = "";
        }
    };
    SalasComponent.prototype.selecionaFaculdade = function () {
        if (this.faculdadeSelecionadaId) {
            this.faculdadeTemp = this.faculdadeService.faculdadesIndex.get(this.faculdadeSelecionadaId);
            this.sala.curso = "";
            this.disciplinaSelecionadaId = "";
            this.sala.nome_sala = "";
        }
    };
    SalasComponent.prototype.selecionaCurso = function (resetSala) {
        var _this_1 = this;
        if (resetSala === void 0) { resetSala = true; }
        if (this.sala.curso) {
            this.plDisciplinasAcademicosTemp = _pl_disciplinas_academicos_pl_disciplinas_academicos__WEBPACK_IMPORTED_MODULE_9__["PlDisciplinasAcademicos"].generatePlDisciplinasAcademicos();
            //this.sala.nome_sala = "";
            this.disciplinaSelecionadaId = "";
            this.editavel = false;
            this.plDisciplinasAcademicosService.getPlDisciplinasAcademicos(this.sala.periodo_letivo_id, this.sala.curso)
                .then(function (r) {
                _this_1.editavel = true;
                _this_1.filteredDisciplina = _this_1.filterDisciplina("", _this_1.plDisciplinasAcademicosList);
                if (resetSala)
                    _this_1.sala.nome_sala = "";
                else {
                    var plda = _this_1.plDisciplinasAcademicosService.plDisciplinasAcademicosNameIndex.get(_this_1.sala.nome_sala.replace(" " + _this_1.sufixoNomeSala, ""));
                    if (plda)
                        _this_1.disciplinaSelecionadaId = plda.disciplina;
                }
            }).catch(function (response) {
                _this_1.erroAviso = true;
                _this_1.aviso = _this_1.erroHttp(response);
                alert(_this_1.aviso);
                _this_1.editavel = true;
            });
        }
    };
    SalasComponent.prototype.buscaDisciplina = function (event) {
        this.filteredDisciplina = this.filterDisciplina(event.query, this.plDisciplinasAcademicosList);
    };
    SalasComponent.prototype.buscaUsuario = function (event) {
        if (event.query.length > 1)
            this.filteredUsuarios = this.filterUsuario(event.query, this.usuarios);
        else
            this.filteredUsuarios = [];
    };
    SalasComponent.prototype.selecionaUsuario = function (event) {
        var id = event.substring(0, event.indexOf(' - '));
        console.log(id);
        this.sala.solicitante_id = id;
        this.nome_professor_temp = event.substring(event.indexOf(' - ') + 3);
    };
    SalasComponent.prototype.limpaUsuario = function (event) {
        this.sala.solicitante_id = "";
    };
    SalasComponent.prototype.filterDisciplina = function (query, plcs) {
        var filtered = [];
        for (var i = 0; i < plcs.length; i++) {
            var plc = plcs[i];
            if (plc.disciplina.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(plc.disciplina);
            }
        }
        return filtered;
    };
    SalasComponent.prototype.filterUsuario = function (query, users) {
        var filtered = [];
        for (var i = 0; i < users.length; i++) {
            var u = users[i];
            if (u.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(u.id + " - " + u.name);
            }
        }
        return filtered;
    };
    SalasComponent.prototype.selecionaDisciplina = function (value) {
        //console.log(this.plDisciplinasAcademicosService.plDisciplinasAcademicosNameIndex.get(value))
    };
    SalasComponent.prototype.ngOnInit = function () {
        var _this_1 = this;
        this.dadosService.statusList()
            .then(function (response) {
            _this_1.periodoLetivoService.getPeriodoLetivos()
                .then(function (response) {
                _this_1.usuarioService.listaUsuariosCriaSala()
                    .then(function (response) {
                    _this_1.usuarios = response;
                    _this_1.faculdadeService.listar()
                        .then(function (response) {
                        _this_1.macroService.getMacros()
                            .then(function (response) {
                            _this_1.salasService.getObjetivosSalas()
                                .then(function (response) {
                                _this_1.salasService.getModalidades()
                                    .then(function (response) {
                                    _this_1.salasService.listar()
                                        .then(function (response) {
                                        _this_1.status = _this_1.COMPLETE;
                                    })
                                        .catch(function (response) {
                                        _this_1.status = _this_1.ERROR;
                                        console.log(response);
                                    });
                                })
                                    .catch(function (response) {
                                    _this_1.status = _this_1.ERROR;
                                    console.log(response);
                                });
                            })
                                .catch(function (response) {
                                _this_1.status = _this_1.ERROR;
                                console.log(response);
                            });
                        })
                            .catch(function (response) {
                            _this_1.status = _this_1.ERROR;
                            console.log(response);
                        });
                    })
                        .catch(function (response) {
                        _this_1.status = _this_1.ERROR;
                        console.log(response);
                    });
                })
                    .catch(function (response) {
                    _this_1.status = _this_1.ERROR;
                    console.log(response);
                });
            })
                .catch(function (response) {
                _this_1.status = _this_1.ERROR;
                console.log(response);
            });
        })
            .catch(function (response) {
            _this_1.status = _this_1.ERROR;
            console.log(response);
        });
        this.salasService.getSufixoNomeSala()
            .then(function (response) {
            _this_1.sufixoNomeSala = response;
        })
            .catch(function (response) {
            console.log(response);
        });
        jQuery(".custom-file-input").on("change", function () {
            var fileName = jQuery(this).val().split("\\").pop();
            jQuery(this).siblings(".custom-file-label").addClass("selected").html(fileName);
        });
    };
    SalasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-salas',
            template: __webpack_require__(/*! ./salas.component.html */ "./src/app/salas/salas.component.html"),
            styles: [__webpack_require__(/*! ./salas.component.less */ "./src/app/salas/salas.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_salas_service__WEBPACK_IMPORTED_MODULE_2__["SalasService"], _dados_service__WEBPACK_IMPORTED_MODULE_5__["DadosService"], _faculdade_service__WEBPACK_IMPORTED_MODULE_6__["FaculdadeService"], _periodo_letivos_service__WEBPACK_IMPORTED_MODULE_12__["PeriodoLetivosService"],
            _usuario_service__WEBPACK_IMPORTED_MODULE_10__["UsuarioService"], _pl_disciplinas_academicos_service__WEBPACK_IMPORTED_MODULE_11__["PlDisciplinasAcademicosService"], _macro_service__WEBPACK_IMPORTED_MODULE_13__["MacroService"], _cursos_service__WEBPACK_IMPORTED_MODULE_15__["CursosService"]])
    ], SalasComponent);
    return SalasComponent;
}(_abstract_component__WEBPACK_IMPORTED_MODULE_4__["AbstractComponent"]));



/***/ }),

/***/ "./src/app/select-usuario/select-usuario.component.html":
/*!**************************************************************!*\
  !*** ./src/app/select-usuario/select-usuario.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<table class=\"table\">\n    <caption style=\"border: solid 1px #EEE;\">\n        <table>\n            <tr>\n                <td class=\"col-md-1\"><label for=\"filtro\" class=\"col-md-1 control-label\">Buscar:</label></td>\n                <td class=\"col-md-8\"><input id=\"filtro\" type=\"text\" class=\"form-control\" name=\"filtro\" [(ngModel)]=\"criteria\" autofocus></td>\n            </tr>\n        </table>\n    </caption>\n    <colgroup>\n        <col width=\"50px\"/>\n        <col width=\"100%\"/>\n        <col width=\"170px\"/>\n        <col width=\"54px\"/>\n    </colgroup>\n    <thead class=\"thead-light\">\n        <tr>\n            <th scope=\"col\">#</th>\n            <th scope=\"col\">Nome</th>\n            <th scope=\"col\">Login</th>\n            <th scope=\"col\"></th>\n        </tr>\n    </thead>\n</table>\n<div redimensionar=\"400\" style=\"overflow-y:scroll\">\n    <table class=\"table\">\n        <colgroup>\n            <col width=\"50px\"/>\n            <col width=\"100%\"/>\n            <col width=\"170px\"/>\n            <col width=\"39px\"/>\n        </colgroup>\n        <tbody>\n            <tr *ngFor=\"let u of (usuarios | filtroUsuario:criteria)\">\n                <td>{{u.id}}</td>\n                <td>{{u.name}}</td>\n                <td>{{u.email}}</td>\n                <td>\n                    <button type=\"button\" class=\"btn btn-primary botao-reduzido\" (click)=\"addGestor(u)\">\n                        <span class=\"glyphicon glyphicon-plus\"></span>\n                    </button>\n                </td>\n            </tr>\n        </tbody>\n        <tfoot class=\"status-tabela\">\n            <tr *ngIf=\"status == LOADING\"><td colspan=\"6\"><i>Carregando Usuários...</i></td></tr>\n            <tr *ngIf=\"salas != null && (usuarios).length == 0 && status == COMPLETE\"><td colspan=\"6\"><i>Não Há Usuários para serem listadas</i></td></tr>\n            <tr *ngIf=\"status == ERROR\"><td class=\"erro\" colspan=\"6\"><i>Falha na obtenção de Usuários!</i></td></tr>\n        </tfoot>\n    </table>\n</div>\n    \n    "

/***/ }),

/***/ "./src/app/select-usuario/select-usuario.component.less":
/*!**************************************************************!*\
  !*** ./src/app/select-usuario/select-usuario.component.less ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGVjdC11c3VhcmlvL3NlbGVjdC11c3VhcmlvLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/select-usuario/select-usuario.component.ts":
/*!************************************************************!*\
  !*** ./src/app/select-usuario/select-usuario.component.ts ***!
  \************************************************************/
/*! exports provided: SelectUsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectUsuarioComponent", function() { return SelectUsuarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../usuario.service */ "./src/app/usuario.service.ts");
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../abstract-component */ "./src/app/abstract-component.ts");
/* harmony import */ var _usuarios_usuario__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../usuarios/usuario */ "./src/app/usuarios/usuario.ts");
/* harmony import */ var _recurso_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../recurso.service */ "./src/app/recurso.service.ts");






var SelectUsuarioComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SelectUsuarioComponent, _super);
    function SelectUsuarioComponent(usuarioService, recursoService) {
        var _this = _super.call(this) || this;
        _this.usuarioService = usuarioService;
        _this.recursoService = recursoService;
        _this.criteria = "";
        return _this;
    }
    Object.defineProperty(SelectUsuarioComponent.prototype, "usuarios", {
        get: function () {
            return this.usuarioService.usuarios;
        },
        set: function (usuarios) {
            this.usuarioService.usuarios = usuarios;
        },
        enumerable: true,
        configurable: true
    });
    SelectUsuarioComponent.prototype.resetEdit = function () {
        this.usuarioTemp = new _usuarios_usuario__WEBPACK_IMPORTED_MODULE_4__["Usuario"](0, "", "", "");
    };
    SelectUsuarioComponent.prototype.addGestor = function (usuario) {
        if (confirm("Confirmar Adição deste Gestor?"))
            this.recursoService.adicionaGestorRecurso(usuario)
                .then(function (response) {
            })
                .catch(function (response) {
            });
    };
    SelectUsuarioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resetEdit();
        this.usuarioService.listaUsuarios()
            .then(function (response) {
            _this.status = _this.COMPLETE;
        })
            .catch(function (response) {
            _this.status = _this.ERROR;
            console.log(response);
        });
    };
    SelectUsuarioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-select-usuario',
            template: __webpack_require__(/*! ./select-usuario.component.html */ "./src/app/select-usuario/select-usuario.component.html"),
            styles: [__webpack_require__(/*! ./select-usuario.component.less */ "./src/app/select-usuario/select-usuario.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"], _recurso_service__WEBPACK_IMPORTED_MODULE_5__["RecursoService"]])
    ], SelectUsuarioComponent);
    return SelectUsuarioComponent;
}(_abstract_component__WEBPACK_IMPORTED_MODULE_3__["AbstractComponent"]));



/***/ }),

/***/ "./src/app/servidores-moodle.service.ts":
/*!**********************************************!*\
  !*** ./src/app/servidores-moodle.service.ts ***!
  \**********************************************/
/*! exports provided: ServidoresMoodleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServidoresMoodleService", function() { return ServidoresMoodleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servidores_moodle_servidor_moodle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./servidores-moodle/servidor-moodle */ "./src/app/servidores-moodle/servidor-moodle.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _array_indexador__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./array-indexador */ "./src/app/array-indexador.ts");
/* harmony import */ var _pl_disciplinas_academicos_estudante__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pl-disciplinas-academicos/estudante */ "./src/app/pl-disciplinas-academicos/estudante.ts");






var ServidoresMoodleService = /** @class */ (function () {
    function ServidoresMoodleService(http) {
        this.http = http;
        this.servidoresMoodle = [];
        this.servidoresMoodleIndex = new _array_indexador__WEBPACK_IMPORTED_MODULE_4__["ArrayIndexador"]([]);
    }
    ServidoresMoodleService.prototype.getServidoresMoodle = function () {
        var _this = this;
        return this.http.get("/servidores-moodle/all").toPromise()
            .then(function (response) {
            var sms = response.json();
            _this.servidoresMoodle = [];
            _this.servidoresMoodleIndex = new _array_indexador__WEBPACK_IMPORTED_MODULE_4__["ArrayIndexador"]([]);
            for (var i in sms) {
                var sm = new _servidores_moodle_servidor_moodle__WEBPACK_IMPORTED_MODULE_2__["ServidorMoodle"](sms[i]);
                _this.servidoresMoodle.push(sm);
                _this.servidoresMoodleIndex.add(sm);
            }
            return _this.servidoresMoodle;
        });
    };
    ServidoresMoodleService.prototype.getLinksServidoresMoodle = function () {
        return this.http.get("/servidores-moodle/links").toPromise()
            .then(function (response) {
            return response.json();
        });
    };
    ServidoresMoodleService.prototype.createUpdate = function (sm) {
        var _this = this;
        if (sm.id) {
            return this.http.put("/servidores-moodle/" + sm.id, sm).toPromise()
                .then(function (response) {
                _this.getServidoresMoodle();
                return response.json();
            });
        }
        else {
            return this.http.post("/servidores-moodle/", sm).toPromise()
                .then(function (response) {
                _this.getServidoresMoodle();
                return response.json();
            });
        }
    };
    ServidoresMoodleService.prototype.delete = function (sm) {
        var _this = this;
        return this.http.delete("/servidores-moodle/" + sm.id).toPromise()
            .then(function (response) {
            _this.getServidoresMoodle();
            return response.json();
        });
    };
    ServidoresMoodleService.prototype.exportarEstudantes = function (estudantes, servidorMoodle, courseId, senhaPadrao) {
        return this.http.post("/formulario-insere-usuarios", { estudantes: estudantes, servidorMoodle: servidorMoodle, courseId: courseId, senhaPadrao: senhaPadrao }).toPromise()
            .then(function (response) {
            return response.text();
        });
    };
    ServidoresMoodleService.prototype.getAcademicosDisciplinasSigecad = function (codDisciplina, periodoLetivoIdSigecad, turmaId, turmaNome) {
        return this.http.get("/pl-disciplinas-academicos/academicos-disciplinas-sigecad/" + codDisciplina + "/" + periodoLetivoIdSigecad + "/" + turmaId + "/" + turmaNome).toPromise()
            .then(function (response) {
            //return response.json();
            var estudantes = _pl_disciplinas_academicos_estudante__WEBPACK_IMPORTED_MODULE_5__["Estudante"].converteJSONParaEstudantesComSenha(_pl_disciplinas_academicos_estudante__WEBPACK_IMPORTED_MODULE_5__["Estudante"].converteEstudantesParaJSON(response.json()));
            return estudantes;
        });
    };
    ServidoresMoodleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"]])
    ], ServidoresMoodleService);
    return ServidoresMoodleService;
}());



/***/ }),

/***/ "./src/app/servidores-moodle/formulario-insercao-usuarios-moodle/formulario-insercao-usuarios-moodle.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/servidores-moodle/formulario-insercao-usuarios-moodle/formulario-insercao-usuarios-moodle.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-8\" style=\"margin: auto; float: initial;\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">Formulario de Inserção de Usuários no Moodle</div>\n\t\t\t<div style=\"margin: 15px 15px 15px 15px;\" *ngIf=\"estudantes.length == 0\">\n\t\t\t\t<table>\n\t\t\t\t\t<colgroup>\n\t\t\t\t\t\t<col width=\"30%\"/>\n\t\t\t\t\t\t<col width=\"10%\"/>\n\t\t\t\t\t\t<col width=\"25%\"/>\n\t\t\t\t\t\t<col width=\"10%\"/>\n\t\t\t\t\t\t<col width=\"25%\"/>\n\t\t\t\t\t</colgroup>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<label class=\"style1\"><span>Carregar Estudantes: </span></label> \n\t\t\t\t\t\t\t<button data-toggle=\"modal\" data-target=\"#dialogAjudaEstudantes\" \n\t\t\t\t\t\t\t\tclass=\"btn btn-info botao-tooltip\"><span class=\"glyphicon glyphicon-info-sign\"></span></button>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div  class=\"custom-file col-md-3\" style=\"width: 150px;\">\n\t\t\t\t\t\t\t\t<input type=\"file\" class=\"custom-file-input\" id=\"customFile\" (change)=\"lerAlunosCSV($event)\"  [disabled]=\"!editavel\">\n\t\t\t\t\t\t\t\t<label class=\"custom-file-label btn btn-primary\" [ngClass]=\"{'disabled': !editavel}\" for=\"customFile\">Arquivo CSV</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary botao-barra\" style=\"width: 150px; margin-left: 5px;\" data-toggle=\"modal\" data-target=\"#dialogBuscaImport\" [disabled]=\"!editavel\">SIGECAD</button>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t\t\n            <table class=\"table\">\n\t\t\t\t<colgroup>\n\t\t\t\t\t<col width=\"25%\"/>\n\t\t\t\t\t<col width=\"25%\"/>\n\t\t\t\t\t<col width=\"25%\"/>\n\t\t\t\t\t<col width=\"25%\"/>\n\t\t\t\t\t<col width=\"36px\"/>\n\t\t\t\t\t<col width=\"17px\"/>\n\t\t\t\t</colgroup>\n\t\t\t\t<thead class=\"thead-light\">\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>USER</th>\n\t\t\t\t\t\t<th>EMAIL</th>\n\t\t\t\t\t\t<th>NOME</th>\n\t\t\t\t\t\t<th>SENHA</th>\n\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t<button style=\"text-align: center;\" title=\"Limpar Todos\" type=\"button\" class=\"btn btn-danger botao-reduzido\" (click)=\"limparEstudantes()\"  [disabled]=\"!editavel\">\n\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-trash\"></span>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th></th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t</table>\n\t\t\t<div [redimensionar]=\"estudantes.length == 0 ? 327 : 262\" style=\"overflow-y: scroll;\">\n\t\t\t\t<table class=\"table\">\n\t\t\t\t\t<colgroup>\n\t\t\t\t\t\t<col width=\"25%\"/>\n\t\t\t\t\t\t<col width=\"25%\"/>\n\t\t\t\t\t\t<col width=\"25%\"/>\n\t\t\t\t\t\t<col width=\"25%\"/>\n\t\t\t\t\t\t<col width=\"36px\"/>\n\t\t\t\t\t</colgroup>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr *ngFor=\"let e of estudantes\">\n\t\t\t\t\t\t\t<td class=\"celula-trunca-texto\" title=\"{{e.username}}\">{{e.username}}</td>\n\t\t\t\t\t\t\t<td class=\"celula-trunca-texto\" title=\"{{e.email}}\">{{e.email}}</td>\n\t\t\t\t\t\t\t<td class=\"celula-trunca-texto\" title=\"{{e.fullname}}\">{{e.fullname}}</td>\n\t\t\t\t\t\t\t<td class=\"celula-trunca-texto\" title=\"{{e.senha}}\">{{e.senha}}</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<button style=\"text-align: center;\" title=\"Remover\" type=\"button\" class=\"btn btn-danger botao-reduzido\" (click)=\"removerEstudante(e)\"  [disabled]=\"!editavel\">\n\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-remove\"></span>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n            <div class=\"panel-footer\">\n                <button type=\"button\" class=\"btn btn-primary botao-barra\" data-toggle=\"modal\"\n                    data-target=\"#dialogCreateEstudante\" (click)=\"novoEstudante()\" [disabled]=\"!editavel\">Novo</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-warning botao-barra\" data-toggle=\"modal\" style=\"float: right;\"\n\t\t\t\t\tdata-target=\"#dialogExportarEstudante\" [disabled]=\"!editavel\">Exportar</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"dialogCreateEstudante\" tabindex=\"-1\" role=\"dialog\" data-backdrop=\"static\" aria-labelledby=\"dialogCreateEstudanteTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\">Estudante</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\" style=\"width: 350px;\">\n                <label class=\"style1\">Usuário *</label><br>\n                <input class=\"form-control\" type=\"text\" name=\"username\" placeholder=\"11122233344\" [(ngModel)]=\"estudanteTemp.username\" size=\"60\"><p></p>\n\n                <label class=\"style1\">E-mail: *</label><br>\n                <input class=\"form-control\" type=\"email\" name=\"email\" placeholder=\"user@email.com\" [(ngModel)]=\"estudanteTemp.email\" size=\"60\"><p></p>\n\n                <label class=\"style1\">Nome Completo: *</label><br>\n                <input class=\"form-control\" type=\"text\" name=\"fullname\" placeholder=\"Fulano da Silva\" [(ngModel)]=\"estudanteTemp.fullname\" size=\"60\"><p></p>\n\n\t\t\t\t<label class=\"style1\">Senha: </label><br>\n                <input class=\"form-control\" type=\"text\" name=\"fullname\" placeholder=\"********\" [(ngModel)]=\"estudanteTemp.senha\" size=\"60\"><p></p>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-primary botao-barra\" (click)=\"adicionarEstudante()\">Adicionar</button>\n                <button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\">Fechar</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"dialogExportarEstudante\" tabindex=\"-1\" role=\"dialog\" data-backdrop=\"static\" aria-labelledby=\"dialogExportarEstudanteTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\">Exportar Estudantes</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\" style=\"width: 500px;\">\n                <label class=\"style1\">Link para Servidor Moodle</label><br>\n\t\t\t\t<select class=\"form-control\" name=\"links-moodle\" [(ngModel)]=\"linkServidorMoodleExportar\" [disabled]=\"!editavel\" required>   \n\t\t\t\t\t<option hidden disabled value selected> -- Selecione -- </option>  \n\t\t\t\t\t<option *ngFor=\"let l of linksMoodles\" [value]=\"l\">{{l}}</option>       \n\t\t\t\t</select><br>\n\n                <label class=\"style1\">Inserir como estudante em sala específica: </label>\n\t\t\t\t<table style=\"width: 100%;\">\n\t\t\t\t\t<colgroup>\n\t\t\t\t\t\t<col width=\"50px\"/>\n\t\t\t\t\t\t<col width=\"10%\"/>\n\t\t\t\t\t\t<col width=\"90%\"/>\n\t\t\t\t\t</colgroup>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<span class=\"big-check\">\n\t\t\t\t\t\t\t\t<input  type=\"checkbox\" name=\"pl-ativo\" [(ngModel)]=\"usarSala\" [disabled]=\"!editavel\">\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<input class=\"form-control\" type=\"number\" name=\"sala-exportar\" placeholder=\"00\" [disabled]=\"!usarSala\" [(ngModel)]=\"salaExportar\" size=\"5\" >\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\n\t\t\t\t<p></p>\n\t\t\t\t<label class=\"style1\">Senha Padrão: </label>\n\t\t\t\t<table style=\"width: 100%;\">\n\t\t\t\t\t<colgroup>\n\t\t\t\t\t\t<col width=\"50px\"/>\n\t\t\t\t\t\t<col width=\"10%\"/>\n\t\t\t\t\t\t<col width=\"90%\"/>\n\t\t\t\t\t</colgroup>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<span class=\"big-check\">\n\t\t\t\t\t\t\t\t<input  type=\"checkbox\" name=\"pl-ativo\" [(ngModel)]=\"usarSenha\" [disabled]=\"!editavel\">\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"senha-padrao\" [disabled]=\"!usarSenha\" placeholder=\"********\" [(ngModel)]=\"senhaPadrao\" size=\"30\">\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\n\t\t\t\t<p></p>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-success botao-barra\" (click)=\"exportarEstudantes()\" [disabled]=\"!editavel\">Executar</button>\n                <button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\" [disabled]=\"!editavel\">Cancelar</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"dialogExportResult\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialogExportResultTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Resposta do Servidor Moodle</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\" style=\"width: 450px;\">\n                <div class=\"alert alert-info\" [ngClass]=\"{'alert-info': !erroAviso, 'alert-danger': erroAviso}\" *ngIf=\"aviso\">\n                    <strong *ngIf=\"!erroAviso\">Informação!</strong><strong *ngIf=\"erroAviso\">Falha!</strong> {{aviso}}\n                </div>\n                <div redimensionar=\"300\" style=\"max-height: 250px;\" id=\"saidaExport\"></div>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\" [disabled]=\"!editavel\">Fechar</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"dialogBuscaImport\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialogBuscaImportTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n\t\t\t\t<h5 class=\"modal-title\">Carregar Estudantes do SIGECAD</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\" style=\"width: 800px;\">\n                <app-obtem-plda [ancestral]=\"eu\">Carregando...</app-obtem-plda>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-success botao-barra\" (click)=\"carregarEstudantesSigecad()\" [disabled]=\"!editavel || plDisciplinasAcademicosTemp.disciplina == ''\">Carregar</button>\n                <button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\">Fechar</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"dialogAjudaEstudantes\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialogAjudaEstudantesTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\" style=\"width: 660px;\">\n                <b>Selecionar um Arquivo CSV: </b><br>\n                importa um arquivo CSV que contêm os usuários; o formato do arquivo deve seguir algum dos seguintes padrões:<br>\n                <pre style=\"font-size: 12px;\">\nusername,email,fullname,password\n11122233344,fulano.silva111@academico.ufgd.edu.br,Fulano da Silva,12345678\nBeltranoOliveira,BeltranoOliveira@ufgd.edu.br,Beltrano dos Santos Oliveira,00000000</pre>\n\t\t\t\tou\n\t\t\t\t<pre style=\"font-size: 12px;\">\nusername,email,fullname\n11122233344,fulano.silva111@academico.ufgd.edu.br,Fulano da Silva\nBeltranoOliveira,BeltranoOliveira@ufgd.edu.br,Beltrano dos Santos Oliveira</pre>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\">Fechar</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/servidores-moodle/formulario-insercao-usuarios-moodle/formulario-insercao-usuarios-moodle.component.less":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/servidores-moodle/formulario-insercao-usuarios-moodle/formulario-insercao-usuarios-moodle.component.less ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpZG9yZXMtbW9vZGxlL2Zvcm11bGFyaW8taW5zZXJjYW8tdXN1YXJpb3MtbW9vZGxlL2Zvcm11bGFyaW8taW5zZXJjYW8tdXN1YXJpb3MtbW9vZGxlLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/servidores-moodle/formulario-insercao-usuarios-moodle/formulario-insercao-usuarios-moodle.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/servidores-moodle/formulario-insercao-usuarios-moodle/formulario-insercao-usuarios-moodle.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: FormularioInsercaoUsuariosMoodleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormularioInsercaoUsuariosMoodleComponent", function() { return FormularioInsercaoUsuariosMoodleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_abstract_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/abstract-component */ "./src/app/abstract-component.ts");
/* harmony import */ var src_app_pl_disciplinas_academicos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pl-disciplinas-academicos.service */ "./src/app/pl-disciplinas-academicos.service.ts");
/* harmony import */ var src_app_pl_disciplinas_academicos_estudante__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pl-disciplinas-academicos/estudante */ "./src/app/pl-disciplinas-academicos/estudante.ts");
/* harmony import */ var src_app_pl_disciplinas_academicos_pl_disciplinas_academicos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pl-disciplinas-academicos/pl-disciplinas-academicos */ "./src/app/pl-disciplinas-academicos/pl-disciplinas-academicos.ts");
/* harmony import */ var src_app_servidores_moodle_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/servidores-moodle.service */ "./src/app/servidores-moodle.service.ts");







var FormularioInsercaoUsuariosMoodleComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FormularioInsercaoUsuariosMoodleComponent, _super);
    function FormularioInsercaoUsuariosMoodleComponent(servidoresMoodleService, plDisciplinasAcademicosService) {
        var _this_1 = _super.call(this) || this;
        _this_1.servidoresMoodleService = servidoresMoodleService;
        _this_1.plDisciplinasAcademicosService = plDisciplinasAcademicosService;
        _this_1.estudantes = [];
        _this_1.estudanteTemp = src_app_pl_disciplinas_academicos_estudante__WEBPACK_IMPORTED_MODULE_4__["Estudante"].generateEstudante();
        _this_1.linkServidorMoodleExportar = "";
        _this_1.linksMoodles = [];
        _this_1.usarSala = false;
        _this_1.usarSenha = false;
        _this_1.salaExportar = "";
        _this_1.senhaPadrao = "";
        _this_1.plDisciplinasAcademicosTemp = src_app_pl_disciplinas_academicos_pl_disciplinas_academicos__WEBPACK_IMPORTED_MODULE_5__["PlDisciplinasAcademicos"].generatePlDisciplinasAcademicos();
        _this_1.periodoLetivoSelecionadoId = "";
        _this_1.cursoSelecionadoId = "";
        _this_1.faculdadeSelecionadaId = "";
        _this_1.disciplinaSelecionadaNome = "";
        //apenas implementação da interface, não utilizados por aqui
        _this_1.plDisciplinasAcademicosTempList = [];
        _this_1.modoLista = false;
        _this_1.disciplinaSelecionadaNomes = [];
        return _this_1;
    }
    Object.defineProperty(FormularioInsercaoUsuariosMoodleComponent.prototype, "eu", {
        get: function () {
            return this;
        },
        enumerable: true,
        configurable: true
    });
    FormularioInsercaoUsuariosMoodleComponent.prototype.novoEstudante = function () {
        this.estudanteTemp = src_app_pl_disciplinas_academicos_estudante__WEBPACK_IMPORTED_MODULE_4__["Estudante"].generateEstudante();
    };
    FormularioInsercaoUsuariosMoodleComponent.prototype.adicionarEstudante = function () {
        if (this.estudanteTemp.isValid()) {
            this.estudantes.push(new src_app_pl_disciplinas_academicos_estudante__WEBPACK_IMPORTED_MODULE_4__["Estudante"](this.estudanteTemp.username, this.estudanteTemp.email, this.estudanteTemp.fullname, this.estudanteTemp.is_professor, this.estudanteTemp.senha));
            jQuery('#dialogCreateEstudante').modal('hide');
            this.estudanteTemp = src_app_pl_disciplinas_academicos_estudante__WEBPACK_IMPORTED_MODULE_4__["Estudante"].generateEstudante();
        }
        else
            alert("Usuário Inválido!");
    };
    FormularioInsercaoUsuariosMoodleComponent.prototype.removerEstudante = function (estudante) {
        if (!confirm("Deseja remover este estudante"))
            return;
        var i = 0;
        for (; i < this.estudantes.length; i++) {
            if (estudante.equals(this.estudantes[i]))
                break;
        }
        if (i < this.estudantes.length) {
            this.estudantes.splice(i, 1);
        }
    };
    FormularioInsercaoUsuariosMoodleComponent.prototype.limparEstudantes = function () {
        if (confirm("Deseja remover todos os estudantes"))
            this.estudantes = [];
    };
    FormularioInsercaoUsuariosMoodleComponent.prototype.lerAlunosCSV = function (event) {
        var fileExtension = /.*\.csv/;
        var fileTobeRead = event.target.files[0];
        if (fileTobeRead.name.toLowerCase().match(fileExtension)) {
            var fileReader = new FileReader();
            var _this = this;
            fileReader.onload = function (e) {
                _this.estudantes = src_app_pl_disciplinas_academicos_estudante__WEBPACK_IMPORTED_MODULE_4__["Estudante"].processaCSVcomSenha(fileReader.result);
            };
            fileReader.readAsText(fileTobeRead);
        }
        else {
            alert("Por favor selecione arquivo csv");
        }
    };
    FormularioInsercaoUsuariosMoodleComponent.prototype.exportarEstudantes = function () {
        var _this_1 = this;
        if (!this.estudantes.length) {
            alert("Não há usuários para exportar!");
            return;
        }
        if (!this.linkServidorMoodleExportar) {
            alert("Selecione um servidor moodle primeiro!");
            return;
        }
        if (!confirm("Deseja inserir estes usuários no Moodle selecionado?"))
            return;
        jQuery('#dialogExportResult').modal('show');
        jQuery('#saidaExport').html("<i>Aguarde...<i>");
        this.editavel = false;
        //this.blockAutoRestore = true;
        this.servidoresMoodleService.exportarEstudantes(src_app_pl_disciplinas_academicos_estudante__WEBPACK_IMPORTED_MODULE_4__["Estudante"].converteEstudantesParaJSONcomSenha(this.estudantes), this.linkServidorMoodleExportar, this.usarSala ? this.salaExportar : "", this.usarSenha ? this.senhaPadrao : "")
            .then(function (response) {
            jQuery('#saidaExport').html(response);
            _this_1.editavel = true;
        })
            .catch(function (response) {
            _this_1.erroAviso = true;
            _this_1.aviso = _this_1.erroHttp(response);
            _this_1.editavel = true;
            jQuery('#saidaExport').html('<span style="color: red;">' + _this_1.aviso + "</span>");
        });
    };
    FormularioInsercaoUsuariosMoodleComponent.prototype.carregarEstudantesSigecad = function () {
        var _this_1 = this;
        if (this.plDisciplinasAcademicosTemp && confirm("Confirmar carregamento de lista de Estudantes do SIGECAD?")) {
            this.editavel = false;
            this.servidoresMoodleService.getAcademicosDisciplinasSigecad(this.plDisciplinasAcademicosTemp.disciplina_key, this.periodoLetivoSelecionadoId, this.plDisciplinasAcademicosTemp.turma_id, this.plDisciplinasAcademicosTemp.turma_nome)
                .then(function (est) {
                _this_1.plDisciplinasAcademicosTemp.estudantes = est;
                _this_1.estudantes = est;
                _this_1.editavel = true;
                jQuery('#dialogBuscaImport').modal('hide');
            }).catch(function (response) {
                _this_1.erroAviso = true;
                _this_1.aviso = _this_1.erroHttp(response);
                alert(_this_1.aviso);
                _this_1.editavel = true;
            });
        }
    };
    FormularioInsercaoUsuariosMoodleComponent.prototype.ngOnInit = function () {
        var _this_1 = this;
        this.editavel = true;
        this.servidoresMoodleService.getLinksServidoresMoodle()
            .then(function (response) {
            _this_1.linksMoodles = response;
        })
            .catch(function (r) {
            alert(_this_1.erroHttp(r));
        });
    };
    FormularioInsercaoUsuariosMoodleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-formulario-insercao-usuarios-moodle',
            template: __webpack_require__(/*! ./formulario-insercao-usuarios-moodle.component.html */ "./src/app/servidores-moodle/formulario-insercao-usuarios-moodle/formulario-insercao-usuarios-moodle.component.html"),
            styles: [__webpack_require__(/*! ./formulario-insercao-usuarios-moodle.component.less */ "./src/app/servidores-moodle/formulario-insercao-usuarios-moodle/formulario-insercao-usuarios-moodle.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_servidores_moodle_service__WEBPACK_IMPORTED_MODULE_6__["ServidoresMoodleService"], src_app_pl_disciplinas_academicos_service__WEBPACK_IMPORTED_MODULE_3__["PlDisciplinasAcademicosService"]])
    ], FormularioInsercaoUsuariosMoodleComponent);
    return FormularioInsercaoUsuariosMoodleComponent;
}(src_app_abstract_component__WEBPACK_IMPORTED_MODULE_2__["AbstractComponent"]));



/***/ }),

/***/ "./src/app/servidores-moodle/servidor-moodle.ts":
/*!******************************************************!*\
  !*** ./src/app/servidores-moodle/servidor-moodle.ts ***!
  \******************************************************/
/*! exports provided: ServidorMoodle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServidorMoodle", function() { return ServidorMoodle; });
var ServidorMoodle = /** @class */ (function () {
    function ServidorMoodle(id, nome, url, ativo) {
        if (typeof id == "number") {
            this.id = id;
            this.nome = nome;
            this.url = url;
            this.ativo = ativo;
        }
        else {
            this.id = parseInt(id['id']);
            this.nome = id['nome'];
            this.url = id['url'];
            this.ativo = id['ativo'];
        }
    }
    ServidorMoodle.generateServidorMoodle = function () {
        return new ServidorMoodle(0, "", "", true);
    };
    ServidorMoodle.prototype.clone = function () {
        return new ServidorMoodle(this.id, this.nome, this.url, this.ativo);
    };
    return ServidorMoodle;
}());



/***/ }),

/***/ "./src/app/servidores-moodle/servidores-moodle.component.html":
/*!********************************************************************!*\
  !*** ./src/app/servidores-moodle/servidores-moodle.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-8\" style=\"margin: auto; float: initial;\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">Servidores Moodle</div>\n            <div class=\"alert alert-warning\" role=\"alert\" style=\"margin: 20px;\">\n                <b>Atenção! Para o funcionamento das integrações das funcionalidades do sistema para com os moodles, é necessário adicionar o arquivo \n                <a title=\"Fazer download de arquivo do script para Servidores Moodle\" href=\"/servidores-moodle/download-script\">auto-restore.php</a>\n                no diretório raiz de cada moodle que se queira utilizar.</b>\n            </div>\n            <div>\n                <table class=\"table\" style=\"margin-bottom: 0px\">\n                    <colgroup>\n                        <col width=\"40px\" />\n                        <col width=\"50%\" />\n                        <col width=\"50%\" />\n                        <col width=\"32px\" />\n                        <col width=\"32px\" />\n                        <col width=\"15px\" />\n                    </colgroup>\n                    <thead class=\"thead-light\">\n                        <tr>\n                            <th style=\"text-align: center\">ID</th>\n                            <th class=\"celula-trunca-texto\" title=\"NOME\">NOME</th>\n                            <th class=\"celula-trunca-texto\" title=\"URL do Servidor\">URL</th>\n                            <th colspan=\"2\" style=\"text-align: center\">AÇÕES</th>\n                            <th></th>\n                        </tr>\n                    </thead>\n                </table>\n            </div>\n            <div redimensionar=\"391\" style=\"overflow-y: scroll;\">\n                <table class=\"table\">\n                    <colgroup>\n                        <col width=\"40px\" />\n                        <col width=\"50%\" />\n                        <col width=\"50%\" />\n                        <col width=\"32px\" />\n                        <col width=\"32px\" />\n                    </colgroup>\n                    <tbody>\n                        <tr *ngFor=\"let sm of servidoresMoodle\" [ngClass]=\"{'linha-desativada' : !sm.ativo}\">\n                            <td>{{sm.id}}</td>\n                            <td class=\"celula-trunca-texto\" title=\"{{sm.nome}}\">{{sm.nome}}</td>\n                            <td class=\"celula-trunca-texto\" title=\"{{sm.url}}\">{{sm.url}}</td>\n                            <td>\n                                <button style=\"text-align: center; margin-left: -2px;\" title=\"Editar\" type=\"button\"\n                                    class=\"btn btn-info botao-reduzido\" data-toggle=\"modal\"\n                                    data-target=\"#dialogCreateSM\" (click)=\"selecionaServidorMoodle(sm)\">\n                                    <span class=\"glyphicon glyphicon-edit\"></span>\n                                </button>\n                            </td>\n                            <td>\n                                <button style=\"text-align: center; margin-left: -2px;\" title=\"Remover\" type=\"button\"\n                                    class=\"btn btn-danger botao-reduzido\" (click)=\"removeServidorMoodle(sm)\">\n                                    <span class=\"glyphicon glyphicon-remove\"></span>\n                                </button>\n                            </td>\n                        </tr>\n                    </tbody>\n                    <tfoot class=\"status-tabela\">\n                        <tr *ngIf=\"status == LOADING\">\n                            <td colspan=\"7\"><i>Carregando Lista de Servidores Moodle...</i></td>\n                        </tr>\n                        <tr *ngIf=\"servidoresMoodle != null && servidoresMoodle.length == 0 && status == COMPLETE\">\n                            <td colspan=\"6\"><i>Não Há Servidores Moodle para serem listados</i></td>\n                        </tr>\n                        <tr *ngIf=\"status == ERROR\">\n                            <td class=\"erro\" colspan=\"7\"><i>Falha na obtenção da Lista de Servidores Moodle!</i></td>\n                        </tr>\n                    </tfoot>\n                </table>\n            </div>\n            <div class=\"panel-footer\">\n                <button type=\"button\" class=\"btn btn-primary botao-barra\" data-toggle=\"modal\"\n                    data-target=\"#dialogCreateSM\" (click)=\"novoServidorMoodle()\" [disabled]=\"!editavel\">Novo</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"dialogCreateSM\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialogCreateSMTitle\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\">Servidor Moodle</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <fieldset>\n                    <form id=\"servidoresMoodleForm\" class=\"form-group\"\n                        style=\"text-align: left; width: 300px; margin: 15px auto;\"\n                        (submit)=\"criaAlteraServidorMoodle($event)\">\n                        <div class=\"alert alert-info\" [ngClass]=\"{'alert-info': !erroAviso, 'alert-danger': erroAviso}\"\n                            *ngIf=\"aviso\">\n                            <strong *ngIf=\"!erroAviso\">Informação!</strong><strong *ngIf=\"erroAviso\">Falha!</strong>\n                            {{aviso}}\n                        </div>\n                        <label class=\"style1\">Nome: *</label><br>\n                        <input class=\"form-control\" type=\"text\" name=\"nome_professor\" placeholder=\"Nome Servidor Moodle\"\n                            [(ngModel)]=\"servidorMoodle.nome\" size=\"60\" [disabled]=\"!editavel\" required>\n                        <p></p>\n\n                        <label class=\"style1\" for=\"id-sigecad\">URL do Servidor Moodle: *</label><br>\n                        <input class=\"form-control\" type=\"text\" name=\"id-sigecad\" placeholder=\"https://servidor.edu.br\"\n                            [(ngModel)]=\"servidorMoodle.url\" [disabled]=\"!editavel\" required>\n                        <p></p>\n\n                        <label class=\"style1\" for=\"pl-ativo\">Ativo: </label><br>\n                        <span class=\"big-check\">\n                            <input type=\"checkbox\" name=\"pl-ativo\" [(ngModel)]=\"servidorMoodle.ativo\"\n                                [disabled]=\"!editavel\">\n                        </span>\n                        <p></p>\n                    </form>\n                </fieldset>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"submit\" form=\"servidoresMoodleForm\" class=\"btn btn-primary botao-barra\"\n                    [disabled]=\"!editavel\">Enviar</button>\n                <button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\">Fechar</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/servidores-moodle/servidores-moodle.component.less":
/*!********************************************************************!*\
  !*** ./src/app/servidores-moodle/servidores-moodle.component.less ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpZG9yZXMtbW9vZGxlL3NlcnZpZG9yZXMtbW9vZGxlLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/servidores-moodle/servidores-moodle.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/servidores-moodle/servidores-moodle.component.ts ***!
  \******************************************************************/
/*! exports provided: ServidoresMoodleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServidoresMoodleComponent", function() { return ServidoresMoodleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstract-component */ "./src/app/abstract-component.ts");
/* harmony import */ var _servidores_moodle_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../servidores-moodle.service */ "./src/app/servidores-moodle.service.ts");
/* harmony import */ var _servidor_moodle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./servidor-moodle */ "./src/app/servidores-moodle/servidor-moodle.ts");





var ServidoresMoodleComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ServidoresMoodleComponent, _super);
    function ServidoresMoodleComponent(servidoresMoodleService) {
        var _this = _super.call(this) || this;
        _this.servidoresMoodleService = servidoresMoodleService;
        _this.servidorMoodle = _servidor_moodle__WEBPACK_IMPORTED_MODULE_4__["ServidorMoodle"].generateServidorMoodle();
        return _this;
    }
    Object.defineProperty(ServidoresMoodleComponent.prototype, "servidoresMoodle", {
        get: function () {
            return this.servidoresMoodleService.servidoresMoodle;
        },
        enumerable: true,
        configurable: true
    });
    ServidoresMoodleComponent.prototype.novoServidorMoodle = function () {
        this.servidorMoodle = _servidor_moodle__WEBPACK_IMPORTED_MODULE_4__["ServidorMoodle"].generateServidorMoodle();
        this.aviso = "";
        this.erroAviso = false;
        //this.carregarListaSigecad();
    };
    ServidoresMoodleComponent.prototype.criaAlteraServidorMoodle = function (ev) {
        var _this = this;
        ev.preventDefault();
        var servidoresMoodleForm = jQuery('#servidoresMoodleForm')[0];
        if (servidoresMoodleForm.reportValidity()) {
            this.servidoresMoodleService.createUpdate(this.servidorMoodle)
                .then(function (r) {
                jQuery('#dialogCreateSM').modal('hide');
            }).catch(function (response) {
                _this.erroAviso = true;
                _this.aviso = _this.erroHttp(response);
            });
        }
    };
    ServidoresMoodleComponent.prototype.selecionaServidorMoodle = function (sm) {
        this.aviso = "";
        this.erroAviso = false;
        this.servidorMoodle = sm.clone();
    };
    ServidoresMoodleComponent.prototype.removeServidorMoodle = function (sm) {
        var _this = this;
        if (confirm("Confirmar Exclusão deste Servidor Moodle")) {
            this.servidoresMoodleService.delete(sm)
                .then(function (r) {
            }).catch(function (response) {
                _this.erroAviso = true;
                _this.aviso = _this.erroHttp(response);
                alert(_this.aviso);
            });
        }
    };
    ServidoresMoodleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.servidoresMoodleService.getServidoresMoodle()
            .then(function (r) {
            _this.status = _this.COMPLETE;
            _this.editavel = true;
        }).catch(function (response) {
            _this.erroAviso = true;
            _this.aviso = _this.erroHttp(response);
            _this.status = _this.ERROR;
            alert(_this.aviso);
        });
    };
    ServidoresMoodleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-servidores-moodle',
            template: __webpack_require__(/*! ./servidores-moodle.component.html */ "./src/app/servidores-moodle/servidores-moodle.component.html"),
            styles: [__webpack_require__(/*! ./servidores-moodle.component.less */ "./src/app/servidores-moodle/servidores-moodle.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servidores_moodle_service__WEBPACK_IMPORTED_MODULE_3__["ServidoresMoodleService"]])
    ], ServidoresMoodleComponent);
    return ServidoresMoodleComponent;
}(_abstract_component__WEBPACK_IMPORTED_MODULE_2__["AbstractComponent"]));



/***/ }),

/***/ "./src/app/status.ts":
/*!***************************!*\
  !*** ./src/app/status.ts ***!
  \***************************/
/*! exports provided: Status */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return Status; });
var Status = /** @class */ (function () {
    function Status(id, chave, descricao, cor) {
        this.id = id;
        this.chave = chave,
            this.descricao = descricao;
        this.cor = cor;
    }
    Status.generateStatus = function (st) {
        if (!st)
            return this.novoStatus();
        return new Status(st.id, st.chave, st.descricao, st.cor);
    };
    Status.generateList = function (list) {
        var statusList = [];
        for (var i = 0; i < list.length; i++) {
            var st = Status.generateStatus(list[i]);
            statusList.push(st);
        }
        return statusList;
    };
    Status.novoStatus = function () {
        return new Status(0, "", "", "");
    };
    Status.CHAVES = {
        ANALISE: 'ANALISE',
        CONCLUIDO: 'CONCLUIDO',
        REJEITADO: 'REJEITADO',
        DEFERIDO: 'DEFERIDO',
        INDEFERIDO: 'INDEFERIDO',
        CANCELADO: 'CANCELADO',
        PROCESSO: 'PROCESSO',
    };
    return Status;
}());



/***/ }),

/***/ "./src/app/super-macro.service.ts":
/*!****************************************!*\
  !*** ./src/app/super-macro.service.ts ***!
  \****************************************/
/*! exports provided: SuperMacroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperMacroService", function() { return SuperMacroService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _array_indexador__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./array-indexador */ "./src/app/array-indexador.ts");
/* harmony import */ var _macro_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./macro.service */ "./src/app/macro.service.ts");
/* harmony import */ var _periodo_letivos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./periodo-letivos.service */ "./src/app/periodo-letivos.service.ts");
/* harmony import */ var _super_macro_super_macro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./super-macro/super-macro */ "./src/app/super-macro/super-macro.ts");







var SuperMacroService = /** @class */ (function () {
    function SuperMacroService(http, periodoLetivosService, macroService) {
        this.http = http;
        this.periodoLetivosService = periodoLetivosService;
        this.macroService = macroService;
        this.superMacros = [];
        this.superMacrosIndex = null;
        this.superMacroSelecionada = _super_macro_super_macro__WEBPACK_IMPORTED_MODULE_6__["SuperMacro"].generate();
    }
    SuperMacroService.prototype.listar = function () {
        var _this = this;
        return this.http.get("/super-macro/all")
            .toPromise()
            .then(function (response) {
            _this.superMacros = _super_macro_super_macro__WEBPACK_IMPORTED_MODULE_6__["SuperMacro"].generateListPlus(response.json(), _this.macroService.macros, _this.macroService.macrosIndex);
            _this.superMacrosIndex = new _array_indexador__WEBPACK_IMPORTED_MODULE_3__["ArrayIndexador"](_this.superMacros);
            return _this.superMacros;
        });
    };
    SuperMacroService.prototype.getPostSuperMacro = function (superMacro) {
        console.log(superMacro);
        var macro_padrao_id = superMacro.macro_padrao;
        if (superMacro.macro_padrao && typeof superMacro.macro_padrao == 'object')
            macro_padrao_id = superMacro.macro_padrao.id;
        return {
            id: superMacro.id,
            descricao: superMacro.descricao,
            macro_padrao_id: macro_padrao_id
        };
    };
    SuperMacroService.prototype.create = function (superMacro) {
        var _this = this;
        return this.http.post("/super-macro", this.getPostSuperMacro(superMacro))
            .toPromise()
            .then(function (response) {
            return _this.listar();
        });
    };
    SuperMacroService.prototype.update = function (superMacro) {
        var _this = this;
        return this.http.put("/super-macro/" + superMacro.id, this.getPostSuperMacro(superMacro))
            .toPromise()
            .then(function (response) {
            return _this.listar();
        });
    };
    SuperMacroService.prototype.delete = function (superMacro) {
        var _this = this;
        return this.http.delete("/super-macro/" + superMacro.id)
            .toPromise()
            .then(function (response) {
            return _this.listar();
        });
    };
    SuperMacroService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _periodo_letivos_service__WEBPACK_IMPORTED_MODULE_5__["PeriodoLetivosService"], _macro_service__WEBPACK_IMPORTED_MODULE_4__["MacroService"]])
    ], SuperMacroService);
    return SuperMacroService;
}());



/***/ }),

/***/ "./src/app/super-macro/macro-super-macro/macro-super-macro.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/super-macro/macro-super-macro/macro-super-macro.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <table class=\"table\" style=\"margin-bottom: 0px\">\n        <colgroup>\n            <col width=\"50px\"/>\n            <col width=\"39px\"/>\n            <col width=\"39px\"/>\n            <col width=\"33%\"/>\n            <col width=\"50px\"/>\n            <col width=\"34%\"/>\n            <col width=\"33%\"/>\n            <col width=\"39px\"/>\n            <col width=\"39px\"/>\n            <col width=\"15px\"/>\n        </colgroup>\n        <thead class=\"thead-light\">\n            <tr>\n                <th title=\"Ordem de checagem de diretivas\" colspan=\"3\">ORD.</th>\n                <th title=\"Campo de dados da sala a ser checado\">CAMPO</th>\n                <th title=\"Operador: Determina a forma de comparação entre o campo e o valor\">OPR.</th>\n                <th title=\"Valor desejado para ser comparado ao CAMPO, para a validação da diretiva\">VALOR</th>\n                <th title=\"Macro a ser aplicada, caso a diretiva seja validada\">MACRO</th>\n                <th></th>\n                <th></th>\n                <th></th>\n            </tr>\n        </thead>\n    </table>\n</div>\n<div redimensionar=\"260\" style=\"overflow-y: scroll;\">\n    <table class=\"table\">\n        <colgroup>\n            <col width=\"50px\"/>\n            <col width=\"39px\"/>\n            <col width=\"39px\"/>\n            <col width=\"33%\"/>\n            <col width=\"50px\"/>\n            <col width=\"34%\"/>\n            <col width=\"33%\"/>\n            <col width=\"39px\"/>\n            <col width=\"39px\"/>\n        </colgroup>\n        <tbody>\n            <tr *ngFor=\"let msm of macroSuperMacros\">\n                <ng-container *ngIf=\"msmTemp.id != msm.id\">\n                    <td>{{msm.ordem}}</td>\n                    <td class=\"celula-trunca-texto\" title=\"Editar\">\n                        <button style=\"text-align: center; margin-left: 2px;\" type=\"button\" class=\"btn btn-success botao-reduzido\" (click)=\"changeOrder(msm.ordem, msm.ordem-1)\" [disabled]=\"msm.ordem <= 1\">\n                            <span class=\"glyphicon glyphicon-arrow-up\"></span>\n                        </button>\n                    </td>\n                    <td class=\"celula-trunca-texto\" title=\"Excluir\">\n                        <button style=\"text-align: center; margin-left: 2px;\" type=\"button\" class=\"btn btn-success botao-reduzido\" (click)=\"changeOrder(msm.ordem, msm.ordem+1)\" [disabled]=\"msm.ordem >= macroSuperMacros.length\">\n                            <span class=\"glyphicon glyphicon-arrow-down\"></span>\n                        </button>\n                    </td>\n                    <td class=\"celula-trunca-texto\" title=\"{{msm.campo}}\">{{msm.campo}}</td>\n                    <td>{{msm.operador}}</td>\n                    <td class=\"celula-trunca-texto\" title=\"{{msm.valor}}\">{{msm.valor}}</td>\n                    <td class=\"celula-trunca-texto\" title=\"{{msm.macro.nome}}\">{{msm.macro.nome}}</td>\n                    <td class=\"celula-trunca-texto\" title=\"Editar\">\n                        <button style=\"text-align: center; margin-left: 2px;\" title=\"Editar\" type=\"button\" class=\"btn btn-info botao-reduzido\" (click)=\"editar(msm)\">\n                            <span class=\"glyphicon glyphicon-edit\"></span>\n                        </button>\n                    </td>\n                    <td class=\"celula-trunca-texto\" title=\"Excluir\">\n                        <button style=\"text-align: center; margin-left: 2px;\" title=\"Excluir\" type=\"button\" class=\"btn btn-danger botao-reduzido\" (click)=\"deletar(msm)\">\n                            <span class=\"glyphicon glyphicon-remove\"></span>\n                        </button>\n                    </td>\n                </ng-container>\n                <ng-container *ngIf=\"msmTemp.id == msm.id\">\n                    <td colspan=\"3\">{{msm.ordem}}</td>\n                    <td class=\"celula-trunca-texto\" title=\"{{msmTemp.campo}}\">\n                        <select  class=\"form-control form-control-micro\" [(ngModel)]=\"msmTemp.campo\" required >\n                            <option *ngFor=\"let c of campos\" value=\"{{c}}\">{{c}}</option>\n                        </select>\n\t\t\t\t\t</td>\n                    <td>{{msm.operador}}</td>\n                    <td class=\"celula-trunca-texto\" title=\"{{msmTemp.valor}}\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control form-control-micro\" [(ngModel)]=\"msmTemp.valor\" required/>\n\t\t\t\t\t</td>\n                    <td class=\"celula-trunca-texto\">\n                        <select  class=\"form-control form-control-micro\" [(ngModel)]=\"msmTemp.macro\" required >\n                            <option *ngFor=\"let m of macros\" [value]=\"m.id\">{{m.nome}}</option>\n                        </select>\n                    </td>\n                    <td class=\"celula-trunca-texto\" title=\"Concluir Edição\" style=\"text-align: center;\">\n                        <button style=\"text-align: center; margin-left: 2px;\" title=\"Concluir Edição\" type=\"button\" class=\"btn btn-success botao-reduzido\" (click)=\"concluirEdicao()\" [disabled]=\"invalid\">\n                            <span class=\"glyphicon glyphicon-ok\"></span>\n                        </button>\n                    </td>\n                    <td class=\"celula-trunca-texto\" title=\"Cancelar\" style=\"text-align: center;\">\n                        <button style=\"text-align: center; margin-left: 2px;\" title=\"Cancelar\" type=\"button\" class=\"btn btn-secondary botao-reduzido\" (click)=\"reset()\">\n                            <span class=\"glyphicon glyphicon-retweet\"></span>\n                        </button>\n                    </td>\n                </ng-container>\n            </tr>\n            <tr *ngIf=\"!emCriacao && macroSuperMacros != null && superMacro.id > 0 && status == COMPLETE\">\n                <td *ngIf=\"msmTemp.id == 0\" class=\"celula-trunca-texto\" title=\"Novo\" style=\"text-align: center;\" colspan=\"7\">\n                    <button style=\"text-align: center; margin-left: 2px;\" title=\"Novo\" type=\"button\" class=\"btn btn-primary botao-reduzido\" (click)=\"novo()\">\n                        <span class=\"glyphicon glyphicon-plus\"></span>\n                    </button>\n                </td>\n            </tr>\n            <tr *ngIf=\"emCriacao\">\n                    <td colspan=\"3\">-</td>\n                    <td class=\"celula-trunca-texto\" title=\"{{msmTemp.campo}}\">\n                        <select  class=\"form-control form-control-micro\" [(ngModel)]=\"msmTemp.campo\" required >\n                            <option *ngFor=\"let c of campos\" value=\"{{c}}\">{{c}}</option>\n                        </select>\n\t\t\t\t\t</td>\n                    <td>{{operadores[0]}}</td>\n                    <td class=\"celula-trunca-texto\" title=\"{{msmTemp.valor}}\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control form-control-micro\" [(ngModel)]=\"msmTemp.valor\" required/>\n\t\t\t\t\t</td>\n                    <td class=\"celula-trunca-texto\">\n                        <select  class=\"form-control form-control-micro\" [(ngModel)]=\"msmTemp.macro\" required >\n                            <option *ngFor=\"let m of macros\" [value]=\"m.id\">{{m.nome}}</option>\n                        </select>\n                    </td>\n                    <td *ngIf=\"msmTemp.id == 0\" class=\"celula-trunca-texto\" title=\"Concluir\"  style=\"text-align: center;\" >\n                        <button style=\"text-align: center; margin-left: 2px;\" title=\"Concluir\" type=\"button\" class=\"btn btn-success botao-reduzido\" (click)=\"concluirEdicao()\"  [disabled]=\"invalid\">\n                            <span class=\"glyphicon glyphicon-ok\"></span>\n                        </button>\n                    </td>\n                    <td *ngIf=\"msmTemp.id == 0\" class=\"celula-trunca-texto\" title=\"Cancelar\"  style=\"text-align: center;\" >\n                        <button style=\"text-align: center; margin-left: 2px;\" title=\"Calcelar\" type=\"button\" class=\"btn btn-secondary botao-reduzido\" (click)=\"reset()\">\n                            <span class=\"glyphicon glyphicon-retweet\"></span>\n                        </button>\n                    </td>\n                </tr>\n        </tbody>\n        <tfoot class=\"status-tabela\">\n            <tr *ngIf=\"status == LOADING\"><td colspan=\"7\"><i>Carregando Buscadores...</i></td></tr>\n            <tr *ngIf=\"macroSuperMacros != null && macroSuperMacros.length == 0 && status == COMPLETE && !emCriacao\">\n                <td colspan=\"7\">\n                    <i>Não Há Diretivas para serem listadas</i><br />\n                    <button *ngIf=\"msmTemp.id > 0\" style=\"text-align: center; margin-left: 2px; margin-top: 5px;\" title=\"Nova\" type=\"button\" class=\"btn btn-primary botao-reduzido\" (click)=\"novo()\">\n                        <span class=\"glyphicon glyphicon-plus\"></span>\n                    </button>\n                </td>\n            </tr>\n            <tr *ngIf=\"status == ERROR\"><td class=\"erro\" colspan=\"7\"><i>Falha na obtenção das Diretivas!</i></td></tr>\n            \n        </tfoot>\n    </table>\n</div>"

/***/ }),

/***/ "./src/app/super-macro/macro-super-macro/macro-super-macro.component.less":
/*!********************************************************************************!*\
  !*** ./src/app/super-macro/macro-super-macro/macro-super-macro.component.less ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyLW1hY3JvL21hY3JvLXN1cGVyLW1hY3JvL21hY3JvLXN1cGVyLW1hY3JvLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/super-macro/macro-super-macro/macro-super-macro.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/super-macro/macro-super-macro/macro-super-macro.component.ts ***!
  \******************************************************************************/
/*! exports provided: MacroSuperMacroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MacroSuperMacroComponent", function() { return MacroSuperMacroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_abstract_component_child__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/abstract-component-child */ "./src/app/abstract-component-child.ts");
/* harmony import */ var src_app_macro_super_macro_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/macro-super-macro.service */ "./src/app/macro-super-macro.service.ts");
/* harmony import */ var src_app_macro_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/macro.service */ "./src/app/macro.service.ts");
/* harmony import */ var src_app_macro_macro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/macro/macro */ "./src/app/macro/macro.ts");
/* harmony import */ var src_app_super_macro_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/super-macro.service */ "./src/app/super-macro.service.ts");
/* harmony import */ var _macro_super_macro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./macro-super-macro */ "./src/app/super-macro/macro-super-macro/macro-super-macro.ts");








var MacroSuperMacroComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MacroSuperMacroComponent, _super);
    function MacroSuperMacroComponent(macroSuperMacroService, superMacroService, macroService) {
        var _this = _super.call(this) || this;
        _this.macroSuperMacroService = macroSuperMacroService;
        _this.superMacroService = superMacroService;
        _this.macroService = macroService;
        _this.msmTemp = _macro_super_macro__WEBPACK_IMPORTED_MODULE_7__["MacroSuperMacro"].generate();
        _this.macroTemp = src_app_macro_macro__WEBPACK_IMPORTED_MODULE_5__["Macro"].generate();
        _this.emCriacao = false;
        return _this;
    }
    Object.defineProperty(MacroSuperMacroComponent.prototype, "macroSuperMacros", {
        get: function () {
            return this.macroSuperMacroService.macroSuperMacros;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MacroSuperMacroComponent.prototype, "superMacro", {
        get: function () {
            return this.superMacroService.superMacroSelecionada;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MacroSuperMacroComponent.prototype, "macros", {
        get: function () {
            return this.macroService.macros;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MacroSuperMacroComponent.prototype, "campos", {
        get: function () {
            return this.macroSuperMacroService.CAMPOS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MacroSuperMacroComponent.prototype, "operadores", {
        get: function () {
            return this.macroSuperMacroService.OPERADORES;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MacroSuperMacroComponent.prototype, "invalid", {
        get: function () {
            return this.msmTemp.campo == "" || this.msmTemp.valor == "" || !this.msmTemp.macro;
        },
        enumerable: true,
        configurable: true
    });
    MacroSuperMacroComponent.prototype.novo = function () {
        this.msmTemp = _macro_super_macro__WEBPACK_IMPORTED_MODULE_7__["MacroSuperMacro"].generate();
        this.msmTemp.super_macro = this.superMacro;
        this.emCriacao = true;
    };
    MacroSuperMacroComponent.prototype.editar = function (msm) {
        this.msmTemp = msm.clone();
        if (typeof this.msmTemp.macro == "object")
            this.msmTemp.macro = this.msmTemp.macro.id;
        this.emCriacao = false;
    };
    MacroSuperMacroComponent.prototype.reset = function () {
        this.emCriacao = false;
        this.msmTemp = _macro_super_macro__WEBPACK_IMPORTED_MODULE_7__["MacroSuperMacro"].generate();
    };
    MacroSuperMacroComponent.prototype.deletar = function (msm) {
        var _this = this;
        if (confirm("Deseja excuir esta Diretiva?")) {
            this.editavel = false;
            this.macroSuperMacroService.delete(msm)
                .then(function (response) {
                _this.msmTemp = _macro_super_macro__WEBPACK_IMPORTED_MODULE_7__["MacroSuperMacro"].generate();
                _this.editavel = true;
                _this.emCriacao = false;
            })
                .catch(function (response) {
                //this.erroAviso = true;
                _this.aviso = _this.erroHttp(response);
                _this.status = _this.ERROR;
                alert(_this.aviso);
            });
        }
    };
    MacroSuperMacroComponent.prototype.concluirEdicao = function () {
        var _this = this;
        this.editavel = false;
        if (this.msmTemp.id) {
            this.macroSuperMacroService.update(this.msmTemp)
                .then(function (response) {
                _this.msmTemp = _macro_super_macro__WEBPACK_IMPORTED_MODULE_7__["MacroSuperMacro"].generate();
                _this.editavel = true;
                _this.emCriacao = false;
            })
                .catch(function (response) {
                //this.erroAviso = true;
                _this.aviso = _this.erroHttp(response);
                _this.status = _this.ERROR;
                alert(_this.aviso);
            });
        }
        else {
            this.macroSuperMacroService.create(this.msmTemp)
                .then(function (response) {
                _this.msmTemp = _macro_super_macro__WEBPACK_IMPORTED_MODULE_7__["MacroSuperMacro"].generate();
                _this.editavel = true;
                _this.emCriacao = false;
            })
                .catch(function (response) {
                //this.erroAviso = true;
                _this.aviso = _this.erroHttp(response);
                _this.status = _this.ERROR;
                alert(_this.aviso);
            });
        }
    };
    MacroSuperMacroComponent.prototype.changeOrder = function (ord1, ord2) {
        var _this = this;
        this.editavel = false;
        this.macroSuperMacroService.order(ord1, ord2, this.superMacro)
            .then(function (response) {
            _this.editavel = true;
        })
            .catch(function (response) {
            //this.erroAviso = true;
            _this.aviso = _this.erroHttp(response);
            _this.status = _this.ERROR;
            alert(_this.aviso);
        });
    };
    MacroSuperMacroComponent.prototype.ngOnInit = function () {
        this.reset();
        // requer ancestral chamar "macroService.getMacros()"		
    };
    MacroSuperMacroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-macro-super-macro',
            template: __webpack_require__(/*! ./macro-super-macro.component.html */ "./src/app/super-macro/macro-super-macro/macro-super-macro.component.html"),
            styles: [__webpack_require__(/*! ./macro-super-macro.component.less */ "./src/app/super-macro/macro-super-macro/macro-super-macro.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_macro_super_macro_service__WEBPACK_IMPORTED_MODULE_3__["MacroSuperMacroService"], src_app_super_macro_service__WEBPACK_IMPORTED_MODULE_6__["SuperMacroService"], src_app_macro_service__WEBPACK_IMPORTED_MODULE_4__["MacroService"]])
    ], MacroSuperMacroComponent);
    return MacroSuperMacroComponent;
}(src_app_abstract_component_child__WEBPACK_IMPORTED_MODULE_2__["AbstractComponentChild"]));



/***/ }),

/***/ "./src/app/super-macro/macro-super-macro/macro-super-macro.ts":
/*!********************************************************************!*\
  !*** ./src/app/super-macro/macro-super-macro/macro-super-macro.ts ***!
  \********************************************************************/
/*! exports provided: MacroSuperMacro */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MacroSuperMacro", function() { return MacroSuperMacro; });
var MacroSuperMacro = /** @class */ (function () {
    function MacroSuperMacro(id, ordem, campo, operador, valor, macro, super_macro) {
        if (typeof id == "number") {
            this.id = id;
            this.ordem = ordem;
            this.campo = campo;
            this.operador = operador;
            this.valor = valor;
            this.macro = macro;
            this.super_macro = super_macro;
        }
        else {
            this.id = id['id'];
            this.ordem = id['ordem'];
            this.campo = id['campo'];
            this.operador = id['operador'];
            this.valor = id['valor'];
            this.macro = id['macro_id'];
            this.super_macro = id['super_macro_id'];
        }
    }
    MacroSuperMacro.generate = function () {
        return new MacroSuperMacro(0, 0, "", "", "", 0, 0);
    };
    MacroSuperMacro.generateList = function (list) {
        var macroSuperMacros = [];
        for (var i = 0; i < list.length; i++) {
            var sm = new MacroSuperMacro(list[i]);
            macroSuperMacros.push(sm);
        }
        return macroSuperMacros;
    };
    MacroSuperMacro.generateListPlus = function (list, macros, macrosIndex, superMacroIndex) {
        var macroSuperMacros = [];
        for (var i = 0; i < list.length; i++) {
            var msm = new MacroSuperMacro(list[i]);
            msm.super_macro = superMacroIndex.get(msm.super_macro);
            msm.macro = macros[macrosIndex[msm.macro]];
            macroSuperMacros.push(msm);
        }
        return macroSuperMacros;
    };
    MacroSuperMacro.prototype.getPost = function () {
        var macro_id = this.macro;
        var super_macro_id = this.super_macro;
        if (this.macro && typeof this.macro == 'object')
            macro_id = this.macro.id;
        if (this.super_macro && typeof this.super_macro == 'object')
            super_macro_id = this.super_macro.id;
        return {
            id: this.id,
            ordem: this.ordem,
            campo: this.campo,
            operador: this.operador,
            valor: this.valor,
            macro_id: macro_id,
            super_macro_id: super_macro_id,
        };
    };
    MacroSuperMacro.prototype.clone = function () {
        return new MacroSuperMacro(this.id, this.ordem, this.campo, this.operador, this.valor, this.macro, this.super_macro);
    };
    return MacroSuperMacro;
}());



/***/ }),

/***/ "./src/app/super-macro/super-macro.component.html":
/*!********************************************************!*\
  !*** ./src/app/super-macro/super-macro.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n        Super Macros\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-4\"  style=\"padding-right: 0px; border-right: 1px solid #ddd\">\n            <div>\n                <table class=\"table\" style=\"margin-bottom: 0px\">\n                    <colgroup>\n                        <col width=\"40px\"/>\n                        <col width=\"100%\"/>\n                        <col width=\"39px\"/>\n                        <col width=\"39px\"/>\n                        <col width=\"15px\"/>\n                    </colgroup>\n                    <thead class=\"thead-light\">\n                        <tr>\n                            <th>#</th>\n                            <th class=\"celula-trunca-texto\" title=\"Descrição da Super Macro\">Descrição</th>\n                            <th></th>\n                            <th></th>\n                            <th></th>\n                        </tr>\n                    </thead>\n                </table>\n            </div>\n            <div redimensionar=\"259\" style=\"overflow-y: scroll;\">\n                <table class=\"table\">\n                    <colgroup>\n                        <col width=\"40px\"/>\n                        <col width=\"100%\"/>\n                        <col width=\"39px\"/>\n                        <col width=\"39px\"/>\n                    </colgroup>\n                    <tbody>\n                        <tr *ngFor=\"let sm of superMacros\"  class=\"clickable-row\" (click)=\"selecionar(sm)\" [ngClass]=\"{'linha-selecionada': sm.id == superMacroSelecionada.id}\">\n                            <td>{{sm.id}}</td>\n                            <td class=\"celula-trunca-texto\" title=\"{{sm.descricao}}\">{{sm.descricao}}</td>\n                            <td class=\"celula-trunca-texto\" title=\"Editar\">\n                                <button style=\"text-align: center; margin-left: 2px;\" title=\"Editar\" type=\"button\" class=\"btn btn-info botao-reduzido\"  data-toggle=\"modal\" data-target=\"#dialogCreateSM\" (click)=\"selecionar(sm)\" [disabled]=\"!editavel\">\n                                    <span class=\"glyphicon glyphicon-edit\"></span>\n                                </button>\n                            </td>\n                            <td class=\"celula-trunca-texto\" title=\"Excluir\">\n                                <button style=\"text-align: center; margin-left: 2px;\" title=\"Excluir\" type=\"button\" class=\"btn btn-danger botao-reduzido\" (click)=\"removeSM(sm)\" [disabled]=\"!editavel\">\n                                    <span class=\"glyphicon glyphicon-remove\"></span>\n                                </button>\n                            </td>\n                        </tr>\n                    </tbody>\n                    <tfoot class=\"status-tabela\">\n                        <tr *ngIf=\"status == LOADING\"><td colspan=\"4\"><i>Carregando Super Macros...</i></td></tr>\n                        <tr *ngIf=\"superMacros != null && superMacros.length == 0 && status == COMPLETE\"><td colspan=\"4\"><i>Não Há Super Macros para serem listadas</i></td></tr>\n                        <tr *ngIf=\"status == ERROR && superMacros.length == 0\"><td class=\"erro\" colspan=\"4\"><i>Falha na obtenção de Super Macros!</i></td></tr>\n                    </tfoot>\n                </table>\n            </div>\n            <div class=\"panel-footer\">\n                <button type=\"button\" class=\"btn btn-primary botao-barra\" style=\"width: 150px;\" data-toggle=\"modal\" data-target=\"#dialogCreateSM\" (click)=\"novaSM()\" [disabled]=\"!editavel\">Nova Super Macro</button>\n            </div>\n        </div>\n        <div class=\"col-md-8\" style=\"padding-left: 0px;\">\n            <div class=\"barra-titulo\">\n                <table class=\"table\">\n                    <tbody>\n                        <tr>\n                            <td colspan=\"3\" class=\"celula-trunca-texto\" style=\"text-align: center;\">\n                                <h4 *ngIf=\"superMacroSelecionada.id == 0\" style=\"display: inline-block; color: gray;\" title=\"\"><i>Selecione uma Super Macro...</i></h4>\n                                <h4 *ngIf=\"superMacroSelecionada.id > 0\" style=\"display: inline-block\" title=\"\">Super Macro: <b>{{superMacroSelecionada.descricao}}</b> (Macro Padrão: <b>{{superMacroSelecionada.macro_padrao.nome}}</b>)</h4>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            <div>\n                <app-macro-super-macro [ancestral]=\"eu\">Carregando...</app-macro-super-macro>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"dialogCreateSM\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialogCreateSMTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Nova Super Macro</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <fieldset>\n                    <form id=\"superMacroForm\" class=\"form-group\" style=\"text-align: left; width: 400px; margin: 15px auto;\" (submit)=\"criarAlterarSuperMacro($event)\">\n                        <div class=\"alert alert-info\" [ngClass]=\"{'alert-info': !erroAviso, 'alert-danger': erroAviso}\" *ngIf=\"aviso\">\n                            <strong *ngIf=\"!erroAviso\">Informação!</strong><strong *ngIf=\"erroAviso\">Falha!</strong> {{aviso}}\n                        </div>\n                        <label class=\"style1\">Descrição: *</label><br>\n                        <input class=\"form-control\" type=\"text\" name=\"descricao\" [(ngModel)]=\"superMacroSelecionada.descricao\" size=\"60\" [disabled]=\"!editavel\" required><p></p>\n                        <label class=\"style1\">Macro Padrão</label><br>\n                        <select class=\"form-control\" name=\"macro-padrao\" [(ngModel)]=\"macroPadraoIdTemp\" (change)=\"aplicarMacroPadrao()\" [disabled]=\"!editavel\" required>   \n                            <option hidden disabled [value]=\"0\" selected> -- Selecione -- </option>  \n                            <option *ngFor=\"let m of macros\" [value]=\"m.id\">{{m.nome}}</option>       \n                        </select><br>\n                    </form>\n                </fieldset>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"submit\" form=\"superMacroForm\" class=\"btn btn-primary botao-barra\"  [disabled]=\"!editavel\">Enviar</button>\n                <button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\">Fechar</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/super-macro/super-macro.component.less":
/*!********************************************************!*\
  !*** ./src/app/super-macro/super-macro.component.less ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyLW1hY3JvL3N1cGVyLW1hY3JvLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/super-macro/super-macro.component.ts":
/*!******************************************************!*\
  !*** ./src/app/super-macro/super-macro.component.ts ***!
  \******************************************************/
/*! exports provided: SuperMacroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperMacroComponent", function() { return SuperMacroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstract-component */ "./src/app/abstract-component.ts");
/* harmony import */ var _macro_super_macro_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../macro-super-macro.service */ "./src/app/macro-super-macro.service.ts");
/* harmony import */ var _macro_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../macro.service */ "./src/app/macro.service.ts");
/* harmony import */ var _periodo_letivos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../periodo-letivos.service */ "./src/app/periodo-letivos.service.ts");
/* harmony import */ var _super_macro_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../super-macro.service */ "./src/app/super-macro.service.ts");
/* harmony import */ var _super_macro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./super-macro */ "./src/app/super-macro/super-macro.ts");








var SuperMacroComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SuperMacroComponent, _super);
    function SuperMacroComponent(superMacroService, macroService, periodoLetivosService, macroSuperMacroService) {
        var _this = _super.call(this) || this;
        _this.superMacroService = superMacroService;
        _this.macroService = macroService;
        _this.periodoLetivosService = periodoLetivosService;
        _this.macroSuperMacroService = macroSuperMacroService;
        _this.macroPadraoIdTemp = 0;
        _this.superMacroSelecionada = _super_macro__WEBPACK_IMPORTED_MODULE_7__["SuperMacro"].generate();
        return _this;
    }
    Object.defineProperty(SuperMacroComponent.prototype, "superMacroSelecionada", {
        get: function () {
            return this.superMacroService.superMacroSelecionada;
        },
        set: function (superMacroSelecionada) {
            this.superMacroService.superMacroSelecionada = superMacroSelecionada;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuperMacroComponent.prototype, "superMacros", {
        get: function () {
            return this.superMacroService.superMacros;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuperMacroComponent.prototype, "macros", {
        get: function () {
            return this.macroService.macros;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuperMacroComponent.prototype, "eu", {
        get: function () {
            return this;
        },
        enumerable: true,
        configurable: true
    });
    SuperMacroComponent.prototype.criarAlterarSuperMacro = function (ev) {
        ev.preventDefault();
        var superMacroForm = jQuery('#superMacroForm')[0];
        if (superMacroForm.reportValidity()) {
            if (this.superMacroSelecionada.id)
                this.alteraSM();
            else
                this.criaSM();
        }
    };
    SuperMacroComponent.prototype.aplicarMacroPadrao = function () {
        this.superMacroSelecionada.macro_padrao = this.macroService.macros[this.macroService.macrosIndex[this.macroPadraoIdTemp]];
    };
    SuperMacroComponent.prototype.novaSM = function () {
        this.superMacroSelecionada = _super_macro__WEBPACK_IMPORTED_MODULE_7__["SuperMacro"].generate();
        this.macroPadraoIdTemp = 0;
        this.aviso = "";
    };
    SuperMacroComponent.prototype.selecionar = function (superMacro) {
        var _this = this;
        this.superMacroSelecionada = superMacro.clone();
        this.macroPadraoIdTemp = (superMacro.macro_padrao).id;
        this.aviso = "";
        this.macroSuperMacroService.listar(this.superMacroSelecionada)
            .then(function (response) {
        })
            .catch(function (response) {
            alert(_this.erroHttp(response));
            _this.status = _this.ERROR;
        });
    };
    SuperMacroComponent.prototype.criaSM = function () {
        var _this = this;
        this.editavel = false;
        this.superMacroService.create(this.superMacroSelecionada)
            .then(function (response) {
            jQuery('#dialogCreateSM').modal('hide');
            _this.editavel = true;
        })
            .catch(function (response) {
            _this.aviso = _this.erroHttp(response);
            alert(_this.aviso);
            _this.editavel = true;
        });
    };
    SuperMacroComponent.prototype.alteraSM = function () {
        var _this = this;
        this.editavel = false;
        this.superMacroService.update(this.superMacroSelecionada)
            .then(function (response) {
            jQuery('#dialogCreateSM').modal('hide');
            _this.editavel = true;
        })
            .catch(function (response) {
            _this.aviso = _this.erroHttp(response);
            alert(_this.aviso);
            _this.editavel = true;
        });
    };
    SuperMacroComponent.prototype.removeSM = function (superMacro) {
        var _this = this;
        if (confirm("Confirmar exclusão da Super Macro '" + superMacro.descricao + "'?"))
            this.superMacroService.delete(superMacro)
                .then(function (response) {
                _this.superMacroService.listar();
                _this.novaSM();
            })
                .catch(function (r) {
                alert(_this.erroHttp(r));
            });
    };
    SuperMacroComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.periodoLetivosService.getPeriodoLetivos()
            .then(function (response) {
            _this.macroService.getMacros()
                .then(function (response) {
                _this.superMacroService.listar()
                    .then(function (response) {
                    _this.status = _this.COMPLETE;
                    _this.editavel = true;
                })
                    .catch(function (response) {
                    _this.erroAviso = true;
                    _this.aviso = _this.erroHttp(response);
                    _this.status = _this.ERROR;
                    alert(_this.aviso);
                });
            })
                .catch(function (response) {
                _this.erroAviso = true;
                _this.aviso = _this.erroHttp(response);
                _this.status = _this.ERROR;
                alert(_this.aviso);
            });
        })
            .catch(function (response) {
            _this.erroAviso = true;
            _this.aviso = _this.erroHttp(response);
            _this.status = _this.ERROR;
            alert(_this.aviso);
        });
    };
    SuperMacroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-super-macro',
            template: __webpack_require__(/*! ./super-macro.component.html */ "./src/app/super-macro/super-macro.component.html"),
            styles: [__webpack_require__(/*! ./super-macro.component.less */ "./src/app/super-macro/super-macro.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_super_macro_service__WEBPACK_IMPORTED_MODULE_6__["SuperMacroService"], _macro_service__WEBPACK_IMPORTED_MODULE_4__["MacroService"],
            _periodo_letivos_service__WEBPACK_IMPORTED_MODULE_5__["PeriodoLetivosService"], _macro_super_macro_service__WEBPACK_IMPORTED_MODULE_3__["MacroSuperMacroService"]])
    ], SuperMacroComponent);
    return SuperMacroComponent;
}(_abstract_component__WEBPACK_IMPORTED_MODULE_2__["AbstractComponent"]));



/***/ }),

/***/ "./src/app/super-macro/super-macro.ts":
/*!********************************************!*\
  !*** ./src/app/super-macro/super-macro.ts ***!
  \********************************************/
/*! exports provided: SuperMacro */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperMacro", function() { return SuperMacro; });
var SuperMacro = /** @class */ (function () {
    function SuperMacro(id, descricao, macro_padrao) {
        if (typeof id == "number") {
            this.id = id;
            this.descricao = descricao;
            this.macro_padrao = macro_padrao;
        }
        else {
            this.id = id['id'];
            this.descricao = id['descricao'];
            this.macro_padrao = id['macro_padrao_id'];
        }
    }
    SuperMacro.generate = function () {
        return new SuperMacro(0, "", 0);
    };
    SuperMacro.generateList = function (list) {
        var superMacros = [];
        for (var i = 0; i < list.length; i++) {
            var sm = new SuperMacro(list[i]);
            superMacros.push(sm);
        }
        return superMacros;
    };
    SuperMacro.generateListPlus = function (list, macros, macrosIndex) {
        var superMacros = [];
        for (var i = 0; i < list.length; i++) {
            var sm = new SuperMacro(list[i]);
            sm.macro_padrao = macros[macrosIndex[sm.macro_padrao]];
            superMacros.push(sm);
        }
        return superMacros;
    };
    SuperMacro.prototype.clone = function () {
        return new SuperMacro(this.id, this.descricao, this.macro_padrao);
    };
    return SuperMacro;
}());



/***/ }),

/***/ "./src/app/theme.service.ts":
/*!**********************************!*\
  !*** ./src/app/theme.service.ts ***!
  \**********************************/
/*! exports provided: ThemeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeService", function() { return ThemeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _agenda_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./agenda/theme */ "./src/app/agenda/theme.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var ThemeService = /** @class */ (function () {
    function ThemeService(router) {
        this.router = router;
        this.theme$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.themes = _agenda_theme__WEBPACK_IMPORTED_MODULE_3__["Theme"].getThemes();
    }
    ThemeService.prototype.getThemes = function () {
        return _agenda_theme__WEBPACK_IMPORTED_MODULE_3__["Theme"].getThemes();
    };
    ThemeService.prototype.setTheme = function (theme) {
        if (theme === undefined || theme === null || theme == "") {
            theme = (theme === null || theme === undefined || theme === "" ? "luna-green" : theme);
        }
        this.selectedTheme = theme;
        var ft = this.findTheme(this.selectedTheme);
        var d = document.getElementById('themeStyleSheet');
        d.setAttribute('href', this.getThemePath(theme));
        this.setNewTheme(ft);
    };
    ThemeService.prototype.findTheme = function (themeName) {
        var theme;
        for (var _i = 0, _a = this.getThemes(); _i < _a.length; _i++) {
            var t = _a[_i];
            if (t.name === themeName) {
                theme = t;
                break;
            }
        }
        return theme;
    };
    ThemeService.prototype.getThemePath = function (theme) {
        var path = "";
        for (var _i = 0, _a = this.getThemes(); _i < _a.length; _i++) {
            var t = _a[_i];
            if (t.name === theme) {
                path = t.path;
                break;
            }
        }
        return path;
    };
    ThemeService.prototype.getAppPageHeaderDivStyle = function () {
        var style = { "border-width": "1px", "border-style": "solid", "border-color": "", "background-color": "", "padding": "" };
        this.selectedTheme = (this.selectedTheme === null || this.selectedTheme === undefined || this.selectedTheme === "" ? "Black-Tie" : this.selectedTheme);
        var theme = this.findTheme(this.selectedTheme);
        style["border-color"] = theme.contentBorderColor;
        style["background-color"] = theme.contentBackgroundColor;
        style["padding"] = "2px";
        return style;
    };
    ThemeService.prototype.setNewTheme = function (theme) {
        this.theme$.next(theme);
    };
    ThemeService.prototype.getNewTheme = function () {
        return this.theme$.asObservable();
    };
    ThemeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ThemeService);
    return ThemeService;
}());



/***/ }),

/***/ "./src/app/unidade-organizacional.service.ts":
/*!***************************************************!*\
  !*** ./src/app/unidade-organizacional.service.ts ***!
  \***************************************************/
/*! exports provided: UnidadeOrganizacionalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnidadeOrganizacionalService", function() { return UnidadeOrganizacionalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _array_indexador__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./array-indexador */ "./src/app/array-indexador.ts");
/* harmony import */ var _arvore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./arvore */ "./src/app/arvore.ts");
/* harmony import */ var _pl_disciplinas_academicos_estudante__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pl-disciplinas-academicos/estudante */ "./src/app/pl-disciplinas-academicos/estudante.ts");
/* harmony import */ var _unidade_organizacional_unidade_organizacional__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./unidade-organizacional/unidade-organizacional */ "./src/app/unidade-organizacional/unidade-organizacional.ts");







var UnidadeOrganizacionalService = /** @class */ (function () {
    function UnidadeOrganizacionalService(http) {
        this.http = http;
        this.ouDirRoot = "";
        this.ou_str = "OU=";
        this.arvoreOU = new _arvore__WEBPACK_IMPORTED_MODULE_4__["Arvore"](0, null);
        this.unidadesOrganizacionais = [];
        this.unidadesOrganizacionaisIndex = null;
    }
    UnidadeOrganizacionalService.prototype.criarContasAD = function (ouCadastro, ous, estudantesJSON, senha) {
        return this.http.post("/formulario-insere-ad", { ouCadastro: ouCadastro, ous: ous, estudantes: estudantesJSON, senhaPadrao: senha })
            .toPromise()
            .then(function (response) {
            return response.text();
        });
    };
    UnidadeOrganizacionalService.prototype.alteraSenhaUsuarios = function (estudantesJSON, senha) {
        return this.http.post("/formulario-altera-usuario/password", { estudantes: estudantesJSON, senhaPadrao: senha })
            .toPromise()
            .then(function (response) {
            return response.text();
        });
    };
    UnidadeOrganizacionalService.prototype.listar = function () {
        var _this_1 = this;
        return this.http.get("/unidade-organizacional/all")
            .toPromise()
            .then(function (response) {
            _this_1.unidadesOrganizacionais = _unidade_organizacional_unidade_organizacional__WEBPACK_IMPORTED_MODULE_6__["UnidadeOrganizacional"].generateList(response.json());
            _this_1.unidadesOrganizacionaisIndex = new _array_indexador__WEBPACK_IMPORTED_MODULE_3__["ArrayIndexador"](_this_1.unidadesOrganizacionais);
            return _this_1.unidadesOrganizacionais;
        });
    };
    UnidadeOrganizacionalService.prototype.create = function (ou) {
        var _this_1 = this;
        return this.http.post("/unidade-organizacional", ou)
            .toPromise()
            .then(function (response) {
            return _this_1.listar();
        });
    };
    UnidadeOrganizacionalService.prototype.update = function (ou) {
        var _this_1 = this;
        return this.http.put("/unidade-organizacional/" + ou.id, ou)
            .toPromise()
            .then(function (response) {
            return _this_1.listar();
        });
    };
    UnidadeOrganizacionalService.prototype.delete = function (ou) {
        var _this_1 = this;
        return this.http.delete("/unidade-organizacional/" + ou.id)
            .toPromise()
            .then(function (response) {
            return _this_1.listar();
        });
    };
    UnidadeOrganizacionalService.prototype.getOuDirRoot = function () {
        var _this_1 = this;
        return this.http.get("/unidade-organizacional/ou-dir-root")
            .toPromise()
            .then(function (response) {
            _this_1.ouDirRoot = response.text();
            return _this_1.ouDirRoot;
        });
    };
    UnidadeOrganizacionalService.prototype.setOuDirRoot = function (ouDirRoot) {
        var _this_1 = this;
        return this.http.post("/unidade-organizacional/ou-dir-root", { "ou-dir-root": ouDirRoot })
            .toPromise()
            .then(function (response) {
            _this_1.ouDirRoot = response.text();
            return _this_1.ouDirRoot;
        });
    };
    UnidadeOrganizacionalService.prototype.substituiEmailsPorPadrao = function (estudantesJSON) {
        return this.http.post("/formulario-insere-ad/substitui-emails", { estudantes: estudantesJSON }).toPromise()
            .then(function (response) {
            var estudantes = _pl_disciplinas_academicos_estudante__WEBPACK_IMPORTED_MODULE_5__["Estudante"].converteObjectParaEstudantesComSenha(response.json());
            return estudantes;
        });
    };
    UnidadeOrganizacionalService.prototype.processaFilhas = function (filhas) {
        var sortFunctionPorDado = function (a1, a2) {
            if (a1.dado.toLowerCase() == a2.dado.toLowerCase())
                return 0;
            return a1.dado.toLowerCase() < a2.dado.toLowerCase() ? -1 : 1;
        };
        var ous = {};
        var arvoreDir = new _arvore__WEBPACK_IMPORTED_MODULE_4__["Arvore"](0, this.ouDirRoot);
        arvoreDir.sortFilhosArray = sortFunctionPorDado;
        var incrementador = 0;
        for (var i = 0; i < filhas.length; i++) {
            var arvore = arvoreDir;
            for (var j = 0; j < filhas[i].length; j++) {
                var nodo = null;
                if (!ous.hasOwnProperty(filhas[i][j] + "-" + arvore.id + "-" + (j + 1))) {
                    ous[filhas[i][j] + "-" + arvore.id + "-" + (j + 1)] = ++incrementador;
                    nodo = new _arvore__WEBPACK_IMPORTED_MODULE_4__["Arvore"](incrementador, filhas[i][j]);
                    nodo.sortFilhosArray = sortFunctionPorDado;
                    arvore.insert(nodo);
                }
                else {
                    nodo = arvore.find(ous[filhas[i][j] + "-" + arvore.id + "-" + (j + 1)]);
                }
                arvore = nodo;
            }
        }
        return arvoreDir;
    };
    UnidadeOrganizacionalService.prototype.getOuFilhas = function () {
        var _this_1 = this;
        return this.http.get("/unidade-organizacional/ous-filhas")
            .toPromise()
            .then(function (response) {
            var ouRoot = _this_1.ouDirRoot;
            var _this = _this_1;
            var ouFilhas = response.json().map(function (ou) {
                if (ou == ouRoot)
                    return [];
                _this.ou_str = ou.search("OU=") >= 0 ? "OU=" : (ou.search("Ou=") >= 0 ? "Ou=" : "ou=");
                var ret = ou.replace("," + ouRoot, "").split(_this.ou_str);
                ret.splice(0, 1);
                for (var i = 0; i < ret.length - 1; i++)
                    ret[i] = ret[i].substring(0, ret[i].length - 1);
                return ret.reverse();
            });
            _this_1.arvoreOU = _this_1.processaFilhas(ouFilhas);
            return _this_1.arvoreOU;
        });
    };
    UnidadeOrganizacionalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], UnidadeOrganizacionalService);
    return UnidadeOrganizacionalService;
}());



/***/ }),

/***/ "./src/app/unidade-organizacional/formulario-alteracao-usuario/formulario-alteracao-usuario.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/unidade-organizacional/formulario-alteracao-usuario/formulario-alteracao-usuario.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-md-8\" style=\"margin: auto; float: initial;\">\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-heading\">Formulario de Alteração de Senhas de Usuários no AD</div>\n\t\t\t<div style=\"margin: 15px 15px 15px 15px;\" *ngIf=\"estudantes.length == 0\">\n\t\t\t\t<table>\n\t\t\t\t\t<colgroup>\n\t\t\t\t\t\t<col width=\"30%\" />\n\t\t\t\t\t\t<col width=\"10%\" />\n\t\t\t\t\t\t<col width=\"25%\" />\n\t\t\t\t\t\t<col width=\"10%\" />\n\t\t\t\t\t\t<col width=\"25%\" />\n\t\t\t\t\t</colgroup>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<label class=\"style1\"><span>Carregar Estudantes: </span></label>\n\t\t\t\t\t\t\t<button data-toggle=\"modal\" data-target=\"#dialogAjudaEstudantes\"\n\t\t\t\t\t\t\t\tclass=\"btn btn-info botao-tooltip\"><span\n\t\t\t\t\t\t\t\t\tclass=\"glyphicon glyphicon-info-sign\"></span></button>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"custom-file col-md-3\" style=\"width: 150px;\">\n\t\t\t\t\t\t\t\t<input type=\"file\" class=\"custom-file-input\" id=\"customFile\"\n\t\t\t\t\t\t\t\t\t(change)=\"lerAlunosCSV($event)\" [disabled]=\"!editavel\">\n\t\t\t\t\t\t\t\t<label class=\"custom-file-label btn btn-primary\" [ngClass]=\"{'disabled': !editavel}\"\n\t\t\t\t\t\t\t\t\tfor=\"customFile\">Arquivo CSV</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary botao-barra\" style=\"width: 150px; margin-left: 5px;\" data-toggle=\"modal\" data-target=\"#dialogBuscaImport\" [disabled]=\"!editavel\">SIGECAD</button>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\n\t\t\t</div>\n\n\t\t\t<table class=\"table\">\n\t\t\t\t<colgroup>\n\t\t\t\t\t<col width=\"105px\" />\n\t\t\t\t\t<col width=\"50%\" />\n\t\t\t\t\t<col width=\"50%\" />\n\t\t\t\t\t<col width=\"100px\" />\n\t\t\t\t\t<col width=\"36px\" />\n\t\t\t\t\t<col width=\"17px\" />\n\t\t\t\t</colgroup>\n\t\t\t\t<thead class=\"thead-light\">\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>USER</th>\n\t\t\t\t\t\t<th>EMAIL</th>\n\t\t\t\t\t\t<th>NOME</th>\n\t\t\t\t\t\t<th>SENHA</th>\n\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t<button style=\"text-align: center;\" title=\"Limpar Todos\" type=\"button\"\n\t\t\t\t\t\t\t\tclass=\"btn btn-danger botao-reduzido\" (click)=\"limparEstudantes()\"\n\t\t\t\t\t\t\t\t[disabled]=\"!editavel\">\n\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-trash\"></span>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th></th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t</table>\n\t\t\t<div [redimensionar]=\"estudantes.length == 0 ? 327 : 263\" style=\"overflow-y: scroll;\">\n\t\t\t\t<table class=\"table\">\n\t\t\t\t\t<colgroup>\n\t\t\t\t\t\t<col width=\"105px\" />\n\t\t\t\t\t\t<col width=\"50%\" />\n\t\t\t\t\t\t<col width=\"50%\" />\n\t\t\t\t\t\t<col width=\"200px\" />\n\t\t\t\t\t\t<col width=\"36px\" />\n\t\t\t\t\t</colgroup>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr *ngFor=\"let e of estudantes\">\n\t\t\t\t\t\t\t<td class=\"celula-trunca-texto\" title=\"{{e.username}}\">{{e.username}}</td>\n\t\t\t\t\t\t\t<td class=\"celula-trunca-texto\" style=\"color: #cdcdcd;\" title=\"{{e.email}}\">{{e.email}}</td>\n\t\t\t\t\t\t\t<td class=\"celula-trunca-texto\" style=\"color: #cdcdcd;\" title=\"{{e.fullname}}\">{{e.fullname}}</td>\n\t\t\t\t\t\t\t<td class=\"celula-trunca-texto\" title=\"{{e.senha}}\">{{e.senha}}</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<button style=\"text-align: center;\" title=\"Remover\" type=\"button\"\n\t\t\t\t\t\t\t\t\tclass=\"btn btn-danger botao-reduzido\" (click)=\"removerEstudante(e)\"\n\t\t\t\t\t\t\t\t\t[disabled]=\"!editavel\">\n\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-remove\"></span>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t\t<div class=\"panel-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary botao-barra\" data-toggle=\"modal\"\n\t\t\t\t\tdata-target=\"#dialogCreateEstudante\" (click)=\"novoEstudante()\" [disabled]=\"!editavel\">Novo</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-warning botao-barra\" data-toggle=\"modal\" style=\"float: right;\"\n\t\t\t\t\tdata-target=\"#dialogExportarEstudante\" [disabled]=\"!editavel || estudantes.length == 0\">Exportar</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"modal fade\" id=\"dialogCreateEstudante\" tabindex=\"-1\" role=\"dialog\" data-backdrop=\"static\"\n\taria-labelledby=\"dialogCreateEstudanteTitle\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h5 class=\"modal-title\">Estudante</h5>\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\" style=\"width: 350px;\">\n\t\t\t\t<label class=\"style1\">Usuário *</label><br>\n\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"username\" placeholder=\"11122233344\"\n\t\t\t\t\t[(ngModel)]=\"estudanteTemp.username\" size=\"60\">\n\t\t\t\t<p></p>\n\n\t\t\t\t<!--label class=\"style1\">E-mail: *</label><br>\n\t\t\t\t<input class=\"form-control\" type=\"email\" name=\"email\" placeholder=\"user@email.com\"\n\t\t\t\t\t[(ngModel)]=\"estudanteTemp.email\" size=\"60\">\n\t\t\t\t<p></p>\n\n\t\t\t\t<label class=\"style1\">Nome Completo: *</label><br>\n\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"fullname\" placeholder=\"Fulano da Silva\"\n\t\t\t\t\t[(ngModel)]=\"estudanteTemp.fullname\" size=\"60\">\n\t\t\t\t<p></p-->\n\n\t\t\t\t<label class=\"style1\">Senha: </label><br>\n\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"senha\" placeholder=\"********\"\n\t\t\t\t\t[(ngModel)]=\"estudanteTemp.senha\" size=\"60\">\n\t\t\t\t<p></p>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary botao-barra\"\n\t\t\t\t\t(click)=\"adicionarEstudante()\">Adicionar</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\">Fechar</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"modal fade\" id=\"dialogExportarEstudante\" tabindex=\"-1\" role=\"dialog\" data-backdrop=\"static\" aria-labelledby=\"dialogExportarEstudanteTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\">Alterar Senha...</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\" style=\"width: 500px;\">\n\t\t\t\t<label class=\"style1\">Senha Padrão: </label>\n\t\t\t\t<table style=\"width: 100%;\">\n\t\t\t\t\t<colgroup>\n\t\t\t\t\t\t<col width=\"50px\"/>\n\t\t\t\t\t\t<col width=\"10%\"/>\n\t\t\t\t\t\t<col width=\"90%\"/>\n\t\t\t\t\t</colgroup>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<span class=\"big-check\">\n\t\t\t\t\t\t\t\t<input  type=\"checkbox\" name=\"pl-ativo\" [(ngModel)]=\"usarSenha\" [disabled]=\"!editavel\">\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"senha-padrao\" [disabled]=\"!usarSenha\" placeholder=\"********\" [(ngModel)]=\"senhaPadrao\" size=\"30\">\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\n\t\t\t\t<p></p>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-success botao-barra\" (click)=\"alterarSenhasUsuariosAD()\" [disabled]=\"!editavel\">Executar</button>\n                <button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\" [disabled]=\"!editavel\">Cancelar</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"dialogExportResult\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialogExportResultTitle\"\n\taria-hidden=\"true\">\n\t<div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Resposta do Servidor</h5>\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\" style=\"width: 700px;\">\n\t\t\t\t<div class=\"alert alert-info\" [ngClass]=\"{'alert-info': !erroAviso, 'alert-danger': erroAviso}\"\n\t\t\t\t\t*ngIf=\"aviso\">\n\t\t\t\t\t<strong *ngIf=\"!erroAviso\">Informação!</strong><strong *ngIf=\"erroAviso\">Falha!</strong> {{aviso}}\n\t\t\t\t</div>\n\t\t\t\t<div redimensionar=\"300\" style=\"max-height: 500px;\" id=\"saidaExport\"></div>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\"\n\t\t\t\t\t[disabled]=\"!editavel\">Fechar</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"modal fade\" id=\"dialogBuscaImport\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialogBuscaImportTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n\t\t\t\t<h5 class=\"modal-title\">Carregar Estudantes do SIGECAD</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\" style=\"width: 800px;\">\n                <app-obtem-plda [ancestral]=\"eu\">Carregando...</app-obtem-plda>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-success botao-barra\" (click)=\"carregarEstudantesSigecad()\" [disabled]=\"!editavel || plDisciplinasAcademicosTemp.disciplina == ''\">Carregar</button>\n                <button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\">Fechar</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"dialogAjudaEstudantes\" tabindex=\"-1\" role=\"dialog\"\n\taria-labelledby=\"dialogAjudaEstudantesTitle\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\" style=\"width: 660px;\">\n\t\t\t\t<b>Selecionar um Arquivo CSV: </b><br>\n\t\t\t\timporta um arquivo CSV que contêm os usuários; o formato do arquivo deve seguir algum dos seguintes\n\t\t\t\tpadrões:<br>\n\t\t\t\t<pre style=\"font-size: 12px;\">\nusername,email,fullname,password\n11122233344,fulano.silva111@academico.ufgd.edu.br,Fulano da Silva,12345678\nBeltranoOliveira,BeltranoOliveira@ufgd.edu.br,Beltrano dos Santos Oliveira,00000000</pre>\n\t\t\t\tou\n\t\t\t\t<pre style=\"font-size: 12px;\">\nusername,email,fullname\n11122233344,fulano.silva111@academico.ufgd.edu.br,Fulano da Silva\nBeltranoOliveira,BeltranoOliveira@ufgd.edu.br,Beltrano dos Santos Oliveira</pre>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\">Fechar</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/unidade-organizacional/formulario-alteracao-usuario/formulario-alteracao-usuario.component.less":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/unidade-organizacional/formulario-alteracao-usuario/formulario-alteracao-usuario.component.less ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VuaWRhZGUtb3JnYW5pemFjaW9uYWwvZm9ybXVsYXJpby1hbHRlcmFjYW8tdXN1YXJpby9mb3JtdWxhcmlvLWFsdGVyYWNhby11c3VhcmlvLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/unidade-organizacional/formulario-alteracao-usuario/formulario-alteracao-usuario.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/unidade-organizacional/formulario-alteracao-usuario/formulario-alteracao-usuario.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: FormularioAlteracaoUsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormularioAlteracaoUsuarioComponent", function() { return FormularioAlteracaoUsuarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_abstract_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/abstract-component */ "./src/app/abstract-component.ts");
/* harmony import */ var src_app_pl_disciplinas_academicos_estudante__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pl-disciplinas-academicos/estudante */ "./src/app/pl-disciplinas-academicos/estudante.ts");
/* harmony import */ var src_app_pl_disciplinas_academicos_pl_disciplinas_academicos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pl-disciplinas-academicos/pl-disciplinas-academicos */ "./src/app/pl-disciplinas-academicos/pl-disciplinas-academicos.ts");
/* harmony import */ var src_app_servidores_moodle_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/servidores-moodle.service */ "./src/app/servidores-moodle.service.ts");
/* harmony import */ var src_app_unidade_organizacional_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/unidade-organizacional.service */ "./src/app/unidade-organizacional.service.ts");







var FormularioAlteracaoUsuarioComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FormularioAlteracaoUsuarioComponent, _super);
    function FormularioAlteracaoUsuarioComponent(unidadeOrganizacionalService, servidoresMoodleService) {
        var _this_1 = _super.call(this) || this;
        _this_1.unidadeOrganizacionalService = unidadeOrganizacionalService;
        _this_1.servidoresMoodleService = servidoresMoodleService;
        _this_1.SELECAO_MEMBRO_DE = false;
        _this_1.estudantes = [];
        _this_1.estudanteTemp = src_app_pl_disciplinas_academicos_estudante__WEBPACK_IMPORTED_MODULE_3__["Estudante"].generateEstudante();
        _this_1.linksMoodles = [];
        _this_1.usarSenha = false;
        _this_1.senhaPadrao = "";
        _this_1.plDisciplinasAcademicosTemp = src_app_pl_disciplinas_academicos_pl_disciplinas_academicos__WEBPACK_IMPORTED_MODULE_4__["PlDisciplinasAcademicos"].generatePlDisciplinasAcademicos();
        _this_1.periodoLetivoSelecionadoId = "";
        _this_1.cursoSelecionadoId = "";
        _this_1.faculdadeSelecionadaId = "";
        _this_1.disciplinaSelecionadaNome = "";
        //apenas implementação da interface, não utilizados por aqui
        _this_1.plDisciplinasAcademicosTempList = [];
        _this_1.modoLista = false;
        _this_1.disciplinaSelecionadaNomes = [];
        return _this_1;
    }
    Object.defineProperty(FormularioAlteracaoUsuarioComponent.prototype, "eu", {
        get: function () {
            return this;
        },
        enumerable: true,
        configurable: true
    });
    FormularioAlteracaoUsuarioComponent.prototype.novoEstudante = function () {
        this.estudanteTemp = src_app_pl_disciplinas_academicos_estudante__WEBPACK_IMPORTED_MODULE_3__["Estudante"].generateEstudante();
    };
    FormularioAlteracaoUsuarioComponent.prototype.adicionarEstudante = function () {
        if (this.estudanteTemp.username.length) {
            this.estudantes.push(new src_app_pl_disciplinas_academicos_estudante__WEBPACK_IMPORTED_MODULE_3__["Estudante"](this.estudanteTemp.username, this.estudanteTemp.email, this.estudanteTemp.fullname, this.estudanteTemp.is_professor, this.estudanteTemp.senha));
            jQuery('#dialogCreateEstudante').modal('hide');
            this.estudanteTemp = src_app_pl_disciplinas_academicos_estudante__WEBPACK_IMPORTED_MODULE_3__["Estudante"].generateEstudante();
        }
        else
            alert("Usuário Inválido!");
    };
    FormularioAlteracaoUsuarioComponent.prototype.removerEstudante = function (estudante) {
        if (!confirm("Deseja remover este estudante"))
            return;
        var i = 0;
        for (; i < this.estudantes.length; i++) {
            if (estudante.equals(this.estudantes[i]))
                break;
        }
        if (i < this.estudantes.length) {
            this.estudantes.splice(i, 1);
        }
    };
    FormularioAlteracaoUsuarioComponent.prototype.limparEstudantes = function () {
        if (confirm("Deseja remover todos os estudantes"))
            this.estudantes = [];
    };
    FormularioAlteracaoUsuarioComponent.prototype.lerAlunosCSV = function (event) {
        var fileExtension = /.*\.csv/;
        var fileTobeRead = event.target.files[0];
        if (fileTobeRead.name.toLowerCase().match(fileExtension)) {
            var fileReader = new FileReader();
            var _this = this;
            fileReader.onload = function (e) {
                _this.estudantes = src_app_pl_disciplinas_academicos_estudante__WEBPACK_IMPORTED_MODULE_3__["Estudante"].processaCSVcomSenha(fileReader.result);
            };
            fileReader.readAsText(fileTobeRead);
        }
        else {
            alert("Por favor selecione arquivo csv");
        }
    };
    FormularioAlteracaoUsuarioComponent.prototype.alterarSenhasUsuariosAD = function () {
        var _this_1 = this;
        if (!this.estudantes.length) {
            alert("Não há usuários para redefinir senha!");
            return;
        }
        if (!confirm("Deseja alterar a senha destes usuários?"))
            return;
        jQuery('#dialogExportResult').modal('show');
        jQuery('#saidaExport').html("<i>Aguarde...<i>");
        this.editavel = false;
        this.aviso = "";
        this.unidadeOrganizacionalService.alteraSenhaUsuarios(src_app_pl_disciplinas_academicos_estudante__WEBPACK_IMPORTED_MODULE_3__["Estudante"].converteEstudantesParaJSONcomSenha(this.estudantes), this.usarSenha ? this.senhaPadrao : "")
            .then(function (response) {
            jQuery('#saidaExport').html(response);
            _this_1.editavel = true;
        })
            .catch(function (response) {
            _this_1.erroAviso = true;
            _this_1.aviso = _this_1.erroHttp(response);
            _this_1.editavel = true;
            jQuery('#saidaExport').html('<span style="color: red;">' + _this_1.aviso + "</span>");
        });
    };
    FormularioAlteracaoUsuarioComponent.prototype.carregarEstudantesSigecad = function () {
        var _this_1 = this;
        if (this.plDisciplinasAcademicosTemp && confirm("Confirmar carregamento de lista de Estudantes do SIGECAD?")) {
            this.editavel = false;
            this.servidoresMoodleService.getAcademicosDisciplinasSigecad(this.plDisciplinasAcademicosTemp.disciplina_key, this.periodoLetivoSelecionadoId, this.plDisciplinasAcademicosTemp.turma_id, this.plDisciplinasAcademicosTemp.turma_nome)
                .then(function (est) {
                _this_1.plDisciplinasAcademicosTemp.estudantes = est;
                _this_1.estudantes = est;
                _this_1.editavel = true;
                jQuery('#dialogBuscaImport').modal('hide');
            }).catch(function (response) {
                _this_1.erroAviso = true;
                _this_1.aviso = _this_1.erroHttp(response);
                alert(_this_1.aviso);
                _this_1.editavel = true;
            });
        }
    };
    FormularioAlteracaoUsuarioComponent.prototype.ngOnInit = function () {
        this.status = this.COMPLETE;
        this.editavel = true;
    };
    FormularioAlteracaoUsuarioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-formulario-alteracao-usuario',
            template: __webpack_require__(/*! ./formulario-alteracao-usuario.component.html */ "./src/app/unidade-organizacional/formulario-alteracao-usuario/formulario-alteracao-usuario.component.html"),
            styles: [__webpack_require__(/*! ./formulario-alteracao-usuario.component.less */ "./src/app/unidade-organizacional/formulario-alteracao-usuario/formulario-alteracao-usuario.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_unidade_organizacional_service__WEBPACK_IMPORTED_MODULE_6__["UnidadeOrganizacionalService"], src_app_servidores_moodle_service__WEBPACK_IMPORTED_MODULE_5__["ServidoresMoodleService"]])
    ], FormularioAlteracaoUsuarioComponent);
    return FormularioAlteracaoUsuarioComponent;
}(src_app_abstract_component__WEBPACK_IMPORTED_MODULE_2__["AbstractComponent"]));



/***/ }),

/***/ "./src/app/unidade-organizacional/formulario-insercao-usuarios-ad/formulario-insercao-usuarios-ad.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/unidade-organizacional/formulario-insercao-usuarios-ad/formulario-insercao-usuarios-ad.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-md-8\" style=\"margin: auto; float: initial;\">\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-heading\">Formulario de Inserção de Usuários no AD</div>\n\t\t\t<div style=\"margin: 15px 15px 15px 15px;\" *ngIf=\"estudantes.length == 0\">\n\t\t\t\t<table>\n\t\t\t\t\t<colgroup>\n\t\t\t\t\t\t<col width=\"30%\" />\n\t\t\t\t\t\t<col width=\"10%\" />\n\t\t\t\t\t\t<col width=\"25%\" />\n\t\t\t\t\t\t<col width=\"10%\" />\n\t\t\t\t\t\t<col width=\"25%\" />\n\t\t\t\t\t</colgroup>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<label class=\"style1\"><span>Carregar Estudantes: </span></label>\n\t\t\t\t\t\t\t<button data-toggle=\"modal\" data-target=\"#dialogAjudaEstudantes\"\n\t\t\t\t\t\t\t\tclass=\"btn btn-info botao-tooltip\"><span\n\t\t\t\t\t\t\t\t\tclass=\"glyphicon glyphicon-info-sign\"></span></button>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"custom-file col-md-3\" style=\"width: 150px;\">\n\t\t\t\t\t\t\t\t<input type=\"file\" class=\"custom-file-input\" id=\"customFile\"\n\t\t\t\t\t\t\t\t\t(change)=\"lerAlunosCSV($event)\" [disabled]=\"!editavel\">\n\t\t\t\t\t\t\t\t<label class=\"custom-file-label btn btn-primary\" [ngClass]=\"{'disabled': !editavel}\"\n\t\t\t\t\t\t\t\t\tfor=\"customFile\">Arquivo CSV</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary botao-barra\" style=\"width: 150px; margin-left: 5px;\" data-toggle=\"modal\" data-target=\"#dialogBuscaImport\" [disabled]=\"!editavel\">SIGECAD</button>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\n\t\t\t</div>\n\n\t\t\t<table class=\"table\">\n\t\t\t\t<colgroup>\n\t\t\t\t\t<col width=\"105px\" />\n\t\t\t\t\t<col width=\"50%\" />\n\t\t\t\t\t<col width=\"50%\" />\n\t\t\t\t\t<col width=\"100px\" />\n\t\t\t\t\t<col width=\"36px\" />\n\t\t\t\t\t<col width=\"17px\" />\n\t\t\t\t</colgroup>\n\t\t\t\t<thead class=\"thead-light\">\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>USER</th>\n\t\t\t\t\t\t<th>EMAIL</th>\n\t\t\t\t\t\t<th>NOME</th>\n\t\t\t\t\t\t<th>SENHA</th>\n\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t<button style=\"text-align: center;\" title=\"Limpar Todos\" type=\"button\"\n\t\t\t\t\t\t\t\tclass=\"btn btn-danger botao-reduzido\" (click)=\"limparEstudantes()\"\n\t\t\t\t\t\t\t\t[disabled]=\"!editavel\">\n\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-trash\"></span>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th></th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t</table>\n\t\t\t<div [redimensionar]=\"estudantes.length == 0 ? 327 : 263\" style=\"overflow-y: scroll;\">\n\t\t\t\t<table class=\"table\">\n\t\t\t\t\t<colgroup>\n\t\t\t\t\t\t<col width=\"105px\" />\n\t\t\t\t\t\t<col width=\"50%\" />\n\t\t\t\t\t\t<col width=\"50%\" />\n\t\t\t\t\t\t<col width=\"100px\" />\n\t\t\t\t\t\t<col width=\"36px\" />\n\t\t\t\t\t</colgroup>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr *ngFor=\"let e of estudantes\">\n\t\t\t\t\t\t\t<td class=\"celula-trunca-texto\" title=\"{{e.username}}\">{{e.username}}</td>\n\t\t\t\t\t\t\t<td class=\"celula-trunca-texto\" title=\"{{e.email}}\">{{e.email}}</td>\n\t\t\t\t\t\t\t<td class=\"celula-trunca-texto\" title=\"{{e.fullname}}\">{{e.fullname}}</td>\n\t\t\t\t\t\t\t<td class=\"celula-trunca-texto\" title=\"{{e.senha}}\">{{e.senha}}</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<button style=\"text-align: center;\" title=\"Remover\" type=\"button\"\n\t\t\t\t\t\t\t\t\tclass=\"btn btn-danger botao-reduzido\" (click)=\"removerEstudante(e)\"\n\t\t\t\t\t\t\t\t\t[disabled]=\"!editavel\">\n\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-remove\"></span>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t\t<div class=\"panel-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary botao-barra\" data-toggle=\"modal\"\n\t\t\t\t\tdata-target=\"#dialogCreateEstudante\" (click)=\"novoEstudante()\" [disabled]=\"!editavel\">Novo</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-warning\" (click)=\"substituirEmailsPorPadrao()\" [disabled]=\"!editavel || estudantes.length == 0\">Substituir Emails</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-warning botao-barra\" data-toggle=\"modal\" style=\"float: right;\"\n\t\t\t\t\tdata-target=\"#dialogExportarEstudante\" [disabled]=\"!editavel || estudantes.length == 0\">Exportar</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"modal fade\" id=\"dialogCreateEstudante\" tabindex=\"-1\" role=\"dialog\" data-backdrop=\"static\"\n\taria-labelledby=\"dialogCreateEstudanteTitle\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h5 class=\"modal-title\">Estudante</h5>\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\" style=\"width: 350px;\">\n\t\t\t\t<label class=\"style1\">Usuário *</label><br>\n\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"username\" placeholder=\"11122233344\"\n\t\t\t\t\t[(ngModel)]=\"estudanteTemp.username\" size=\"60\">\n\t\t\t\t<p></p>\n\n\t\t\t\t<label class=\"style1\">E-mail: *</label><br>\n\t\t\t\t<input class=\"form-control\" type=\"email\" name=\"email\" placeholder=\"user@email.com\"\n\t\t\t\t\t[(ngModel)]=\"estudanteTemp.email\" size=\"60\">\n\t\t\t\t<p></p>\n\n\t\t\t\t<label class=\"style1\">Nome Completo: *</label><br>\n\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"fullname\" placeholder=\"Fulano da Silva\"\n\t\t\t\t\t[(ngModel)]=\"estudanteTemp.fullname\" size=\"60\">\n\t\t\t\t<p></p>\n\n\t\t\t\t<label class=\"style1\">Senha: </label><br>\n\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"senha\" placeholder=\"********\"\n\t\t\t\t\t[(ngModel)]=\"estudanteTemp.senha\" size=\"60\">\n\t\t\t\t<p></p>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary botao-barra\"\n\t\t\t\t\t(click)=\"adicionarEstudante()\">Adicionar</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\">Fechar</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"modal fade\" id=\"dialogExportarEstudante\" tabindex=\"-1\" role=\"dialog\" data-backdrop=\"static\" aria-labelledby=\"dialogExportarEstudanteTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\">Criar Usuários...</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\" style=\"width: 500px;\">\n\t\t\t\t<label>Diretório de Cadastro (Unidade Organizacional):</label>\n\t\t\t\t<textarea class=\"form-control\" rows=\"3\" style=\"resize: vertical;\" readonly>{{ geraDirCadastro }}</textarea>\n\t\t\t\t<p></p>\n\t\t\t\t<table style=\"width: 100%;\">\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>{{ou_str}}</td>\n\t\t\t\t\t\t<td style=\"width: 100%;\">\n\t\t\t\t\t\t\t<select class=\"form-control\" [(ngModel)]=\"ousPastaCreateSelected[0]\" (change)=\"selecionaPastaOU(0, 0)\">\n\t\t\t\t\t\t\t\t<option value selected> -- Raiz -- </option>  \n\t\t\t\t\t\t\t\t<option *ngFor=\"let nodo of arvoreOU.filhosArray\" [value]=\"nodo.id\">{{nodo.dado}}</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t<p></p>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>,</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<ng-container *ngFor=\"let oupc of ousPastaCreate; let idx = index\">\n\t\t\t\t\t\t<tr *ngIf=\"oupc\">\n\t\t\t\t\t\t\t<td>{{ou_str}}</td>\n\t\t\t\t\t\t\t<td style=\"width: 100%;\">\n\t\t\t\t\t\t\t\t<select class=\"form-control\" [(ngModel)]=\"ousPastaCreateSelected[idx+1]\" (change)=\"selecionaPastaOU(oupc.id, idx+1)\">\n\t\t\t\t\t\t\t\t\t<option value selected> -- Raiz -- </option>  \n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let oo of oupc.filhosArray\" [value]=\"oo.id\">{{oo.dado}}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t<p></p>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>,</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</ng-container>\n\t\t\t\t</table>\n\t\t\t\t<p></p>\n                <label class=\"style1\">Grupos OUs (Membro de):</label>\n\t\t\t\t<br>\n\t\t\t\t<textarea *ngIf=\"!SELECAO_MEMBRO_DE\" class=\"form-control\" rows=\"4\" style=\"resize: vertical;\" readonly>{{ unidadesOrganizacionaisNomes }}</textarea>\n\t\t\t\t<select *ngIf=\"SELECAO_MEMBRO_DE\" class=\"form-control\" name=\"links-moodle\" [(ngModel)]=\"ous\" [disabled]=\"!editavel\" multiple size=\"7\" required> \n\t\t\t\t\t<option *ngFor=\"let ou of unidadesOrganizacionais\" [value]=\"ou.id\">{{ou.nome}}</option>       \n\t\t\t\t</select>\n\t\t\t\t<br>\n\t\t\t\t<label class=\"style1\">Senha Padrão: </label>\n\t\t\t\t<table style=\"width: 100%;\">\n\t\t\t\t\t<colgroup>\n\t\t\t\t\t\t<col width=\"50px\"/>\n\t\t\t\t\t\t<col width=\"10%\"/>\n\t\t\t\t\t\t<col width=\"90%\"/>\n\t\t\t\t\t</colgroup>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<span class=\"big-check\">\n\t\t\t\t\t\t\t\t<input  type=\"checkbox\" name=\"pl-ativo\" [(ngModel)]=\"usarSenha\" [disabled]=\"!editavel\">\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"senha-padrao\" [disabled]=\"!usarSenha\" placeholder=\"********\" [(ngModel)]=\"senhaPadrao\" size=\"30\">\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\n\t\t\t\t<p></p>\n            </div>\n            <div class=\"modal-footer\">\n\t\t\t\t<a href=\"/unidade-organizacional\"  title=\"Editar Lista\" type=\"button\" class=\"btn btn-info\" style=\"float: left;\">\n\t\t\t\t\tEditar OUs\n\t\t\t\t</a>\n                <button type=\"button\" class=\"btn btn-success botao-barra\" (click)=\"criarUsuariosAD()\" [disabled]=\"!editavel\">Executar</button>\n                <button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\" [disabled]=\"!editavel\">Cancelar</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"dialogExportResult\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialogExportResultTitle\"\n\taria-hidden=\"true\">\n\t<div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Resposta do Servidor</h5>\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\" style=\"width: 700px;\">\n\t\t\t\t<div class=\"alert alert-info\" [ngClass]=\"{'alert-info': !erroAviso, 'alert-danger': erroAviso}\"\n\t\t\t\t\t*ngIf=\"aviso\">\n\t\t\t\t\t<strong *ngIf=\"!erroAviso\">Informação!</strong><strong *ngIf=\"erroAviso\">Falha!</strong> {{aviso}}\n\t\t\t\t</div>\n\t\t\t\t<div redimensionar=\"300\" style=\"max-height: 500px;\" id=\"saidaExport\"></div>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\"\n\t\t\t\t\t[disabled]=\"!editavel\">Fechar</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"modal fade\" id=\"dialogBuscaImport\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialogBuscaImportTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n\t\t\t\t<h5 class=\"modal-title\">Carregar Estudantes do SIGECAD</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\" style=\"width: 800px;\">\n                <app-obtem-plda [ancestral]=\"eu\">Carregando...</app-obtem-plda>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-success botao-barra\" (click)=\"carregarEstudantesSigecad()\" [disabled]=\"!editavel || plDisciplinasAcademicosTemp.disciplina == ''\">Carregar</button>\n                <button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\">Fechar</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"dialogAjudaEstudantes\" tabindex=\"-1\" role=\"dialog\"\n\taria-labelledby=\"dialogAjudaEstudantesTitle\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\" style=\"width: 660px;\">\n\t\t\t\t<b>Selecionar um Arquivo CSV: </b><br>\n\t\t\t\timporta um arquivo CSV que contêm os usuários; o formato do arquivo deve seguir algum dos seguintes\n\t\t\t\tpadrões:<br>\n\t\t\t\t<pre style=\"font-size: 12px;\">\nusername,email,fullname,password\n11122233344,fulano.silva111@academico.ufgd.edu.br,Fulano da Silva,12345678\nBeltranoOliveira,BeltranoOliveira@ufgd.edu.br,Beltrano dos Santos Oliveira,00000000</pre>\n\t\t\t\tou\n\t\t\t\t<pre style=\"font-size: 12px;\">\nusername,email,fullname\n11122233344,fulano.silva111@academico.ufgd.edu.br,Fulano da Silva\nBeltranoOliveira,BeltranoOliveira@ufgd.edu.br,Beltrano dos Santos Oliveira</pre>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\">Fechar</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/unidade-organizacional/formulario-insercao-usuarios-ad/formulario-insercao-usuarios-ad.component.less":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/unidade-organizacional/formulario-insercao-usuarios-ad/formulario-insercao-usuarios-ad.component.less ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VuaWRhZGUtb3JnYW5pemFjaW9uYWwvZm9ybXVsYXJpby1pbnNlcmNhby11c3Vhcmlvcy1hZC9mb3JtdWxhcmlvLWluc2VyY2FvLXVzdWFyaW9zLWFkLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/unidade-organizacional/formulario-insercao-usuarios-ad/formulario-insercao-usuarios-ad.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/unidade-organizacional/formulario-insercao-usuarios-ad/formulario-insercao-usuarios-ad.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: FormularioInsercaoUsuariosAdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormularioInsercaoUsuariosAdComponent", function() { return FormularioInsercaoUsuariosAdComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_abstract_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/abstract-component */ "./src/app/abstract-component.ts");
/* harmony import */ var src_app_pl_disciplinas_academicos_estudante__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pl-disciplinas-academicos/estudante */ "./src/app/pl-disciplinas-academicos/estudante.ts");
/* harmony import */ var src_app_pl_disciplinas_academicos_pl_disciplinas_academicos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pl-disciplinas-academicos/pl-disciplinas-academicos */ "./src/app/pl-disciplinas-academicos/pl-disciplinas-academicos.ts");
/* harmony import */ var src_app_servidores_moodle_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/servidores-moodle.service */ "./src/app/servidores-moodle.service.ts");
/* harmony import */ var src_app_unidade_organizacional_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/unidade-organizacional.service */ "./src/app/unidade-organizacional.service.ts");







var FormularioInsercaoUsuariosAdComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FormularioInsercaoUsuariosAdComponent, _super);
    function FormularioInsercaoUsuariosAdComponent(unidadeOrganizacionalService, servidoresMoodleService) {
        var _this_1 = _super.call(this) || this;
        _this_1.unidadeOrganizacionalService = unidadeOrganizacionalService;
        _this_1.servidoresMoodleService = servidoresMoodleService;
        _this_1.SELECAO_MEMBRO_DE = false;
        _this_1.estudantes = [];
        _this_1.estudanteTemp = src_app_pl_disciplinas_academicos_estudante__WEBPACK_IMPORTED_MODULE_3__["Estudante"].generateEstudante();
        _this_1.linksMoodles = [];
        _this_1.usarSenha = false;
        _this_1.senhaPadrao = "";
        _this_1.ousPastaCreate = [null];
        _this_1.ousPastaCreateSelected = [""];
        _this_1.ous = [];
        _this_1.plDisciplinasAcademicosTemp = src_app_pl_disciplinas_academicos_pl_disciplinas_academicos__WEBPACK_IMPORTED_MODULE_4__["PlDisciplinasAcademicos"].generatePlDisciplinasAcademicos();
        _this_1.periodoLetivoSelecionadoId = "";
        _this_1.cursoSelecionadoId = "";
        _this_1.faculdadeSelecionadaId = "";
        _this_1.disciplinaSelecionadaNome = "";
        //apenas implementação da interface, não utilizados por aqui
        _this_1.plDisciplinasAcademicosTempList = [];
        _this_1.modoLista = false;
        _this_1.disciplinaSelecionadaNomes = [];
        return _this_1;
    }
    Object.defineProperty(FormularioInsercaoUsuariosAdComponent.prototype, "eu", {
        get: function () {
            return this;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormularioInsercaoUsuariosAdComponent.prototype, "unidadesOrganizacionais", {
        get: function () {
            return this.unidadeOrganizacionalService.unidadesOrganizacionais;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormularioInsercaoUsuariosAdComponent.prototype, "unidadesOrganizacionaisNomes", {
        get: function () {
            return this.unidadeOrganizacionalService.unidadesOrganizacionais.map(function (e) { return e.nome; }).join("\n");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormularioInsercaoUsuariosAdComponent.prototype, "ouDirRoot", {
        get: function () {
            return this.unidadeOrganizacionalService.ouDirRoot;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormularioInsercaoUsuariosAdComponent.prototype, "arvoreOU", {
        get: function () {
            return this.unidadeOrganizacionalService.arvoreOU;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormularioInsercaoUsuariosAdComponent.prototype, "ou_str", {
        get: function () {
            return this.unidadeOrganizacionalService.ou_str;
        },
        enumerable: true,
        configurable: true
    });
    FormularioInsercaoUsuariosAdComponent.prototype.novoEstudante = function () {
        this.estudanteTemp = src_app_pl_disciplinas_academicos_estudante__WEBPACK_IMPORTED_MODULE_3__["Estudante"].generateEstudante();
    };
    FormularioInsercaoUsuariosAdComponent.prototype.adicionarEstudante = function () {
        if (this.estudanteTemp.isValid()) {
            this.estudantes.push(new src_app_pl_disciplinas_academicos_estudante__WEBPACK_IMPORTED_MODULE_3__["Estudante"](this.estudanteTemp.username, this.estudanteTemp.email, this.estudanteTemp.fullname, this.estudanteTemp.is_professor, this.estudanteTemp.senha));
            jQuery('#dialogCreateEstudante').modal('hide');
            this.estudanteTemp = src_app_pl_disciplinas_academicos_estudante__WEBPACK_IMPORTED_MODULE_3__["Estudante"].generateEstudante();
        }
        else
            alert("Usuário Inválido!");
    };
    FormularioInsercaoUsuariosAdComponent.prototype.removerEstudante = function (estudante) {
        if (!confirm("Deseja remover este estudante"))
            return;
        var i = 0;
        for (; i < this.estudantes.length; i++) {
            if (estudante.equals(this.estudantes[i]))
                break;
        }
        if (i < this.estudantes.length) {
            this.estudantes.splice(i, 1);
        }
    };
    FormularioInsercaoUsuariosAdComponent.prototype.limparEstudantes = function () {
        if (confirm("Deseja remover todos os estudantes"))
            this.estudantes = [];
    };
    FormularioInsercaoUsuariosAdComponent.prototype.lerAlunosCSV = function (event) {
        var fileExtension = /.*\.csv/;
        var fileTobeRead = event.target.files[0];
        if (fileTobeRead.name.toLowerCase().match(fileExtension)) {
            var fileReader = new FileReader();
            var _this = this;
            fileReader.onload = function (e) {
                _this.estudantes = src_app_pl_disciplinas_academicos_estudante__WEBPACK_IMPORTED_MODULE_3__["Estudante"].processaCSVcomSenha(fileReader.result);
            };
            fileReader.readAsText(fileTobeRead);
        }
        else {
            alert("Por favor selecione arquivo csv");
        }
    };
    FormularioInsercaoUsuariosAdComponent.prototype.substituirEmailsPorPadrao = function () {
        var _this_1 = this;
        if (!confirm("Deseja substituir os emails destes estudantes pelo padrão?"))
            return;
        this.editavel = true;
        this.unidadeOrganizacionalService.substituiEmailsPorPadrao(src_app_pl_disciplinas_academicos_estudante__WEBPACK_IMPORTED_MODULE_3__["Estudante"].converteEstudantesParaJSONcomSenha(this.estudantes))
            .then(function (response) {
            _this_1.estudantes = response;
            _this_1.editavel = true;
        })
            .catch(function (response) {
            alert(_this_1.erroHttp(response));
            _this_1.editavel = true;
        });
    };
    Object.defineProperty(FormularioInsercaoUsuariosAdComponent.prototype, "geraDirCadastro", {
        get: function () {
            var _this = this;
            var ousArrConcat = this.ousPastaCreate.map(function (o) {
                return o ? _this.ou_str + o.dado : '';
            });
            ousArrConcat.pop();
            ousArrConcat = ousArrConcat.reverse().toString();
            return ousArrConcat + (ousArrConcat ? "," : "") + this.ouDirRoot;
        },
        enumerable: true,
        configurable: true
    });
    FormularioInsercaoUsuariosAdComponent.prototype.selecionaPastaOU = function (paiId, index) {
        var nodoIndex = this.ousPastaCreateSelected[index];
        var nodo = null;
        if (nodoIndex)
            nodo = this.arvoreOU.find(nodoIndex);
        if (nodo) {
            if (paiId) {
                for (var i = 0; i < this.ousPastaCreate.length; i++) {
                    if (this.ousPastaCreate[i] && this.ousPastaCreate[i].id == paiId) {
                        this.ousPastaCreate = this.ousPastaCreate.slice(0, i + 1);
                        this.ousPastaCreateSelected = this.ousPastaCreateSelected.slice(0, i + 1);
                        this.ousPastaCreate.push(nodo);
                        this.ousPastaCreateSelected.push(nodo.id);
                        this.ousPastaCreate.push(null);
                        this.ousPastaCreateSelected.push('');
                        break;
                    }
                }
            }
            else {
                this.ousPastaCreate = [nodo, null];
                this.ousPastaCreateSelected = [nodo.id, ''];
            }
        }
        else {
            if (paiId) {
                for (var i = 0; i < this.ousPastaCreate.length; i++) {
                    if (this.ousPastaCreate[i] && this.ousPastaCreate[i].id == paiId) {
                        this.ousPastaCreate = this.ousPastaCreate.slice(0, i + 1);
                        this.ousPastaCreateSelected = this.ousPastaCreateSelected.slice(0, i + 1);
                        this.ousPastaCreate.push(null);
                        this.ousPastaCreateSelected.push('');
                        break;
                    }
                }
            }
            else {
                this.ousPastaCreate = [null];
                this.ousPastaCreateSelected = [''];
            }
        }
    };
    FormularioInsercaoUsuariosAdComponent.prototype.criarUsuariosAD = function () {
        var _this_1 = this;
        if (!this.estudantes.length) {
            alert("Não há usuários para exportar!");
            return;
        }
        if (!confirm("Deseja inserir estes usuários no AD?"))
            return;
        jQuery('#dialogExportResult').modal('show');
        jQuery('#saidaExport').html("<i>Aguarde...<i>");
        this.editavel = false;
        this.aviso = "";
        this.unidadeOrganizacionalService.criarContasAD(this.geraDirCadastro, this.ous, src_app_pl_disciplinas_academicos_estudante__WEBPACK_IMPORTED_MODULE_3__["Estudante"].converteEstudantesParaJSONcomSenha(this.estudantes), this.usarSenha ? this.senhaPadrao : "")
            .then(function (response) {
            jQuery('#saidaExport').html(response);
            _this_1.editavel = true;
        })
            .catch(function (response) {
            _this_1.erroAviso = true;
            _this_1.aviso = _this_1.erroHttp(response);
            _this_1.editavel = true;
            jQuery('#saidaExport').html('<span style="color: red;">' + _this_1.aviso + "</span>");
        });
    };
    FormularioInsercaoUsuariosAdComponent.prototype.carregarEstudantesSigecad = function () {
        var _this_1 = this;
        if (this.plDisciplinasAcademicosTemp && confirm("Confirmar carregamento de lista de Estudantes do SIGECAD?")) {
            this.editavel = false;
            this.servidoresMoodleService.getAcademicosDisciplinasSigecad(this.plDisciplinasAcademicosTemp.disciplina_key, this.periodoLetivoSelecionadoId, this.plDisciplinasAcademicosTemp.turma_id, this.plDisciplinasAcademicosTemp.turma_nome)
                .then(function (est) {
                _this_1.plDisciplinasAcademicosTemp.estudantes = est;
                _this_1.estudantes = est;
                _this_1.editavel = true;
                jQuery('#dialogBuscaImport').modal('hide');
            }).catch(function (response) {
                _this_1.erroAviso = true;
                _this_1.aviso = _this_1.erroHttp(response);
                alert(_this_1.aviso);
                _this_1.editavel = true;
            });
        }
    };
    FormularioInsercaoUsuariosAdComponent.prototype.ngOnInit = function () {
        var _this_1 = this;
        this.editavel = false;
        this.unidadeOrganizacionalService.getOuDirRoot()
            .then(function (response) {
            _this_1.unidadeOrganizacionalService.listar()
                .then(function (response) {
                _this_1.unidadeOrganizacionalService.getOuFilhas()
                    .then(function (response) {
                    _this_1.status = _this_1.COMPLETE;
                    _this_1.ous = _this_1.unidadesOrganizacionais.map(function (u) { return u.id; });
                    _this_1.editavel = true;
                })
                    .catch(function (response) {
                    _this_1.erroAviso = true;
                    _this_1.aviso = _this_1.erroHttp(response);
                    _this_1.status = _this_1.ERROR;
                    alert(_this_1.aviso);
                });
            })
                .catch(function (response) {
                _this_1.erroAviso = true;
                _this_1.aviso = _this_1.erroHttp(response);
                _this_1.status = _this_1.ERROR;
                alert(_this_1.aviso);
            });
        })
            .catch(function (response) {
            _this_1.erroAviso = true;
            _this_1.aviso = _this_1.erroHttp(response);
            _this_1.status = _this_1.ERROR;
            alert(_this_1.aviso);
        });
    };
    FormularioInsercaoUsuariosAdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-formulario-insercao-usuarios-ad',
            template: __webpack_require__(/*! ./formulario-insercao-usuarios-ad.component.html */ "./src/app/unidade-organizacional/formulario-insercao-usuarios-ad/formulario-insercao-usuarios-ad.component.html"),
            styles: [__webpack_require__(/*! ./formulario-insercao-usuarios-ad.component.less */ "./src/app/unidade-organizacional/formulario-insercao-usuarios-ad/formulario-insercao-usuarios-ad.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_unidade_organizacional_service__WEBPACK_IMPORTED_MODULE_6__["UnidadeOrganizacionalService"], src_app_servidores_moodle_service__WEBPACK_IMPORTED_MODULE_5__["ServidoresMoodleService"]])
    ], FormularioInsercaoUsuariosAdComponent);
    return FormularioInsercaoUsuariosAdComponent;
}(src_app_abstract_component__WEBPACK_IMPORTED_MODULE_2__["AbstractComponent"]));



/***/ }),

/***/ "./src/app/unidade-organizacional/unidade-organizacional.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/unidade-organizacional/unidade-organizacional.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-8\" style=\"margin: auto; float: initial;\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">Unidades Organizacionais</div>\n            <div class=\"panel-body\" style=\"padding-bottom: 0px;\">\n                <label class=\"style1\">Diretório de Cadastro Raiz (Unidade Organizacional):</label><br>\n                <table style=\"width: 100%;\">\n                    <tr>\n                        <td style=\"width: 100%;\">\n                            <input type=\"text\" name=\"ou-cadastro\" class=\"form-control\" [(ngModel)]=\"ouDirRoot\" readonly />\n                        </td>\n                        <td style=\"vertical-align: baseline;\">\n                            <button type=\"button\" style=\"margin-left: 5px;\" class=\"btn btn-info\" title=\"Editar Dir Root\" (click)=\"preparaAlterarOuDir()\"\n                            [disabled]=\"!editavel\"><span class=\"glyphicon glyphicon-edit\"></span></button>\n                        </td>\n                    </tr>\n                </table>\n                <br>\n                <label class=\"style1\">Grupos OUs (Membro de):</label>\n            </div>\n            <div>\n                <table class=\"table\" style=\"margin-bottom: 0px\">\n                    <colgroup>\n                        <col width=\"40px\"/>\n                        <col width=\"25%\"/>\n                        <col width=\"75%\"/>\n                        <col width=\"32px\"/>\n                        <col width=\"32px\"/>\n                        <col width=\"15px\"/>\n                    </colgroup>\n                    <thead class=\"thead-light\">\n                        <tr>\n                            <th style=\"text-align: center\">ID</th>\n                            <th class=\"celula-trunca-texto\" title=\"NOME\">NOME</th>\n                            <th class=\"celula-trunca-texto\" title=\"NOME\">VALOR</th>\n                            <th colspan=\"2\" style=\"text-align: center\">AÇÕES</th>\n                            <th></th>\n                        </tr>\n                    </thead>\n                </table>\n            </div>\n            <div redimensionar=\"378\" style=\"overflow-y: scroll;\">\n                <table class=\"table\">\n                    <colgroup>\n                        <col width=\"40px\"/>\n                        <col width=\"25%\"/>\n                        <col width=\"75%\"/>\n                        <col width=\"32px\"/>\n                        <col width=\"32px\"/>\n                    </colgroup>\n                    <tbody>\n                        <tr *ngFor=\"let ou of unidadesOrganizacionais\">\n                            <td>{{ou.id}}</td>\n                            <td class=\"celula-trunca-texto\" title=\"{{ou.nome}}\">{{ou.nome}}</td>\n                            <td class=\"celula-trunca-texto\" title=\"{{ou.valor}}\">{{ou.valor}}</td>\n                            <td>\n                                <button style=\"text-align: center; margin-left: -2px;\" title=\"Editar\" type=\"button\" class=\"btn btn-info botao-reduzido\"  data-toggle=\"modal\" data-target=\"#dialogCreate\" (click)=\"selecionaOU(ou)\">\n                                    <span class=\"glyphicon glyphicon-edit\"></span>\n                                </button>\n                            </td>\n                            <td>\n                                <button style=\"text-align: center; margin-left: -2px;\" title=\"Remover\" type=\"button\" class=\"btn btn-danger botao-reduzido\" (click)=\"removeOU(ou)\">\n                                    <span class=\"glyphicon glyphicon-remove\"></span>\n                                </button>\n                            </td>\n                        </tr>\n                    </tbody>\n                    <tfoot class=\"status-tabela\">\n                        <tr *ngIf=\"status == LOADING\"><td colspan=\"7\"><i>Carregando Unidades Organizacionais...</i></td></tr>\n                        <tr *ngIf=\"unidadesOrganizacionais != null && unidadesOrganizacionais.length == 0 && status == COMPLETE\"><td colspan=\"6\"><i>Não Há Unidades Organizacionais para serem listadas</i></td></tr>\n                        <tr *ngIf=\"status == ERROR\"><td class=\"erro\" colspan=\"7\"><i>Falha na obtenção de Unidades Organizacionais!</i></td></tr>\n                    </tfoot>\n                </table>\n            </div>\n            <div class=\"panel-footer\">\n                <button type=\"button\" class=\"btn btn-primary botao-barra\" data-toggle=\"modal\" data-target=\"#dialogCreate\" (click)=\"novaOU()\" [disabled]=\"!editavel\">Novo</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"dialogCreate\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialogCreateTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Unidade Organizacional</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <fieldset>\n                    <form id=\"ouForm\" class=\"form-group\" style=\"text-align: left; width: 500px; margin: 15px auto;\" (submit)=\"criaAlteraOU($event)\">\n                        <div class=\"alert alert-info\" [ngClass]=\"{'alert-info': !erroAviso, 'alert-danger': erroAviso}\" *ngIf=\"aviso\">\n                            <strong *ngIf=\"!erroAviso\">Informação!</strong><strong *ngIf=\"erroAviso\">Falha!</strong> {{aviso}}\n                        </div>\n                        <label class=\"style1\">Nome: *</label><br>\n                        <input class=\"form-control\" type=\"text\" name=\"nome\" placeholder=\"Nome da Unidade\" [(ngModel)]=\"ouTemp.nome\" size=\"63\" [disabled]=\"!editavel\" required><p></p>\n\n                        <label class=\"style1\">Valor: </label><br>\n                        <input class=\"form-control\" type=\"text\" name=\"descricao\" placeholder=\"CN=Nome_Comum,OU=GRUPO1,DC=example,DC=com,DC=br\" [(ngModel)]=\"ouTemp.valor\" size=\"255\" [disabled]=\"!editavel\"><p></p>\n                    </form>\n                </fieldset>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"submit\" form=\"ouForm\" class=\"btn btn-primary botao-barra\"  [disabled]=\"!editavel\">Enviar</button>\n                <button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\">Fechar</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"dialogUpdateOuDir\" tabindex=\"-1\" role=\"dialog\"\n\taria-hidden=\"true\">\n\t<div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Alterar Diretório Raiz de Cadastro AD</h5>\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\" style=\"width: 500px;\">\n\t\t\t\t<div class=\"alert alert-info\" [ngClass]=\"{'alert-info': !erroAviso, 'alert-danger': erroAviso}\"\n\t\t\t\t\t*ngIf=\"aviso\">\n\t\t\t\t\t<strong *ngIf=\"!erroAviso\">Informação!</strong><strong *ngIf=\"erroAviso\">Falha!</strong> {{aviso}}\n\t\t\t\t</div>\n\t\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"ouCadastroTemp\" /><br>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-success botao-barra\" (click)=\"alterarOuDir()\" [disabled]=\"!editavel\">Alterar</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\"\n\t\t\t\t\t[disabled]=\"!editavel\">Fechar</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/unidade-organizacional/unidade-organizacional.component.less":
/*!******************************************************************************!*\
  !*** ./src/app/unidade-organizacional/unidade-organizacional.component.less ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VuaWRhZGUtb3JnYW5pemFjaW9uYWwvdW5pZGFkZS1vcmdhbml6YWNpb25hbC5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/unidade-organizacional/unidade-organizacional.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/unidade-organizacional/unidade-organizacional.component.ts ***!
  \****************************************************************************/
/*! exports provided: UnidadeOrganizacionalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnidadeOrganizacionalComponent", function() { return UnidadeOrganizacionalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstract-component */ "./src/app/abstract-component.ts");
/* harmony import */ var _unidade_organizacional_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../unidade-organizacional.service */ "./src/app/unidade-organizacional.service.ts");
/* harmony import */ var _unidade_organizacional__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./unidade-organizacional */ "./src/app/unidade-organizacional/unidade-organizacional.ts");





var UnidadeOrganizacionalComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UnidadeOrganizacionalComponent, _super);
    function UnidadeOrganizacionalComponent(unidadeOrganizacionalService) {
        var _this = _super.call(this) || this;
        _this.unidadeOrganizacionalService = unidadeOrganizacionalService;
        _this.ouTemp = _unidade_organizacional__WEBPACK_IMPORTED_MODULE_4__["UnidadeOrganizacional"].generate();
        _this.ouCadastroTemp = "";
        return _this;
    }
    Object.defineProperty(UnidadeOrganizacionalComponent.prototype, "unidadesOrganizacionais", {
        get: function () {
            return this.unidadeOrganizacionalService.unidadesOrganizacionais;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UnidadeOrganizacionalComponent.prototype, "ouDirRoot", {
        get: function () {
            return this.unidadeOrganizacionalService.ouDirRoot;
        },
        enumerable: true,
        configurable: true
    });
    UnidadeOrganizacionalComponent.prototype.criaAlteraOU = function (ev) {
        var _this = this;
        ev.preventDefault();
        var ouForm = jQuery('#ouForm')[0];
        if (ouForm.reportValidity()) {
            if (this.ouTemp.id) {
                this.unidadeOrganizacionalService.update(this.ouTemp)
                    .then(function (r) {
                    jQuery('#dialogCreate').modal('hide');
                }).catch(function (response) {
                    _this.erroAviso = true;
                    _this.aviso = _this.erroHttp(response);
                });
            }
            else {
                this.unidadeOrganizacionalService.create(this.ouTemp)
                    .then(function (r) {
                    jQuery('#dialogCreate').modal('hide');
                }).catch(function (response) {
                    _this.erroAviso = true;
                    _this.aviso = _this.erroHttp(response);
                });
            }
        }
    };
    UnidadeOrganizacionalComponent.prototype.selecionaOU = function (ou) {
        this.ouTemp = ou.clone();
    };
    UnidadeOrganizacionalComponent.prototype.removeOU = function () {
        var _this = this;
        if (confirm("Confirmar Exclusão desta Unidade Organizacional?")) {
            this.unidadeOrganizacionalService.delete(this.ouTemp)
                .then(function (r) {
            }).catch(function (response) {
                _this.erroAviso = true;
                _this.aviso = _this.erroHttp(response);
                alert(_this.aviso);
            });
        }
    };
    UnidadeOrganizacionalComponent.prototype.novaOU = function () {
        this.ouTemp = _unidade_organizacional__WEBPACK_IMPORTED_MODULE_4__["UnidadeOrganizacional"].generate();
    };
    UnidadeOrganizacionalComponent.prototype.preparaAlterarOuDir = function () {
        this.ouCadastroTemp = this.ouDirRoot;
        jQuery('#dialogUpdateOuDir').modal('show');
    };
    UnidadeOrganizacionalComponent.prototype.alterarOuDir = function () {
        var _this = this;
        this.editavel = false;
        this.unidadeOrganizacionalService.setOuDirRoot(this.ouCadastroTemp)
            .then(function (response) {
            jQuery('#dialogUpdateOuDir').modal('hide');
            _this.ouCadastroTemp = "";
            _this.editavel = true;
        })
            .catch(function (response) {
            _this.erroAviso = true;
            _this.aviso = _this.erroHttp(response);
            _this.editavel = true;
        });
    };
    UnidadeOrganizacionalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editavel = false;
        this.unidadeOrganizacionalService.getOuDirRoot()
            .then(function (response) {
            _this.unidadeOrganizacionalService.listar()
                .then(function (response) {
                _this.status = _this.COMPLETE;
                _this.editavel = true;
            })
                .catch(function (response) {
                _this.erroAviso = true;
                _this.aviso = _this.erroHttp(response);
                _this.status = _this.ERROR;
                alert(_this.aviso);
            });
        })
            .catch(function (response) {
            _this.erroAviso = true;
            _this.aviso = _this.erroHttp(response);
            _this.status = _this.ERROR;
            alert(_this.aviso);
        });
    };
    UnidadeOrganizacionalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-unidade-organizacional',
            template: __webpack_require__(/*! ./unidade-organizacional.component.html */ "./src/app/unidade-organizacional/unidade-organizacional.component.html"),
            styles: [__webpack_require__(/*! ./unidade-organizacional.component.less */ "./src/app/unidade-organizacional/unidade-organizacional.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_unidade_organizacional_service__WEBPACK_IMPORTED_MODULE_3__["UnidadeOrganizacionalService"]])
    ], UnidadeOrganizacionalComponent);
    return UnidadeOrganizacionalComponent;
}(_abstract_component__WEBPACK_IMPORTED_MODULE_2__["AbstractComponent"]));



/***/ }),

/***/ "./src/app/unidade-organizacional/unidade-organizacional.ts":
/*!******************************************************************!*\
  !*** ./src/app/unidade-organizacional/unidade-organizacional.ts ***!
  \******************************************************************/
/*! exports provided: UnidadeOrganizacional */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnidadeOrganizacional", function() { return UnidadeOrganizacional; });
var UnidadeOrganizacional = /** @class */ (function () {
    function UnidadeOrganizacional(id, nome, valor) {
        if (typeof id == "number") {
            this.id = id;
            this.nome = nome;
            this.valor = valor;
        }
        else {
            this.id = id['id'];
            this.nome = id['nome'];
            this.valor = id['valor'];
        }
    }
    UnidadeOrganizacional.generate = function () {
        return new UnidadeOrganizacional(0, "", "");
    };
    UnidadeOrganizacional.generateList = function (list) {
        var unidadesOrganizacionais = [];
        for (var i = 0; i < list.length; i++) {
            var ou = new UnidadeOrganizacional(list[i]);
            unidadesOrganizacionais.push(ou);
        }
        return unidadesOrganizacionais;
    };
    /*static generateListPlus(list, macros, macrosIndex) {
        var unidadesOrganizacionais:Array<UnidadeOrganizacional> = [];
        for(var i = 0; i < list.length; i++) {
            var sm = new UnidadeOrganizacional(list[i]);
            sm.macro_padrao = macros[ macrosIndex[<number>sm.macro_padrao]];
            unidadesOrganizacionais.push(sm);
        }
        return unidadesOrganizacionais;
    }*/
    UnidadeOrganizacional.prototype.clone = function () {
        return new UnidadeOrganizacional(this.id, this.nome, this.valor);
    };
    return UnidadeOrganizacional;
}());



/***/ }),

/***/ "./src/app/usuario.service.ts":
/*!************************************!*\
  !*** ./src/app/usuario.service.ts ***!
  \************************************/
/*! exports provided: UsuarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioService", function() { return UsuarioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _usuarios_usuario__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usuarios/usuario */ "./src/app/usuarios/usuario.ts");




var UsuarioService = /** @class */ (function () {
    function UsuarioService(http) {
        this.http = http;
    }
    UsuarioService.prototype.listaUsuarios = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var response;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get('usuarios/lista')
                            .toPromise()];
                    case 1:
                        response = _a.sent();
                        this.usuarios = _usuarios_usuario__WEBPACK_IMPORTED_MODULE_3__["Usuario"].generateList(response.json());
                        return [2 /*return*/, this.usuarios];
                }
            });
        });
    };
    UsuarioService.prototype.listaUsuariosCriaSala = function () {
        var _this = this;
        return this.http.get('salas/usuarios').toPromise()
            .then(function (response) {
            _this.usuarios = _usuarios_usuario__WEBPACK_IMPORTED_MODULE_3__["Usuario"].generateList(response.json());
            return _this.usuarios;
        });
    };
    UsuarioService.prototype.novoUsuario = function (usuario) {
        var _this = this;
        return this.http.post('usuarios', usuario).toPromise()
            .then(function (response) {
            _this.usuarios = _usuarios_usuario__WEBPACK_IMPORTED_MODULE_3__["Usuario"].generateList(response.json());
            return _this.usuarios;
        });
    };
    UsuarioService.prototype.alteraPermissao = function (usuario) {
        var _this = this;
        return this.http.put("usuarios/" + usuario.id, usuario).toPromise()
            .then(function (response) {
            var u = new _usuarios_usuario__WEBPACK_IMPORTED_MODULE_3__["Usuario"](response.json());
            for (var i in _this.usuarios) {
                if (_this.usuarios[i].id == u.id)
                    _this.usuarios[i].permissao = u.permissao;
            }
            return null;
        })
            .catch(function (response) {
            return response;
        });
    };
    UsuarioService.prototype.usuarioLogado = function () {
        return this.http.get("/logado").toPromise()
            .then(function (response) {
            var u = new _usuarios_usuario__WEBPACK_IMPORTED_MODULE_3__["Usuario"](response.json());
            return u;
        });
    };
    UsuarioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], UsuarioService);
    return UsuarioService;
}());



/***/ }),

/***/ "./src/app/usuarios/formulario-pessoas-estatus-lotacao/formulario-pessoas-estatus-lotacao.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/usuarios/formulario-pessoas-estatus-lotacao/formulario-pessoas-estatus-lotacao.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-14\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">Pessoas UFGD</div>\n\t\t\t<fieldset [disabled]=\"!editavel\">\n                <form id=\"filtrosForm\" class=\"form-horizontal\">\n                    <br>\n                    <div class=\"form-group\">\n                        <label for=\"tipoFiltro\" class=\"col-md-3 control-label\">'Tipo' da Pessoa:</label>\n                        <div class=\"col-md-8\">\n                            <ng-container *ngIf=\"!estatusList\">\n                                <select class=\"form-control\" id=\"tipoFiltro\" name=\"tipoFiltro\" disabled >   \n                                    <option hidden disabled selected value> -- </option>\n                                </select>\n                            </ng-container>\n                            <ng-container *ngIf=\"estatusList && estatusList.length == 0\">\n                                <select class=\"form-control\" id=\"tipoFiltro\" name=\"tipoFiltro\" disabled >   \n                                    <option hidden disabled selected value> -- Não Tipos de Pessoas para serem selecionados -- </option>\n                                </select>\n                            </ng-container>\n                            <ng-container *ngIf=\"estatusList && estatusList.length > 0\">\n                                <select class=\"form-control\" id=\"tipoFiltro\" name=\"tipoFiltro\" [(ngModel)]=\"estatusSelecionadoId\" (change)=\"selecionaEstatus()\" required>   \n                                    <option hidden disabled selected value> -- Selecione -- </option>                \n                                    <option *ngFor=\"let e of estatusList; let idx = index\" [value]=\"idx\">{{e.estatus}}</option>\n                                </select>\n                            </ng-container>\n                        </div>\n                    </div>\n\t\t\t\t\t<ng-container *ngIf=\"estatusSelecionadoTipoPessoa == TIPO_PESSOA_ACADEMICO_GRADUACAO || estatusSelecionadoTipoPessoa == TIPO_PESSOA_ACADEMICO_POS\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"faculdadeFiltro\" class=\"col-md-3 control-label\">Faculdade:</label>\n\t\t\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t\t<ng-container *ngIf=\"faculdades.length == 0\">\n\t\t\t\t\t\t\t\t\t<select class=\"form-control\" id=\"faculdadeFiltro\" name=\"faculdadeFiltro\"  disabled >   \n\t\t\t\t\t\t\t\t\t\t<option hidden disabled selected value> -- Não há Faculdades para serem selecionadas -- </option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t<ng-container *ngIf=\"faculdades.length > 0\">\n\t\t\t\t\t\t\t\t\t<select class=\"form-control\" id=\"faculdadeFiltro\" name=\"faculdadeFiltro\" [(ngModel)]=\"faculdadeTemp\" (change)=\"selecionaFaculdade()\" required>   \n\t\t\t\t\t\t\t\t\t\t<option selected value> -- Selecione -- </option>                \n\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let f of faculdades\" [value]=\"f\">{{f}}</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"cursoFiltro\" class=\"col-md-3 control-label\">Curso:</label>\n\t\t\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t\t<ng-container *ngIf=\"!faculdadeTemp\">\n\t\t\t\t\t\t\t\t\t<select class=\"form-control\" id=\"cursoFiltro\" name=\"curso\"  disabled >   \n\t\t\t\t\t\t\t\t\t\t<option hidden disabled selected value> -- </option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t<ng-container *ngIf=\"faculdadeTemp && cursos.length == 0\">\n\t\t\t\t\t\t\t\t\t<select class=\"form-control\" id=\"faculdadeFiltro\" name=\"faculdadeFiltro\"  disabled >   \n\t\t\t\t\t\t\t\t\t\t<option hidden disabled selected value> -- Não há Cursos para serem selecionados -- </option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t<ng-container *ngIf=\"faculdadeTemp && cursos.length > 0\">\n\t\t\t\t\t\t\t\t\t<select class=\"form-control\" id=\"cursoFiltro\" name=\"curso\"  [disabled]=\"!editavel\" [(ngModel)]=\"cursoTemp\" (change)=\"selecionaCurso()\" required>   \n\t\t\t\t\t\t\t\t\t\t<option selected value> -- Selecione -- </option>                    \n\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let c of cursos\" [value]=\"c\">{{c}}</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ng-container>\n\t\t\t\t\t<ng-container *ngIf=\"estatusSelecionadoTipoPessoa == TIPO_PESSOA_FUNCIONARIO\">\n\t\t\t\t\t\t<table style=\"width: 100%;\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label for=\"lotacao-raiz\" class=\"col-md-3 control-label\">Lotação: </label>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t\t\t<select id=\"lotacao-raiz\" class=\"form-control\" name=\"lotacao-raiz\" [(ngModel)]=\"lotacoesSelected[0]\" (change)=\"selecionaLotacao(0, 0)\">\n\t\t\t\t\t\t\t\t\t\t<option value selected> -- Raiz -- </option>  \n\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let nodo of arvoreLotacoes.filhosArray\" [value]=\"nodo.id\">{{getDescLotacaoNodo(nodo)}}</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let lot of lotacoesTrees; let idxx = index\">\n\t\t\t\t\t\t\t\t<div *ngIf=\"lot\" class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label class=\"col-md-3 control-label\"></label>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\" name=\"lotacao-{{idxx+1}}\" [(ngModel)]=\"lotacoesSelected[idxx+1]\" (change)=\"selecionaLotacao(lot.id, idxx+1)\">\n\t\t\t\t\t\t\t\t\t\t\t<option value selected> -- </option>  \n\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let oo of lot.filhosArray\" [value]=\"oo.id\">{{getDescLotacaoNodo(oo)}}</option>\n\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</ng-container>\n                    \n\t\t\t\t\t<div class=\"panel-footer\">\n\t\t\t\t\t\t<button *ngIf=\"estatusSelecionadoTipoPessoa == null\" class=\"btn btn-primary\" disabled>Obter Dados</button>\n\t\t\t\t\t\t<form *ngIf=\"estatusSelecionadoTipoPessoa == TIPO_PESSOA_ACADEMICO_GRADUACAO || estatusSelecionadoTipoPessoa == TIPO_PESSOA_ACADEMICO_POS\" \n\t\t\t\t\t\t\t\tid=\"formDadosAcademicos\" action=\"/formulario-pessoas-estatus-lotacao/academico\" method=\"POST\" (submit)=\"obterDadosAcademicos($event)\">\n\t\t\t\t\t\t\t<input type=\"hidden\" name=\"estatus\" [value]=\"estatusSelecionadoEstatus\" />\n\t\t\t\t\t\t\t<input type=\"hidden\" name=\"faculdade\" [value]=\"faculdadeTemp\" />\n\t\t\t\t\t\t\t<input type=\"hidden\" name=\"curso\" [value]=\"cursoTemp\" />\n\t\t\t\t\t\t\t<input type=\"hidden\" name=\"tipo_pessoa\" [value]=\"estatusSelecionadoTipoPessoa\" />\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!editavel || !estatusSelecionadoEstatus\">Obter Dados</button>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t\t<form *ngIf=\"estatusSelecionadoTipoPessoa == TIPO_PESSOA_FUNCIONARIO\" \n\t\t\t\t\t\t\t\tid=\"formDadosFuncionarios\" action=\"/formulario-pessoas-estatus-lotacao/funcionario\" method=\"POST\" (submit)=\"obterDadosFuncionarios($event)\">\n\t\t\t\t\t\t\t<input type=\"hidden\" name=\"estatus\" [value]=\"estatusSelecionadoEstatus\" />\n\t\t\t\t\t\t\t<input type=\"hidden\" name=\"lotacao\" [value]=\"lotacaoTemp\" />\n\t\t\t\t\t\t\t<input type=\"hidden\" name=\"tipo_pessoa\" [value]=\"estatusSelecionadoTipoPessoa\" />\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!editavel || !estatusSelecionadoEstatus\">Obter Dados</button>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n                </form>\n            </fieldset>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/usuarios/formulario-pessoas-estatus-lotacao/formulario-pessoas-estatus-lotacao.component.less":
/*!***************************************************************************************************************!*\
  !*** ./src/app/usuarios/formulario-pessoas-estatus-lotacao/formulario-pessoas-estatus-lotacao.component.less ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzdWFyaW9zL2Zvcm11bGFyaW8tcGVzc29hcy1lc3RhdHVzLWxvdGFjYW8vZm9ybXVsYXJpby1wZXNzb2FzLWVzdGF0dXMtbG90YWNhby5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/usuarios/formulario-pessoas-estatus-lotacao/formulario-pessoas-estatus-lotacao.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/usuarios/formulario-pessoas-estatus-lotacao/formulario-pessoas-estatus-lotacao.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: FormularioPessoasEstatusLotacaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormularioPessoasEstatusLotacaoComponent", function() { return FormularioPessoasEstatusLotacaoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_abstract_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/abstract-component */ "./src/app/abstract-component.ts");
/* harmony import */ var src_app_cursos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/cursos.service */ "./src/app/cursos.service.ts");
/* harmony import */ var src_app_faculdade_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/faculdade.service */ "./src/app/faculdade.service.ts");
/* harmony import */ var src_app_pessoas_estatus_lotacao_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pessoas-estatus-lotacao.service */ "./src/app/pessoas-estatus-lotacao.service.ts");






var FormularioPessoasEstatusLotacaoComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FormularioPessoasEstatusLotacaoComponent, _super);
    function FormularioPessoasEstatusLotacaoComponent(pessoasEstatusLotacaoService, faculdadeService, cursosService) {
        var _this = _super.call(this) || this;
        _this.pessoasEstatusLotacaoService = pessoasEstatusLotacaoService;
        _this.faculdadeService = faculdadeService;
        _this.cursosService = cursosService;
        _this.estatusSelecionadoId = "";
        _this.faculdadeTemp = "";
        _this.cursoTemp = "";
        _this.lotacoesTrees = [null];
        _this.lotacoesSelected = [""];
        return _this;
    }
    Object.defineProperty(FormularioPessoasEstatusLotacaoComponent.prototype, "estatusList", {
        get: function () {
            return this.pessoasEstatusLotacaoService.estatusList;
        },
        set: function (estatusList) {
            this.pessoasEstatusLotacaoService.estatusList = estatusList;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormularioPessoasEstatusLotacaoComponent.prototype, "faculdades", {
        /*get faculdades() {
            return this.faculdadeService.faculdades;
        }*/
        get: function () {
            return this.pessoasEstatusLotacaoService.faculdades;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormularioPessoasEstatusLotacaoComponent.prototype, "cursos", {
        get: function () {
            return this.pessoasEstatusLotacaoService.cursos;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormularioPessoasEstatusLotacaoComponent.prototype, "arvoreLotacoes", {
        get: function () {
            return this.pessoasEstatusLotacaoService.arvoreLotacoes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormularioPessoasEstatusLotacaoComponent.prototype, "TIPO_PESSOA_ACADEMICO_GRADUACAO", {
        get: function () {
            return this.pessoasEstatusLotacaoService.TIPO_PESSOA_ACADEMICO_GRADUACAO;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormularioPessoasEstatusLotacaoComponent.prototype, "TIPO_PESSOA_ACADEMICO_POS", {
        get: function () {
            return this.pessoasEstatusLotacaoService.TIPO_PESSOA_ACADEMICO_POS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormularioPessoasEstatusLotacaoComponent.prototype, "TIPO_PESSOA_FUNCIONARIO", {
        get: function () {
            return this.pessoasEstatusLotacaoService.TIPO_PESSOA_FUNCIONARIO;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormularioPessoasEstatusLotacaoComponent.prototype, "TIPOS_PESSOAS", {
        get: function () {
            return this.pessoasEstatusLotacaoService.TIPOS_PESSOAS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormularioPessoasEstatusLotacaoComponent.prototype, "estatusSelecionadoTipoPessoa", {
        get: function () {
            if (!isNaN(parseInt(this.estatusSelecionadoId))) {
                return this.estatusList[this.estatusSelecionadoId].tipo_pessoa;
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormularioPessoasEstatusLotacaoComponent.prototype, "estatusSelecionadoEstatus", {
        get: function () {
            if (!isNaN(parseInt(this.estatusSelecionadoId))) {
                return this.estatusList[this.estatusSelecionadoId].estatus;
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormularioPessoasEstatusLotacaoComponent.prototype, "lotacaoTemp", {
        get: function () {
            return this.lotacoesTrees[0] ? this.lotacoesTrees[this.lotacoesTrees.length - 2].dado.caminho : null;
        },
        enumerable: true,
        configurable: true
    });
    FormularioPessoasEstatusLotacaoComponent.prototype.selecionaEstatus = function () {
        var _this = this;
        this.faculdadeTemp = "";
        if (this.estatusSelecionadoTipoPessoa == this.TIPO_PESSOA_ACADEMICO_GRADUACAO || this.estatusSelecionadoTipoPessoa == this.TIPO_PESSOA_ACADEMICO_POS) {
            this.editavel = false;
            this.pessoasEstatusLotacaoService.getFaculdadesList(this.estatusSelecionadoEstatus)
                .then(function (response) {
                _this.status = _this.COMPLETE;
                _this.editavel = true;
            })
                .catch(function (response) {
                _this.erroAviso = true;
                _this.aviso = _this.erroHttp(response);
                _this.status = _this.ERROR;
                alert(_this.aviso);
            });
        }
        else if (this.estatusSelecionadoTipoPessoa == this.TIPO_PESSOA_FUNCIONARIO) {
            this.editavel = false;
            this.pessoasEstatusLotacaoService.getLotacoesList(this.estatusSelecionadoEstatus)
                .then(function (response) {
                _this.status = _this.COMPLETE;
                _this.lotacoesSelected = [""];
                _this.lotacoesTrees = [null];
                _this.editavel = true;
            })
                .catch(function (response) {
                _this.erroAviso = true;
                _this.aviso = _this.erroHttp(response);
                _this.status = _this.ERROR;
                alert(_this.aviso);
            });
        }
    };
    FormularioPessoasEstatusLotacaoComponent.prototype.selecionaFaculdade = function () {
        var _this = this;
        this.cursoTemp = "";
        if (this.faculdadeTemp) {
            this.editavel = false;
            this.pessoasEstatusLotacaoService.getCursosFaculdadeList(this.estatusSelecionadoEstatus, this.faculdadeTemp)
                .then(function (response) {
                _this.status = _this.COMPLETE;
                _this.editavel = true;
            })
                .catch(function (response) {
                _this.erroAviso = true;
                _this.aviso = _this.erroHttp(response);
                _this.status = _this.ERROR;
                alert(_this.aviso);
            });
        }
    };
    FormularioPessoasEstatusLotacaoComponent.prototype.selecionaCurso = function () {
        if (this.cursoTemp) {
        }
    };
    FormularioPessoasEstatusLotacaoComponent.prototype.selecionaLotacao = function (paiId, index) {
        var nodoIndex = this.lotacoesSelected[index];
        var nodo = null;
        if (nodoIndex)
            nodo = this.arvoreLotacoes.find(nodoIndex);
        if (nodo) {
            if (paiId) {
                for (var i = 0; i < this.lotacoesTrees.length; i++) {
                    if (this.lotacoesTrees[i] && this.lotacoesTrees[i].id == paiId) {
                        this.lotacoesTrees = this.lotacoesTrees.slice(0, i + 1);
                        this.lotacoesSelected = this.lotacoesSelected.slice(0, i + 1);
                        this.lotacoesTrees.push(nodo);
                        this.lotacoesSelected.push(nodo.id);
                        this.lotacoesTrees.push(null);
                        this.lotacoesSelected.push('');
                        break;
                    }
                }
            }
            else {
                this.lotacoesTrees = [nodo, null];
                this.lotacoesSelected = [nodo.id, ''];
            }
        }
        else {
            if (paiId) {
                for (var i = 0; i < this.lotacoesTrees.length; i++) {
                    if (this.lotacoesTrees[i] && this.lotacoesTrees[i].id == paiId) {
                        this.lotacoesTrees = this.lotacoesTrees.slice(0, i + 1);
                        this.lotacoesSelected = this.lotacoesSelected.slice(0, i + 1);
                        this.lotacoesTrees.push(null);
                        this.lotacoesSelected.push('');
                        break;
                    }
                }
            }
            else {
                this.lotacoesTrees = [null];
                this.lotacoesSelected = [''];
            }
        }
    };
    FormularioPessoasEstatusLotacaoComponent.prototype.obterDadosAcademicos = function (ev) {
        ev.preventDefault();
        if (!this.faculdadeTemp && !this.cursoTemp && !confirm("Deseja obter dados de todas as pessoas da categoria '" + this.estatusSelecionadoEstatus + "' da instituição?"))
            return;
        var formDadosAcademicos = jQuery('#formDadosAcademicos');
        formDadosAcademicos.submit();
    };
    FormularioPessoasEstatusLotacaoComponent.prototype.obterDadosFuncionarios = function (ev) {
        ev.preventDefault();
        if (!this.lotacaoTemp && !confirm("Deseja obter dados de todas as pessoas da categoria '" + this.estatusSelecionadoEstatus + "' da instituição?"))
            return;
        var formDadosFuncionarios = jQuery('#formDadosFuncionarios');
        formDadosFuncionarios.submit();
    };
    FormularioPessoasEstatusLotacaoComponent.prototype.getDescLotacaoNodo = function (lotacaoNodo) {
        if (lotacaoNodo.dado) {
            if (lotacaoNodo.dado.sigla)
                return lotacaoNodo.dado.nome ? lotacaoNodo.dado.sigla + " - " + lotacaoNodo.dado.nome : lotacaoNodo.dado.sigla;
            else
                return lotacaoNodo.dado.nome ? lotacaoNodo.dado.nome : lotacaoNodo.dado.caminho;
        }
        return "null";
    };
    FormularioPessoasEstatusLotacaoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pessoasEstatusLotacaoService.getEstatusList()
            .then(function (response) {
            _this.pessoasEstatusLotacaoService.getLotacoesFullList()
                .then(function (response) {
                _this.status = _this.COMPLETE;
                _this.editavel = true;
            })
                .catch(function (response) {
                _this.erroAviso = true;
                _this.aviso = _this.erroHttp(response);
                _this.status = _this.ERROR;
                alert(_this.aviso);
            });
        })
            .catch(function (response) {
            _this.erroAviso = true;
            _this.aviso = _this.erroHttp(response);
            _this.status = _this.ERROR;
            alert(_this.aviso);
            _this.estatusList = [];
        });
    };
    FormularioPessoasEstatusLotacaoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-formulario-pessoas-estatus-lotacao',
            template: __webpack_require__(/*! ./formulario-pessoas-estatus-lotacao.component.html */ "./src/app/usuarios/formulario-pessoas-estatus-lotacao/formulario-pessoas-estatus-lotacao.component.html"),
            styles: [__webpack_require__(/*! ./formulario-pessoas-estatus-lotacao.component.less */ "./src/app/usuarios/formulario-pessoas-estatus-lotacao/formulario-pessoas-estatus-lotacao.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_pessoas_estatus_lotacao_service__WEBPACK_IMPORTED_MODULE_5__["PessoasEstatusLotacaoService"],
            src_app_faculdade_service__WEBPACK_IMPORTED_MODULE_4__["FaculdadeService"], src_app_cursos_service__WEBPACK_IMPORTED_MODULE_3__["CursosService"]])
    ], FormularioPessoasEstatusLotacaoComponent);
    return FormularioPessoasEstatusLotacaoComponent;
}(src_app_abstract_component__WEBPACK_IMPORTED_MODULE_2__["AbstractComponent"]));



/***/ }),

/***/ "./src/app/usuarios/usuario.ts":
/*!*************************************!*\
  !*** ./src/app/usuarios/usuario.ts ***!
  \*************************************/
/*! exports provided: Usuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Usuario", function() { return Usuario; });
var Usuario = /** @class */ (function () {
    function Usuario(id, name, email, permissao, gestor) {
        if (typeof id == 'number') {
            this.id = id;
            this.name = name;
            this.email = email;
            this.permissao = permissao;
            this.gestor = gestor;
        }
        else {
            this.id = parseInt(id['id']);
            this.name = id['name'];
            this.email = id['email'];
            this.permissao = id['permissao'];
            this.gestor = id['gestor'];
        }
    }
    Usuario.generateList = function (list) {
        var usuarioList = [];
        list.forEach(function (usuarioAny) {
            var usuario = new Usuario(usuarioAny);
            usuarioList.push(usuario);
        });
        return usuarioList;
    };
    ;
    Usuario.prototype.clone = function () {
        return new Usuario(this);
    };
    return Usuario;
}());



/***/ }),

/***/ "./src/app/usuarios/usuarios.component.html":
/*!**************************************************!*\
  !*** ./src/app/usuarios/usuarios.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n    <div class=\"col-md-10 col-md-offset-1\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">Usuários</div>\n            <table class=\"table\">\n                <caption>\n                    <table>\n                        <tr>\n                            <td class=\"col-md-1\"><label for=\"filtro\" class=\"col-md-1 control-label\">Buscar:</label></td>\n                            <td class=\"col-md-8\"><input id=\"filtro\" type=\"text\" class=\"form-control\" name=\"filtro\" [(ngModel)]=\"criteria\" autofocus></td>\n                        </tr>\n                    </table>\n                </caption>\n                <colgroup>\n                    <col width=\"50px\"/>\n                    <col width=\"100%\"/>\n                    <col width=\"170px\"/>\n                    <col width=\"135px\"/>\n                    <col width=\"54px\"/>\n                </colgroup>\n                <thead class=\"thead-light\">\n                    <tr>\n                        <th scope=\"col\">#</th>\n                        <th scope=\"col\">Nome</th>\n                        <th scope=\"col\">Login</th>\n                        <th scope=\"col\">Permissão</th>\n                        <th scope=\"col\"></th>\n                    </tr>\n                </thead>\n            </table>\n            <div redimensionar=\"310\" style=\"overflow-y:scroll\">\n                <table class=\"table\">\n                    <colgroup>\n                        <col width=\"50px\"/>\n                        <col width=\"100%\"/>\n                        <col width=\"170px\"/>\n                        <col width=\"135px\"/>\n                        <col width=\"39px\"/>\n                    </colgroup>\n                    <tbody>\n                        <tr *ngFor=\"let u of (usuarios | filtroUsuario:criteria)\">\n                            <td>{{u.id}}</td>\n                            <td>{{u.name}}</td>\n                            <td>{{u.email}}</td>\n                            <td *ngIf=\"usuarioTemp.id != u.id\">{{u.permissao}}</td>\n                            <td *ngIf=\"usuarioTemp.id != u.id\">\n                                <button type=\"button\" class=\"btn btn-primary botao-reduzido\" (click)=\"habilitarEdicao(u.clone())\">\n                                    <span class=\"glyphicon glyphicon-edit\"></span>\n                                </button>\n                            </td>\n                            <td colspan=\"2\" *ngIf=\"usuarioTemp.id == u.id\">\n                                <select id=\"selectPermissao\" class=\"form-control form-control-micro\" (change)=\"altararPermissao()\" (blur)=\"resetEdit()\" [(ngModel)]=\"usuarioTemp.permissao\">\n                                    <option value=\"ADMINISTRADOR\">ADMINISTRADOR</option>\n                                    <option value=\"USUARIO\">USUARIO</option>\n                                    <option value=\"INATIVO\">INATIVO</option>\n                                </select>\n                            </td>\n                        </tr>\n                    </tbody>\n                    <tfoot class=\"status-tabela\">\n                        <tr *ngIf=\"status == LOADING\"><td colspan=\"6\"><i>Carregando Usuários...</i></td></tr>\n                        <tr *ngIf=\"salas != null && (usuarios).length == 0 && status == COMPLETE\"><td colspan=\"6\"><i>Não Há Usuários para serem listadas</i></td></tr>\n                        <tr *ngIf=\"status == ERROR\"><td class=\"erro\" colspan=\"6\"><i>Falha na obtenção de Usuários!</i></td></tr>\n                    </tfoot>\n                </table>\n            </div>\n            <div class=\"panel-footer\">\n                <button type=\"button\" class=\"btn btn-primary botao-barra\"  data-toggle=\"modal\" data-target=\"#dialogNovoUsuario\" (click)=\"resetEdit()\" [disabled]=\"!editavel\">Novo</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"dialogNovoUsuario\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialogNovoUsuarioTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Novo Usuário</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\" style=\"width: 400px;\">\n                <label class=\"style1\">Nome</label><br>\n                <input class=\"form-control\" type=\"text\" name=\"username\" placeholder=\"Fulano da Silva\" [(ngModel)]=\"usuarioTemp.name\" size=\"60\"><p></p>\n\n                <label class=\"style1\">Login: *</label><br>\n                <input class=\"form-control\" type=\"email\" name=\"email\" placeholder=\"11122233344\" [(ngModel)]=\"usuarioTemp.email\" size=\"60\"><p></p>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-primary botao-barra\" (click)=\"novoUsuario()\" [disabled]=\"!editavel\">Criar</button>\n                <button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\">Fechar</button>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/usuarios/usuarios.component.less":
/*!**************************************************!*\
  !*** ./src/app/usuarios/usuarios.component.less ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzdWFyaW9zL3VzdWFyaW9zLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/usuarios/usuarios.component.ts":
/*!************************************************!*\
  !*** ./src/app/usuarios/usuarios.component.ts ***!
  \************************************************/
/*! exports provided: UsuariosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosComponent", function() { return UsuariosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../usuario.service */ "./src/app/usuario.service.ts");
/* harmony import */ var _usuario__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usuario */ "./src/app/usuarios/usuario.ts");
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../abstract-component */ "./src/app/abstract-component.ts");





var UsuariosComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UsuariosComponent, _super);
    function UsuariosComponent(usuarioService) {
        var _this = _super.call(this) || this;
        _this.usuarioService = usuarioService;
        _this.criteria = "";
        return _this;
    }
    Object.defineProperty(UsuariosComponent.prototype, "usuarios", {
        get: function () {
            return this.usuarioService.usuarios;
        },
        set: function (usuarios) {
            this.usuarioService.usuarios = usuarios;
        },
        enumerable: true,
        configurable: true
    });
    UsuariosComponent.prototype.altararPermissao = function () {
        var _this = this;
        this.usuarioService.alteraPermissao(this.usuarioTemp)
            .then(function (response) {
            if (response)
                alert(_this.erroHttp(response));
            else {
                _this.resetEdit();
            }
        })
            .catch(function (response) {
            alert(_this.erroHttp(response));
        });
    };
    UsuariosComponent.prototype.habilitarEdicao = function (usuario) {
        this.usuarioTemp = usuario;
        setTimeout(function () {
            document.getElementById('selectPermissao').focus();
        }, 300);
    };
    UsuariosComponent.prototype.resetEdit = function () {
        this.usuarioTemp = new _usuario__WEBPACK_IMPORTED_MODULE_3__["Usuario"](0, "", "", "");
    };
    UsuariosComponent.prototype.novoUsuario = function () {
        var _this = this;
        this.editavel = false;
        this.usuarioService.novoUsuario(this.usuarioTemp)
            .then(function (response) {
            jQuery('#dialogNovoUsuario').modal('hide');
            _this.editavel = true;
        })
            .catch(function (response) {
            alert(_this.erroHttp(response));
            _this.editavel = true;
        });
    };
    UsuariosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resetEdit();
        this.usuarioService.listaUsuarios()
            .then(function (response) {
            _this.status = _this.COMPLETE;
            _this.editavel = true;
        })
            .catch(function (response) {
            _this.status = _this.ERROR;
            console.log(response);
        });
    };
    UsuariosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-usuarios',
            template: __webpack_require__(/*! ./usuarios.component.html */ "./src/app/usuarios/usuarios.component.html"),
            styles: [__webpack_require__(/*! ./usuarios.component.less */ "./src/app/usuarios/usuarios.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]])
    ], UsuariosComponent);
    return UsuariosComponent;
}(_abstract_component__WEBPACK_IMPORTED_MODULE_4__["AbstractComponent"]));



/***/ }),

/***/ "./src/app/zeros.pipe.ts":
/*!*******************************!*\
  !*** ./src/app/zeros.pipe.ts ***!
  \*******************************/
/*! exports provided: ZerosPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZerosPipe", function() { return ZerosPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ZerosPipe = /** @class */ (function () {
    function ZerosPipe() {
    }
    ZerosPipe.prototype.transform = function (value, casas) {
        var character = "0";
        var s = String(value);
        while (s.length < (casas || 2)) {
            s = character + s;
        }
        return s;
    };
    ZerosPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'zeros'
        })
    ], ZerosPipe);
    return ZerosPipe;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/menu/menu.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/menu/menu.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"lateral-nav col-12 col-sm-auto\">\n    <div class=\"logo\">\n        <h2 routerLink=\"/home\">MRP <small>(Home)</small></h2>\n    </div>\n    <nav class=\"menu d-flex d-sm-block justify-content-center flex-wrap\">\n        <!-- <a href=\"#\"><i class=\"fas fa-layer-group\"></i><span>Categorias</span></a> -->\n        <a routerLink=\"/products\" routerLinkActive=\"active\"><i class=\"fas fa-drumstick-bite\"></i><span>Productos</span></a>\n        <!-- <a routerLink=\"/lots\" routerLinkActive=\"active\"><i class=\"fas fa-box\"></i><span>Lotes</span></a>\n        <a routerLink=\"/requests\" routerLinkActive=\"active\"><i class=\"fas fa-business-time\"></i><span>Demandas</span></a>\n        <a routerLink=\"/orders\" routerLinkActive=\"active\"><i class=\"fas fa-shopping-basket\"></i><span>Ordenes</span></a>\n        <a routerLink=\"/inputs\" routerLinkActive=\"active\"><i class=\"fas fa-cloud-download-alt\"></i><span>Entradas</span></a>\n        <a routerLink=\"/outputs\" routerLinkActive=\"active\"><i class=\"fas fa-cloud-upload-alt\"></i><span>Salidas</span></a>\n        <a routerLink=\"/users\" routerLinkActive=\"active\"><i class=\"fas fa-users\"></i><span>Usuarios</span></a>\n        <a routerLink=\"/statistics\" routerLinkActive=\"active\"><i class=\"fab fa-sellsy\"></i><span>Estadísticas</span></a> -->\n        <a (click)=\"logout()\"><i class=\"fas fa-sign-out-alt\"></i><span>logout</span></a>\n    </nav>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/mrpview/mrpview.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/mrpview/mrpview.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"product!==undefined\">\n    <h5 class=\"d-inline mx-1\">Producto: {{product.name}}</h5>\n    <p class=\"d-inline mx-1\">Plazo: <span class=\"text-success\">{{getDaysTerm()}} Día(s)</span></p>\n    <p class=\"d-inline mx-1\">Método: <span class=\"text-success\">{{getMethod()}}</span></p>\n    <p class=\"d-inline mx-1\">Costos de pedir: <span class=\"text-success\">{{getRequestCost()}} C$</span></p>\n    <p class=\"d-inline mx-1\">Costo unitario: <span class=\"text-success\">{{getUnitCost()}} C$/U</span></p>\n    <p class=\"d-inline mx-1\">Demanda anual: <span class=\"text-success\">{{getDemand()}} U</span></p>\n    <div class=\"alert alert-danger\" *ngIf=\"error\" role=\"alert\" (click)=\"error=''\">\n        {{error}} - Toca para cerrar.\n    </div>\n    <div>\n        <table class=\"table-sm\">\n            <thead>\n                <tr>\n                    <th>Periodo</th>\n                    <th class=\"text-center\" *ngFor=\"let p of periods\">{{p}}</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <th>Demandas</th>\n                    <td class=\"text-right\" *ngFor=\"let d of demands\">{{d}}</td>\n                </tr>\n                <tr>\n                    <th>Recepciones</th>\n                    <td class=\"text-right\" *ngFor=\"let i of inputs\">{{i}}</td>\n                </tr>\n                <tr>\n                    <th>Inventario</th>\n                    <td class=\"text-right\" *ngFor=\"let a of available\">{{a}}</td>\n                </tr>\n                <tr>\n                    <th>Órdenes</th>\n                    <td class=\"text-right\" *ngFor=\"let o of orders\">{{o}}</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/product-create/product-create.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/product-create/product-create.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <ngx-spinner></ngx-spinner>\n    <div class=\"col-12 col-md-6 mt-4\">\n        <h4 class=\"mb-3\"><button class=\"btn btn-outline-secondary\" routerLink=\"..\"><i\n                    class=\"fas fa-chevron-circle-left\"></i>\n                Atras</button>\n            Nuevo producto</h4>\n        <div class=\"d-flex justify-content-end mb-4\">\n            <button class=\"btn btn-success\" (click)=\"save()\"><i class=\"fas fa-plus\"></i> Guardar Producto</button>\n        </div>\n        <div class=\"alert alert-danger\" *ngIf=\"error\" role=\"alert\" (click)=\"error=''\">\n            {{error}} - Toca para cerrar.\n        </div>\n        <div class=\"input-group mb-3\">\n            <div class=\"input-group-prepend\">\n                <label class=\"input-group-text\" for=\"name\">Nombre:</label>\n            </div>\n            <input id=\"name\" type=\"text\" class=\"form-control\" placeholder=\"Nombre de producto...\"\n                [(ngModel)]=\"productToSave.name\">\n        </div>\n        <div class=\"input-group mb-3\">\n            <div class=\"input-group-prepend\">\n                <label class=\"input-group-text\" for=\"direct_labor\">Mano de obra:</label>\n            </div>\n            <input id=\"direct_labor\" type=\"number\" step=\"0.01\" min=\"0.00\" class=\"form-control\"\n                placeholder=\"Mano de obra directa...\" [(ngModel)]=\"productToSave.direct_labor\">\n            <div class=\"input-group-append\">\n                <label class=\"input-group-text\" for=\"direct_labor\">min</label>\n            </div>\n        </div>\n        <div class=\"input-group mb-3\">\n            <div class=\"input-group-prepend\">\n                <label class=\"input-group-text\" for=\"ss\">Stock de seguridad:</label>\n            </div>\n            <input id=\"ss\" type=\"number\" step=\"1\" min=\"0\" class=\"form-control\" placeholder=\"Stock de seguridad...\"\n                [(ngModel)]=\"productToSave.ss\">\n            <div class=\"input-group-append\">\n                <label class=\"input-group-text\" for=\"ss\">U</label>\n            </div>\n        </div>\n        <div class=\"input-group mb-3\">\n            <div class=\"input-group-prepend\">\n                <label class=\"input-group-text\" for=\"keep_cost\">Mantener:</label>\n            </div>\n            <input id=\"keep_cost\" type=\"number\" step=\"0.01\" min=\"0.00\" max=\"1.00\" class=\"form-control\"\n                placeholder=\"Tasa de unidad por día...\" [(ngModel)]=\"productToSave.keep_cost\">\n            <div class=\"input-group-append\">\n                <label class=\"input-group-text\" for=\"keep_cost\">%</label>\n            </div>\n        </div>\n        <div class=\"input-group mb-3\">\n            <div class=\"input-group-prepend\">\n                <label class=\"input-group-text\" for=\"category\">Categoría:</label>\n            </div>\n            <input id=\"category\" type=\"text\" class=\"form-control\" placeholder=\"Categoría de producto...\"\n                [(ngModel)]=\"productToSave.category.name\" disabled>\n        </div>\n        <div class=\"input-group mb-3\">\n            <div class=\"input-group-prepend\">\n                <label class=\"input-group-text\" for=\"description\">Descripción:</label>\n            </div>\n            <textarea id=\"description\" class=\"form-control\" placeholder=\"Descripción de producto...\"\n                [(ngModel)]=\"productToSave.description\"></textarea>\n        </div>\n        <div class=\"mb-3\" *ngIf=\"materialsForSelect!==undefined\">\n            <h5>Agregar material</h5>\n            <div class=\"form-inline\">\n                <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                        <label class=\"input-group-text\" for=\"units\">Unidades:</label>\n                    </div>\n                    <input id=\"units\" type=\"number\" step=\"1\" min=\"1\" class=\"form-control\" placeholder=\"Unidades...\"\n                        [(ngModel)]=\"selectedUnits\">\n                </div>\n                <div class=\"input-group mb-3 ml-1\">\n                    <select class=\"custom-select\" [(ngModel)]=\"selectedMaterial\">\n                        <option *ngFor=\"let material of materialsForSelect\" [ngValue]=\"material\">{{material.name}}\n                        </option>\n                    </select>\n                    <div class=\"input-group-append\">\n                        <button class=\"btn btn-outline-success\" type=\"button\" (click)=\"addMaterial()\">Agregar</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div *ngIf=\"productToSave.materials!==undefined\" class=\"mb-3\">\n            <h5>Materiales</h5>\n            <table class=\"table\">\n                <thead class=\"thead-dark\">\n                    <tr>\n                        <th scope=\"col\">Nombre</th>\n                        <th scope=\"col\">Unidades</th>\n                        <th scope=\"col\">Remover</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let material of productToSave.materials\">\n                        <th scope=\"row\">{{material.product.name}}</th>\n                        <td>{{material.units}}</td>\n                        <td>\n                            <button class=\"btn btn-primary btn-sm px-5\" (click)=\"removeMaterial(material)\"><i\n                                    class=\"fas fa-backspace\"></i></button>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n    <div class=\"col-12 col-md-6 mt-4\">\n        <h4>Árbol de producto: {{productToSave.name}}</h4>\n        <app-product-tree [product]=\"productToSave\"></app-product-tree>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/product-detail/product-detail.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/product-detail/product-detail.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <ngx-spinner></ngx-spinner>\n    <div class=\"col-12 col-md-6 col-xl-8 mt-4\">\n        <div class=\"d-flex justify-content-between mb-4\">\n            <button class=\"btn btn-outline-secondary\" routerLink=\"..\"><i class=\"fas fa-chevron-circle-left\"></i>\n                Atras</button>\n            <button class=\"btn btn-info\" (click)=\"createDemand()\"><i class=\"fas fa-business-time\"></i>\n                Nueva demanda</button>\n        </div>\n        <div class=\"alert alert-danger\" *ngIf=\"error\" role=\"alert\" (click)=\"error=''\">\n            {{error}} - Toca para cerrar.\n        </div>\n        <div class=\"card border-success mb-3 text-center\" *ngIf=\"product!==undefined\">\n            <div class=\"card-header\">Producto</div>\n            <div class=\"card-body text-success\">\n                <h5 class=\"card-title\">Producto: <span>{{product.name}}</span></h5>\n                <h5 class=\"card-title\">Mano de obra directa: <span>{{product.direct_labor}}</span> minutos</h5>\n                <h5 class=\"card-title\">Stock de seguridad: <span>{{product.ss}} unidades</span></h5>\n                <h5 class=\"card-title\">Costos de mantener: <span>{{product.keep_cost}}% D/día</span></h5>\n                <h5 class=\"card-title\">Categoría: <a\n                        [routerLink]=\"['/categories', product.category._id]\">{{product.category.name}}</a></h5>\n                <h5 class=\"card-title\">Descripción</h5>\n                <p class=\"card-text\">{{product.description}}</p>\n            </div>\n        </div>\n        <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#modalMRP\">\n            Mostrar MRP\n        </button>\n    </div>\n    <div class=\"col-12 col-md-6 col-xl-4 my-4\">\n        <h4>Árbol de producto</h4>\n        <app-product-tree [product]=\"product\"></app-product-tree>\n    </div>\n</div>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"Tree Modal\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\" *ngIf=\"product!==undefined\">Nueva demanda de producto:\n                    {{product.name}}</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\" *ngIf=\"_ids!==undefined\">\n                <app-request-create [_ids]=\"_ids\" (reload)=\"reload($event)\"></app-request-create>\n            </div>\n            <div class=\"modal-footer\">\n                <!-- <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button> -->\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"modal fade\" id=\"modalMRP\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"Tree Modal\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\" *ngIf=\"_ids!==undefined\">MRP producto: {{product.name}}\n                </h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <div *ngFor=\"let _id of _ids\" class=\"mx-2\">\n                    <app-mrpview [productID]=\"_id\" [limit]=\"limit\" (prodcutOutput)=\"storedProduct($event)\">\n                    </app-mrpview>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/product-list/product-list.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/product-list/product-list.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-4\">\n    <h4 class=\"text-center\">Lista de Productos</h4>\n    <ngx-spinner></ngx-spinner>\n    <div class=\"d-flex justify-content-end\">\n        <a routerLink=\"/products/create\" class=\"btn btn-success mt-5\"><i class=\"fas fa-plus\"></i> Nuevo Producto</a>\n    </div>\n    <div class=\"input-group mb-2 mt-4\">\n        <div class=\"input-group-prepend\">\n            <label class=\"input-group-text\" for=\"search\">Buscar:</label>\n        </div>\n        <input id=\"search\" type=\"text\" class=\"form-control\" placeholder=\"Nombre de producto...\" [(ngModel)]=\"search\">\n    </div>\n    <div class=\"alert alert-danger\" *ngIf=\"error\" role=\"alert\" (click)=\"error=''\">\n        {{error}} - Toca para cerrar.\n    </div>\n    <table class=\"table my-5\">\n        <thead class=\"thead-dark\">\n            <tr>\n                <th scope=\"col\">Nombre</th>\n                <th scope=\"col\">Categoría</th>\n                <th scope=\"col\">Árbol de producto</th>\n                <th scope=\"col\">Detalles</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let product of products | filter: search\">\n                <th scope=\"row\">{{product.name}}</th>\n                <td>{{product.category.name}}</td>\n                <td>\n                    <button class=\"btn btn-primary btn-sm px-5\" (click)=\"viewTreeModal(product._id)\"><i\n                            class=\"fas fa-project-diagram\"></i></button>\n                </td>\n                <td>\n                    <button class=\"btn btn-info btn-sm px-5\" [routerLink]=\"['/products', product._id]\"><i\n                            class=\"fas fa-list-ul\"></i></button>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"Tree Modal\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Árbol de Producto</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <app-product-tree [product]=\"product\"></app-product-tree>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/product-material/product-material.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/product-material/product-material.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li>\n    <span>{{material.units}} {{material.product.name}}</span>\n    <ul *ngFor=\"let mtl of material.product.materials\">\n        <app-product-material [material]=\"mtl\"></app-product-material>\n    </ul>\n</li>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/product-tree/product-tree.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/product-tree/product-tree.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"product\" class=\"container\">\n    <div class=\"row justify-content-end\">\n        <div class=\"col\">\n            <h4>{{product.name}}</h4>\n            <ul *ngFor=\"let material of product.materials\">\n                <app-product-material [material]=\"material\"></app-product-material>\n            </ul>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/request-create/request-create.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/request-create/request-create.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"requests!==undefined\">\n    <div class=\"card my-3 p-2\" *ngFor=\"let request of requests\">\n        <div *ngIf=\"request.product._id == requests[0].product._id\">\n            <h4>Producto: {{request.product.name}}</h4>\n            <div class=\"input-group mb-3\">\n                <div class=\"input-group-prepend\">\n                    <label class=\"input-group-text\">Unidades:</label>\n                </div>\n                <input type=\"number\" min=\"0\" step=\"1\" class=\"form-control\" placeholder=\"Unidades requeridas...\"\n                    [(ngModel)]=\"request.units\" (input)=\"onChange($event.target.value)\">\n            </div>\n            <div class=\"input-group mb-3\">\n                <div class=\"input-group-prepend\">\n                    <label class=\"input-group-text\">Demanda para:</label>\n                </div>\n                <input type=\"date\" class=\"form-control\" [ngModel]=\"request.requested_to | date:'yyyy-MM-dd'\"\n                    (ngModelChange)=\"request.requested_to = $event\" (input)=\"onChange($event.target.value)\">\n            </div>\n            <div class=\"input-group mb-3\">\n                <div class=\"input-group-prepend\">\n                    <label class=\"input-group-text\">Plazo:</label>\n                </div>\n                <input type=\"number\" min=\"0\" step=\"1\" class=\"form-control\" [(ngModel)]=\"request.to_order.days_term\"\n                    (input)=\"onChange($event.target.value)\">\n                <div class=\"input-group-append\">\n                    <label class=\"input-group-text\">Día(s)</label>\n                </div>\n            </div>\n            <div class=\"input-group mb-3\">\n                <div class=\"input-group-prepend\">\n                    <label class=\"input-group-text\">Fecha de orden:</label>\n                </div>\n                <input type=\"date\" class=\"form-control\" [ngModel]=\"request.to_order.order_date | date:'yyyy-MM-dd'\"\n                    (ngModelChange)=\"request.requested_to = $event\" (input)=\"onChange($event.target.value)\" disabled>\n            </div>\n            <div class=\"input-group mb-3\">\n                <div class=\"input-group-prepend\">\n                    <label class=\"input-group-text\">Costos de ordenar:</label>\n                </div>\n                <input type=\"number\" min=\"0\" step=\"0.01\" class=\"form-control\" [(ngModel)]=\"request.to_order.order_cost\"\n                    (input)=\"onChange($event.target.value)\">\n                <div class=\"input-group-append\">\n                    <label class=\"input-group-text\">C$</label>\n                </div>\n            </div>\n            <div class=\"input-group mb-3\">\n                <div class=\"input-group-prepend\">\n                    <label class=\"input-group-text\">Costos de unitario:</label>\n                </div>\n                <input type=\"number\" min=\"0\" step=\"0.01\" class=\"form-control\" [(ngModel)]=\"request.to_order.unit_cost\"\n                    (input)=\"onChange($event.target.value)\">\n                <div class=\"input-group-append\">\n                    <label class=\"input-group-text\">C$/U</label>\n                </div>\n            </div>\n        </div>\n        <div *ngIf=\"request.product._id != requests[0].product._id\">\n            <h4>Producto: {{request.product.name}}</h4>\n            <div class=\"input-group mb-3\">\n                <div class=\"input-group-prepend\">\n                    <label class=\"input-group-text\">Unidades:</label>\n                </div>\n                <input type=\"number\" min=\"1\" step=\"1\" class=\"form-control\" placeholder=\"Unidades requeridas...\"\n                    [(ngModel)]=\"request.units\" (input)=\"onChange($event.target.value)\" disabled>\n            </div>\n            <div class=\"input-group mb-3\">\n                <div class=\"input-group-prepend\">\n                    <label class=\"input-group-text\">Demanda para:</label>\n                </div>\n                <input type=\"date\" class=\"form-control\" [ngModel]=\"request.requested_to | date:'yyyy-MM-dd'\"\n                    (ngModelChange)=\"request.requested_to = $event\" (input)=\"onChange($event.target.value)\" disabled>\n            </div>\n            <div class=\"input-group mb-3\">\n                <div class=\"input-group-prepend\">\n                    <label class=\"input-group-text\">Plazo:</label>\n                </div>\n                <input type=\"number\" min=\"0\" step=\"1\" class=\"form-control\" [(ngModel)]=\"request.to_order.days_term\"\n                    (input)=\"onChange($event.target.value)\">\n                <div class=\"input-group-append\">\n                    <label class=\"input-group-text\">Día(s)</label>\n                </div>\n            </div>\n            <div class=\"input-group mb-3\">\n                <div class=\"input-group-prepend\">\n                    <label class=\"input-group-text\">Fecha de orden:</label>\n                </div>\n                <input type=\"date\" class=\"form-control\" [ngModel]=\"request.to_order.order_date | date:'yyyy-MM-dd'\"\n                    (ngModelChange)=\"request.requested_to = $event\" (input)=\"onChange($event.target.value)\" disabled>\n            </div>\n            <div class=\"input-group mb-3\">\n                <div class=\"input-group-prepend\">\n                    <label class=\"input-group-text\">Costos de ordenar:</label>\n                </div>\n                <input type=\"number\" min=\"0\" step=\"0.01\" class=\"form-control\" [(ngModel)]=\"request.to_order.order_cost\"\n                    (input)=\"onChange($event.target.value)\">\n                <div class=\"input-group-append\">\n                    <label class=\"input-group-text\">C$</label>\n                </div>\n            </div>\n            <div class=\"input-group mb-3\">\n                <div class=\"input-group-prepend\">\n                    <label class=\"input-group-text\">Costos de unitario:</label>\n                </div>\n                <input type=\"number\" min=\"0\" step=\"0.01\" class=\"form-control\" [(ngModel)]=\"request.to_order.unit_cost\"\n                    (input)=\"onChange($event.target.value)\">\n                <div class=\"input-group-append\">\n                    <label class=\"input-group-text\">C$/U</label>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"alert alert-danger\" *ngIf=\"error\" role=\"alert\" (click)=\"error=''\">\n        {{error}} - Toca para cerrar.\n    </div>\n    <div class=\"d-flex justify-content-end\">\n        <button class=\"btn btn-success btn-lg\" (click)=\"save()\">Guardar</button>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/home/home.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/home/home.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <app-menu></app-menu>\n        <main class=\"col\">\n            <h4>Aún nada por aquí. Intenta en productos...!...!</h4>\n        </main>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/login/login.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/login/login.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-box\">\n    <div class=\"avatar\">\n        <h2>Sistema MRP</h2>\n        <ngx-spinner></ngx-spinner>\n    </div>\n    <h2>Login</h2>\n    <small>{{error}}</small>\n    <div>\n        <label for=\"user_name\">Usuario</label>\n        <input type=\"text\" id=\"user_name\" placeholder=\"Usuario...\" [(ngModel)]=\"user.user_name\">\n        <label for=\"password\">Contraseña</label>\n        <input type=\"password\" id=\"password\" placeholder=\"Contraseña...\" [(ngModel)]=\"user.password\">\n        <button (click)=\"login()\">Log In</button>\n        <br>\n        <a routerLink=\"/signup\">¿No tienes una cuenta?</a>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/page404/page404.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/page404/page404.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>page404 works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/products/products.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/products/products.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <app-menu></app-menu>\n        <main class=\"col\">\n            <router-outlet></router-outlet>\n        </main>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/user-create/user-create.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/user-create/user-create.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container center\">\n    <div class=\"row justify-content-center\">\n        <div class=\"col-12 col-md-6 col-xl-4\">\n            <h4 class=\"mb-3 text-center\">Nuevo usuario</h4>\n            <ngx-spinner></ngx-spinner>\n            <div class=\"alert alert-danger\" *ngIf=\"error\" role=\"alert\" (click)=\"error=''\">\n                {{error}} - Toca para cerrar.\n            </div>\n            <div class=\"input-group mb-3\">\n                <div class=\"input-group-prepend\">\n                    <label class=\"input-group-text\">Nombre:</label>\n                </div>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Nombre...\" [(ngModel)]=\"user.name\">\n            </div>\n            <div class=\"input-group mb-3\">\n                <div class=\"input-group-prepend\">\n                    <label class=\"input-group-text\">Apellido:</label>\n                </div>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Apellido...\" [(ngModel)]=\"user.surname\">\n            </div>\n            <div class=\"input-group mb-3\">\n                <div class=\"input-group-prepend\">\n                    <label class=\"input-group-text\">Usuario:</label>\n                </div>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Nombre de Usuario...\" [(ngModel)]=\"user.user_name\">\n            </div>\n            <div class=\"input-group mb-3\">\n                <div class=\"input-group-prepend\">\n                    <label class=\"input-group-text\">Contraseña:</label>\n                </div>\n                <input type=\"password\" class=\"form-control\" placeholder=\"Contraseña...\" [(ngModel)]=\"user.password\">\n            </div>\n            <div class=\"input-group mb-3\">\n                <div class=\"input-group-prepend\">\n                    <label class=\"input-group-text\">Confirmar:</label>\n                </div>\n                <input type=\"password\" class=\"form-control\" placeholder=\"Confirmar contraseña...\" [(ngModel)]=\"pass\">\n            </div>\n            <div class=\"d-flex justify-content-between\">\n                <button class=\"btn btn-outline-secondary\" routerLink=\"..\"><i class=\"fas fa-chevron-circle-left\"></i>\n                    Atras</button>\n                <button class=\"btn btn-success\" (click)=\"save()\"><i class=\"fas fa-plus\"></i> Crear Nuevo</button>\n            </div>\n        </div>\n    </div>\n</div>"

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
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/login/login.component */ "./src/app/views/login/login.component.ts");
/* harmony import */ var _views_page404_page404_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/page404/page404.component */ "./src/app/views/page404/page404.component.ts");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/home/home.component */ "./src/app/views/home/home.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _views_products_products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/products/products.component */ "./src/app/views/products/products.component.ts");
/* harmony import */ var _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/product-list/product-list.component */ "./src/app/components/product-list/product-list.component.ts");
/* harmony import */ var _components_product_create_product_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/product-create/product-create.component */ "./src/app/components/product-create/product-create.component.ts");
/* harmony import */ var _components_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/product-detail/product-detail.component */ "./src/app/components/product-detail/product-detail.component.ts");
/* harmony import */ var _views_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/user-create/user-create.component */ "./src/app/views/user-create/user-create.component.ts");












var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _views_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    {
        path: 'products', component: _views_products_products_component__WEBPACK_IMPORTED_MODULE_7__["ProductsComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]], children: [
            { path: '', component: _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_8__["ProductListComponent"] },
            { path: 'create', component: _components_product_create_product_create_component__WEBPACK_IMPORTED_MODULE_9__["ProductCreateComponent"] },
            { path: ':id', component: _components_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_10__["ProductDetailComponent"] }
        ]
    },
    { path: 'login', component: _views_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'signup', component: _views_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_11__["UserCreateComponent"] },
    { path: '**', component: _views_page404_page404_component__WEBPACK_IMPORTED_MODULE_4__["Page404Component"] }
];
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

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
    }
    AppComponent.prototype.ngOnDestroy = function () {
        localStorage.clear();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/login/login.component */ "./src/app/views/login/login.component.ts");
/* harmony import */ var _views_page404_page404_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/page404/page404.component */ "./src/app/views/page404/page404.component.ts");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/home/home.component */ "./src/app/views/home/home.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _views_products_products_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/products/products.component */ "./src/app/views/products/products.component.ts");
/* harmony import */ var _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/product-list/product-list.component */ "./src/app/components/product-list/product-list.component.ts");
/* harmony import */ var _components_product_create_product_create_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/product-create/product-create.component */ "./src/app/components/product-create/product-create.component.ts");
/* harmony import */ var _components_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/product-detail/product-detail.component */ "./src/app/components/product-detail/product-detail.component.ts");
/* harmony import */ var _components_product_tree_product_tree_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/product-tree/product-tree.component */ "./src/app/components/product-tree/product-tree.component.ts");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pipes/filter.pipe */ "./src/app/pipes/filter.pipe.ts");
/* harmony import */ var _components_product_material_product_material_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/product-material/product-material.component */ "./src/app/components/product-material/product-material.component.ts");
/* harmony import */ var _components_mrpview_mrpview_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/mrpview/mrpview.component */ "./src/app/components/mrpview/mrpview.component.ts");
/* harmony import */ var _components_request_create_request_create_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/request-create/request-create.component */ "./src/app/components/request-create/request-create.component.ts");
/* harmony import */ var _views_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./views/user-create/user-create.component */ "./src/app/views/user-create/user-create.component.ts");






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _views_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _views_page404_page404_component__WEBPACK_IMPORTED_MODULE_9__["Page404Component"],
                _views_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_11__["MenuComponent"],
                _views_products_products_component__WEBPACK_IMPORTED_MODULE_12__["ProductsComponent"],
                _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_13__["ProductListComponent"],
                _components_product_create_product_create_component__WEBPACK_IMPORTED_MODULE_14__["ProductCreateComponent"],
                _components_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_15__["ProductDetailComponent"],
                _components_product_tree_product_tree_component__WEBPACK_IMPORTED_MODULE_16__["ProductTreeComponent"],
                _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_17__["FilterPipe"],
                _components_product_material_product_material_component__WEBPACK_IMPORTED_MODULE_18__["ProductMaterialComponent"],
                _components_mrpview_mrpview_component__WEBPACK_IMPORTED_MODULE_19__["MRPViewComponent"],
                _components_request_create_request_create_component__WEBPACK_IMPORTED_MODULE_20__["RequestCreateComponent"],
                _views_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_21__["UserCreateComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

// 5d17a9f5f2c03824acd93dfd


/***/ }),

/***/ "./src/app/components/menu/menu.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lateral-nav {\n  background: #262a34;\n  color: #fff;\n  min-width: 200px;\n  min-height: 100vh;\n  padding: 0px;\n  height: 100%;\n}\n\n.lateral-nav a {\n  color: #fff;\n}\n\n.lateral-nav .logo {\n  background: #0275db;\n  margin-bottom: 2px;\n}\n\n.lateral-nav .logo h2 {\n  font-size: 30px;\n  font-family: \"Roboto\", sans-serif;\n  padding: 10px 0px;\n  text-align: center;\n  font-weight: 300;\n  margin: 0px;\n  cursor: pointer;\n}\n\n.lateral-nav .logo h2 small {\n  font-size: 15px;\n}\n\n.lateral-nav .menu a {\n  display: block;\n  padding: 15px;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 500;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  cursor: pointer;\n}\n\n.lateral-nav .menu a:hover {\n  background: #35ae6b;\n  text-decoration: none;\n}\n\n.lateral-nav .menu a i {\n  margin-right: 20px;\n}\n\n@media screen and (max-width: 1300px) {\n  .lateral-nav {\n    min-width: auto;\n  }\n\n  .lateral-nav .logo {\n    display: none;\n  }\n\n  .lateral-nav .menu a span {\n    display: none;\n  }\n\n  .lateral-nav .menu a i {\n    margin: 0px;\n  }\n}\n\n@media screen and (max-width: 575px) {\n  .lateral-nav {\n    min-height: auto;\n  }\n\n  .lateral-nav .menu a {\n    display: inline-block;\n    border-bottom: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51L0Q6XFxQcm9qZWN0c1xccHJvZHVjdGlvblxcY29kZVxcZnJvbnQtZW5kL3NyY1xcYXBwXFxjb21wb25lbnRzXFxtZW51XFxtZW51LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0NEOztBREVBO0VBQ0MsV0FBQTtBQ0NEOztBREVBO0VBQ0MsbUJBQUE7RUFDQSxrQkFBQTtBQ0NEOztBREVBO0VBQ0MsZUFBQTtFQUNBLGlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0csV0FBQTtFQUNBLGVBQUE7QUNDSjs7QURBSTtFQUNJLGVBQUE7QUNFUjs7QURFQTtFQUNDLGNBQUE7RUFDQSxhQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUNHLGlEQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0MsbUJBQUE7RUFDQSxxQkFBQTtBQ0NEOztBREVBO0VBQ0Msa0JBQUE7QUNDRDs7QURFQTtFQUNDO0lBQ0MsZUFBQTtFQ0NBOztFREVEO0lBQ0MsYUFBQTtFQ0NBOztFREVEO0lBQ0MsYUFBQTtFQ0NBOztFREVEO0lBQ0MsV0FBQTtFQ0NBO0FBQ0Y7O0FERUE7RUFDQztJQUNDLGdCQUFBO0VDQUE7O0VER0Q7SUFDQyxxQkFBQTtJQUNBLG1CQUFBO0VDQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhdGVyYWwtbmF2IHtcclxuXHRiYWNrZ3JvdW5kOiAjMjYyYTM0O1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdG1pbi13aWR0aDogMjAwcHg7XHJcblx0bWluLWhlaWdodDogMTAwdmg7XHJcblx0cGFkZGluZzogMHB4O1xyXG5cdGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmxhdGVyYWwtbmF2IGEge1xyXG5cdGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ubGF0ZXJhbC1uYXYgLmxvZ28ge1xyXG5cdGJhY2tncm91bmQ6ICMwMjc1ZGI7XHJcblx0bWFyZ2luLWJvdHRvbTogMnB4O1xyXG59XHJcblxyXG4ubGF0ZXJhbC1uYXYgLmxvZ28gaDIge1xyXG5cdGZvbnQtc2l6ZTogMzBweDtcclxuXHRmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuXHRwYWRkaW5nOiAxMHB4IDBweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Zm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgc21hbGwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIH1cclxufVxyXG5cclxuLmxhdGVyYWwtbmF2IC5tZW51IGEge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHBhZGRpbmc6IDE1cHg7XHJcblx0Zm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcblx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5sYXRlcmFsLW5hdiAubWVudSBhOmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kOiAjMzVhZTZiO1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmxhdGVyYWwtbmF2IC5tZW51IGEgaSB7XHJcblx0bWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzAwcHgpIHtcclxuXHQubGF0ZXJhbC1uYXYge1xyXG5cdFx0bWluLXdpZHRoOiBhdXRvO1xyXG5cdH1cclxuXHJcblx0LmxhdGVyYWwtbmF2IC5sb2dvIHtcclxuXHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0fVxyXG5cclxuXHQubGF0ZXJhbC1uYXYgLm1lbnUgYSBzcGFuIHtcclxuXHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0fVxyXG5cclxuXHQubGF0ZXJhbC1uYXYgLm1lbnUgYSBpIHtcclxuXHRcdG1hcmdpbjogMHB4O1xyXG5cdH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuXHQubGF0ZXJhbC1uYXYge1xyXG5cdFx0bWluLWhlaWdodDogYXV0bztcclxuXHR9XHJcblxyXG5cdC5sYXRlcmFsLW5hdiAubWVudSBhIHtcclxuXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdGJvcmRlci1ib3R0b206IG5vbmU7XHJcblx0fVxyXG59XHJcbiIsIi5sYXRlcmFsLW5hdiB7XG4gIGJhY2tncm91bmQ6ICMyNjJhMzQ7XG4gIGNvbG9yOiAjZmZmO1xuICBtaW4td2lkdGg6IDIwMHB4O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZzogMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5sYXRlcmFsLW5hdiBhIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5sYXRlcmFsLW5hdiAubG9nbyB7XG4gIGJhY2tncm91bmQ6ICMwMjc1ZGI7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cblxuLmxhdGVyYWwtbmF2IC5sb2dvIGgyIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgcGFkZGluZzogMTBweCAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbWFyZ2luOiAwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5sYXRlcmFsLW5hdiAubG9nbyBoMiBzbWFsbCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmxhdGVyYWwtbmF2IC5tZW51IGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxhdGVyYWwtbmF2IC5tZW51IGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMzVhZTZiO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5sYXRlcmFsLW5hdiAubWVudSBhIGkge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzMDBweCkge1xuICAubGF0ZXJhbC1uYXYge1xuICAgIG1pbi13aWR0aDogYXV0bztcbiAgfVxuXG4gIC5sYXRlcmFsLW5hdiAubG9nbyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5sYXRlcmFsLW5hdiAubWVudSBhIHNwYW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubGF0ZXJhbC1uYXYgLm1lbnUgYSBpIHtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLmxhdGVyYWwtbmF2IHtcbiAgICBtaW4taGVpZ2h0OiBhdXRvO1xuICB9XG5cbiAgLmxhdGVyYWwtbmF2IC5tZW51IGEge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");



var MenuComponent = /** @class */ (function () {
    function MenuComponent(_auth) {
        this._auth = _auth;
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.logout = function () {
        this._auth.logout();
    };
    MenuComponent.ctorParameters = function () { return [
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/components/menu/menu.component.scss")]
        })
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/components/mrpview/mrpview.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/mrpview/mrpview.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbXJwdmlldy9tcnB2aWV3LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/mrpview/mrpview.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/mrpview/mrpview.component.ts ***!
  \*********************************************************/
/*! exports provided: MRPViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MRPViewComponent", function() { return MRPViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_query_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/query.service */ "./src/app/services/query.service.ts");



var MRPViewComponent = /** @class */ (function () {
    function MRPViewComponent(_query) {
        this._query = _query;
        this.prodcutOutput = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    MRPViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var query = {
            query: "query Product($_id: ID!) {\n        product(_id: $_id) {\n          _id\n          name\n          ss\n          keep_cost\n          requests {\n            _id\n            units\n            to_order {\n              _id\n              department\n              type\n              order_date\n              order_cost\n              days_term\n              order_units\n              unit_cost\n              demands {\n                _id\n                product {\n                  _id\n                  name\n                }\n              }\n            }\n            requested_to\n            state\n          }\n          lots {\n            _id\n            inputed_at\n            units\n            output_datails {\n              _id\n              units\n            }\n            state\n          }\n          materials{\n            units\n            product{\n              _id\n            }\n          }\n        }\n      }", variables: {
                _id: this.productID
            }
        };
        this._query.getData(query).subscribe(function (result) {
            _this.product = result.data.product;
            _this.prodcutOutput.emit(result.data.product);
            _this.generateMRP();
        }, function (error) {
            _this.error = error.error.errors[0].message;
        });
    };
    MRPViewComponent.prototype.generateMRP = function () {
        /*let lastRequest = this.product.requests[0];
        if (lastRequest === undefined) return;
    
        for (let i = 0; i < this.product.requests.length; i++) {
          let requestI = this.product.requests[i];
    
          if (requestI.state != 'Canceled' && requestI.state != 'Satisfied') {
            let dateLast = new Date(lastRequest.requested_to);
            let dateI = new Date(requestI.requested_to);
    
            if (dateLast < dateI) lastRequest = requestI;
          }
        }
    
        let firstRequest = this.product.requests[0];
        if (firstRequest === undefined) return;
    
        for (let i = 0; i < this.product.requests.length; i++) {
          let requestI = this.product.requests[i];
    
          if (requestI.state != 'Canceled' && requestI.state != 'Satisfied') {
            let dateFirst = new Date(firstRequest.requested_to);
            let dateI = new Date(requestI.requested_to);
    
            if (dateFirst > dateI) firstRequest = requestI;
          }
        }
    
        let lastDate = new Date(lastRequest.requested_to);
        let firstDate = new Date(firstRequest.requested_to);
        if (firstRequest.to_order !== undefined) firstDate = new Date(firstRequest.to_order.order_date);
    
        let limit = Math.ceil((lastDate.getTime() - firstDate.getTime()) / (1000 * 60 * 60 * 24)) + 1;*/
        var firstDate = new Date();
        this.available = [this.getAvailableDate(firstDate)];
        var i = 0;
        do {
            if (this.periods === undefined) {
                this.periods = [firstDate.toLocaleDateString()];
            }
            else {
                this.periods = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.periods, [firstDate.toLocaleDateString()]);
            }
            if (this.demands === undefined) {
                this.demands = [this.getDemandDate(firstDate)];
            }
            else {
                this.demands = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.demands, [this.getDemandDate(firstDate)]);
            }
            if (this.inputs === undefined) {
                this.inputs = [this.getInputDate(firstDate)];
            }
            else {
                this.inputs = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.inputs, [this.getInputDate(firstDate)]);
            }
            if (i > 0) {
                var auxSS = this.product.ss;
                if (auxSS === undefined)
                    auxSS = 0;
                var auxAvailable = this.available[i - 1] + this.inputs[i] - this.demands[i] - auxSS;
                this.available = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.available, [auxAvailable]);
            }
            if (this.orders === undefined) {
                this.orders = [this.getOrderDate(firstDate)];
            }
            else {
                this.orders = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.orders, [this.getOrderDate(firstDate)]);
            }
            firstDate.setDate(firstDate.getDate() + 1);
            i++;
        } while (i <= this.limit);
    };
    MRPViewComponent.prototype.getDemandDate = function (date) {
        var auxDemands = this.product.requests;
        if (auxDemands === undefined)
            return 0;
        var auxDemand = 0;
        for (var i = 0; i < auxDemands.length; i++) {
            var dateI = new Date(auxDemands[i].requested_to);
            if (dateI.getDate() == date.getDate())
                auxDemand += auxDemands[i].units;
        }
        return auxDemand;
    };
    MRPViewComponent.prototype.getInputDate = function (date) {
        var auxDemands = this.product.requests;
        if (auxDemands === undefined)
            return 0;
        for (var i = 0; i < auxDemands.length; i++) {
            if (auxDemands[i].to_order.order_date !== undefined) {
                var dateI = new Date(auxDemands[i].to_order.order_date);
                dateI.setDate(dateI.getDate() + auxDemands[i].to_order.days_term);
                if (dateI.getDate() == date.getDate())
                    return auxDemands[i].to_order.order_units;
            }
        }
        return 0;
    };
    MRPViewComponent.prototype.getAvailableDate = function (date) {
        return 0;
    };
    MRPViewComponent.prototype.getOrderDate = function (date) {
        var auxDemands = this.product.requests;
        if (auxDemands === undefined)
            return 0;
        var auxOrder = 0;
        for (var i = 0; i < auxDemands.length; i++) {
            if (auxDemands[i].to_order.order_date !== undefined) {
                var dateI = new Date(auxDemands[i].to_order.order_date);
                dateI.setDate(dateI.getDate());
                if (dateI.getDate() == date.getDate())
                    auxOrder += auxDemands[i].to_order.order_units;
            }
        }
        return auxOrder;
    };
    MRPViewComponent.prototype.getFirstDemand = function () {
        var firstRequest = this.product.requests[0];
        if (firstRequest === undefined)
            return null;
        for (var i = 0; i < this.product.requests.length; i++) {
            var requestI = this.product.requests[i];
            if (requestI.state != 'Canceled') {
                var dateFirst = new Date(firstRequest.requested_to);
                var dateI = new Date(requestI.requested_to);
                if (dateFirst > dateI)
                    firstRequest = requestI;
            }
        }
        return firstRequest;
    };
    MRPViewComponent.prototype.getLastDemand = function () {
        var lastRequest = this.product.requests[0];
        if (lastRequest === undefined)
            return null;
        for (var i = 0; i < this.product.requests.length; i++) {
            var requestI = this.product.requests[i];
            if (requestI.state != 'Canceled') {
                var dateLast = new Date(lastRequest.requested_to);
                var dateI = new Date(requestI.requested_to);
                if (dateLast < dateI)
                    lastRequest = requestI;
            }
        }
        return lastRequest;
    };
    MRPViewComponent.prototype.getLast = function () {
        var lastRequest = this.product.requests[0];
        if (lastRequest === undefined)
            return null;
        for (var i = 0; i < this.product.requests.length; i++) {
            var requestI = this.product.requests[i];
            if (requestI.to_order !== undefined && requestI.state != 'Canceled') {
                var dateLast = new Date(lastRequest.requested_to);
                var dateI = new Date(requestI.requested_to);
                if (dateLast < dateI)
                    lastRequest = requestI;
            }
        }
        return lastRequest.to_order;
    };
    MRPViewComponent.prototype.getDaysTerm = function () {
        var last = this.getLast();
        if (last != null)
            return last.days_term;
        return 0;
    };
    MRPViewComponent.prototype.getMethod = function () {
        var last = this.getLast();
        if (last != null)
            return last.type;
        return 'L4L';
    };
    MRPViewComponent.prototype.getRequestCost = function () {
        var last = this.getLast();
        if (last != null)
            return last.order_cost;
        return 0;
    };
    MRPViewComponent.prototype.getUnitCost = function () {
        var last = this.getLast();
        if (last != null)
            return last.unit_cost;
        return 0;
    };
    MRPViewComponent.prototype.getDemand = function () {
        try {
            var firstDate = new Date(this.getFirstDemand().requested_to);
            var lastDate = new Date(this.getLastDemand().requested_to);
            var days = lastDate.getDate() - firstDate.getDate();
            if (days > 365)
                firstDate.setDate(lastDate.getDate() - 365);
            var demands = 0;
            for (var i = 0; i < this.product.requests.length; i++) {
                var requestI = this.product.requests[i];
                if (requestI.state != 'Canceled') {
                    var dateI = new Date(requestI.requested_to);
                    if (dateI <= lastDate && dateI >= firstDate) {
                        demands += requestI.units;
                    }
                }
            }
            if (days == 0)
                days = 1;
            return (demands / days) * 365;
        }
        catch (err) {
            return 0;
        }
    };
    MRPViewComponent.prototype.getDateRange = function () {
        /*let toDay = new Date();
        console.log(toDay.toLocaleString());
        toDay.setDate(toDay.getDate() + 320);
        console.log(toDay.toLocaleString());
        let to = new Date();
        console.log(Math.ceil((toDay.getTime() - to.getTime()) / (1000 * 60 * 60 * 24)))
        let aux: Date = new Date();
        for (let i = 0; i < this.product.requests.length; i++) {
          let current = new Date(this.product.requests[i].requested_to);
          console.log(`Fecha ${i}: `, current);
          console.log('Aux: ', aux);
          if (aux < current) aux = current;
        }
        console.log(aux);
        console.log(Math.ceil((aux.getTime() - (new Date()).getTime()) / (1000 * 60 * 60 * 24)));*/
    };
    MRPViewComponent.ctorParameters = function () { return [
        { type: src_app_services_query_service__WEBPACK_IMPORTED_MODULE_2__["QueryService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MRPViewComponent.prototype, "productID", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MRPViewComponent.prototype, "limit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], MRPViewComponent.prototype, "prodcutOutput", void 0);
    MRPViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mrpview',
            template: __webpack_require__(/*! raw-loader!./mrpview.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/mrpview/mrpview.component.html"),
            styles: [__webpack_require__(/*! ./mrpview.component.scss */ "./src/app/components/mrpview/mrpview.component.scss")]
        })
    ], MRPViewComponent);
    return MRPViewComponent;
}());



/***/ }),

/***/ "./src/app/components/product-create/product-create.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/product-create/product-create.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "textarea {\n  width: 100%;\n  max-width: 100%;\n  min-height: 100px;\n  max-height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0LWNyZWF0ZS9EOlxcUHJvamVjdHNcXHByb2R1Y3Rpb25cXGNvZGVcXGZyb250LWVuZC9zcmNcXGFwcFxcY29tcG9uZW50c1xccHJvZHVjdC1jcmVhdGVcXHByb2R1Y3QtY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3QtY3JlYXRlL3Byb2R1Y3QtY3JlYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3QtY3JlYXRlL3Byb2R1Y3QtY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGV4dGFyZWEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG59IiwidGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgbWF4LWhlaWdodDogMzAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/product-create/product-create.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/product-create/product-create.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProductCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCreateComponent", function() { return ProductCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/product */ "./src/app/models/product.ts");
/* harmony import */ var src_app_models_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/material */ "./src/app/models/material.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_services_query_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/query.service */ "./src/app/services/query.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_category__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/category */ "./src/app/models/category.ts");








var ProductCreateComponent = /** @class */ (function () {
    function ProductCreateComponent(spinner, _query, _router) {
        this.spinner = spinner;
        this._query = _query;
        this._router = _router;
        this.productToSave = new src_app_models_product__WEBPACK_IMPORTED_MODULE_2__["Product"]();
        this.selectedUnits = 1;
        this.fillMaterialsForSelect();
        var category = new src_app_models_category__WEBPACK_IMPORTED_MODULE_7__["Category"]();
        category._id = "5d1a7052abe3ea3b10708334";
        category.name = "Uncategorized";
        category.products = null;
        category.description = "";
        this.productToSave.category = category;
    }
    ProductCreateComponent.prototype.fillMaterialsForSelect = function () {
        var _this = this;
        this.spinner.show();
        var query = {
            query: "query Products{\n        products{\n          ...Material\n          materials {\n            units\n            product {\n              ...Material\n              materials {\n                units\n                product {\n                  ...Material\n                  materials {\n                    units\n                    product {\n                      ...Material\n                      materials {\n                        units\n                        product {\n                          ...Material\n                          materials {\n                            units\n                            product {\n                              ...Material\n                              materials {\n                                units\n                                product {\n                                  ...Material\n                                  materials {\n                                    units\n                                    product {\n                                      ...Material\n                                      materials {\n                                        units\n                                        product {\n                                          ...Material\n                                          materials{\n                                            units\n                                            product{\n                                              ...Material\n                                              materials{\n                                                units\n                                                product{\n                                                  ...Material\n                                                }\n                                              }\n                                            }\n                                          }\n                                        }\n                                      }\n                                    }\n                                  }\n                                }\n                              }\n                            }\n                          }\n                        }\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n      fragment Material on Product {\n        _id\n        name\n        description\n      }"
        };
        this._query.getData(query).subscribe(function (result) {
            _this.materialsForSelect = result.data.products;
            _this.selectedMaterial = _this.materialsForSelect[0];
            _this.spinner.hide();
        }, function (error) {
            _this.error = error.error.errors[0].message;
            _this.spinner.hide();
        });
    };
    ProductCreateComponent.prototype.ngOnInit = function () {
    };
    ProductCreateComponent.prototype.addMaterial = function () {
        if (this.materialsForSelect !== undefined) {
            var materilasToSave = this.productToSave.materials;
            var aux1 = new src_app_models_material__WEBPACK_IMPORTED_MODULE_3__["Material"]();
            aux1.units = this.selectedUnits;
            aux1.product = this.selectedMaterial;
            aux1.description = "";
            if (materilasToSave !== undefined) {
                this.productToSave.materials = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](materilasToSave, [aux1]);
            }
            else {
                this.productToSave.materials = [aux1];
            }
            var auxMat = void 0;
            for (var i = 0; i < this.materialsForSelect.length; i++) {
                if (aux1.product._id != this.materialsForSelect[i]._id)
                    if (auxMat !== undefined) {
                        auxMat = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](auxMat, [this.materialsForSelect[i]]);
                    }
                    else {
                        auxMat = [this.materialsForSelect[i]];
                    }
            }
            this.materialsForSelect = auxMat;
            if (this.materialsForSelect !== undefined)
                this.selectedMaterial = this.materialsForSelect[0];
            this.selectedUnits = 1;
        }
    };
    ProductCreateComponent.prototype.removeMaterial = function (material) {
        var auxMaterialsToSave = this.productToSave.materials;
        var auxNewMaterials;
        for (var i = 0; i < this.productToSave.materials.length; i++) {
            if (material.product._id != this.productToSave.materials[i].product._id)
                if (auxNewMaterials !== undefined) {
                    auxNewMaterials = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](auxNewMaterials, [this.productToSave.materials[i]]);
                }
                else {
                    auxNewMaterials = [this.productToSave.materials[i]];
                }
        }
        this.productToSave.materials = auxNewMaterials;
        var auxProduct = material.product;
        if (this.materialsForSelect !== undefined) {
            var auxMaterials = this.materialsForSelect;
            this.materialsForSelect = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](auxMaterials, [auxProduct]);
        }
        else {
            this.materialsForSelect = [auxProduct];
        }
        this.selectedMaterial = this.materialsForSelect[0];
    };
    ProductCreateComponent.prototype.save = function () {
        var _this = this;
        if (this.productToSave.name === undefined || this.productToSave.name == '') {
            this.error = "Nombre de producto es requerido.";
            return;
        }
        var aux = this.productToSave;
        this.spinner.show();
        var query = {
            query: "mutation CreateProduct($productInput: ProductInput!) {\n        createProduct(productInput: $productInput) {\n          _id\n        }\n      }",
            variables: {
                productInput: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, aux, { category: aux.category._id, materials: this.transformMaterial(aux.materials) })
            }
        };
        this._query.getData(query).subscribe(function (result) {
            _this.spinner.hide();
            _this._router.navigate(['/products', result.data.createProduct._id]);
        }, function (error) {
            _this.error = error.error.errors[0].message;
            _this.spinner.hide();
        });
    };
    ProductCreateComponent.prototype.transformMaterial = function (mtrls) {
        if (mtrls === undefined)
            return [];
        var materials;
        for (var i = 0; i < mtrls.length; i++) {
            var item = {
                units: mtrls[i].units,
                product: mtrls[i].product._id,
                description: mtrls[i].description
            };
            if (materials !== undefined) {
                materials = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](materials, [item]);
            }
            else {
                materials = [item];
            }
        }
        return materials;
    };
    ProductCreateComponent.ctorParameters = function () { return [
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: src_app_services_query_service__WEBPACK_IMPORTED_MODULE_5__["QueryService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    ProductCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-create',
            template: __webpack_require__(/*! raw-loader!./product-create.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/product-create/product-create.component.html"),
            styles: [__webpack_require__(/*! ./product-create.component.scss */ "./src/app/components/product-create/product-create.component.scss")]
        })
    ], ProductCreateComponent);
    return ProductCreateComponent;
}());



/***/ }),

/***/ "./src/app/components/product-detail/product-detail.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/product-detail/product-detail.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/product-detail/product-detail.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/product-detail/product-detail.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_query_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/query.service */ "./src/app/services/query.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");





var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(route, _query, spinner, _router) {
        this.route = route;
        this._query = _query;
        this.spinner = spinner;
        this._router = _router;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            var query = {
                query: "query Product($_id: ID!) {\n          product(_id: $_id) {\n            _id\n            name\n            direct_labor\n            ss\n            keep_cost\n            category{\n              _id\n              name\n            }\n            requests {\n              _id\n              requested_to\n              state\n            }\n            description\n            materials {\n              units\n              product {\n                ...Material\n                materials {\n                  units\n                  product {\n                    ...Material\n                    materials {\n                      units\n                      product {\n                        ...Material\n                        materials {\n                          units\n                          product {\n                            ...Material\n                            materials {\n                              units\n                              product {\n                                ...Material\n                                materials {\n                                  units\n                                  product {\n                                    ...Material\n                                    materials {\n                                      units\n                                      product {\n                                        ...Material\n                                        materials {\n                                          units\n                                          product {\n                                            ...Material\n                                            materials{\n                                              units\n                                              product{\n                                                ...Material\n                                                materials{\n                                                  units\n                                                  product{\n                                                    ...Material\n                                                  }\n                                                }\n                                              }\n                                            }\n                                          }\n                                        }\n                                      }\n                                    }\n                                  }\n                                }\n                              }\n                            }\n                          }\n                        }\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n        \n        fragment Material on Product {\n          _id\n          name\n        }", variables: {
                    _id: params.get('id')
                }
            };
            _this.spinner.show();
            _this._query.getData(query).subscribe(function (result) {
                _this.product = result.data.product;
            }, function (error) {
                _this.error = error.error.errors[0].message;
                _this.spinner.hide();
            }, function () {
                _this._ids = [_this.product._id];
                _this.loopIds(_this.product.materials);
                var aux = _this.getLastDemand(_this.product);
                if (aux == null) {
                    _this.limit = 0;
                }
                else {
                    var toDay = new Date();
                    var limit = new Date(aux.requested_to);
                    _this.limit = Math.ceil((limit.getTime() - toDay.getTime()) / (1000 * 60 * 60 * 24)) + 1;
                }
                _this.spinner.hide();
            });
        });
    };
    ProductDetailComponent.prototype.getLastDemand = function (product) {
        var lastRequest = product.requests[0];
        if (lastRequest === undefined)
            return null;
        for (var i = 0; i < product.requests.length; i++) {
            var requestI = product.requests[i];
            if (requestI.state != 'Canceled') {
                var dateLast = new Date(lastRequest.requested_to);
                var dateI = new Date(requestI.requested_to);
                if (dateLast < dateI)
                    lastRequest = requestI;
            }
        }
        return lastRequest;
    };
    ProductDetailComponent.prototype.loopIds = function (materials) {
        if (materials === undefined || materials.length === 0)
            return;
        for (var i = 0; i < materials.length; i++) {
            var material = materials[i];
            var can = true;
            var ids = this._ids;
            for (var j = 0; j < ids.length; j++) {
                if (material.product._id == ids[j]) {
                    can = false;
                }
            }
            if (can) {
                ids = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](ids, [material.product._id]);
                this._ids = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](ids);
            }
            ;
            if (material.product.materials !== undefined && material.product.materials.length > 0) {
                this.loopIds(material.product.materials);
            }
        }
    };
    ProductDetailComponent.prototype.storedProduct = function (prodcutOutput) {
        if (this.products === undefined) {
            this.products = [prodcutOutput];
        }
        else {
            this.products = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.products, [prodcutOutput]);
        }
    };
    ProductDetailComponent.prototype.createDemand = function () {
        $('#modal').modal('handleUpdate');
        $('#modal').modal('show');
    };
    ProductDetailComponent.prototype.reload = function (reload) {
        if (reload)
            window.location.reload();
    };
    ProductDetailComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_services_query_service__WEBPACK_IMPORTED_MODULE_3__["QueryService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ProductDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-detail',
            template: __webpack_require__(/*! raw-loader!./product-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/product-detail/product-detail.component.html"),
            styles: [__webpack_require__(/*! ./product-detail.component.scss */ "./src/app/components/product-detail/product-detail.component.scss")]
        })
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/product-list/product-list.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/product-list/product-list.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/product-list/product-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/product-list/product-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_query_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/query.service */ "./src/app/services/query.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");




var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(_query, spinner) {
        var _this = this;
        this._query = _query;
        this.spinner = spinner;
        this.spinner.show();
        var query = {
            query: "query Producst{\n      products {\n        _id\n        name\n        category{\n          name\n        }\n      }\n    }"
        };
        this._query.getData(query).subscribe(function (products) {
            _this.products = products.data.products;
            _this.spinner.hide();
        }, function (error) {
            _this.error = error.error.errors[0].message;
            _this.spinner.hide();
        });
    }
    ProductListComponent.prototype.ngOnInit = function () {
    };
    ProductListComponent.prototype.viewTreeModal = function (_id) {
        var _this = this;
        this.spinner.show();
        var query = {
            query: "query Product($_id: ID!) {\n        product(_id: $_id) {\n          ...Material\n          materials {\n            units\n            product {\n              ...Material\n              materials {\n                units\n                product {\n                  ...Material\n                  materials {\n                    units\n                    product {\n                      ...Material\n                      materials {\n                        units\n                        product {\n                          ...Material\n                          materials {\n                            units\n                            product {\n                              ...Material\n                              materials {\n                                units\n                                product {\n                                  ...Material\n                                  materials {\n                                    units\n                                    product {\n                                      ...Material\n                                      materials {\n                                        units\n                                        product {\n                                          ...Material\n                                          materials{\n                                            units\n                                            product{\n                                              ...Material\n                                              materials{\n                                                units\n                                                product{\n                                                  ...Material\n                                                }\n                                              }\n                                            }\n                                          }\n                                        }\n                                      }\n                                    }\n                                  }\n                                }\n                              }\n                            }\n                          }\n                        }\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n      \n      fragment Material on Product {\n        _id\n        name\n      }", variables: { _id: _id }
        };
        this._query.getData(query).subscribe(function (result) {
            _this.product = result.data.product;
            _this.spinner.hide();
            $('#modal').modal('handleUpdate');
            $('#modal').modal('show');
        }, function (error) {
            _this.error = error.error.errors[0].message;
            _this.spinner.hide();
        });
    };
    ProductListComponent.prototype.productLoop = function (_id, products) {
    };
    ProductListComponent.ctorParameters = function () { return [
        { type: src_app_services_query_service__WEBPACK_IMPORTED_MODULE_2__["QueryService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }
    ]; };
    ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__(/*! raw-loader!./product-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/product-list/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.scss */ "./src/app/components/product-list/product-list.component.scss")]
        })
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/components/product-material/product-material.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/product-material/product-material.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC1tYXRlcmlhbC9wcm9kdWN0LW1hdGVyaWFsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/product-material/product-material.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/product-material/product-material.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProductMaterialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductMaterialComponent", function() { return ProductMaterialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductMaterialComponent = /** @class */ (function () {
    function ProductMaterialComponent() {
    }
    ProductMaterialComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ProductMaterialComponent.prototype, "material", void 0);
    ProductMaterialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-material',
            template: __webpack_require__(/*! raw-loader!./product-material.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/product-material/product-material.component.html"),
            styles: [__webpack_require__(/*! ./product-material.component.scss */ "./src/app/components/product-material/product-material.component.scss")]
        })
    ], ProductMaterialComponent);
    return ProductMaterialComponent;
}());



/***/ }),

/***/ "./src/app/components/product-tree/product-tree.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/product-tree/product-tree.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC10cmVlL3Byb2R1Y3QtdHJlZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/product-tree/product-tree.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/product-tree/product-tree.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProductTreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductTreeComponent", function() { return ProductTreeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductTreeComponent = /** @class */ (function () {
    function ProductTreeComponent() {
    }
    ProductTreeComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ProductTreeComponent.prototype, "product", void 0);
    ProductTreeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-tree',
            template: __webpack_require__(/*! raw-loader!./product-tree.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/product-tree/product-tree.component.html"),
            styles: [__webpack_require__(/*! ./product-tree.component.scss */ "./src/app/components/product-tree/product-tree.component.scss")]
        })
    ], ProductTreeComponent);
    return ProductTreeComponent;
}());



/***/ }),

/***/ "./src/app/components/request-create/request-create.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/request-create/request-create.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVxdWVzdC1jcmVhdGUvcmVxdWVzdC1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/request-create/request-create.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/request-create/request-create.component.ts ***!
  \***********************************************************************/
/*! exports provided: RequestCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestCreateComponent", function() { return RequestCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/request */ "./src/app/models/request.ts");
/* harmony import */ var src_app_services_query_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/query.service */ "./src/app/services/query.service.ts");
/* harmony import */ var src_app_models_to_order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/to-order */ "./src/app/models/to-order.ts");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");







var RequestCreateComponent = /** @class */ (function () {
    function RequestCreateComponent(_query, spinner) {
        this._query = _query;
        this.spinner = spinner;
        this.reload = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    RequestCreateComponent.prototype.ngOnInit = function () {
        this.iteration = 0;
        this.isFirst = true;
        this.getProducts();
    };
    RequestCreateComponent.prototype.getProducts = function () {
        var _this = this;
        this.spinner.show();
        var query = {
            query: "query GetProduct($_id: ID!) {\n        product(_id: $_id) {\n          _id\n          name\n          materials {\n            units\n            product {\n              _id\n              name\n            }\n          }\n        }\n      }",
            variables: {
                _id: this._ids[this.iteration]
            }
        };
        this._query.getData(query).subscribe(function (result) {
            if (_this.iteration == 0) {
                var request = new src_app_models_request__WEBPACK_IMPORTED_MODULE_2__["Request"]();
                var requester = new src_app_models_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
                request._id = '_' + Math.random().toString(36).substr(2, 9);
                requester._id = localStorage.getItem('userId');
                request.requester = requester;
                request.product = result.data.product;
                request.units = 0;
                var order = new src_app_models_to_order__WEBPACK_IMPORTED_MODULE_4__["ToOrder"]();
                order.department = 'Production';
                order.type = 'L4L';
                order.order_date = new Date().toLocaleDateString();
                order.days_term = 0;
                request.to_order = order;
                request.requested_to = order.order_date;
                request.state = 'Wait';
                if (_this.requests === undefined) {
                    _this.requests = [request];
                }
                else {
                    _this.requests = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_this.requests, [request]);
                }
            }
            if (_this.products === undefined) {
                _this.products = [result.data.product];
            }
            else {
                _this.products = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_this.products, [result.data.product]);
            }
        }, function (error) {
            _this.error = error.error.errors[0].message;
            _this.spinner.hide();
        }, function () {
            if (_this._ids[_this.iteration + 1] !== undefined) {
                _this.iteration++;
                _this.getProducts();
            }
            else {
                _this.iteration = 0;
                _this.spinner.hide();
            }
        });
    };
    RequestCreateComponent.prototype.onChange = function (value) {
        var _this = this;
        this.index = 0;
        //this.requestsAux = this.requests;
        while (this.requests[this.index] != undefined) {
            this.requests[this.index].to_order.order_units = this.requests[this.index].units;
            this.requests[this.index].to_order.order_date = new Date(new Date(this.requests[this.index].requested_to).getTime() - (this.requests[this.index].to_order.days_term * 1000 * 60 * 60 * 24)).toLocaleDateString();
            //this.updateRequestUnits(this.requestsAux[this.index], this.requestsAux[this.index].units);
            if (this.requests[this.index].product.materials !== undefined && this.requests[this.index].product.materials.length > 0) {
                var _loop_1 = function (i) {
                    var isNew = true;
                    var position = void 0;
                    for (var j = 0; j < this_1.requests.length; j++) {
                        if (this_1.requests[this_1.index].product.materials[i].product._id == this_1.requests[j].product._id) {
                            if (this_1.requests[this_1.index].to_order.demands !== undefined) {
                                for (var k = 0; k < this_1.requests[this_1.index].to_order.demands.length; k++) {
                                    if (this_1.requests[this_1.index].to_order.demands[k]._id == this_1.requests[j]._id) {
                                        isNew = false;
                                        position = j;
                                    }
                                }
                            }
                        }
                    }
                    if (this_1.isFirst)
                        isNew = true;
                    if (isNew) {
                        var requestAux = new src_app_models_request__WEBPACK_IMPORTED_MODULE_2__["Request"]();
                        var requester = new src_app_models_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
                        requestAux._id = '_' + Math.random().toString(36).substr(2, 9);
                        requester._id = localStorage.getItem('userId');
                        requestAux.requester = requester;
                        requestAux.product = this_1.products.find(function (prod) { return prod._id == _this.requests[_this.index].product.materials[i].product._id; });
                        requestAux.units = this_1.requests[this_1.index].product.materials[i].units * this_1.requests[this_1.index].units;
                        requestAux.requested_to = new Date(this_1.requests[this_1.index].to_order.order_date).toLocaleDateString();
                        var order = new src_app_models_to_order__WEBPACK_IMPORTED_MODULE_4__["ToOrder"]();
                        order.department = 'Production';
                        order.type = 'L4L';
                        order.days_term = 0;
                        order.order_units = requestAux.units;
                        order.order_date = new Date(new Date(requestAux.requested_to).getTime() - (order.days_term * 1000 * 60 * 60 * 24)).toLocaleDateString();
                        requestAux.to_order = order;
                        requestAux.state = 'Wait';
                        if (this_1.requests === undefined) {
                            this_1.requests = [requestAux];
                        }
                        else {
                            this_1.requests = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this_1.requests, [requestAux]);
                        }
                        if (this_1.requests[this_1.index].to_order.demands === undefined) {
                            this_1.requests[this_1.index].to_order.demands = [requestAux];
                        }
                        else {
                            this_1.requests[this_1.index].to_order.demands = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this_1.requests[this_1.index].to_order.demands, [requestAux]);
                        }
                    }
                    else {
                        this_1.requests[position].units = this_1.requests[this_1.index].product.materials[i].units * this_1.requests[this_1.index].to_order.order_units;
                        this_1.requests[position].requested_to = new Date(this_1.requests[this_1.index].to_order.order_date).toLocaleDateString();
                        this_1.requests[position].to_order.order_date = new Date(new Date(this_1.requests[position].requested_to).getTime() - (this_1.requests[position].to_order.days_term * 1000 * 60 * 60 * 24)).toLocaleDateString();
                        //if (this.requestsAux === undefined) { this.requestsAux = [this.requests[position]]; } else { this.requestsAux = [...this.requestsAux, this.requests[position]] }
                    }
                };
                var this_1 = this;
                for (var i = 0; i < this.requests[this.index].product.materials.length; i++) {
                    _loop_1(i);
                }
            }
            this.index++;
        }
        this.isFirst = false;
    };
    RequestCreateComponent.prototype.updateRequestUnits = function (request, demand) { };
    RequestCreateComponent.prototype.save = function () {
        var toDay = new Date();
        for (var i = 0; i < this.requests.length; i++) {
            var auxDate = new Date(this.requests[i].to_order.order_date);
            if (auxDate <= toDay) {
                this.error = 'Verifica que la fecha de orden sea posterior a hoy.';
                return;
            }
            if (!(this.requests[i].units > 0)) {
                this.error = 'Verifica que las cantidades requeridas sean mayores a cero.';
                return;
            }
        }
        this.spinner.show();
        this.saveRequests();
    };
    RequestCreateComponent.prototype.saveRequests = function () {
        var _this = this;
        var query = {
            query: "mutation CreateRequest($requestInput: RequestInput!) {\n        createRequest(requestInput: $requestInput) {\n          _id\n          requester {\n            _id\n            user_name\n          }\n          product {\n            _id\n            name\n          }\n          units\n          requested_to\n          state\n          description\n        }\n      }",
            variables: {
                requestInput: {
                    requester: this.requests[this.iteration].requester._id,
                    product: this.requests[this.iteration].product._id,
                    units: this.requests[this.iteration].units,
                    requested_to: this.requests[this.iteration].requested_to,
                    state: this.requests[this.iteration].state
                }
            }
        };
        this._query.getData(query).subscribe(function (result) {
            _this.requests[_this.iteration]._id = result.data.createRequest._id;
        }, function (error) {
            _this.error = error.error.errors[0].message;
            _this.spinner.hide();
        }, function () {
            if (_this.requests[_this.iteration + 1] !== undefined) {
                _this.iteration++;
                _this.saveRequests();
            }
            else {
                _this.iteration = 0;
                _this.saveOrders();
            }
        });
    };
    RequestCreateComponent.prototype.saveOrders = function () {
        var _this = this;
        var query = {
            query: "mutation CreateOrder($orderInput: ToOrderInput!){\n        createToOrder(toOrderInput:$orderInput){\n          _id\n          request{\n            _id\n            requester{\n              _id\n              name\n            }\n            product{\n              _id\n              name\n            }\n            units\n          }\n          department\n          type\n          order_date\n          order_cost\n          days_term\n          order_units\n          unit_cost\n        }\n      }",
            variables: {
                orderInput: {
                    request: this.requests[this.iteration]._id,
                    department: this.requests[this.iteration].to_order.department,
                    type: this.requests[this.iteration].to_order.type,
                    order_date: this.requests[this.iteration].to_order.order_date,
                    order_cost: this.requests[this.iteration].to_order.order_cost,
                    days_term: this.requests[this.iteration].to_order.days_term,
                    order_units: this.requests[this.iteration].to_order.order_units,
                    unit_cost: this.requests[this.iteration].to_order.unit_cost
                }
            }
        };
        this._query.getData(query).subscribe(function (result) {
            _this.requests[_this.iteration].to_order._id = result.data.createToOrder._id;
        }, function (error) {
            _this.error = error.error.errors[0].message;
            _this.spinner.hide();
        }, function () {
            if (_this.requests[_this.iteration + 1] !== undefined && _this.requests[_this.iteration + 1].to_order !== undefined) {
                _this.iteration++;
                _this.saveOrders();
            }
            else {
                _this.iteration = 0;
                _this.spinner.hide();
                _this.reload.emit(true);
            }
        });
    };
    RequestCreateComponent.ctorParameters = function () { return [
        { type: src_app_services_query_service__WEBPACK_IMPORTED_MODULE_3__["QueryService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], RequestCreateComponent.prototype, "_ids", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], RequestCreateComponent.prototype, "reload", void 0);
    RequestCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-request-create',
            template: __webpack_require__(/*! raw-loader!./request-create.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/request-create/request-create.component.html"),
            styles: [__webpack_require__(/*! ./request-create.component.scss */ "./src/app/components/request-create/request-create.component.scss")]
        })
    ], RequestCreateComponent);
    return RequestCreateComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(_auth) {
        this._auth = _auth;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        return this._auth.isAuth();
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/models/category.ts":
/*!************************************!*\
  !*** ./src/app/models/category.ts ***!
  \************************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
var Category = /** @class */ (function () {
    function Category() {
    }
    return Category;
}());



/***/ }),

/***/ "./src/app/models/material.ts":
/*!************************************!*\
  !*** ./src/app/models/material.ts ***!
  \************************************/
/*! exports provided: Material */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Material", function() { return Material; });
var Material = /** @class */ (function () {
    function Material() {
    }
    return Material;
}());



/***/ }),

/***/ "./src/app/models/product.ts":
/*!***********************************!*\
  !*** ./src/app/models/product.ts ***!
  \***********************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());



/***/ }),

/***/ "./src/app/models/request.ts":
/*!***********************************!*\
  !*** ./src/app/models/request.ts ***!
  \***********************************/
/*! exports provided: Request */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
var State;
(function (State) {
    State["Wait"] = "Wait";
    State["Process"] = "Process";
    State["Satisfied"] = "Satisfied";
    State["Canceled"] = "Canceled";
})(State || (State = {}));
var Request = /** @class */ (function () {
    function Request() {
    }
    return Request;
}());



/***/ }),

/***/ "./src/app/models/to-order.ts":
/*!************************************!*\
  !*** ./src/app/models/to-order.ts ***!
  \************************************/
/*! exports provided: ToOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToOrder", function() { return ToOrder; });
var Department;
(function (Department) {
    Department["Production"] = "Production";
    Department["Purchase"] = "Purchase";
})(Department || (Department = {}));
var Type;
(function (Type) {
    Type["Q"] = "Q";
    Type["L4L"] = "L4L";
    Type["LTC"] = "LTC";
    Type["LUC"] = "LUC";
})(Type || (Type = {}));
var ToOrder = /** @class */ (function () {
    function ToOrder() {
    }
    return ToOrder;
}());



/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/pipes/filter.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, search) {
        if (!items)
            return [];
        if (!search)
            return items;
        search = search.toLowerCase();
        return items.filter(function (item) {
            return item.name.toLocaleLowerCase().includes(search);
        });
    };
    FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _query_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./query.service */ "./src/app/services/query.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthService = /** @class */ (function () {
    function AuthService(_query, _router) {
        this._query = _query;
        this._router = _router;
    }
    AuthService.prototype.navigateHome = function () {
        this._router.navigate(['/home']);
    };
    AuthService.prototype.login = function (login) {
        localStorage.setItem('userId', login.data.login.userId);
        localStorage.setItem('token', 'Bearer ' + login.data.login.token);
        this.navigateHome();
    };
    AuthService.prototype.navigateLogin = function () {
        this._router.navigate(['/login']);
    };
    AuthService.prototype.logout = function () {
        localStorage.clear();
        this.navigateLogin();
    };
    AuthService.prototype.isAuth = function () {
        if (!localStorage.getItem('userId') || !localStorage.getItem('token')) {
            this.navigateLogin();
            return false;
        }
        ;
        return true;
    };
    AuthService.prototype.isAuthCreate = function () {
        if (!localStorage.getItem('userId') || !localStorage.getItem('token')) {
            return false;
        }
        ;
        return true;
    };
    AuthService.ctorParameters = function () { return [
        { type: _query_service__WEBPACK_IMPORTED_MODULE_2__["QueryService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/query.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/query.service.ts ***!
  \*******************************************/
/*! exports provided: QueryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryService", function() { return QueryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var QueryService = /** @class */ (function () {
    function QueryService(_http) {
        this._http = _http;
        this.base_url = 'https://mrp-uni.herokuapp.com/api/';
    }
    QueryService.prototype.getData = function (query) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': !localStorage.getItem('token') ? '' : localStorage.getItem('token')
            })
        };
        return this._http.post(this.base_url, query, httpOptions);
    };
    QueryService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    QueryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], QueryService);
    return QueryService;
}());



/***/ }),

/***/ "./src/app/views/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/views/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/views/home/home.component.scss")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/views/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/views/login/login.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/views/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_services_query_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/query.service */ "./src/app/services/query.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(spinner, _query, _auth, _router) {
        this.spinner = spinner;
        this._query = _query;
        this._auth = _auth;
        this._router = _router;
        this.user = {
            user_name: '',
            password: ''
        };
        this.error = '';
        if (this._auth.isAuth())
            this._auth.navigateHome();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.spinner.show();
        var query = {
            query: "query Login($user_name: String!, $password: String!){\n        login(user_name: $user_name, password: $password){\n          userId\n          token\n          tokenExpiration\n        }\n      }",
            variables: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.user)
        };
        this._query.getData(query).subscribe(function (result) {
            _this.spinner.hide();
            _this._auth.login(result);
        }, function (error) {
            _this.error = error.error.errors[0].message;
            _this.spinner.hide();
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] },
        { type: src_app_services_query_service__WEBPACK_IMPORTED_MODULE_3__["QueryService"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/views/login/login.component.scss")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/views/page404/page404.component.scss":
/*!******************************************************!*\
  !*** ./src/app/views/page404/page404.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2U0MDQvcGFnZTQwNC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/page404/page404.component.ts":
/*!****************************************************!*\
  !*** ./src/app/views/page404/page404.component.ts ***!
  \****************************************************/
/*! exports provided: Page404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page404Component", function() { return Page404Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Page404Component = /** @class */ (function () {
    function Page404Component() {
    }
    Page404Component.prototype.ngOnInit = function () {
    };
    Page404Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page404',
            template: __webpack_require__(/*! raw-loader!./page404.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/page404/page404.component.html"),
            styles: [__webpack_require__(/*! ./page404.component.scss */ "./src/app/views/page404/page404.component.scss")]
        })
    ], Page404Component);
    return Page404Component;
}());



/***/ }),

/***/ "./src/app/views/products/products.component.scss":
/*!********************************************************!*\
  !*** ./src/app/views/products/products.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/products/products.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/products/products.component.ts ***!
  \******************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.scss */ "./src/app/views/products/products.component.scss")]
        })
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/views/user-create/user-create.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/views/user-create/user-create.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  top: 50%;\n  left: 50%;\n  position: absolute;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  padding: 20px 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdXNlci1jcmVhdGUvRDpcXFByb2plY3RzXFxwcm9kdWN0aW9uXFxjb2RlXFxmcm9udC1lbmQvc3JjXFxhcHBcXHZpZXdzXFx1c2VyLWNyZWF0ZVxcdXNlci1jcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL3VzZXItY3JlYXRlL3VzZXItY3JlYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvdXNlci1jcmVhdGUvdXNlci1jcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyIHtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XHJcbn0iLCIuY2VudGVyIHtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/views/user-create/user-create.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/user-create/user-create.component.ts ***!
  \************************************************************/
/*! exports provided: UserCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCreateComponent", function() { return UserCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");
/* harmony import */ var src_app_services_query_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/query.service */ "./src/app/services/query.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");






var UserCreateComponent = /** @class */ (function () {
    function UserCreateComponent(_auth, _query, spinner) {
        this._auth = _auth;
        this._query = _query;
        this.spinner = spinner;
        if (this._auth.isAuthCreate())
            this._auth.navigateHome();
        this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__["User"];
        this.user.ind = '' + new Date().getTime();
    }
    UserCreateComponent.prototype.ngOnInit = function () {
    };
    UserCreateComponent.prototype.save = function () {
        var _this = this;
        if (this.user.name === undefined || this.user.name.length < 1) {
            this.error = 'Nombre requerido.';
            return;
        }
        if (this.user.surname === undefined || this.user.surname.length < 1) {
            this.error = 'Apellido requerido.';
            return;
        }
        if (this.user.user_name === undefined || this.user.user_name.length < 1) {
            this.error = 'Nombre de usuario requerido.';
            return;
        }
        if (this.user.password === undefined || this.user.password.length < 6) {
            this.error = 'Contraseña es requerida y al menos 6 dígitos.';
            return;
        }
        if (this.user.password === undefined || this.pass === undefined || this.user.password != this.pass) {
            this.error = 'La contraseña no coincide.';
            return;
        }
        this.spinner.show();
        var query = {
            query: "mutation CreateUser($input: UserInput!) {\n        createUser(userInput: $input) {\n          _id\n          name\n          surname\n          ind\n          user_name\n          password\n          description\n          roles {\n            name\n          }\n        }\n      }",
            variables: {
                input: {
                    name: this.user.name,
                    surname: this.user.surname,
                    ind: this.user.ind,
                    user_name: this.user.user_name,
                    password: this.user.password
                }
            }
        };
        this._query.getData(query).subscribe(function (result) {
            if (result.data.createUser._id !== undefined && result.data.createUser._id != '') {
            }
        }, function (error) {
            _this.error = error.error.errors[0].message;
            _this.spinner.hide();
        }, function () {
            var queryLogin = {
                query: "query Login($user_name: String!, $password: String!){\n          login(user_name: $user_name, password: $password){\n            userId\n            token\n            tokenExpiration\n          }\n        }",
                variables: {
                    user_name: _this.user.user_name,
                    password: _this.user.password
                }
            };
            _this._query.getData(queryLogin).subscribe(function (result) {
                _this.spinner.hide();
                _this._auth.login(result);
            }, function (error) {
                _this.error = error.error.errors[0].message;
                _this.spinner.hide();
            });
        });
    };
    UserCreateComponent.ctorParameters = function () { return [
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: src_app_services_query_service__WEBPACK_IMPORTED_MODULE_4__["QueryService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] }
    ]; };
    UserCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-create',
            template: __webpack_require__(/*! raw-loader!./user-create.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/user-create/user-create.component.html"),
            styles: [__webpack_require__(/*! ./user-create.component.scss */ "./src/app/views/user-create/user-create.component.scss")]
        })
    ], UserCreateComponent);
    return UserCreateComponent;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\production\code\front-end\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map
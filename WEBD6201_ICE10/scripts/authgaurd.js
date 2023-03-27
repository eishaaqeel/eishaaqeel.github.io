"use strict";
(function () {
    let protectedRoutes = [
        'contact-list'
    ];
    if (protectedRoutes.indexOf(router.ActiveLink) > -1) {
        if (!sessionStorage.getItem("user")) {
            window.location.href = '/login';
        }
    }
})();
//# sourceMappingURL=authgaurd.js.map
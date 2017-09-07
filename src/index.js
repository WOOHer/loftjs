/* ДЗ 3 - работа с массивами и объеектами */

/*
 Задача 1:
 Напишите аналог встроенного метода forEach для работы с массивами
 */
function forEach(array, fn) {
    for (var i = 0; i < array.length; i++) {
        fn(array[i], i, array);
    }
}

/*
 Задача 2:
 Напишите аналог встроенного метода map для работы с массивами
 */
function map(array, fn) {

    var arr = [];

    for (var i = 0; i < array.length; i++) {

        arr.push(fn(array[i], i, array));
    }

    return arr;
}

/*
 Задача 3:
 Напишите аналог встроенного метода reduce для работы с массивами
 */
function reduce(array, fn, initial) {
    if (initial !== undefined) {
        var prev = initial;
        var i = 0;
    } else {
        var prev = array[0];
        var i = 1;
    }

    for (i; i < array.length; i++) {
        prev = fn(prev, array[i], i, array);

    }
    return prev;
}

/*
 Задача 4:
 Функция принимает объект и имя свойства, которое необходиом удалить из объекта
 Функция должна удалить указанное свойство из указанного объекта
 */
function deleteProperty(obj, prop) {
<<<<<<< HEAD
    if (obj.hasOwnProperty(prop)) {
        delete obj[prop];
    }
=======
    delete obj[prop];
>>>>>>> c9eccdd02d71ba768af176061a82748e2d08823d
}

/*
 Задача 5:
 Функция принимает объект и имя свойства и возвращает true или false
 Функция должна проверить существует ли укзаанное свойство в указанном объекте
 */
function hasProperty(obj, prop) {
<<<<<<< HEAD
    if (obj.hasOwnProperty(prop)) {
        return true;
    }

    return false;
}

=======
    if (prop in obj) {
        return true;
    }

    return false;
}

>>>>>>> c9eccdd02d71ba768af176061a82748e2d08823d
/*
 Задача 6:
 Функция должна получить все перечисляемые свойства объекта и вернуть их в виде массива
 */
function getEnumProps(obj) {
    var arr = [];
<<<<<<< HEAD

    for (var props in obj) {
        arr.push(props);
    }

    return arr;
}

/*
 Задача 7:
 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистра и вернуть в виде массива
 */
function upperProps(obj) {
    var arr = [];

=======

    for (var props in obj) {
        arr.push(props);
    }

    return arr;
}

/*
 Задача 7:
 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистра и вернуть в виде массива
 */
function upperProps(obj) {
    var arr = [];

>>>>>>> c9eccdd02d71ba768af176061a82748e2d08823d
    for (var props in obj) {
        arr.push(props.toUpperCase());
    }

    return arr;
}

/*
 Задача 8 *:
 Напишите аналог встроенного метода slice для работы с массивами
 */
function slice(array, from, to) {
<<<<<<< HEAD
    for (var i = 0; i < array.length; i++) {
        var arr = array[i];
    }

    return arr.prototype.slice.call(this, from, to);
}

=======
    from = array[i] < to;
    to = (array[i] > from) - 1;
    var arr = [];
    arr.push(from, array.length, to);
}

>>>>>>> c9eccdd02d71ba768af176061a82748e2d08823d
/*
 Задача 9 *:
 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
    let proxy = new Proxy(obj, {
        set(target, prop, value) {
            target[prop] = value * value;
            return true;
        }
    });

    return proxy;
}

export {
    forEach,
    map,
    reduce,
    deleteProperty,
    hasProperty,
    getEnumProps,
    upperProps,
    slice,
    createProxy
};

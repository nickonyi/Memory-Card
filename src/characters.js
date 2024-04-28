import uniqid from 'uniqid';
import amon from './assets/img/characters/amon.jpeg'
import asami from './assets/img/characters/asami.jpeg'
import bolin from './assets/img/characters/bolin.jpeg'
import ghazan from './assets/img/characters/ghazan.jpeg'
import korra from './assets/img/characters/korra.jpeg'
import kuvira from './assets/img/characters/kuvira.jpeg'
import mako from './assets/img/characters/mako.jpeg'
import pli from './assets/img/characters/pli.jpeg'
import tenzin from './assets/img/characters/tenzin.jpeg'
import unalaq from './assets/img/characters/unalaq.jpeg'
import zaheer from './assets/img/characters/zaheer.jpeg'


const characters = [{
        id: uniqid(),
        name: 'Amon',
        src: amon,
        clicked: false,
    },
    {
        id: uniqid(),
        name: 'Asami',
        src: asami,
        clicked: false,
    },
    {
        id: uniqid(),
        name: 'Bolin',
        src: bolin,
        clicked: false,
    },
    {
        id: uniqid(),
        name: 'Ghazan',
        src: ghazan,
        clicked: false,
    },
    {
        id: uniqid(),
        name: 'Korra',
        src: korra,
        clicked: false,
    },
    {
        id: uniqid(),
        name: 'Kuvira',
        src: kuvira,
        clicked: false,
    },
    {
        id: uniqid(),
        name: 'Mako',
        src: mako,
        clicked: false,
    },
    {
        id: uniqid(),
        name: "Pl'i",
        src: pli,
        clicked: false,
    },
    {
        id: uniqid(),
        name: 'Tenzin',
        src: tenzin,
        clicked: false,
    },
    {
        id: uniqid(),
        name: 'Unalaq',
        src: unalaq,
        clicked: false,
    },
    {
        id: uniqid(),
        name: 'Zaheer',
        src: zaheer,
        clicked: false,
    }
];

export default characters;
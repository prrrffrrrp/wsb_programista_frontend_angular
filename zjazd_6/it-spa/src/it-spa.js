import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import './it-spa.scss';
import { createHeader, createMain, createFooter } from './common';
import { navigation } from './navigation/navigation';

const body = $(document.body);

const itSpaNavigation = navigation();
const itSpaHeader = createHeader();
const itSpaMain = createMain();
const itSpaFooter = createFooter();

body.append(itSpaNavigation);
body.append(itSpaHeader);
body.append(itSpaMain);
body.append(itSpaFooter);



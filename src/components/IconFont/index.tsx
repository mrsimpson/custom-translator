import React from 'react';
import { classNames } from '../../public/utils';
import './style.css';

type IconFontProps = {
    iconName: string;
    title?: string;
} & Pick<React.SVGAttributes<SVGSVGElement>, 'className' | 'style' | 'onClick' | 'onMouseUp' | 'onMouseDown'>;

const IconFont: React.FC<IconFontProps> = ({ iconName, className, style, onClick, onMouseUp, onMouseDown, title }) => {
    return (
        <svg
            className={classNames('iconfont', className)}
            aria-hidden='true'
            style={style}
            onClick={onClick}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            viewBox='0 0 1024 1024'
        >
            {title ? <title>{title}</title> : ''}
            <path d={paths[iconName]}></path>
        </svg>
    );
};

export default IconFont;

const paths: { [key: string]: string } = {
    '#icon-MdAdd': 'M810.666667 554.666667H554.666667v256h-85.333334V554.666667H213.333333v-85.333334h256V213.333333h85.333334v256h256v85.333334z',
    '#icon-MdArrowDropUp': 'M298.666667 597.333333l213.333333-213.333333 213.333333 213.333333z',
    '#icon-MdDelete': 'M256 810.666667c0 47.146667 38.186667 85.333333 85.333333 85.333333h341.333334c47.146667 0 85.333333-38.186667 85.333333-85.333333V298.666667H256v512zM810.666667 170.666667h-149.333334l-42.666666-42.666667H405.333333l-42.666666 42.666667h-149.333334v85.333333h597.333334V170.666667z',
    '#icon-MdHistory': 'M554.453333 128C342.186667 128 170.666667 299.946667 170.666667 512H42.666667l166.186666 166.186667 2.986667 6.186666L384 512h-128c0-164.906667 133.76-298.666667 298.666667-298.666667s298.666667 133.76 298.666666 298.666667-133.76 298.666667-298.666666 298.666667c-82.56 0-157.013333-33.706667-210.986667-87.68l-60.373333 60.373333C352.64 852.906667 448.426667 896 554.453333 896 766.72 896 938.666667 724.053333 938.666667 512S766.72 128 554.453333 128zM512 341.333333v213.333334l182.613333 108.373333L725.333333 611.2l-149.333333-88.533333V341.333333h-64z',
    '#icon-MdSettings': 'M829.013333 553.6c1.706667-13.653333 2.986667-27.52 2.986667-41.6s-1.28-27.946667-2.986667-41.6l90.24-70.613333c8.106667-6.4 10.453333-17.92 5.12-27.306667l-85.333333-147.84c-5.333333-9.173333-16.426667-13.013333-26.026667-9.173333l-106.24 42.88c-21.973333-16.853333-46.08-31.146667-72.106666-42.026667L618.666667 103.253333c-1.92-10.026667-10.666667-17.92-21.333334-17.92h-170.666666c-10.666667 0-19.413333 7.893333-21.12 17.92l-16 113.066667a315.733333 315.733333 0 0 0-72.106667 42.026667L211.2 215.466667a21.333333 21.333333 0 0 0-26.026667 9.173333l-85.333333 147.84c-5.333333 9.173333-2.986667 20.693333 5.12 27.306667l90.026667 70.613333C193.28 484.053333 192 497.92 192 512s1.28 27.946667 2.986667 41.6l-90.026667 70.613333c-8.106667 6.4-10.453333 17.92-5.12 27.306667l85.333333 147.84c5.333333 9.173333 16.426667 13.013333 26.026667 9.173333l106.24-42.88c21.973333 16.853333 46.08 31.146667 72.106667 42.026667l16 113.066667c1.706667 10.026667 10.453333 17.92 21.12 17.92h170.666666c10.666667 0 19.413333-7.893333 21.12-17.92l16-113.066667a315.733333 315.733333 0 0 0 72.106667-42.026667l106.24 42.88a21.333333 21.333333 0 0 0 26.026667-9.173333l85.333333-147.84c5.333333-9.173333 2.986667-20.693333-5.12-27.306667l-90.026667-70.613333zM512 661.333333c-82.56 0-149.333333-66.773333-149.333333-149.333333s66.773333-149.333333 149.333333-149.333333 149.333333 66.773333 149.333333 149.333333-66.773333 149.333333-149.333333 149.333333z',
    '#icon-MdSwap': 'M298.24 469.333333L128 640l170.24 170.666667v-128H597.333333v-85.333334H298.24v-128zM896 384l-170.24-170.666667v128H426.666667v85.333334h299.093333v128L896 384z',
    '#icon-MdTranslate': 'M549.12 643.2l-108.373333-107.093333 1.28-1.28c74.24-82.773333 127.146667-177.92 158.293333-278.613334H725.333333V170.666667H426.666667V85.333333h-85.333334v85.333334H42.666667v84.906666h476.586666A673.834667 673.834667 0 0 1 384 484.266667a672.853333 672.853333 0 0 1-98.56-142.933334h-85.333333c31.146667 69.546667 73.813333 135.253333 127.146666 194.56L110.293333 750.293333 170.666667 810.666667l213.333333-213.333334 132.693333 132.693334 32.426667-86.826667zM789.333333 426.666667h-85.333333l-192 512h85.333333l48-128h202.666667L896 938.666667h85.333333l-192-512z m-112 298.666666L746.666667 540.373333 816 725.333333h-138.666667z',
    '#icon-GoPin': 'M640 76.8V128l32 64L384 384H140.8c-28.16 0-42.88 33.92-21.76 55.04L320 640l-256 320 320-256 200.96 200.96a32 32 0 0 0 55.04-21.76V640l192-288 64 32h51.2c28.16 0 42.88-33.92 21.76-55.04L695.04 55.04a32 32 0 0 0-55.04 21.76z',
    '#icon-GoX': 'M606.72 512l240 240-94.72 94.72L512 606.72l-240 240-94.72-94.72L417.28 512 177.28 272l94.72-94.72L512 417.28l240-240 94.72 94.72L606.72 512z',
    '#icon-GoUnmute': 'M768 513.28c0 69.76-28.8 133.76-74.88 181.12l-42.88-42.88c35.2-35.84 56.96-83.84 56.96-138.24 0-54.4-21.76-103.04-56.96-138.24l42.88-42.88A255.36 255.36 0 0 1 768 513.28zM494.08 145.92L256 384H128c-35.2 0-64 28.8-64 64v128c0 35.2 28.8 64 64 64h128l238.08 238.08c30.08 30.08 81.92 8.96 81.92-33.92V179.84c0-42.88-51.84-64-81.92-33.92z m380.16 5.12l-42.88 42.88a447.744 447.744 0 0 1 131.84 318.72c0 124.16-49.92 236.8-131.84 318.72l42.88 42.88A510.272 510.272 0 0 0 1024 512c0-142.08-56.96-270.08-149.76-362.24v1.28z m-90.24 90.24l-44.16 42.88a323.2 323.2 0 0 1 94.72 229.12c0 88.96-35.84 170.24-94.72 227.84l44.16 42.88A382.08 382.08 0 0 0 896 513.28c0-105.6-42.88-202.24-112-272z',
    '#icon-GoChevronDown': 'M512 704L192 384l96-96L512 528 736 288 832 384l-320 320z',
    '#icon-GoChevronRight': 'M736 512l-320 320L320 736 560 512 320 288 416 192l320 320z',
    '#icon-IoMdSunny': 'M768 512a256 256 0 1 1-512 0 256 256 0 0 1 512 0zM480 64h64v128h-64V64z m0 768h64v128h-64v-128z m352-352h128v64h-128v-64zM64 480h128v64H64v-64z m651.648-213.024l90.496-90.496 45.248 45.248-90.496 90.496-45.248-45.248zM172.576 802.304l90.496-90.496 45.248 45.248-90.496 90.496-45.248-45.248z m539.2-41.408l45.248-45.248 90.496 90.496-45.248 45.248-90.496-90.496zM176.448 217.856l45.248-45.248 90.496 90.496-45.248 45.248-90.496-90.496z',
    '#icon-IoMdMoon': 'M528 960A464 464 0 0 1 64 496c0-188 108-356.56 275.22-429.34a32 32 0 0 1 42.12 42.12C362.14 152.86 352 209.32 352 272c0 220.56 179.44 400 400 400 62.68 0 119.14-10.14 163.22-29.34a32 32 0 0 1 42.12 42.12C884.56 852 716 960 528 960z',
    '#icon-plus': 'M586.533019 437.46647 586.533019 64.788585 437.465958 64.788585 437.465958 437.46647 437.461865 437.46647 64.78705 437.46647 64.78705 586.53353 437.461865 586.53353 437.465958 586.53353 437.465958 586.537623 437.465958 959.211415 586.533019 959.211415 586.533019 586.537623 586.533019 586.53353 959.210903 586.53353 959.210903 437.46647Z',
    '#icon-top': 'M910.208 625.792l-73.6 74.24-267.712-265.408v535.872H455.04V434.56l-271.936 277.12L111.616 635.008l398.912-407.488 399.68 398.208z m0-568.96v113.856H113.792V56.896h796.416z',
    '#icon-move': 'M635.733333 217.6L810.666667 392.533333l-51.2 51.2-123.733334-123.733333V896H554.666667V128l81.066666 89.6zM388.266667 810.666667L213.333333 635.733333l51.2-51.2 123.733334 123.733334V128H469.333333v768l-81.066666-85.333333z',
    '#icon-horizontalDots': 'M512 512m-102.4 0a102.4 102.4 0 1 0 204.8 0 102.4 102.4 0 1 0-204.8 0ZM238.92992 512m-102.4 0a102.4 102.4 0 1 0 204.8 0 102.4 102.4 0 1 0-204.8 0ZM785.07008 512m-102.4 0a102.4 102.4 0 1 0 204.8 0 102.4 102.4 0 1 0-204.8 0Z',
    '#icon-edit': 'M736 410.272h16a16 16 0 0 1 16 16v413.92a16 16 0 0 1-16 16H208a16 16 0 0 1-16-16v-624a16 16 0 0 1 16-16h394.592a16 16 0 0 1 16 16v16a16 16 0 0 1-16 16H240v560h480v-381.92a16 16 0 0 1 16-16z m78.16-229.6l11.312 11.328a16 16 0 0 1 0 22.624l-316.8 316.8a16 16 0 0 1-22.608 0l-11.312-11.328a16 16 0 0 1 0-22.624l316.784-316.8a16 16 0 0 1 22.624 0zM328 672.208h304a16 16 0 0 1 16 16v16a16 16 0 0 1-16 16h-304a16 16 0 0 1-16-16v-16a16 16 0 0 1 16-16z m8-104h64a16 16 0 0 1 16 16v16a16 16 0 0 1-16 16h-64a16 16 0 0 1-16-16v-16a16 16 0 0 1 16-16z',
    '#icon-theme': 'M264.090273 111.378908h146.607307c18.711012 0 34.14437 13.959435 37.6713 32.525996 4.352736 13.905745 12.482957 26.391258 23.038182 34.830836a62.572018 62.572018 0 0 0 40.372425 14.521903 63.719964 63.719964 0 0 0 40.651103-14.521903 69.494211 69.494211 0 0 0 23.885718-37.745444c4.602012-17.978525 20.036647-29.606275 36.570653-29.606274h146.603472c11.931993 0 21.961822 4.635248 28.991395 13.959435l208.417437 222.941897a42.288652 42.288652 0 0 1 0 57.738627L853.822723 559.302927a36.064431 36.064431 0 0 1-53.681187 0l-0.525397-0.884609-1.624765-1.150503v314.419662c0 22.666186-16.784559 40.938728-38.497106 40.938728H264.090273c-21.136017 0-37.920576-18.272543-37.920576-40.938728V557.266537l-2.45185 2.03639a36.371232 36.371232 0 0 1-53.954751 0L26.682719 406.020146c-14.633119-15.940857-14.633119-41.801606 0-57.738627l1.876598-1.76794L236.975476 123.006658a37.470601 37.470601 0 0 1 27.114797-11.632863z m120.868 81.289422h-105.158522L107.42757 377.29848l89.17548 95.195168 40.372426-43.238456a37.786351 37.786351 0 0 1 27.114797-11.8962c21.111728 0 37.946143 18.272543 37.946142 40.644711v372.443358h419.511711V457.998589a41.312003 41.312003 0 0 1 11.377195-28.748511c14.658685-15.96898 39.022502-15.96898 54.20147 0l39.859813 43.24357 89.699598-95.195168-172.625291-184.63015h-105.434643a144.386837 144.386837 0 0 1-40.12315 51.100226c-24.113263 19.746465-54.20147 31.642665-86.723631 31.642665-32.492759 0-62.334248-11.8962-86.448789-31.642665a148.496689 148.496689 0 0 1-40.372425-51.093834z',
    '#icon-cursorDefault': 'M429.653333 608.853333C450.986667 598.613333 476.16 608 486.4 629.333333L584.533333 842.24 661.333333 805.973333 562.773333 593.493333C552.533333 572.16 561.92 546.56 583.253333 536.746667L595.2 533.333333 693.333333 514.133333 341.333333 218.453333 341.333333 678.4 418.986667 615.68 429.653333 608.853333M581.973333 937.386667C560.64 947.626667 535.04 938.666667 525.226667 917.333333L432.213333 715.093333 325.12 801.28C317.866667 807.253333 308.906667 810.666667 298.666667 810.666667 275.2 810.666667 256 791.466667 256 768L256 128C256 104.533333 275.2 85.333333 298.666667 85.333333 308.906667 85.333333 318.72 89.173333 325.973333 95.146667L326.4 94.72 816.64 506.026667C834.986667 521.386667 837.12 548.266667 822.186667 566.186667 815.786667 573.866667 806.826667 578.986667 797.866667 580.693333L663.04 607.146667 756.906667 808.96C768 830.293333 757.76 855.466667 736.426667 865.28L581.973333 937.386667Z',
    '#icon-menu': 'M896 307.2h-768a25.6 25.6 0 0 1 0-51.2h768a25.6 25.6 0 0 1 0 51.2zM896 563.2h-768a25.6 25.6 0 0 1 0-51.2h768a25.6 25.6 0 0 1 0 51.2zM896 819.2h-768a25.6 25.6 0 0 1 0-51.2h768a25.6 25.6 0 0 1 0 51.2z',
    '#icon-search': 'M662.635 460.563q0-87.1-61.912-149.013t-149.013-61.912-149.013 61.912-61.912 149.013 61.912 149.013 149.013 61.912 149.013-61.912 61.912-149.013zM903.69 852.278q0 24.482-17.891 42.373t-42.373 17.891q-25.424 0-42.373-17.891l-161.488-161.017q-84.276 58.381-187.853 58.381-67.326 0-128.768-26.13t-105.933-70.622-70.622-105.933-26.13-128.768 26.13-128.768 70.622-105.933 105.933-70.622 128.768-26.13 128.767 26.13 105.933 70.622 70.622 105.933 26.13 128.768q0 103.578-58.381 187.853l161.488 161.488q17.421 17.421 17.421 42.373z',
    '#icon-copy': 'M377 432h349a8 8 0 0 1 8 8v48a8 8 0 0 1-8 8H377a8 8 0 0 1-8-8v-48a8 8 0 0 1 8-8z m0 160h258a8 8 0 0 1 8 8v48a8 8 0 0 1-8 8H377a8 8 0 0 1-8-8v-48a8 8 0 0 1 8-8z m-65-280v576h480V312H312z m-40-72h560c17.673 0 32 14.327 32 32v656c0 17.673-14.327 32-32 32H272c-17.673 0-32-14.327-32-32V272c0-17.673 14.327-32 32-32z m-88-56v664a8 8 0 0 1-8 8h-56a8 8 0 0 1-8-8V144c0-17.673 14.327-32 32-32h632a8 8 0 0 1 8 8v56a8 8 0 0 1-8 8H184z',
    '#icon-insert': 'M401.664 554.666667l55.168 55.168a42.624 42.624 0 1 1-60.330667 60.330666l-128-128a42.624 42.624 0 0 1 0-60.330666l128-128a42.624 42.624 0 1 1 60.330667 60.330666L401.664 469.333333H896a42.666667 42.666667 0 0 1 0 85.333334H401.664zM725.333333 128a42.666667 42.666667 0 0 1 0 85.333333H128a42.666667 42.666667 0 0 1 0-85.333333h597.333333z m0 682.666667a42.666667 42.666667 0 0 1 0 85.333333H128a42.666667 42.666667 0 0 1 0-85.333333h597.333333zM401.664 554.666667l55.168 55.168a42.624 42.624 0 1 1-60.330667 60.330666l-128-128a42.624 42.624 0 0 1 0-60.330666l128-128a42.624 42.624 0 1 1 60.330667 60.330666L401.664 469.333333H896a42.666667 42.666667 0 0 1 0 85.333334H401.664zM725.333333 128a42.666667 42.666667 0 0 1 0 85.333333H128a42.666667 42.666667 0 0 1 0-85.333333h597.333333zM725.333333 810.666667a42.666667 42.666667 0 0 1 0 85.333333H128a42.666667 42.666667 0 0 1 0-85.333333h597.333333z',
    '#icon-beta': 'M5.54 690.493V331.904h97.73q48.83 0 76.288 24.504t27.47 73.268a83.205 83.205 0 0 1-11.505 43.591 70.82 70.82 0 0 1-31.888 28.57 65.582 65.582 0 0 1 40.377 30.786 105.262 105.262 0 0 1 14.12 54.923q0 50.488-27.074 76.718t-74.68 26.23H5.54z m49.06-207.62h54.108a48.742 48.742 0 0 0 36.034-13.174q13.261-13.18 13.225-37.315 0-26.624-13.931-39.532t-40.766-12.948H54.6v102.968z m0 44.58v115.015h61.778q25.466 0 39.162-14.121t13.732-40.924q0-28.508-11.504-44.252t-35.917-15.719H54.6z m405.883 1.725H331.878v113.29h149.218v48.025H282.813V331.904h196.839v48H331.878v101.222h128.605v48.031z m275.261-149.274h-88.837v310.569h-49.06V379.904h-88.811v-48h226.708v48zM945.807 606.72H830.72l-23.398 83.738h-49.664l107.986-358.59h46.443l106.808 358.59h-49.884z m-100.94-49.997h87.04l-42.61-153.19h-1.213z',
    '#icon-start': 'M409 379.1c0-36.42 25.12-50.47 56.11-31.38L674 476.42c31 19.08 30.91 50 0 69L465.11 674.15c-31 19.09-56.11 5-56.11-31.38z m0 0M512 109.35A401.22 401.22 0 1 1 355.28 141 400.2 400.2 0 0 1 512 109.35m0-43C265.87 66.35 66.35 265.87 66.35 512S265.87 957.65 512 957.65 957.65 758.13 957.65 512 758.13 66.35 512 66.35z',
    '#icon-switch': 'M918.9 483c-17.5 0-32.7-12.8-35.5-30.4C854.3 269.2 698.1 136 512 136c-100.4 0-194.9 39.1-265.9 110.1-14.1 14.1-36.9 14.1-50.9 0-14.1-14.1-14.1-36.9 0-50.9 41.1-41.1 89-73.4 142.4-96C392.9 75.9 451.5 64 512 64c54.6 0 108 9.7 158.6 28.9 48.9 18.5 93.9 45.3 133.7 79.6 30.3 26.1 56.7 55.9 78.8 88.6 1.5-18.5 17-33 35.9-33 19.9 0 36 16.1 36 36l-0.1 183c0 18.8-14.5 34.4-33.2 35.9h-2.8zM507 958.2c-54.6 0-108-9.7-158.6-28.9-48.9-18.5-93.9-45.3-133.7-79.6-30.3-26.1-56.7-55.9-78.8-88.6-1.5 18.5-17 33-35.9 33-19.9 0-36-16.1-36-36l0.1-183c0-18.8 14.5-34.4 33.2-35.9 18.7-1.5 35.4 11.7 38.4 30.3C164.7 753 320.9 886.2 507 886.2c101.3 0 196.2-39.7 267.4-111.7 14-14.1 36.8-14.3 50.9-0.3 14.1 14 14.3 36.8 0.3 50.9-41.2 41.7-89.3 74.4-143 97.3-55.6 23.8-114.7 35.8-175.6 35.8z',
    '#icon-A': 'M832 896H730.56l-72.576-210.24H361.856L293.44 896H192l270.848-768h98.24L832 896zM629.504 598.976L522.112 279.68c-3.392-10.176-7.04-28.096-11.008-53.504H508.8c-3.392 23.168-7.232 40.96-11.456 53.504l-106.56 319.296h238.72z',
    '#icon-B': 'M270.528 894.464V129.536h224.704c67.136 0 120.768 16.064 160.896 48.128 40.256 32.064 60.224 74.624 60.224 127.616 0 42.176-11.904 79.36-35.776 111.616-23.872 32.256-56.768 55.168-98.496 68.672v1.984c52.032 5.888 93.504 25.6 124.608 59.008s46.72 75.84 46.72 127.104c0 65.856-23.616 119.104-70.848 159.744-47.232 40.704-107.776 60.992-181.504 60.992H270.528zM369.28 216v239.488h89.856c47.744 0 85.184-11.648 112.32-34.816 27.2-23.232 40.768-55.424 40.768-96.576 0-72.064-48.064-108.16-144.192-108.16H369.28z m0 325.376v266.624h118.528c51.648 0 91.584-11.968 119.68-35.776 28.096-23.872 42.24-57.088 42.24-99.52 0-87.552-59.392-131.392-178.24-131.392H369.28z',
    '#icon-C': 'M533.55185 151.054355c-185.506692 3.828037-280.174056 124.90886-283.906392 363.395589 3.713196 230.926355 98.380561 350.16972 283.906392 357.710953 151.341458-3.732336 236.51529-81.345794 255.502356-232.802093l85.173831 22.719402c-34.069533 189.315589-149.580561 281.915813-346.360822 278.221757-242.295626-7.636935-365.328748-149.504-369.061084-425.869159 11.350131-280.078355 132.450093-425.850019 363.395589-437.20015 177.869757 7.617794 291.428486 90.858467 340.676187 249.83686l-85.173832 22.719402c-37.89757-124.928-119.243364-191.114766-244.152225-198.732561z',
    '#icon-stop': 'M874.8 128 149.2 128C137.4 128 128 137.4 128 149.2l0 725.6c0 11.8 9.4 21.2 21.2 21.2l725.6 0c11.6 0 21.2-9.4 21.2-21.2L896 149.2C896 137.4 886.4 128 874.8 128z',
    '#icon-quote': 'M192.8 832h154.2l101.8-193.2V192h-320v446.8h154.2L192.8 832z m448 0h154.2l100-193.2V192H576.8v446.8h164l-100 193.2z',
    '#icon-collect': 'M490.261333 173.44a49.066667 49.066667 0 0 1 64.064 19.178667l1.664 3.093333 87.850667 177.813333 196.352 28.501334a49.066667 49.066667 0 0 1 29.717333 81.066666l-2.538666 2.645334L725.333333 624l33.536 195.349333a49.066667 49.066667 0 0 1-68.010666 53.269334l-3.157334-1.514667L512 778.858667l-175.701333 92.266666a49.066667 49.066667 0 0 1-71.637334-48.426666l0.469334-3.328L298.666667 624.021333 156.629333 485.76a49.066667 49.066667 0 0 1 23.893334-83.114667l3.285333-0.597333 196.352-28.501333 87.850667-177.813334a49.066667 49.066667 0 0 1 22.250666-22.272z',
    '#icon-refresh': 'M512 776c-145.194 0-264-118.81-264-264 0-145.202 118.806-264 264-264 72.6 0 138.598 30.8 184.812 79.202L556 468h308V160l-103.396 103.404C696.812 199.596 608.812 160 512 160c-193.594 0-352 158.406-352 352s156.188 352 352 352c162.09 0 296.574-108.268 338.802-256H757.7c-37.49 99.122-134.276 168-245.7 168z',
    '#icon-collections': 'M854.016 512l0-342.016-214.016 0 0 342.016 105.984-64zM854.016 86.016q34.005333 0 59.008 25.002667t25.002667 59.008l0 512q0 34.005333-25.002667 59.989333t-59.008 25.984l-512 0q-34.005333 0-59.989333-25.984t-25.984-59.989333l0-512q0-34.005333 25.984-59.008t59.989333-25.002667l512 0zM169.984 256l0 598.016 598.016 0 0 84.010667-598.016 0q-34.005333 0-59.008-25.002667t-25.002667-59.008l0-598.016 84.010667 0z',
};
import React from 'react';

const Datas = () => {

    let onSale = [
        { id: 11, title: 'Pause Hoodie Women', price: 62.00, inStock: 20, discount: 20, img: '/image/PauseHoodieWomen.jpg', subImg: '/image/PauseHoodieWomen_sub.jpg', subImg_1: '/image/PauseHoodieWomen_sub_1-1.jpg', subImg_2: '/image/PauseHoodieWomen_sub_1-2.jpg', categoryGender: 'Fitness' },
        { id: 12, title: 'Exo Ultra Sports Bra', price: 55.00, inStock: 11, discount: 0, img: '/image/ExoUltra.jpg', subImg: '/image/ExoUltra_sub.jpg', subImg_1: '/image/ExoUltra_sub_1-1.jpg', subImg_2: '/image/ExoUltra_sub_1-2.jpg', categoryGender: 'Fitness' },
        { id: 13, title: 'Jordan React Elevation', price: 42.00, inStock: 2, discount: 0, img: '/image/JordanReact.jpg', subImg: '/image/JordanReact_sub.jpg', subImg_1: '/image/JordanReact_sub_1-1.jpg', subImg_2: '/image/JordanReact_sub_1-2.jpg', categoryGender: 'FootWear' },
        { id: 14, title: "Men's Shoes Airi Max", price: 48.00, inStock: 98, discount: 13, img: '/image/AiriMax.jpg', subImg: '/image/AiriMax_sub.jpg', subImg_1: '/image/AiriMax_sub_1-1.jpg', subImg_2: '/image/AiriMax_sub_1-2.jpg', categoryGender: 'FootWear' },
        { id: 15, title: 'Fraction Crop Top', price: 32.41, inStock: 0, discount: 0, img: '/image/FractionCropTop.jpg', subImg: '/image/FractionCropTop_sub.jpg', subImg_1: '/image/FractionCropTop_sub_1-1.jpg', subImg_2: '/image/FractionCropTop_sub_1-2.jpg', categoryGender: 'Fitness' },
        { id: 16, title: 'Vital Rise Sports Bra', price: 41.92, inStock: 25, discount: 0, img: '/image/VitalRise.jpg', subImg: '/image/VitalRise_sub.jpg', subImg_1: '/image/VitalRise_sub_1-1.jpg', subImg_2: '/image/VitalRise_sub_1-2.jpg', categoryGender: 'Fitness' },
        { id: 17, title: 'Pause Joggers Women', price: 58.12, inStock: 5, discount: 0, img: '/image/PauseJoggers.jpg', subImg: '/image/PauseJoggers_sub.jpg', subImg_1: '/image/PauseJoggers_sub_1-1.jpg', subImg_2: '/image/PauseJoggers_sub_1-2.jpg', categoryGender: 'Fitness' },
        { id: 18, title: 'Rise Sports Bra', price: 58.00, inStock: 0, discount: 19, img: '/image/RiseSports.jpg', subImg: '/image/RiseSports_sub.jpg', subImg_1: '/image/RiseSports_sub_1-1.jpg', subImg_2: '/image/RiseSports_sub_1-2.jpg', categoryGender: 'Fitness' },
        { id: 19, title: 'Galaxy Active Watch', price: 36.00, inStock: 91, discount: 0, img: '/image/GalaxyWatch.jpg', subImg: '/image/GalaxyWatch_sub.jpg', subImg_1: '/image/GalaxyWatch_sub_1-1.jpg', categoryGender: 'Tech' },
        { id: 20, title: 'Wireless Bluetooth Speaker', price: 36.00, inStock: 100, discount: 50, img: '/image/WireLessSpeaker.jpg', subImg: '/image/WireLessSpeaker_sub.jpg', categoryGender: 'Tech' },
    ]

    let blogs = [
        { id: 1, img: '/image/blog_1.jpg', description: 'Donec tellus Nulla lorem Nullam elit id ut elit feugiat lacus. Congue eget dapibus congue tincidunt senectus nibh risus Phasellus tristique justo. Justo Pellentesque Donec lobortis faucibus', title: 'Urna pretium elit mauris cursus Curabitur at elit Vestibulum', date: '28 NOV 2022', author: 'ALI GOLIZDEH' },
        { id: 2, img: '/image/blog_2.jpg', description: 'Suspendisse posuere, diam in bibendum lobortis, turpis ipsum aliquam risus, sit amet dictum ligula lorem non nisl Urna pretium elit mauris cursus Curabitur at elit Vestibulum', title: 'Nullam ullamcorper nisl quis ornare molestie', date: '28 NOV 2022', author: 'ALI GOLIZADEH' },
        { id: 3, img: '/image/blog_3.jpg', description: 'Turpis at eleifend mi elit Aenean porta ac sed faucibus. Nunc urna Morbi fringilla vitae orci convallis condimentum auctor sit dui. Urna pretium elit mauris cursus Curabitur at elit Vestibulum', title: 'Turpis at eleifend mi elit Aenean porta ac sed faucibus', date: '28 NOV 2022', author: 'ALI GOLIZADEH' },
        { id: 4, img: '/image/blog_4.jpg', description: 'Sed mauris Pellentesque elit Aliquam at lacus interdum nascetur elit ipsum. Enim ipsum hendrerit Suspendisse turpis laoreet fames tempus ligula pede ac. Et Lorem penatibus orci eu ultrices egestas Nam quam Vivamus nibh.', title: 'Morbi condimentum molestie Nam enim odio sodales', date: '28 NOV 2022', author: 'ALI GOLIZADEH' },
        { id: 5, img: '/image/blog_5.jpg', description: 'Mi vitae magnis Fusce laoreet nibh felis porttitor laoreet Vestibulum faucibus. At Nulla id tincidunt ut sed semper vel Lorem condimentum ornare.', title: 'Urna pretium elit mauris cursus Curabitur at elit Vestibulum', date: '28 NOV 2022', author: 'ALI GOLIZADEH' },
        { id: 6, img: '/image/blog_6.jpg', description: 'Mi vitae magnis Fusce laoreet nibh felis porttitor laoreet Vestibulum faucibus. At Nulla id tincidunt ut sed semper vel Lorem condimentum ornare.', title: 'Urna pretium elit mauris cursus Curabitur at elit Vestibulum', date: '28 NOV 2022', author: 'ALI GOLIZADEH' },
    ]

    let allProducts = [
        { id: 1, title: 'Down Fill Wind Runner', price: 23.90, inStock: 20, discount: 0, img: '/image/downFillWindRunner.jpg', subImg: '/image/downFillWindRunner_sub.jpg', subImg_1: '/image/downFillWindRunner_sub_1-1.jpg', subImg_2: '/image/downFillWindRunner_sub_1-2.jpg', categoryGender: 'Men' },
        { id: 2, title: 'Joggers Tech Fleece', price: 35.90, inStock: 20, discount: 0, img: '/image/joggers.jpg', subImg: '/image/joggers_sub.jpg', subImg_1: '/image/joggers_sub_1-1.jpg', subImg_2: '/image/joggers_sub_1-2.jpg', categoryGender: 'Men' },
        { id: 3, title: 'Fleece Printed Crew', price: 29.00, inStock: 20, discount: 0, img: '/image/fleeceCrew.jpg', subImg: '/image/fleeceCrew_sub.jpg', subImg_1: '/image/fleeceCrew_sub_1-1.jpg', subImg_2: '/image/fleeceCrew_sub_1-2.jpg', categoryGender: 'Women' },
        { id: 4, title: 'Sport Swear Downfill', price: 29.00, inStock: 20, discount: 0, img: '/image/sportSwearDownFill.jpg', subImg: '/image/sportSwearDownFill_sub.jpg', subImg_1: '/image/sportSwearDownFill_sub_1-1.jpg', subImg_2: '/image/sportSwearDownFill_sub_1-2.jpg', categoryGender: 'Men' },
        { id: 5, title: 'Graohic Traning Top', price: 29.00, inStock: 20, discount: 0, img: '/image/graphicTraningTop.jpg', subImg: '/image/graphicTraningTop_sub.jpg', subImg_1: '/image/graphicTraningTop.jpg_sub_1-1', categoryGender: 'Kid' },
        { id: 6, title: 'Short Sleeve T-shirt', price: 11.90, inStock: 20, discount: 0, img: '/image/sportSleeve.jpg', subImg: '/image/sportSleeve_sub.jpg', subImg_1: '/image/sportSleeve_sub_1-1.jpg', subImg_2: '/image/sportSleeve_sub_1-2.jpg', categoryGender: 'Men' },
        { id: 7, title: 'Older Kid Sport Bra', price: 11.90, inStock: 20, discount: 0, img: '/image/olderKidSportBra.jpg', subImg: '/image/olderKidSportBra_sub.jpg', subImg_1: '/image/olderKidSportBra_sub_1-1.jpg', categoryGender: 'Kid' },
        { id: 8, title: 'Medium Support Bra', price: 18.90, inStock: 20, discount: 0, img: '/image/mediumSupportBra.jpg', subImg: '/image/mediumSupportBra_sub.jpg', subImg_1: '/image/mediumSupportBra_sub_1-1.jpg', subImg_2: '/image/mediumSupportBra_sub_1-2.jpg', categoryGender: 'Women' },
        { id: 9, title: 'Older Kid Trouser', price: 18.90, inStock: 20, discount: 0, img: '/image/olderKidTrouser.jpg', subImg: '/image/olderKidTrouser_sub.jpg', subImg_1: '/image/olderKidTrouser_sub_1-1.jpg', subImg_2: '/image/olderKidTrouser_sub_1-2.jpg', categoryGender: 'Kid' },
        { id: 10, title: 'Air Force-1 Crater', price: 18.90, inStock: 20, discount: 0, img: '/image/airForce_1Crater.jpg', subImg: '/image/airForce_1Crater_sub.jpg', subImg_1: '/image/airForce_1Crater_sub_1-1.jpg', subImg_2: '/image/airForce_1Crater_sub_1-2.jpg', categoryGender: 'FootWear' },
        { id: 21, title: 'Paris Saint Germain', price: 18.90, inStock: 20, discount: 0, img: '/image/parisSaint.jpg', subImg: '/image/parisSaint_sub.jpg', subImg_1: '/image/parisSaint_sub_1-1.jpg', subImg_2: '/image/parisSaint_sub_1-2.jpg', categoryGender: 'Men' },
        { id: 22, title: 'Women Running Jacket', price: 9.00, inStock: 20, discount: 0, img: '/image/womenRuningJacket.jpg', subImg: '/image/womenRuningJacket_sub.jpg', subImg_1: '/image/womenRuningJacket_sub_1-1.jpg', subImg_2: '/image/womenRuningJacket_sub_1-2.jpg', categoryGender: 'Women' },
        { id: 23, title: 'Water Repellent Jacket', price: 9.00, inStock: 20, discount: 0, img: '/image/waterRepellentJacket.jpg', subImg: '/image/waterRepellentJacket_sub.jpg', subImg_1: '/image/waterRepellentJacket_sub_1-1.jpg', subImg_2: '/image/waterRepellentJacket_sub_1-2.jpg', categoryGender: 'Kid' },
        { id: 24, title: 'Sport Swear Wind Runner', price: 9.00, inStock: 20, discount: 0, img: '/image/SportSwearWindRunner.jpg', subImg: '/image/SportSwearWindRunner_sub.jpg', subImg_1: '/image/SportSwearWindRunner_sub_1-1.jpg', subImg_2: '/image/SportSwearWindRunner_sub_1-2.jpg', categoryGender: 'Women' },
        { id: 25, title: 'Younger Kid JDI T-shirt', price: 35.00, inStock: 20, discount: 0, img: '/image/kidJDIT-shirt.jpg', subImg: '/image/kidJDIT-shirt_sub.jpg', subImg_1: '/image/kidJDIT-shirt_sub_1-1.jpg', categoryGender: 'Kid' },
        { id: 26, title: 'Women Jacket Down Fill', price: 12.90, inStock: 20, discount: 0, img: '/image/womenJacketDownFill.jpg', subImg: '/image/womenJacketDownFill_sub.jpg', subImg_1: '/image/womenJacketDownFill_sub_1-1.jpg', subImg_2: '/image/womenJacketDownFill_sub_1-2.jpg', categoryGender: 'Women' },
        { id: 27, title: 'Older Kid (Girl) T-shirt', price: 12.90, inStock: 20, discount: 0, img: '/image/olderKidGirlT-shirt.jpg', subImg: '/image/olderKidGirlT-shirt_sub.jpg', subImg_1: '/image/olderKidGirlT-shirt_sub_1-1.jpg', subImg_2: '/image/olderKidGirlT-shirt_sub_1-2.jpg', categoryGender: 'Kid' },
        { id: 28, title: 'Top DRI Fit Academy', price: 12.90, inStock: 20, discount: 0, img: '/image/topDRIFitAcademy.jpg', subImg: '/image/topDRIFitAcademy_sub.jpg', subImg_1: '/image/topDRIFitAcademy_sub_1-1.jpg', subImg_2: '/image/topDRIFitAcademy_sub_1-2.jpg', categoryGender: 'Men' },
        { id: 29, title: 'Women Full Zip Hoodie', price: 13.90, inStock: 20, discount: 0, img: '/image/womenFullZipHoodie.jpg', subImg: '/image/womenFullZipHoodie_sub.jpg', subImg_1: '/image/womenFullZipHoodie_sub_1-1.jpg', subImg_2: '/image/womenFullZipHoodie_sub_1-2.jpg', categoryGender: 'Women' },
        { id: 30, title: 'Air Max 2090', price: 30.00, inStock: 20, discount: 0, img: '/image/AirMax2090.jpg', subImg: '/image/AirMax2090_sub.jpg', subImg_1: '/image/AirMax2090_sub_1-1.jpg', subImg_2: '/image/AirMax2090_sub_1-2.jpg', categoryGender: 'FootWear' },
        { id: 13, title: 'Jordan React Elevation', price: 42.00, inStock: 20, discount: 0, img: '/image/JordanReact.jpg', subImg: '/image/JordanReact_sub.jpg', subImg_1: '/image/JordanReact_sub_1-1.jpg', subImg_2: '/image/JordanReact_sub_1-2.jpg', categoryGender: 'FootWear' },
        { id: 14, title: 'Men Shoes Airi Max', price: 42.00, inStock: 20, discount: 0, img: '/image/AiriMax.jpg', subImg: '/image/AiriMax_sub.jpg', subImg_1: '/image/AiriMax_sub_1-1.jpg', subImg_2: '/image/AiriMax_sub_1-2.jpg', categoryGender: 'FootWear' },
        { id: 31, title: 'React Metcon Training', price: 25.00, inStock: 20, discount: 0, img: '/image/reactMetconTraining.jpg', subImg: '/image/reactMetconTraining_sub.jpg', subImg_1: '/image/reactMetconTraining_sub_1-1.jpg', subImg_2: '/image/reactMetconTraining_sub_1-2.jpg', categoryGender: 'FootWear' },
        { id: 32, title: 'Zer 0.3 Sneacker', price: 25.00, inStock: 20, discount: 0, img: '/image/zer0.3Sneaker.jpg', subImg: '/image/zer0.3Sneaker_sub.jpg', subImg_1: '/image/zer0.3Sneaker_sub_1-1.jpg', subImg_2: '/image/zer0.3Sneaker_sub_1-2.jpg', categoryGender: 'FootWear' },
        { id: 33, title: 'Adjustable Watch Band', price: 25.00, inStock: 20, discount: 0, img: '/image/adjustableWatchBand.jpg', subImg: '/image/adjustableWatchBand_sub.jpg', subImg_1: '/image/adjustableWatchBand_sub_1-1.jpg', subImg_2: '/image/adjustableWatchBand_sub_1-2.jpg', categoryGender: 'Tech' },
        { id: 34, title: 'BackBeat Fit 2100 Gray', price: 36.00, inStock: 20, discount: 0, img: '/image/backBeatFit2100.jpg', subImg: '/image/backBeatFit2100_sub.jpg', subImg_1: '/image/backBeatFit2100_sub_1-1.jpg', categoryGender: 'Tech' },
        { id: 35, title: 'Fenix-6s Smart Watch', price: 98.00, inStock: 20, discount: 0, img: '/image/fenix-6sSmartWatch.jpg', subImg: '/image/fenix-6sSmartWatch_sub.jpg', subImg_1: '/image/fenix-6sSmartWatch_sub_1-1.jpg', subImg_2: '/image/fenix-6sSmartWatch_sub_1-2.jpg', categoryGender: 'Tech' },
        { id: 19, title: 'Galaxy Active Watch', price: 36.00, inStock: 91, discount: 0, img: '/image/GalaxyWatch.jpg', subImg: '/image/GalaxyWatch_sub.jpg', subImg_1: '/image/GalaxyWatch_sub_1-1.jpg', categoryGender: 'Tech' },
        { id: 20, title: 'Wireless Bluetooth Speaker', price: 36.00, inStock: 100, discount: 50, img: '/image/WireLessSpeaker.jpg', subImg: '/image/WireLessSpeaker_sub.jpg', categoryGender: 'Tech' },
        { id: 12, title: 'Exo Ultra Sports Bra', price: 55.00, inStock: 11, discount: 0, img: '/image/ExoUltra.jpg', subImg: '/image/ExoUltra_sub.jpg', subImg_1: '/image/ExoUltra_sub_1-1.jpg', subImg_2: '/image/ExoUltra_sub_1-2.jpg', categoryGender: 'Fitness' },
        { id: 15, title: 'Fraction Crop Top', price: 32.41, inStock: 0, discount: 0, img: '/image/FractionCropTop.jpg', subImg: '/image/FractionCropTop_sub.jpg', subImg_1: '/image/FractionCropTop_sub_1-1.jpg', subImg_2: '/image/FractionCropTop_sub_1-2.jpg', categoryGender: 'Fitness' },
        { id: 11, title: 'Pause Hoodie Women', price: 62.00, inStock: 20, discount: 20, img: '/image/PauseHoodieWomen.jpg', subImg: '/image/PauseHoodieWomen_sub.jpg', subImg_1: '/image/PauseHoodieWomen_sub_1-1.jpg', subImg_2: '/image/PauseHoodieWomen_sub_1-2.jpg', categoryGender: 'Fitness' },
        { id: 17, title: 'Pause Joggers Women', price: 58.12, inStock: 5, discount: 0, img: '/image/PauseJoggers.jpg', subImg: '/image/PauseJoggers_sub.jpg', subImg_1: '/image/PauseJoggers_sub_1-1.jpg', subImg_2: '/image/PauseJoggers_sub_1-2.jpg', categoryGender: 'Fitness' },
        { id: 18, title: 'Rise Sports Bra', price: 58.00, inStock: 0, discount: 19, img: '/image/RiseSports.jpg', subImg: '/image/RiseSports_sub.jpg', subImg_1: '/image/RiseSports_sub_1-1.jpg', subImg_2: '/image/RiseSports_sub_1-2.jpg', categoryGender: 'Fitness' },
        { id: 16, title: 'Vital Rise Sports Bra', price: 41.92, inStock: 25, discount: 0, img: '/image/VitalRise.jpg', subImg: '/image/VitalRise_sub.jpg', subImg_1: '/image/VitalRise_sub_1-1.jpg', subImg_2: '/image/VitalRise_sub_1-2.jpg', categoryGender: 'Fitness' },
    ];

    let ClothesMain = [
        { id: 1, title: 'Down Fill Wind Runner', price: 23.90, inStock: 20, discount: 0, img: '/image/downFillWindRunner.jpg', subImg: '/image/downFillWindRunner_sub.jpg', subImg_1: '/image/downFillWindRunner_sub_1-1.jpg', subImg_2: '/image/downFillWindRunner_sub_1-2.jpg', categoryGender: 'Men' },
        { id: 2, title: 'Joggers Tech Fleece', price: 35.90, inStock: 20, discount: 0, img: '/image/joggers.jpg', subImg: '/image/joggers_sub.jpg', subImg_1: '/image/joggers_sub_1-1.jpg', subImg_2: '/image/joggers_sub_1-2.jpg', categoryGender: 'Men' },
        { id: 21, title: 'Paris Saint Germain', price: 18.90, inStock: 20, discount: 0, img: '/image/parisSaint.jpg', subImg: '/image/parisSaint_sub.jpg', subImg_1: '/image/parisSaint_sub_1-1.jpg', subImg_2: '/image/parisSaint_sub_1-2.jpg', categoryGender: 'Men' },
        { id: 6, title: 'Short Sleeve T-shirt', price: 11.90, inStock: 20, discount: 0, img: '/image/sportSleeve.jpg', subImg: '/image/sportSleeve_sub.jpg', subImg_1: '/image/sportSleeve_sub_1-1.jpg', subImg_2: '/image/sportSleeve_sub_1-2.jpg', categoryGender: 'Men' },
        { id: 4, title: 'Sport Swear Downfill', price: 29.00, inStock: 20, discount: 0, img: '/image/sportSwearDownFill.jpg', subImg: '/image/sportSwearDownFill_sub.jpg', subImg_1: '/image/sportSwearDownFill_sub_1-1.jpg', subImg_2: '/image/sportSwearDownFill_sub_1-2.jpg', categoryGender: 'Men' },
        { id: 28, title: 'Top DRI Fit Academy', price: 12.90, inStock: 20, discount: 0, img: '/image/topDRIFitAcademy.jpg', subImg: '/image/topDRIFitAcademy_sub.jpg', subImg_1: '/image/topDRIFitAcademy_sub_1-1.jpg', subImg_2: '/image/topDRIFitAcademy_sub_1-2.jpg', categoryGender: 'Men' },
        { id: 3, title: 'Fleece Printed Crew', price: 29.00, inStock: 20, discount: 0, img: '/image/fleeceCrew.jpg', subImg: '/image/fleeceCrew_sub.jpg', subImg_1: '/image/fleeceCrew_sub_1-1.jpg', subImg_2: '/image/fleeceCrew_sub_1-2.jpg', categoryGender: 'Women' },
        { id: 8, title: 'Medium Support Bra', price: 18.90, inStock: 20, discount: 0, img: '/image/mediumSupportBra.jpg', subImg: '/image/mediumSupportBra_sub.jpg', subImg_1: '/image/mediumSupportBra_sub_1-1.jpg', subImg_2: '/image/mediumSupportBra_sub_1-2.jpg', categoryGender: 'Women' },
        { id: 24, title: 'Sport Swear Wind Runner', price: 9.00, inStock: 20, discount: 0, img: '/image/SportSwearWindRunner.jpg', subImg: '/image/SportSwearWindRunner_sub.jpg', subImg_1: '/image/SportSwearWindRunner_sub_1-1.jpg', subImg_2: '/image/SportSwearWindRunner_sub_1-2.jpg', categoryGender: 'Women' },
        { id: 29, title: 'Women Full Zip Hoodie', price: 13.90, inStock: 20, discount: 0, img: '/image/womenFullZipHoodie.jpg', subImg: '/image/womenFullZipHoodie_sub.jpg', subImg_1: '/image/womenFullZipHoodie_sub_1-1.jpg', subImg_2: '/image/womenFullZipHoodie_sub_1-2.jpg', categoryGender: 'Women' },
        { id: 26, title: 'Women Jacket Down Fill', price: 12.90, inStock: 20, discount: 0, img: '/image/womenJacketDownFill.jpg', subImg: '/image/womenJacketDownFill_sub.jpg', subImg_1: '/image/womenJacketDownFill_sub_1-1.jpg', subImg_2: '/image/womenJacketDownFill_sub_1-2.jpg', categoryGender: 'Women' },
        { id: 22, title: 'Women Running Jacket', price: 9.00, inStock: 20, discount: 0, img: '/image/womenRuningJacket.jpg', subImg: '/image/womenRuningJacket_sub.jpg', subImg_1: '/image/womenRuningJacket_sub_1-1.jpg', subImg_2: '/image/womenRuningJacket_sub_1-2.jpg', categoryGender: 'Women' },
    ]

    let ClothesMen = [
        { id: 1, title: 'Down Fill Wind Runner', price: 23.90, inStock: 20, discount: 0, img: '/image/downFillWindRunner.jpg', subImg: '/image/downFillWindRunner_sub.jpg', subImg_1: '/image/downFillWindRunner_sub_1-1.jpg', subImg_2: '/image/downFillWindRunner_sub_1-2.jpg', categoryGender: 'Men' },
        { id: 2, title: 'Joggers Tech Fleece', price: 35.90, inStock: 20, discount: 0, img: '/image/joggers.jpg', subImg: '/image/joggers_sub.jpg', subImg_1: '/image/joggers_sub_1-1.jpg', subImg_2: '/image/joggers_sub_1-2.jpg', categoryGender: 'Men' },
        { id: 21, title: 'Paris Saint Germain', price: 18.90, inStock: 20, discount: 0, img: '/image/parisSaint.jpg', subImg: '/image/parisSaint_sub.jpg', subImg_1: '/image/parisSaint_sub_1-1.jpg', subImg_2: '/image/parisSaint_sub_1-2.jpg', categoryGender: 'Men' },
        { id: 6, title: 'Short Sleeve T-shirt', price: 11.90, inStock: 20, discount: 0, img: '/image/sportSleeve.jpg', subImg: '/image/sportSleeve_sub.jpg', subImg_1: '/image/sportSleeve_sub_1-1.jpg', subImg_2: '/image/sportSleeve_sub_1-2.jpg', categoryGender: 'Men' },
        { id: 4, title: 'Sport Swear Downfill', price: 29.00, inStock: 20, discount: 0, img: '/image/sportSwearDownFill.jpg', subImg: '/image/sportSwearDownFill_sub.jpg', subImg_1: '/image/sportSwearDownFill_sub_1-1.jpg', subImg_2: '/image/sportSwearDownFill_sub_1-2.jpg', categoryGender: 'Men' },
        { id: 28, title: 'Top DRI Fit Academy', price: 12.90, inStock: 20, discount: 0, img: '/image/topDRIFitAcademy.jpg', subImg: '/image/topDRIFitAcademy_sub.jpg', subImg_1: '/image/topDRIFitAcademy_sub_1-1.jpg', subImg_2: '/image/topDRIFitAcademy_sub_1-2.jpg', categoryGender: 'Men' },
    ]

    let ClothesWomen = [
        { id: 3, title: 'Fleece Printed Crew', price: 29.00, inStock: 20, discount: 0, img: '/image/fleeceCrew.jpg', subImg: '/image/fleeceCrew_sub.jpg', subImg_1: '/image/fleeceCrew_sub_1-1.jpg', subImg_2: '/image/fleeceCrew_sub_1-2.jpg', categoryGender: 'Women' },
        { id: 8, title: 'Medium Support Bra', price: 18.90, inStock: 20, discount: 0, img: '/image/mediumSupportBra.jpg', subImg: '/image/mediumSupportBra_sub.jpg', subImg_1: '/image/mediumSupportBra_sub_1-1.jpg', subImg_2: '/image/mediumSupportBra_sub_1-2.jpg', categoryGender: 'Women' },
        { id: 24, title: 'Sport Swear Wind Runner', price: 9.00, inStock: 20, discount: 0, img: '/image/SportSwearWindRunner.jpg', subImg: '/image/SportSwearWindRunner_sub.jpg', subImg_1: '/image/SportSwearWindRunner_sub_1-1.jpg', subImg_2: '/image/SportSwearWindRunner_sub_1-2.jpg', categoryGender: 'Women' },
        { id: 29, title: 'Women Full Zip Hoodie', price: 13.90, inStock: 20, discount: 0, img: '/image/womenFullZipHoodie.jpg', subImg: '/image/womenFullZipHoodie_sub.jpg', subImg_1: '/image/womenFullZipHoodie_sub_1-1.jpg', subImg_2: '/image/womenFullZipHoodie_sub_1-2.jpg', categoryGender: 'Women' },
        { id: 26, title: 'Women Jacket Down Fill', price: 12.90, inStock: 20, discount: 0, img: '/image/womenJacketDownFill.jpg', subImg: '/image/womenJacketDownFill_sub.jpg', subImg_1: '/image/womenJacketDownFill_sub_1-1.jpg', subImg_2: '/image/womenJacketDownFill_sub_1-2.jpg', categoryGender: 'Women' },
        { id: 22, title: 'Women Running Jacket', price: 9.00, inStock: 20, discount: 0, img: '/image/womenRuningJacket.jpg', subImg: '/image/womenRuningJacket_sub.jpg', subImg_1: '/image/womenRuningJacket_sub_1-1.jpg', subImg_2: '/image/womenRuningJacket_sub_1-2.jpg', categoryGender: 'Women' },
    ]

    let ClothesJacket = [
        { id: 21, title: 'Paris Saint Germain', price: 18.90, inStock: 20, discount: 0, img: '/image/parisSaint.jpg', subImg: '/image/parisSaint_sub.jpg', subImg_1: '/image/parisSaint_sub_1-1.jpg', subImg_2: '/image/parisSaint_sub_1-2.jpg', categoryGender: 'Men' },
        { id: 1, title: 'Down Fill Wind Runner', price: 23.90, inStock: 20, discount: 0, img: '/image/downFillWindRunner.jpg', subImg: '/image/downFillWindRunner_sub.jpg', subImg_1: '/image/downFillWindRunner_sub_1-1.jpg', subImg_2: '/image/downFillWindRunner_sub_1-2.jpg', categoryGender: 'Men' },
        { id: 4, title: 'Sport Swear Downfill', price: 29.00, inStock: 20, discount: 0, img: '/image/sportSwearDownFill.jpg', subImg: '/image/sportSwearDownFill_sub.jpg', subImg_1: '/image/sportSwearDownFill_sub_1-1.jpg', subImg_2: '/image/sportSwearDownFill_sub_1-2.jpg', categoryGender: 'Men' },
        { id: 24, title: 'Sport Swear Wind Runner', price: 9.00, inStock: 20, discount: 0, img: '/image/SportSwearWindRunner.jpg', subImg: '/image/SportSwearWindRunner_sub.jpg', subImg_1: '/image/SportSwearWindRunner_sub_1-1.jpg', subImg_2: '/image/SportSwearWindRunner_sub_1-2.jpg', categoryGender: 'Women' },
        { id: 29, title: 'Women Full Zip Hoodie', price: 13.90, inStock: 20, discount: 0, img: '/image/womenFullZipHoodie.jpg', subImg: '/image/womenFullZipHoodie_sub.jpg', subImg_1: '/image/womenFullZipHoodie_sub_1-1.jpg', subImg_2: '/image/womenFullZipHoodie_sub_1-2.jpg', categoryGender: 'Women' },
        { id: 26, title: 'Women Jacket Down Fill', price: 12.90, inStock: 20, discount: 0, img: '/image/womenJacketDownFill.jpg', subImg: '/image/womenJacketDownFill_sub.jpg', subImg_1: '/image/womenJacketDownFill_sub_1-1.jpg', subImg_2: '/image/womenJacketDownFill_sub_1-2.jpg', categoryGender: 'Women' },
        { id: 22, title: 'Women Running Jacket', price: 9.00, inStock: 20, discount: 0, img: '/image/womenRuningJacket.jpg', subImg: '/image/womenRuningJacket_sub.jpg', subImg_1: '/image/womenRuningJacket_sub_1-1.jpg', subImg_2: '/image/womenRuningJacket_sub_1-2.jpg', categoryGender: 'Women' },
    ]

    let kidMain = [
        { id: 5, title: 'Graohic Traning Top', price: 29.00, inStock: 20, discount: 0, img: '/image/graphicTraningTop.jpg', subImg: '/image/graphicTraningTop_sub.jpg', subImg_1: '/image/graphicTraningTop.jpg_sub_1-1', categoryGender: 'Kid' },
        { id: 23, title: 'Water Repellent Jacket', price: 9.00, inStock: 20, discount: 0, img: '/image/waterRepellentJacket.jpg', subImg: '/image/waterRepellentJacket_sub.jpg', subImg_1: '/image/waterRepellentJacket_sub_1-1.jpg', subImg_2: '/image/waterRepellentJacket_sub_1-2.jpg', categoryGender: 'Kid' },
        { id: 25, title: 'Younger Kid JDI T-shirt', price: 35.00, inStock: 20, discount: 0, img: '/image/kidJDIT-shirt.jpg', subImg: '/image/kidJDIT-shirt_sub.jpg', subImg_1: '/image/kidJDIT-shirt_sub_1-1.jpg', categoryGender: 'Kid' },
        { id: 7, title: 'Older Kid Sport Bra', price: 11.90, inStock: 20, discount: 0, img: '/image/olderKidSportBra.jpg', subImg: '/image/olderKidSportBra_sub.jpg', subImg_1: '/image/olderKidSportBra_sub_1-1.jpg', categoryGender: 'Kid' },
        { id: 9, title: 'Older Kid Trouser', price: 18.90, inStock: 20, discount: 0, img: '/image/olderKidTrouser.jpg', subImg: '/image/olderKidTrouser_sub.jpg', subImg_1: '/image/olderKidTrouser_sub_1-1.jpg', subImg_2: '/image/olderKidTrouser_sub_1-2.jpg', categoryGender: 'Kid' },
        { id: 27, title: 'Older Kid (Girl) T-shirt', price: 12.90, inStock: 20, discount: 0, img: '/image/olderKidGirlT-shirt.jpg', subImg: '/image/olderKidGirlT-shirt_sub.jpg', subImg_1: '/image/olderKidGirlT-shirt_sub_1-1.jpg', subImg_2: '/image/olderKidGirlT-shirt_sub_1-2.jpg', categoryGender: 'Kid' },
    ]

    let footWear = [
        { id: 10, title: 'Air Force-1 Crater', price: 18.90, inStock: 20, discount: 0, img: '/image/airForce_1Crater.jpg', subImg: '/image/airForce_1Crater_sub.jpg', subImg_1: '/image/airForce_1Crater_sub_1-1.jpg', subImg_2: '/image/airForce_1Crater_sub_1-2.jpg', categoryGender: 'FootWear' },
        { id: 30, title: 'Air Max 2090', price: 30.00, inStock: 20, discount: 0, img: '/image/AirMax2090.jpg', subImg: '/image/AirMax2090_sub.jpg', subImg_1: '/image/AirMax2090_sub_1-1.jpg', subImg_2: '/image/AirMax2090_sub_1-2.jpg', categoryGender: 'FootWear' },
        { id: 13, title: 'Jordan React Elevation', price: 42.00, inStock: 20, discount: 0, img: '/image/JordanReact.jpg', subImg: '/image/JordanReact_sub.jpg', subImg_1: '/image/JordanReact_sub_1-1.jpg', subImg_2: '/image/JordanReact_sub_1-2.jpg', categoryGender: 'FootWear' },
        { id: 14, title: 'Men Shoes Airi Max', price: 42.00, inStock: 20, discount: 0, img: '/image/AiriMax.jpg', subImg: '/image/AiriMax_sub.jpg', subImg_1: '/image/AiriMax_sub_1-1.jpg', subImg_2: '/image/AiriMax_sub_1-2.jpg', categoryGender: 'FootWear' },
        { id: 31, title: 'React Metcon Training', price: 25.00, inStock: 20, discount: 0, img: '/image/reactMetconTraining.jpg', subImg: '/image/reactMetconTraining_sub.jpg', subImg_1: '/image/reactMetconTraining_sub_1-1.jpg', subImg_2: '/image/reactMetconTraining_sub_1-2.jpg', categoryGender: 'FootWear' },
        { id: 32, title: 'Zer 0.3 Sneacker', price: 25.00, inStock: 20, discount: 0, img: '/image/zer0.3Sneaker.jpg', subImg: '/image/zer0.3Sneaker_sub.jpg', subImg_1: '/image/zer0.3Sneaker_sub_1-1.jpg', subImg_2: '/image/zer0.3Sneaker_sub_1-2.jpg', categoryGender: 'FootWear' },
    ]

    let fitness = [
        { id: 12, title: 'Exo Ultra Sports Bra', price: 55.00, inStock: 11, discount: 0, img: '/image/ExoUltra.jpg', subImg: '/image/ExoUltra_sub.jpg', subImg_1: '/image/ExoUltra_sub_1-1.jpg', subImg_2: '/image/ExoUltra_sub_1-2.jpg', categoryGender: 'Fitness' },
        { id: 15, title: 'Fraction Crop Top', price: 32.41, inStock: 0, discount: 0, img: '/image/FractionCropTop.jpg', subImg: '/image/FractionCropTop_sub.jpg', subImg_1: '/image/FractionCropTop_sub_1-1.jpg', subImg_2: '/image/FractionCropTop_sub_1-2.jpg', categoryGender: 'Fitness' },
        { id: 11, title: 'Pause Hoodie Women', price: 62.00, inStock: 20, discount: 20, img: '/image/PauseHoodieWomen.jpg', subImg: '/image/PauseHoodieWomen_sub.jpg', subImg_1: '/image/PauseHoodieWomen_sub_1-1.jpg', subImg_2: '/image/PauseHoodieWomen_sub_1-2.jpg', categoryGender: 'Fitness' },
        { id: 17, title: 'Pause Joggers Women', price: 58.12, inStock: 5, discount: 0, img: '/image/PauseJoggers.jpg', subImg: '/image/PauseJoggers_sub.jpg', subImg_1: '/image/PauseJoggers_sub_1-1.jpg', subImg_2: '/image/PauseJoggers_sub_1-2.jpg', categoryGender: 'Fitness' },
        { id: 18, title: 'Rise Sports Bra', price: 58.00, inStock: 0, discount: 19, img: '/image/RiseSports.jpg', subImg: '/image/RiseSports_sub.jpg', subImg_1: '/image/RiseSports_sub_1-1.jpg', subImg_2: '/image/RiseSports_sub_1-2.jpg', categoryGender: 'Fitness' },
        { id: 16, title: 'Vital Rise Sports Bra', price: 41.92, inStock: 25, discount: 0, img: '/image/VitalRise.jpg', subImg: '/image/VitalRise_sub.jpg', subImg_1: '/image/VitalRise_sub_1-1.jpg', subImg_2: '/image/VitalRise_sub_1-2.jpg', categoryGender: 'Fitness' },
    ]

    let tech = [
        { id: 33, title: 'Adjustable Watch Band', price: 25.00, inStock: 20, discount: 0, img: '/image/adjustableWatchBand.jpg', subImg: '/image/adjustableWatchBand_sub.jpg', subImg_1: '/image/adjustableWatchBand_sub_1-1.jpg', subImg_2: '/image/adjustableWatchBand_sub_1-2.jpg', categoryGender: 'Tech' },
        { id: 34, title: 'BackBeat Fit 2100 Gray', price: 36.00, inStock: 20, discount: 0, img: '/image/backBeatFit2100.jpg', subImg: '/image/backBeatFit2100_sub.jpg', subImg_1: '/image/backBeatFit2100_sub_1-1.jpg', categoryGender: 'Tech' },
        { id: 35, title: 'Fenix-6s Smart Watch', price: 98.00, inStock: 20, discount: 0, img: '/image/fenix-6sSmartWatch.jpg', subImg: '/image/fenix-6sSmartWatch_sub.jpg', subImg_1: '/image/fenix-6sSmartWatch_sub_1-1.jpg', subImg_2: '/image/fenix-6sSmartWatch_sub_1-2.jpg', categoryGender: 'Tech' },
        { id: 19, title: 'Galaxy Active Watch', price: 36.00, inStock: 91, discount: 0, img: '/image/GalaxyWatch.jpg', subImg: '/image/GalaxyWatch_sub.jpg', subImg_1: '/image/GalaxyWatch_sub_1-1.jpg', categoryGender: 'Tech' },
        { id: 20, title: 'Wireless Bluetooth Speaker', price: 36.00, inStock: 100, discount: 50, img: '/image/WireLessSpeaker.jpg', subImg: '/image/WireLessSpeaker_sub.jpg', categoryGender: 'Tech' },
    ]

    let newProducts = [
        { id: 16, title: 'Vital Rise Sports Bra', price: 41.92, inStock: 25, discount: 0, img: '/image/VitalRise.jpg', subImg: '/image/VitalRise_sub.jpg', subImg_1: '/image/VitalRise_sub_1-1.jpg', subImg_2: '/image/VitalRise_sub_1-2.jpg', categoryGender: 'Fitness' },
        { id: 18, title: 'Rise Sports Bra', price: 58.00, inStock: 0, discount: 19, img: '/image/RiseSports.jpg', subImg: '/image/RiseSports_sub.jpg', subImg_1: '/image/RiseSports_sub_1-1.jpg', subImg_2: '/image/RiseSports_sub_1-2.jpg', categoryGender: 'Fitness' },
        { id: 17, title: 'Pause Joggers Women', price: 58.12, inStock: 5, discount: 0, img: '/image/PauseJoggers.jpg', subImg: '/image/PauseJoggers_sub.jpg', subImg_1: '/image/PauseJoggers_sub_1-1.jpg', subImg_2: '/image/PauseJoggers_sub_1-2.jpg', categoryGender: 'Fitness' },
        { id: 21, title: 'Paris Saint Germain', price: 18.90, inStock: 20, discount: 0, img: '/image/parisSaint.jpg', subImg: '/image/parisSaint_sub.jpg', subImg_1: '/image/parisSaint_sub_1-1.jpg', subImg_2: '/image/parisSaint_sub_1-2.jpg', categoryGender: 'Men' },
    ]
    // subImg_2 :'/image/olderKidSportBra_sub_1-2.jpg'
    // , subImg_2 :'/image/graphicTrainingTop_sub_1-2.jpg'

    const setData = () => {
        newProducts.map(item => {
            fetch('https://azeno-3045b-default-rtdb.firebaseio.com/newProducts.json', {
                method: 'POST',
                body: JSON.stringify(item)
            }).then(response => response.json())
                .then(data => console.log(Object.entries(data)))
        })
    }

    return (
        <div>
            <button onClick={() => setData()}>
                fetch
            </button>

            {/* <button onClick={() => GetData()}>
                Get
            </button> */}
        </div>
    );
}

export default Datas;
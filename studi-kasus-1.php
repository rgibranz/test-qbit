<?php
$var = [
    [
        'fruitId' => 1,
        'fruitName' => 'Apel',
        'fruitType' => 'IMPORT',
        'stock' => 10
    ],
    [
        'fruitId' => 2,
        'fruitName' => 'Kurma',
        'fruitType' => 'IMPORT',
        'stock' => 20
    ],
    [
        'fruitId' => 3,
        'fruitName' => 'apel',
        'fruitType' => 'IMPORT',
        'stock' => 50
    ],
    [
        'fruitId' => 4,
        'fruitName' => 'Manggis',
        'fruitType' => 'LOCAL',
        'stock' => 100
    ],
    [
        'fruitId' => 5,
        'fruitName' => 'Jeruk Bali',
        'fruitType' => 'LOCAL',
        'stock' => 10
    ],
    [
        'fruitId' => 5,
        'fruitName' => 'KURMA',
        'fruitType' => 'IMPORT',
        'stock' => 20
    ],
    [
        'fruitId' => 5,
        'fruitName' => 'Salak',
        'fruitType' => 'LOCAL',
        'stock' => 150
    ]
];

// No. 1
echo "Buah Yang Dimiliki Andi : " . PHP_EOL;

$arr = [];

foreach ($var as $data) {
    if (in_array(strtolower($data['fruitName']), $arr)) {
        continue;
    }

    $arr[] = strtolower($data['fruitName']);

    echo '- ' . $data['fruitName'] . PHP_EOL;
}

echo PHP_EOL;

// No. 2

$groupedData = [];
foreach ($var as $item) {
    $fruitType = $item['fruitType'];
    if (!isset($groupedData[$fruitType])) {
        $groupedData[$fruitType] = [];
    }
    $groupedData[$fruitType][] = $item['fruitName'];
}

foreach ($groupedData as $fruitType => $fruitNames) {
    echo "Fruit Type: $fruitType" . PHP_EOL;
    echo "Wadah: " . count($fruitNames) . PHP_EOL;
    echo "List Fruit Names: " . implode(', ', $fruitNames) . PHP_EOL;
    echo PHP_EOL;
}

// soal 3

$groupedData = [];
foreach ($var as $item) {
    $fruitType = $item['fruitType'];
    if (!isset($groupedData[$fruitType])) {
        $groupedData[$fruitType] = [
            'totalStock' => 0,
        ];
    }
    $groupedData[$fruitType]['totalStock'] += $item['stock'];
}

foreach ($groupedData as $fruitType => $data) {
    echo "Fruit Type: $fruitType" . PHP_EOL;
    echo "Total Stock: " . $data['totalStock'] . PHP_EOL;
    echo PHP_EOL;
}

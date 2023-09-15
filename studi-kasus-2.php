<?php
$comments = [
    [
        'commentId' => 1,
        'commentContent' => "Hai",
        'replies' => [
            [
                'commentId' => 11,
                'commentContent' => "Hai juga",
                'replies' => [
                    [
                        'commentId' => 111,
                        'commentContent' => "Haai juga hai jugaa",
                    ],
                    [
                        'commentId' => 112,
                        'commentContent' => "Haai juga hai jugaa",
                    ],
                ],
            ],
            [
                'commentId' => 12,
                'commentContent' => "Hai juga",
                'replies' => [
                    [
                        'commentId' => 121,
                        'commentContent' => "Haai juga hai jugaa",
                    ],
                ],
            ],
        ],
    ],
    [
        'commentId' => 2,
        'commentContent' => "Halooo",
    ],
];

function countTotalComments($comments)
{
    $totalComments = count($comments);

    foreach ($comments as $comment) {
        if (isset($comment['replies'])) {
            $totalComments += countTotalComments($comment['replies']);
        }
    }

    return $totalComments;
}

$totalComments = countTotalComments($comments);
echo "Total Komentar: " . $totalComments;

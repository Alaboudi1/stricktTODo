
fetch = require("node-fetch");
v8toIstanbul = require('v8-to-istanbul')
fs = require('fs');

call = async() =>
{
    const rawSourceMap = await (await fetch("http://localhost:3000/static/js/main.chunk.js.map")).json();
    const sourceMap = await (await fetch("http://localhost:3000/static/js/main.chunk.js"));

    const data = fs.writeFileSync('./main.chunk.js"', JSON.stringify(oursourceMapceMap))

    const converter = v8toIstanbul("main.chunk.js",rawSourceMap);

    // console.log(t)
    try{
    converter.applyCoverage(t)
    const data = fs.writeFileSync('./coverage.json', JSON.stringify(converter.toIstanbul()))
    } catch (e){
        console.log(e)
    }
}
// https://github.com/istanbuljs/v8-to-istanbul/issues/132
call()

let t =[
    {
        "functionName": "invokeGuardedCallbackAndCatchFirstError",
        "isBlockCoverage": true,
        "ranges": [
            {
                "count": 1,
                "endOffset": 211635,
                "startOffset": 211308
            },
            {
                "count": 0,
                "endOffset": 211629,
                "startOffset": 211471
            }
        ]
    },
    {
        "functionName": "computeExpirationTime",
        "isBlockCoverage": true,
        "ranges": [
            {
                "count": 1,
                "endOffset": 261292,
                "startOffset": 259822
            },
            {
                "count": 0,
                "endOffset": 261286,
                "startOffset": 261093
            }
        ]
    },
    {
        "functionName": "functionThatReturnsFalse",
        "isBlockCoverage": true,
        "ranges": [
            {
                "count": 1,
                "endOffset": 283721,
                "startOffset": 283658
            }
        ]
    },
    {
        "functionName": "handleControlledInputBlur",
        "isBlockCoverage": true,
        "ranges": [
            {
                "count": 1,
                "endOffset": 322182,
                "startOffset": 321852
            },
            {
                "count": 0,
                "endOffset": 321971,
                "startOffset": 321951
            },
            {
                "count": 0,
                "endOffset": 321997,
                "startOffset": 321972
            },
            {
                "count": 0,
                "endOffset": 322181,
                "startOffset": 322024
            }
        ]
    },
    {
        "functionName": "executeDispatch",
        "isBlockCoverage": true,
        "ranges": [
            {
                "count": 1,
                "endOffset": 356311,
                "startOffset": 356041
            },
            {
                "count": 0,
                "endOffset": 356146,
                "startOffset": 356128
            }
        ]
    },
    {
        "functionName": "processDispatchQueueItemsInOrder",
        "isBlockCoverage": true,
        "ranges": [
            {
                "count": 1,
                "endOffset": 357546,
                "startOffset": 356317
            },
            {
                "count": 0,
                "endOffset": 356991,
                "startOffset": 356458
            },
            {
                "count": 0,
                "endOffset": 357420,
                "startOffset": 357387
            }
        ]
    },
    {
        "functionName": "createDispatchListener",
        "isBlockCoverage": true,
        "ranges": [
            {
                "count": 1,
                "endOffset": 368156,
                "startOffset": 367965
            }
        ]
    },
    {
        "functionName": "noop",
        "isBlockCoverage": true,
        "ranges": [
            {
                "count": 1,
                "endOffset": 380624,
                "startOffset": 380606
            }
        ]
    },
    {
        "functionName": "updateDOMProperties",
        "isBlockCoverage": true,
        "ranges": [
            {
                "count": 1,
                "endOffset": 384278,
                "startOffset": 383576
            },
            {
                "count": 0,
                "endOffset": 384272,
                "startOffset": 383779
            }
        ]
    },
    {
        "functionName": "diffProperties",
        "isBlockCoverage": true,
        "ranges": [
            {
                "count": 2,
                "endOffset": 399483,
                "startOffset": 392551
            },
            {
                "count": 0,
                "endOffset": 393008,
                "startOffset": 392824
            },
            {
                "count": 0,
                "endOffset": 393207,
                "startOffset": 393018
            },
            {
                "count": 0,
                "endOffset": 393406,
                "startOffset": 393217
            },
            {
                "count": 0,
                "endOffset": 393607,
                "startOffset": 393416
            },
            {
                "count": 1,
                "endOffset": 393795,
                "startOffset": 393753
            },
            {
                "count": 0,
                "endOffset": 393952,
                "startOffset": 393797
            },
            {
                "count": 5,
                "endOffset": 395408,
                "startOffset": 394125
            },
            {
                "count": 0,
                "endOffset": 394210,
                "startOffset": 394173
            },
            {
                "count": 0,
                "endOffset": 394240,
                "startOffset": 394211
            },
            {
                "count": 0,
                "endOffset": 395400,
                "startOffset": 394273
            },
            {
                "count": 5,
                "endOffset": 399237,
                "startOffset": 395443
            },
            {
                "count": 0,
                "endOffset": 395561,
                "startOffset": 395550
            },
            {
                "count": 2,
                "endOffset": 395675,
                "startOffset": 395636
            },
            {
                "count": 0,
                "endOffset": 395675,
                "startOffset": 395656
            },
            {
                "count": 3,
                "endOffset": 395708,
                "startOffset": 395677
            },
            {
                "count": 2,
                "endOffset": 395741,
                "startOffset": 395708
            },
            {
                "count": 0,
                "endOffset": 397137,
                "startOffset": 395741
            },
            {
                "count": 2,
                "endOffset": 399229,
                "startOffset": 397137
            },
            {
                "count": 0,
                "endOffset": 397509,
                "startOffset": 397187
            },
            {
                "count": 1,
                "endOffset": 397722,
                "startOffset": 397541
            },
            {
                "count": 0,
                "endOffset": 397712,
                "startOffset": 397619
            },
            {
                "count": 1,
                "endOffset": 399229,
                "startOffset": 397722
            },
            {
                "count": 0,
                "endOffset": 397822,
                "startOffset": 397821
            },
            {
                "count": 0,
                "endOffset": 398125,
                "startOffset": 398048
            },
            {
                "count": 0,
                "endOffset": 398245,
                "startOffset": 398167
            },
            {
                "count": 0,
                "endOffset": 399229,
                "startOffset": 398570
            },
            {
                "count": 0,
                "endOffset": 399448,
                "startOffset": 399263
            }
        ]
    },
    {
        "functionName": "updateProperties",
        "isBlockCoverage": true,
        "ranges": [
            {
                "count": 1,
                "endOffset": 400973,
                "startOffset": 399509
            },
            {
                "count": 0,
                "endOffset": 399869,
                "startOffset": 399837
            },
            {
                "count": 0,
                "endOffset": 399898,
                "startOffset": 399870
            },
            {
                "count": 0,
                "endOffset": 399958,
                "startOffset": 399900
            },
            {
                "count": 0,
                "endOffset": 400665,
                "startOffset": 400344
            },
            {
                "count": 0,
                "endOffset": 400761,
                "startOffset": 400675
            },
            {
                "count": 0,
                "endOffset": 400959,
                "startOffset": 400771
            }
        ]
    },
    {
        "functionName": "prepareUpdate",
        "isBlockCoverage": true,
        "ranges": [
            {
                "count": 2,
                "endOffset": 431103,
                "startOffset": 430514
            },
            {
                "count": 0,
                "endOffset": 430813,
                "startOffset": 430730
            },
            {
                "count": 0,
                "endOffset": 431022,
                "startOffset": 430815
            }
        ]
    },
    {
        "functionName": "commitUpdate",
        "isBlockCoverage": true,
        "ranges": [
            {
                "count": 1,
                "endOffset": 433211,
                "startOffset": 432829
            }
        ]
    },
    {
        "functionName": "commitTextUpdate",
        "isBlockCoverage": true,
        "ranges": [
            {
                "count": 1,
                "endOffset": 433411,
                "startOffset": 433306
            }
        ]
    },
    {
        "functionName": "isContextProvider",
        "isBlockCoverage": true,
        "ranges": [
            {
                "count": 1,
                "endOffset": 457906,
                "startOffset": 457716
            }
        ]
    },
    {
        "functionName": "scheduleSyncCallback",
        "isBlockCoverage": true,
        "ranges": [
            {
                "count": 1,
                "endOffset": 471857,
                "startOffset": 471178
            },
            {
                "count": 0,
                "endOffset": 471819,
                "startOffset": 471628
            }
        ]
    },
    {
        "functionName": "",
        "isBlockCoverage": true,
        "ranges": [
            {
                "count": 1,
                "endOffset": 472865,
                "startOffset": 472617
            }
        ]
    },
    {
        "functionName": "useFiber",
        "isBlockCoverage": true,
        "ranges": [
            {
                "count": 3,
                "endOffset": 555154,
                "startOffset": 554803
            }
        ]
    },
    {
        "functionName": "updateTextNode",
        "isBlockCoverage": true,
        "ranges": [
            {
                "count": 1,
                "endOffset": 556676,
                "startOffset": 556200
            },
            {
                "count": 0,
                "endOffset": 556506,
                "startOffset": 556326
            }
        ]
    },
    {
        "functionName": "updateElement",
        "isBlockCoverage": true,
        "ranges": [
            {
                "count": 1,
                "endOffset": 557579,
                "startOffset": 556684
            },
            {
                "count": 0,
                "endOffset": 556955,
                "startOffset": 556830
            },
            {
                "count": 0,
                "endOffset": 557578,
                "startOffset": 557353
            }
        ]
    },
    {
        "functionName": "updateSlot",
        "isBlockCoverage": true,
        "ranges": [
            {
                "count": 2,
                "endOffset": 562211,
                "startOffset": 560308
            },
            {
                "count": 0,
                "endOffset": 560497,
                "startOffset": 560491
            },
            {
                "count": 1,
                "endOffset": 560917,
                "startOffset": 560574
            },
            {
                "count": 0,
                "endOffset": 560828,
                "startOffset": 560790
            },
            {
                "count": 1,
                "endOffset": 560980,
                "startOffset": 560917
            },
            {
                "count": 1,
                "endOffset": 562056,
                "startOffset": 560982
            },
            {
                "count": 0,
                "endOffset": 561305,
                "startOffset": 561181
            },
            {
                "count": 0,
                "endOffset": 561460,
                "startOffset": 561404
            },
            {
                "count": 0,
                "endOffset": 561742,
                "startOffset": 561490
            },
            {
                "count": 0,
                "endOffset": 561816,
                "startOffset": 561754
            },
            {
                "count": 0,
                "endOffset": 562056,
                "startOffset": 561818
            },
            {
                "count": 0,
                "endOffset": 562172,
                "startOffset": 562056
            },
            {
                "count": 0,
                "endOffset": 562210,
                "startOffset": 562182
            }
        ]
    },
    {
        "functionName": "cloneChildFibers",
        "isBlockCoverage": true,
        "ranges": [
            {
                "count": 2,
                "endOffset": 587392,
                "startOffset": 586616
            },
            {
                "count": 0,
                "endOffset": 586832,
                "startOffset": 586742
            },
            {
                "count": 0,
                "endOffset": 586900,
                "startOffset": 586875
            },
            {
                "count": 1,
                "endOffset": 587354,
                "startOffset": 587157
            }
        ]
    },
    {
        "functionName": "updateHookTypesDev",
        "isBlockCoverage": true,
        "ranges": [
            {
                "count": 2,
                "endOffset": 609592,
                "startOffset": 609281
            },
            {
                "count": 0,
                "endOffset": 609568,
                "startOffset": 609508
            }
        ]
    },
    {
        "functionName": "updateWorkInProgressHook",
        "isBlockCoverage": true,
        "ranges": [
            {
                "count": 2,
                "endOffset": 621956,
                "startOffset": 619889
            },
            {
                "count": 0,
                "endOffset": 620559,
                "startOffset": 620508
            },
            {
                "count": 0,
                "endOffset": 620626,
                "startOffset": 620567
            },
            {
                "count": 0,
                "endOffset": 620858,
                "startOffset": 620785
            },
            {
                "count": 0,
                "endOffset": 621119,
                "startOffset": 620903
            },
            {
                "count": 0,
                "endOffset": 621324,
                "startOffset": 621208
            },
            {
                "count": 0,
                "endOffset": 621908,
                "startOffset": 621781
            }
        ]
    },
    {
        "functionName": "basicStateReducer",
        "isBlockCoverage": true,
        "ranges": [
            {
                "count": 1,
                "endOffset": 622238,
                "startOffset": 622070
            },
            {
                "count": 0,
                "endOffset": 622222,
                "startOffset": 622207
            }
        ]
    },
    {
        "functionName": "updateReducer",
        "isBlockCoverage": true,
        "ranges": [
            {
                "count": 2,
                "endOffset": 627512,
                "startOffset": 622876
            },
            {
                "count": 0,
                "endOffset": 623162,
                "startOffset": 623033
            },
            {
                "count": 1,
                "endOffset": 624305,
                "startOffset": 623478
            },
            {
                "count": 0,
                "endOffset": 623861,
                "startOffset": 623621
            },
            {
                "count": 0,
                "endOffset": 624203,
                "startOffset": 623920
            },
            {
                "count": 0,
                "endOffset": 625699,
                "startOffset": 624704
            },
            {
                "count": 0,
                "endOffset": 626360,
                "startOffset": 625808
            },
            {
                "count": 0,
                "endOffset": 626766,
                "startOffset": 626651
            },
            {
                "count": 0,
                "endOffset": 627023,
                "startOffset": 626953
            }
        ]
    },
    {
        "functionName": "updateState",
        "isBlockCoverage": true,
        "ranges": [
            {
                "count": 2,
                "endOffset": 640058,
                "startOffset": 639969
            }
        ]
    },
    {
        "functionName": "dispatchAction",
        "isBlockCoverage": true,
        "ranges": [
            {
                "count": 1,
                "endOffset": 656281,
                "startOffset": 652684
            },
            {
                "count": 0,
                "endOffset": 653023,
                "startOffset": 652788
            },
            {
                "count": 0,
                "endOffset": 653556,
                "startOffset": 653474
            },
            {
                "count": 0,
                "endOffset": 653738,
                "startOffset": 653696
            },
            {
                "count": 0,
                "endOffset": 654077,
                "startOffset": 653740
            },
            {
                "count": 0,
                "endOffset": 654174,
                "startOffset": 654144
            },
            {
                "count": 0,
                "endOffset": 655681,
                "startOffset": 655340
            },
            {
                "count": 0,
                "endOffset": 655788,
                "startOffset": 655696
            },
            {
                "count": 0,
                "endOffset": 656202,
                "startOffset": 656081
            }
        ]
    },
    {
        "functionName": "useState",
        "isBlockCoverage": true,
        "ranges": [
            {
                "count": 2,
                "endOffset": 668247,
                "startOffset": 667822
            }
        ]
    },
    {
        "functionName": "stopProfilerTimerIfRunning",
        "isBlockCoverage": true,
        "ranges": [
            {
                "count": 3,
                "endOffset": 686136,
                "startOffset": 686056
            }
        ]
    },
    {
        "functionName": "updateFunctionComponent",
        "isBlockCoverage": true,
        "ranges": [
            {
                "count": 1,
                "endOffset": 704270,
                "startOffset": 702541
            },
            {
                "count": 0,
                "endOffset": 703074,
                "startOffset": 702708
            },
            {
                "count": 0,
                "endOffset": 704070,
                "startOffset": 703918
            }
        ]
    },
    {
        "functionName": "markWorkInProgressReceivedUpdate",
        "isBlockCoverage": true,
        "ranges": [
            {
                "count": 2,
                "endOffset": 762355,
                "startOffset": 762273
            }
        ]
    },
    {
        "functionName": "bailoutOnAlreadyFinishedWork",
        "isBlockCoverage": true,
        "ranges": [
            {
                "count": 3,
                "endOffset": 763336,
                "startOffset": 762361
            },
            {
                "count": 1,
                "endOffset": 763116,
                "startOffset": 762859
            },
            {
                "count": 2,
                "endOffset": 763330,
                "startOffset": 763116
            }
        ]
    },
    {
        "functionName": "markUpdate",
        "isBlockCoverage": true,
        "ranges": [
            {
                "count": 2,
                "endOffset": 779548,
                "startOffset": 779362
            }
        ]
    },
    {
        "functionName": "updateHostComponent$1",
        "isBlockCoverage": true,
        "ranges": [
            {
                "count": 2,
                "endOffset": 782345,
                "startOffset": 780859
            },
            {
                "count": 0,
                "endOffset": 781315,
                "startOffset": 781150
            },
            {
                "count": 1,
                "endOffset": 782337,
                "startOffset": 782288
            }
        ]
    },
    {
        "functionName": "updateHostText$1",
        "isBlockCoverage": true,
        "ranges": [
            {
                "count": 1,
                "endOffset": 782608,
                "startOffset": 782373
            }
        ]
    },
    {
        "functionName": "commitLifeCycles",
        "isBlockCoverage": true,
        "ranges": [
            {
                "count": 2,
                "endOffset": 844528,
                "startOffset": 836170
            },
            {
                "count": 0,
                "endOffset": 836316,
                "startOffset": 836293
            },
            {
                "count": 0,
                "endOffset": 836341,
                "startOffset": 836325
            },
            {
                "count": 0,
                "endOffset": 836375,
                "startOffset": 836350
            },
            {
                "count": 0,
                "endOffset": 836957,
                "startOffset": 836384
            },
            {
                "count": 0,
                "endOffset": 841425,
                "startOffset": 836967
            },
            {
                "count": 0,
                "endOffset": 842272,
                "startOffset": 841435
            },
            {
                "count": 1,
                "endOffset": 842938,
                "startOffset": 842282
            },
            {
                "count": 0,
                "endOffset": 842738,
                "startOffset": 842708
            },
            {
                "count": 0,
                "endOffset": 842905,
                "startOffset": 842740
            },
            {
                "count": 1,
                "endOffset": 843066,
                "startOffset": 842948
            },
            {
                "count": 0,
                "endOffset": 843199,
                "startOffset": 843076
            },
            {
                "count": 0,
                "endOffset": 843952,
                "startOffset": 843209
            },
            {
                "count": 0,
                "endOffset": 844103,
                "startOffset": 843962
            },
            {
                "count": 0,
                "endOffset": 844140,
                "startOffset": 844113
            },
            {
                "count": 0,
                "endOffset": 844179,
                "startOffset": 844149
            },
            {
                "count": 0,
                "endOffset": 844214,
                "startOffset": 844188
            },
            {
                "count": 0,
                "endOffset": 844243,
                "startOffset": 844223
            },
            {
                "count": 0,
                "endOffset": 844276,
                "startOffset": 844252
            },
            {
                "count": 0,
                "endOffset": 844330,
                "startOffset": 844285
            },
            {
                "count": 0,
                "endOffset": 844527,
                "startOffset": 844338
            }
        ]
    },
    {
        "functionName": "commitWork",
        "isBlockCoverage": true,
        "ranges": [
            {
                "count": 2,
                "endOffset": 865520,
                "startOffset": 861544
            },
            {
                "count": 0,
                "endOffset": 861654,
                "startOffset": 861631
            },
            {
                "count": 0,
                "endOffset": 861679,
                "startOffset": 861663
            },
            {
                "count": 0,
                "endOffset": 861707,
                "startOffset": 861688
            },
            {
                "count": 0,
                "endOffset": 861741,
                "startOffset": 861716
            },
            {
                "count": 0,
                "endOffset": 862338,
                "startOffset": 861750
            },
            {
                "count": 0,
                "endOffset": 862412,
                "startOffset": 862348
            },
            {
                "count": 1,
                "endOffset": 863318,
                "startOffset": 862422
            },
            {
                "count": 0,
                "endOffset": 862911,
                "startOffset": 862901
            },
            {
                "count": 1,
                "endOffset": 864056,
                "startOffset": 863328
            },
            {
                "count": 0,
                "endOffset": 863597,
                "startOffset": 863407
            },
            {
                "count": 0,
                "endOffset": 863961,
                "startOffset": 863952
            },
            {
                "count": 0,
                "endOffset": 864421,
                "startOffset": 864066
            },
            {
                "count": 0,
                "endOffset": 864489,
                "startOffset": 864431
            },
            {
                "count": 0,
                "endOffset": 864673,
                "startOffset": 864499
            },
            {
                "count": 0,
                "endOffset": 864810,
                "startOffset": 864683
            },
            {
                "count": 0,
                "endOffset": 864894,
                "startOffset": 864820
            },
            {
                "count": 0,
                "endOffset": 864973,
                "startOffset": 864904
            },
            {
                "count": 0,
                "endOffset": 865046,
                "startOffset": 864983
            },
            {
                "count": 0,
                "endOffset": 865080,
                "startOffset": 865056
            },
            {
                "count": 0,
                "endOffset": 865322,
                "startOffset": 865089
            },
            {
                "count": 0,
                "endOffset": 865519,
                "startOffset": 865330
            }
        ]
    },
    {
        "functionName": "performWorkUntilDeadline",
        "isBlockCoverage": true,
        "ranges": [
            {
                "count": 1,
                "endOffset": 1593603,
                "startOffset": 1592434
            },
            {
                "count": 0,
                "endOffset": 1593239,
                "startOffset": 1593059
            },
            {
                "count": 0,
                "endOffset": 1593458,
                "startOffset": 1593252
            },
            {
                "count": 0,
                "endOffset": 1593525,
                "startOffset": 1593468
            }
        ]
    },
    {
        "functionName": "requestHostCallback",
        "isBlockCoverage": true,
        "ranges": [
            {
                "count": 1,
                "endOffset": 1593959,
                "startOffset": 1593767
            }
        ]
    },
    {
        "functionName": "push",
        "isBlockCoverage": true,
        "ranges": [
            {
                "count": 1,
                "endOffset": 1594382,
                "startOffset": 1594262
            }
        ]
    },
    {
        "functionName": "peek",
        "isBlockCoverage": true,
        "ranges": [
            {
                "count": 4,
                "endOffset": 1594491,
                "startOffset": 1594388
            },
            {
                "count": 3,
                "endOffset": 1594476,
                "startOffset": 1594470
            },
            {
                "count": 1,
                "endOffset": 1594484,
                "startOffset": 1594477
            }
        ]
    },
    {
        "functionName": "pop",
        "isBlockCoverage": true,
        "ranges": [
            {
                "count": 1,
                "endOffset": 1594784,
                "startOffset": 1594497
            },
            {
                "count": 0,
                "endOffset": 1594711,
                "startOffset": 1594639
            },
            {
                "count": 0,
                "endOffset": 1594778,
                "startOffset": 1594742
            }
        ]
    },
    {
        "functionName": "siftUp",
        "isBlockCoverage": true,
        "ranges": [
            {
                "count": 1,
                "endOffset": 1595265,
                "startOffset": 1594790
            },
            {
                "count": 0,
                "endOffset": 1595011,
                "startOffset": 1594983
            },
            {
                "count": 0,
                "endOffset": 1595174,
                "startOffset": 1595013
            }
        ]
    },
    {
        "functionName": "advanceTimers",
        "isBlockCoverage": true,
        "ranges": [
            {
                "count": 1,
                "endOffset": 1598188,
                "startOffset": 1597549
            },
            {
                "count": 0,
                "endOffset": 1598182,
                "startOffset": 1597732
            }
        ]
    },
    {
        "functionName": "flushWork",
        "isBlockCoverage": true,
        "ranges": [
            {
                "count": 1,
                "endOffset": 1599726,
                "startOffset": 1598691
            },
            {
                "count": 0,
                "endOffset": 1598967,
                "startOffset": 1598817
            },
            {
                "count": 0,
                "endOffset": 1599462,
                "startOffset": 1599098
            }
        ]
    },
    {
        "functionName": "workLoop",
        "isBlockCoverage": true,
        "ranges": [
            {
                "count": 1,
                "endOffset": 1601273,
                "startOffset": 1599732
            },
            {
                "count": 0,
                "endOffset": 1600067,
                "startOffset": 1600011
            },
            {
                "count": 0,
                "endOffset": 1600175,
                "startOffset": 1600069
            },
            {
                "count": 0,
                "endOffset": 1600861,
                "startOffset": 1600267
            },
            {
                "count": 0,
                "endOffset": 1601059,
                "startOffset": 1601029
            },
            {
                "count": 0,
                "endOffset": 1601236,
                "startOffset": 1601144
            }
        ]
    },
    {
        "functionName": "unstable_scheduleCallback",
        "isBlockCoverage": true,
        "ranges": [
            {
                "count": 1,
                "endOffset": 1605219,
                "startOffset": 1603034
            },
            {
                "count": 0,
                "endOffset": 1603232,
                "startOffset": 1603213
            },
            {
                "count": 0,
                "endOffset": 1603438,
                "startOffset": 1603234
            },
            {
                "count": 0,
                "endOffset": 1603740,
                "startOffset": 1603645
            },
            {
                "count": 0,
                "endOffset": 1603828,
                "startOffset": 1603750
            },
            {
                "count": 0,
                "endOffset": 1603914,
                "startOffset": 1603838
            },
            {
                "count": 0,
                "endOffset": 1603944,
                "startOffset": 1603924
            },
            {
                "count": 0,
                "endOffset": 1604023,
                "startOffset": 1603953
            },
            {
                "count": 0,
                "endOffset": 1604903,
                "startOffset": 1604335
            }
        ]
    },
    {
        "functionName": "unstable_cancelCallback",
        "isBlockCoverage": true,
        "ranges": [
            {
                "count": 1,
                "endOffset": 1605752,
                "startOffset": 1605550
            }
        ]
    },
    {
        "functionName": "click",
        "isBlockCoverage": true,
        "ranges": [
            {
                "count": 1,
                "endOffset": 9801,
                "startOffset": 9733
            }
        ]
    },
    {
        "functionName": "onClick",
        "isBlockCoverage": true,
        "ranges": [
            {
                "count": 1,
                "endOffset": 10083,
                "startOffset": 10070
            }
        ]
    }
]
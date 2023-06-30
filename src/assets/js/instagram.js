//20220105 新しいアクセストークン発行
//お客様facebookビジネスアカウント ID:saiyo_031@to-rei.jp pass:Saiyo031
//アプリ名 採用ページインスタ連携
//アプリid 614945790392633
//アプリsecret 748d17059366057af53360071ba88601
//第一トークン EAAIvSjlkeTkBAJqcwaAT8MjDw0vvXBcP1xcbMNX4P3TJveYTAEhmgtz6P9YQRVtewCYqjvzsY7VmVM8uAdrydgoP6jBCo0yle6xvnKMVkToT7FcN4WiVf4YB97AUhVTAiv1uuajbwFxmlGTjsQ8Vrl4UdeQEPOwTxsCFZA9ZBZA0dPV6hzOpYZBCKUTFrFFXvQfh5SdHrRsLWZCEjEtnB
//https://graph.facebook.com/v15.0/oauth/access_token?grant_type=fb_exchange_token&client_id=614945790392633&client_secret=748d17059366057af53360071ba88601&fb_exchange_token=EAAIvSjlkeTkBAJqcwaAT8MjDw0vvXBcP1xcbMNX4P3TJveYTAEhmgtz6P9YQRVtewCYqjvzsY7VmVM8uAdrydgoP6jBCo0yle6xvnKMVkToT7FcN4WiVf4YB97AUhVTAiv1uuajbwFxmlGTjsQ8Vrl4UdeQEPOwTxsCFZA9ZBZA0dPV6hzOpYZBCKUTFrFFXvQfh5SdHrRsLWZCEjEtnB
//第二トークン EAAIvSjlkeTkBAOmrWJGZA2gLlSH4wiofHIUMZBrndRw9nJXTqmzAFdZCZCwAbktCsyUYLA964H7oDZAbhGdZBZBDaBTXlmYBNJJV1ZCrJJIFd4XLhaIi43kYOorZBdjcRCWLTDf1mPhkZAYsdrKoY4CiFbhXi7gsDFRxTCUiOqGc9ha08bqfDyEI5I
//https://graph.facebook.com/v15.0/me?access_token=EAAIvSjlkeTkBAOmrWJGZA2gLlSH4wiofHIUMZBrndRw9nJXTqmzAFdZCZCwAbktCsyUYLA964H7oDZAbhGdZBZBDaBTXlmYBNJJV1ZCrJJIFd4XLhaIi43kYOorZBdjcRCWLTDf1mPhkZAYsdrKoY4CiFbhXi7gsDFRxTCUiOqGc9ha08bqfDyEI5I
//{
//　"name": "\u6771\u51b7 \u3064\u3070\u3055",
//  "id": "116247264688774"
//　}
//https://graph.facebook.com/v11.0/[★ここにIDを入力]/accounts?access_token=[★2番目のトークン]
//https://graph.facebook.com/v11.0/116247264688774/accounts?access_token=EAAIvSjlkeTkBAOmrWJGZA2gLlSH4wiofHIUMZBrndRw9nJXTqmzAFdZCZCwAbktCsyUYLA964H7oDZAbhGdZBZBDaBTXlmYBNJJV1ZCrJJIFd4XLhaIi43kYOorZBdjcRCWLTDf1mPhkZAYsdrKoY4CiFbhXi7gsDFRxTCUiOqGc9ha08bqfDyEI5I
//第三トークン（無期限）
// {
//   "data": [
//      {
//         "access_token": "EAAIvSjlkeTkBAF3nAs5JEwrfPSojBnQcN1X7BoD3b91X9s1NmPWg3RzMCNqNhdY00CjRk1kL1a7ZAes8CTXNqlT3uuOQNdG1bFz7THgErivmztfOpipnuRR2GNI5nO1MoTzi51XJhZBZCeB09zXDkYBdidRu6ovKjL4ZA6qrZA53OAe0A1AVNTRIZC8k4CpQcZD",
//         "category": "\u5546\u696d\u30fb\u5de5\u696d",
//         "category_list": [
//            {
//               "id": "243290832429433",
//               "name": "\u5546\u696d\u30fb\u5de5\u696d"
//            }
//         ],
//         "name": "\u6771\u4eac\u51b7\u6a5f\u5de5\u696d\u682a\u5f0f\u4f1a\u793e",
//         "id": "107401302240698"
//      }
//   ],
//   "paging": {
//      "cursors": {
//         "before": "QVFIUnRkdlA3cjFaNzBuQ0J5X2JTSm1yYmpWQWI1Q0gyN3hQQmlzMUpYWU04Y0l5empLTWRzZA3dQeVN2d3NGMC1mTEszb2lTYmI3aWNlMXQ1a3dLMi12cm5n",
//         "after": "QVFIUnRkdlA3cjFaNzBuQ0J5X2JTSm1yYmpWQWI1Q0gyN3hQQmlzMUpYWU04Y0l5empLTWRzZA3dQeVN2d3NGMC1mTEszb2lTYmI3aWNlMXQ1a3dLMi12cm5n"
//      }
//   }
// }
//https://graph.facebook.com/【アクセストークンデバッガーで確認できるページID】?fields=instagram_business_account&access_token=【トークン3】
//https://graph.facebook.com/107401302240698?fields=instagram_business_account&access_token=EAAIvSjlkeTkBAF3nAs5JEwrfPSojBnQcN1X7BoD3b91X9s1NmPWg3RzMCNqNhdY00CjRk1kL1a7ZAes8CTXNqlT3uuOQNdG1bFz7THgErivmztfOpipnuRR2GNI5nO1MoTzi51XJhZBZCeB09zXDkYBdidRu6ovKjL4ZA6qrZA53OAe0A1AVNTRIZC8k4CpQcZD
// {
//   "instagram_business_account": {
//      "id": "17841456394087487"
//   },
//   "id": "107401302240698"
// }

export const instagram = async (parentElement, url) => {
  if (!parentElement) return;
  await axios
    .get(url)
    .then((res) => {
      const res_data = res.data.media.data;
      console.log(res_data);
      let appendElement = '';

      for (let i = 0; i < res_data.length; i++) {
        appendElement += `
        <li>
          <a href=${res_data[i].permalink} target="_blank">
          <img src="${res_data[i].media_url}" alt="${res_data[i].caption}">
          </a>
        </li>`;
      }
      parentElement.innerHTML = appendElement;
    })
    .catch((error) => {
      parentElement.innerHTML = '<p>エラーが発生しました</p>';
      new Error(error.message);
    });
};
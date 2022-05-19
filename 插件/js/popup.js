

// $(function(){
//     $('#input1').keyup(function(){
//         $('#message').text('你好，' + $('#input1').val())
//     })
// })



$(function () {

    chrome.storage.sync.get(['total','limit'], function (budget) {
        $('#total').text(budget.total)
        $('#limit').text(budget.limit)

    })


    $('#add').click(function () {

        //从浏览器中获取存储的金额

        chrome.storage.sync.get('total', function (budget) {
            var totalAmount = 0;
            if (budget.total) {
                totalAmount = parseFloat(budget.total)
            }

            //将本次的金额加到总金额并存储

            let amount = $('#amount').val()
            if (amount) {
                totalAmount += parseFloat(amount)
                chrome.storage.sync.set({ 'total': totalAmount })
            }

            //更新ui

            $('#total').text(totalAmount)
            $('#amount').val('')
        })
    })




})
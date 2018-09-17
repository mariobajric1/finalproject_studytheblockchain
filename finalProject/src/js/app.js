var conditions = $("#conditions");
var immunizations = $("#immunizations");
var medications = $("#medications");

var record_id = $("#record_id");

var update_conditions = $("#update_conditions");
var update_immunizations = $("#update_immunizations");
var update_medications = $("#update_medications");
var update_record_id = $("#update_record_id");

function addTransactionToDOM(ob, transactionsDiv) {
  var ul = $("<ul>");

  var firstLi = $("<li>");
  var txTerm = $("<span>")
    .html("<strong>tx</strong>")
    .addClass("right-margin-5");
  var txVal = $("<span>").html(ob.tx);
  firstLi.append(txTerm);
  firstLi.append(txVal);

  ul.append(firstLi);

  var li, term, val;

  for (key in ob.receipt) {
    li = $("<li>");
    term = $("<span>")
      .html(`<strong>${key}</strong>`)
      .addClass("right-margin-5");
    val = $("<span>").html(ob.receipt[key]);

    li.append(term);
    li.append(val);

    ul.append(li);
  }

  transactionsDiv.append(ul);
}

$("#conds").click(function(e) {
  e.preventDefault();
  $("#conditions").val($("#conditions").val() + $(this).val() + ", ");
});
$("#conds2").click(function(e) {
  e.preventDefault();
  $("#conditions").val($("#conditions").val() + $(this).val() + ", ");
});
$("#conds3").click(function(e) {
  e.preventDefault();
  $("#conditions").val($("#conditions").val() + $(this).val() + ", ");
});
$("#conds4").click(function(e) {
  e.preventDefault();
  $("#conditions").val($("#conditions").val() + $(this).val() + ", ");
});
$("#conds5").click(function(e) {
  e.preventDefault();
  $("#conditions").val($("#conditions").val() + $(this).val() + ", ");
});
$("#conds6").click(function(e) {
  e.preventDefault();
  $("#conditions").val($("#conditions").val() + $(this).val() + ", ");
});
$("#conds7").click(function(e) {
  e.preventDefault();
  $("#conditions").val($("#conditions").val() + $(this).val() + ", ");
});
$("#conds8").click(function(e) {
  e.preventDefault();
  $("#conditions").val($("#conditions").val() + $(this).val() + ", ");
});
$("#conds9").click(function(e) {
  e.preventDefault();
  $("#conditions").val($("#conditions").val() + $(this).val() + ", ");
});
$("#conds10").click(function(e) {
  e.preventDefault();
  $("#conditions").val($("#conditions").val() + $(this).val() + ", ");
});
$("#conds11").click(function(e) {
  e.preventDefault();
  $("#conditions").val($("#conditions").val() + $(this).val() + ", ");
});
$("#conds12").click(function(e) {
  e.preventDefault();
  $("#conditions").val($("#conditions").val() + $(this).val() + ", ");
});
$("#conds13").click(function(e) {
  e.preventDefault();
  $("#conditions").val($("#conditions").val() + $(this).val() + ", ");
});
$("#conds14").click(function(e) {
  e.preventDefault();
  $("#conditions").val($("#conditions").val() + $(this).val() + ", ");
});
$("#conds15").click(function(e) {
  e.preventDefault();
  $("#conditions").val($("#conditions").val() + $(this).val() + ", ");
});
$("#conds16").click(function(e) {
  e.preventDefault();
  $("#conditions").val($("#conditions").val() + $(this).val() + ", ");
});
$("#conds17").click(function(e) {
  e.preventDefault();
  $("#conditions").val($("#conditions").val() + $(this).val() + ", ");
});
$("#conds18").click(function(e) {
  e.preventDefault();
  $("#conditions").val($("#conditions").val() + $(this).val() + ", ");
});
$("#conds19").click(function(e) {
  e.preventDefault();
  $("#conditions").val($("#conditions").val() + $(this).val() + ", ");
});
$("#conds20").click(function(e) {
  e.preventDefault();
  $("#conditions").val($("#conditions").val() + $(this).val() + ", ");
});
$("#conds21").click(function(e) {
  e.preventDefault();
  $("#conditions").val($("#conditions").val() + $(this).val() + ", ");
});
$("#conds22").click(function(e) {
  e.preventDefault();
  $("#conditions").val($("#conditions").val() + $(this).val() + ", ");
});
//
$("#1conds").click(function(e) {
  e.preventDefault();
  $("#update_conditions").val(
    $("#update_conditions").val() + $(this).val() + ", "
  );
});
$("#1conds2").click(function(e) {
  e.preventDefault();
  $("#update_conditions").val(
    $("#update_conditions").val() + $(this).val() + ", "
  );
});
$("#1conds3").click(function(e) {
  e.preventDefault();
  $("#update_conditions").val(
    $("#update_conditions").val() + $(this).val() + ", "
  );
});
$("#1conds4").click(function(e) {
  e.preventDefault();
  $("#update_conditions").val(
    $("#update_conditions").val() + $(this).val() + ", "
  );
});
$("#1conds5").click(function(e) {
  e.preventDefault();
  $("#update_conditions").val(
    $("#update_conditions").val() + $(this).val() + ", "
  );
});
$("#1conds6").click(function(e) {
  e.preventDefault();
  $("#update_conditions").val(
    $("#update_conditions").val() + $(this).val() + ", "
  );
});
$("#1conds7").click(function(e) {
  e.preventDefault();
  $("#update_conditions").val(
    $("#update_conditions").val() + $(this).val() + ", "
  );
});
$("#1conds8").click(function(e) {
  e.preventDefault();
  $("#update_conditions").val(
    $("#update_conditions").val() + $(this).val() + ", "
  );
});
$("#1conds9").click(function(e) {
  e.preventDefault();
  $("#update_conditions").val(
    $("#update_conditions").val() + $(this).val() + ", "
  );
});
$("#1conds10").click(function(e) {
  e.preventDefault();
  $("#update_conditions").val(
    $("#update_conditions").val() + $(this).val() + ", "
  );
});
$("#1conds11").click(function(e) {
  e.preventDefault();
  $("#update_conditions").val(
    $("#update_conditions").val() + $(this).val() + ", "
  );
});
$("#1conds12").click(function(e) {
  e.preventDefault();
  $("#update_conditions").val(
    $("#update_conditions").val() + $(this).val() + ", "
  );
});
$("#1conds13").click(function(e) {
  e.preventDefault();
  $("#update_conditions").val(
    $("#update_conditions").val() + $(this).val() + ", "
  );
});
$("#1conds14").click(function(e) {
  e.preventDefault();
  $("#update_conditions").val(
    $("#update_conditions").val() + $(this).val() + ", "
  );
});
$("#1conds15").click(function(e) {
  e.preventDefault();
  $("#update_conditions").val(
    $("#update_conditions").val() + $(this).val() + ", "
  );
});
$("#1conds16").click(function(e) {
  e.preventDefault();
  $("#update_conditions").val(
    $("#update_conditions").val() + $(this).val() + ", "
  );
});
$("#1conds17").click(function(e) {
  e.preventDefault();
  $("#update_conditions").val(
    $("#update_conditions").val() + $(this).val() + ", "
  );
});
$("#1conds18").click(function(e) {
  e.preventDefault();
  $("#update_conditions").val(
    $("#update_conditions").val() + $(this).val() + ", "
  );
});
$("#1conds19").click(function(e) {
  e.preventDefault();
  $("#update_conditions").val(
    $("#update_conditions").val() + $(this).val() + ", "
  );
});
$("#1conds20").click(function(e) {
  e.preventDefault();
  $("#update_conditions").val(
    $("#update_conditions").val() + $(this).val() + ", "
  );
});
$("#1conds21").click(function(e) {
  e.preventDefault();
  $("#update_conditions").val(
    $("#update_conditions").val() + $(this).val() + ", "
  );
});
$("#1conds22").click(function(e) {
  e.preventDefault();
  $("#update_conditions").val(
    $("#update_conditions").val() + $(this).val() + ", "
  );
});
//////

$("#imm").click(function(e) {
  e.preventDefault();
  $("#immunizations").val($("#immunizations").val() + $(this).val() + ", ");
});
$("#imm2").click(function(e) {
  e.preventDefault();
  $("#immunizations").val($("#immunizations").val() + $(this).val() + ", ");
});
$("#imm3").click(function(e) {
  e.preventDefault();
  $("#immunizations").val($("#immunizations").val() + $(this).val() + ", ");
});
$("#imm4").click(function(e) {
  e.preventDefault();
  $("#immunizations").val($("#immunizations").val() + $(this).val() + ", ");
});
$("#imm5").click(function(e) {
  e.preventDefault();
  $("#immunizations").val($("#immunizations").val() + $(this).val() + ", ");
});
$("#imm6").click(function(e) {
  e.preventDefault();
  $("#immunizations").val($("#immunizations").val() + $(this).val() + ", ");
});
$("#imm7").click(function(e) {
  e.preventDefault();
  $("#immunizations").val($("#immunizations").val() + $(this).val() + ", ");
});
$("#imm8").click(function(e) {
  e.preventDefault();
  $("#immunizations").val($("#immunizations").val() + $(this).val() + ", ");
});
$("#imm9").click(function(e) {
  e.preventDefault();
  $("#immunizations").val($("#immunizations").val() + $(this).val() + ", ");
});
$("#imm10").click(function(e) {
  e.preventDefault();
  $("#immunizations").val($("#immunizations").val() + $(this).val() + ", ");
});
$("#imm11").click(function(e) {
  e.preventDefault();
  $("#immunizations").val($("#immunizations").val() + $(this).val() + ", ");
});
$("#imm12").click(function(e) {
  e.preventDefault();
  $("#immunizations").val($("#immunizations").val() + $(this).val() + ", ");
});

$("#1imm").click(function(e) {
  e.preventDefault();
  $("#update_immunizations").val(
    $("#update_immunizations").val() + $(this).val() + ", "
  );
});
$("#1imm2").click(function(e) {
  e.preventDefault();
  $("#update_immunizations").val(
    $("#update_immunizations").val() + $(this).val() + ", "
  );
});
$("#1imm3").click(function(e) {
  e.preventDefault();
  $("#update_immunizations").val(
    $("#update_immunizations").val() + $(this).val() + ", "
  );
});
$("#1imm4").click(function(e) {
  e.preventDefault();
  $("#update_immunizations").val(
    $("#update_immunizations").val() + $(this).val() + ", "
  );
});
$("#1imm5").click(function(e) {
  e.preventDefault();
  $("#update_immunizations").val(
    $("#update_immunizations").val() + $(this).val() + ", "
  );
});
$("#1imm6").click(function(e) {
  e.preventDefault();
  $("#update_immunizations").val(
    $("#update_immunizations").val() + $(this).val() + ", "
  );
});
$("#1imm7").click(function(e) {
  e.preventDefault();
  $("#update_immunizations").val(
    $("#update_immunizations").val() + $(this).val() + ", "
  );
});
$("#1imm8").click(function(e) {
  e.preventDefault();
  $("#update_immunizations").val(
    $("#update_immunizations").val() + $(this).val() + ", "
  );
});
$("#1imm9").click(function(e) {
  e.preventDefault();
  $("#update_immunizations").val(
    $("#update_immunizations").val() + $(this).val() + ", "
  );
});
$("#1imm10").click(function(e) {
  e.preventDefault();
  $("#update_immunizations").val(
    $("#update_immunizations").val() + $(this).val() + ", "
  );
});
$("#1imm11").click(function(e) {
  e.preventDefault();
  $("#update_immunizations").val(
    $("#update_immunizations").val() + $(this).val() + ", "
  );
});
$("#1imm12").click(function(e) {
  e.preventDefault();
  $("#update_immunizations").val(
    $("#update_immunizations").val() + $(this).val() + ", "
  );
});

$("#M").click(function(e) {
  e.preventDefault();
  $("#medications").val($("#medications").val() + $(this).val() + ", ");
});
$("#A").click(function(e) {
  e.preventDefault();
  $("#medications").val($("#medications").val() + $(this).val());
});
$("#M2").click(function(e) {
  e.preventDefault();
  $("#update_medications").val(
    $("#update_medications").val() + $(this).val() + ", "
  );
});
$("#A2").click(function(e) {
  e.preventDefault();
  $("#update_medications").val($("#update_medications").val() + $(this).val());
});

App = {
  web3Provider: null,
  contracts: {},

  init: function() {
    return App.initWeb3();
  },

  initWeb3: function() {
    if (typeof web3 !== "undefined") {
      App.web3Provider = web3.currentProvider;
      web3 = new Web3(web3.currentProvider);
    } else {
      App.web3Provider = new Web3.providers.HttpProvider(
        "http://127.0.0.1:7545"
      );
      web3 = new Web3(App.web3Provider);
    }

    return App.initContract();
  },
  initContract: function() {
    $.getJSON("MedicalRecord.json", function(data) {
      var MedicalRecordArtifact = data;
      App.contracts.MedicalRecord = TruffleContract(MedicalRecordArtifact);

      App.contracts.MedicalRecord.setProvider(App.web3Provider);
    });

    return App.bindEvents();
  },

  bindEvents: function() {
    $(document).on("click", "#submitRecord", App.createRecord);
    $(document).on("click", "#getRecord", App.getRecord);
    $(document).on("click", "#updateRecord", App.updateRec);
  },

  createRecord: function(event) {
    event.preventDefault();

    var MedicalRecordInstance;

    App.contracts.MedicalRecord.deployed()
      .then(function(instance) {
        MedicalRecordInstance = instance;
        return MedicalRecordInstance.newRecord(
          conditions.val(),
          immunizations.val(),
          medications.val(),
          // { gas: 6721975, from: web3.eth.accounts[0] }
        );
      })
      .then(function(result) {
        var transactionsDiv = $("#transactions");

        transactionsDiv.html("");

        transactionsDiv.append($("<h2>").text("Your Transactions"));

        transactionsDiv.append($("<hr>"));

        addTransactionToDOM(result, transactionsDiv);
      })
      .catch(function(err) {
        $("#errors")
          .addClass("bad")
          .text(err.toString());
      });
  },
  updateRec: function(event) {
    event.preventDefault();
    var MedicalRecordInstance;
    App.contracts.MedicalRecord.deployed()
      .then(function(instance) {
        MedicalRecordInstance = instance;

        debugger;
        return MedicalRecordInstance.updateRecord(
          update_record_id.val(),
          update_conditions.val(),
          update_immunizations.val(),
          update_medications.val(),
          // { gas: 6721975, from: web3.eth.accounts[0] }
        );
      })
      .then(function(result) {
        var transactionsDiv = $("#updateTransactions");

        transactionsDiv.html("");

        transactionsDiv.append($("<h2>").text("Your Transactions"));

        transactionsDiv.append($("<hr>"));

        addTransactionToDOM(result, transactionsDiv);
      })
      .catch(function(err) {
        $("#errors")
          .addClass("bad")
          .text(err.toString());
      });
  },
  getRecord: function(event) {
    event.preventDefault();

    var MedicalRecordInstance;

    App.contracts.MedicalRecord.deployed()
      .then(function(instance) {
        MedicalRecordInstance = instance;
        return MedicalRecordInstance.records(record_id.val());
      })
      .then(function(result) {
        $("#record").html(
          "<h2>Conditions</h2>" +
            " <h4 class='hh'>" +
            result[0] +
            "</h4><hr class='ok'>"
        );
        $("#record1").html(
          "<h2>Immunizations</h2>" +
            " <h4 class='hh'>" +
            result[1] +
            "</h4><hr class='ok'>"
        );
        $("#record2").html(
          "<h2>Medications | Allergies</h2>" +
            " <h4 class='hh'>" +
            result[2] +
            "</h4><hr class='ok'>"
        );

        $("#list").css("display", "inline");
      })
      .catch(function(err) {
        console.log(err.message);
      });
  }
};

$(function() {
  $(window).load(function() {
    App.init();
  });
});

function calculateTaxes(){			
	var propertyValue = document.getElementById('assessedText').value;
	if(propertyValue){
		propertyValue = parseInt(propertyValue.replace(",", ""));
		var wfMelloRoos = 198.24;
		var fpaMelloRoos = 1019.14;
		var whillMelloRoos = 45.52;
		var mranchMelloRoos = 2869.42;
		var totalMelloRoos = 4132.32;
		var countyTaxRate = document.getElementById('countyTaxRate').innerHTML;
		var fcImp3TaxRate = document.getElementById('fcImp3TaxRate').innerHTML;
		var fcImp2TaxRate = document.getElementById('fcImp2TaxRate').innerHTML;
		var losRiosTaxRate = document.getElementById('losRiosTaxRate').innerHTML;
		var totalTaxOnlyRate = document.getElementById('totalTaxOnlyRate').innerHTML;
		document.getElementById('wfMelloRoos').innerHTML = getValue(wfMelloRoos);
		document.getElementById('fpaMelloRoos').innerHTML = getValue(fpaMelloRoos);
		document.getElementById('whillMelloRoos').innerHTML = getValue(whillMelloRoos);
		document.getElementById('mranchMelloRoos').innerHTML = getValue(mranchMelloRoos);
		document.getElementById('totalMelloRoos').innerHTML = getValue(totalMelloRoos);
		document.getElementById('countyTax').innerHTML = getValue(countyTaxRate * propertyValue/100);
		document.getElementById('fcImp3Tax').innerHTML = getValue(fcImp3TaxRate * propertyValue/100);
		document.getElementById('fcImp2Tax').innerHTML = getValue(fcImp2TaxRate * propertyValue/100);
		document.getElementById('losRiosTax').innerHTML = getValue(losRiosTaxRate * propertyValue/100);
		var totalTaxOnly = totalTaxOnlyRate * propertyValue/100;
		document.getElementById('totalTaxOnly').innerHTML = getValue(totalTaxOnly);
		document.getElementById('totalAnnualTax').innerHTML = getValue(totalTaxOnly * 1 + totalMelloRoos * 1);
		document.getElementById('installment1').innerHTML = getValue((totalTaxOnly * 1 + totalMelloRoos * 1)/2);
		document.getElementById('installment2').innerHTML = getValue((totalTaxOnly * 1 + totalMelloRoos * 1)/2);
		document.getElementById('monthlyMelloroos').innerHTML = getValue(totalMelloRoos/12);
		document.getElementById('monthlyTax').innerHTML = getValue(totalTaxOnly/12);
		document.getElementById('taxAndMellorossMonthly').innerHTML = getValue(totalTaxOnly/12 + totalMelloRoos/12);		
	}
	else {
		alert('Enter property value');
	}			
}		
function getValue(val){
	if(val == null) {
		return '0';
	}
	else {
		return val.toLocaleString('en', { style: 'currency', currency: 'USD' });
	}			
}
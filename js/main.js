$(function() {
	var tableContainer = $('.tableContainer');
	var findInput = $('.findInput');
	var servicesCounterValue = $('.servicesCounterValue');
	var githubImg = $('.githubImg');
	var services = [
		{"proof of phone": '<div class="tableCellContainer"> \
					<a href="http://www.proofofphone.com" target="_blank"> \
						<div class="serviceContainer live"> \
							<div class="serviceImageContainer proofOfPhone"> \
								<img src="./img/github.png" class="githubImg"> \
							</div> \
							<div class="serviceInfoContainer"> \
								<div class="serviceCompany"> \
									microoracles \
								</div> \
								<div class="serviceTitle"> \
									Proof of Phone \
								</div> \
								<div class="serviceDescription"> \
									KYC oracle validates and links your phone number and eth address \
								</div> \
							</div> \
							<div class="serviceStatusContainer live"> \
								live \
							</div> \
						</div> \
					</a> \
				</div>'},
		{"proof of github": '<div class="tableCellContainer"> \
					<a href="https://proofofgithub.herokuapp.com" target="_blank"> \
						<div class="serviceContainer live"> \
							<div class="serviceImageContainer proofOfGithub"> \
								<img src="./img/github.png" class="githubImg"> \
							</div> \
							<div class="serviceInfoContainer"> \
								<div class="serviceCompany"> \
									microoracles \
								</div> \
								<div class="serviceTitle"> \
									Proof of Github \
								</div> \
								<div class="serviceDescription"> \
									KYC oracle validates and links your github account and eth address \
								</div> \
							</div> \
							<div class="serviceStatusContainer live"> \
								live \
							</div> \
						</div> \
					</a> \
				</div>'},
		{"proof of physical address": '<div class="tableCellContainer"> \
					<a href="https://proofofphysicaladdress.com" target="_blank"> \
						<div class="serviceContainer live"> \
							<div class="serviceImageContainer proofOfPhysicalAddress"> \
							</div> \
							<div class="serviceInfoContainer"> \
								<div class="serviceCompany"> \
									consensys \
								</div> \
								<div class="serviceTitle"> \
									Proof of Physical Address \
								</div> \
								<div class="serviceDescription"> \
									Smart oracle that serves a primitive form of Know Your Customer \
								</div> \
							</div> \
							<div class="serviceStatusContainer live"> \
								live \
							</div> \
						</div> \
					</a> \
				</div>'},
		{"proof of name": '<div class="tableCellContainer"> \
					<div class="serviceContainer"> \
						<div class="serviceImageContainer proofOfName"> \
							<img src="./img/github.png" class="githubImg"> \
						</div> \
						<div class="serviceInfoContainer"> \
							<div class="serviceCompany"> \
								microoracles \
							</div> \
							<div class="serviceTitle"> \
								Proof of Name \
							</div> \
							<div class="serviceDescription"> \
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod \
							</div> \
						</div> \
						<div class="serviceStatusContainer inProgress"> \
							work in progress \
						</div> \
					</div> \
				</div>'},
		{"proof of bank account": '<div class="tableCellContainer"> \
					<div class="serviceContainer"> \
						<div class="serviceImageContainer proofOfBank"> \
							<img src="./img/github.png" class="githubImg"> \
						</div> \
						<div class="serviceInfoContainer"> \
							<div class="serviceCompany"> \
								microoracles \
							</div> \
							<div class="serviceTitle"> \
								Proof of Bank Account \
							</div> \
							<div class="serviceDescription"> \
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod \
							</div> \
						</div> \
						<div class="serviceStatusContainer inProgress"> \
							work in progress \
						</div> \
					</div> \
				</div>'},
		{"proof of ...": '<div class="tableCellContainer"> \
						<div class="serviceContainer"> \
							<div class="serviceImageContainer proofOf"> \
								<img src="./img/github.png" class="githubImg"> \
							</div> \
							<div class="serviceInfoContainer"> \
								<div class="serviceCompany"> \
									igor barinov \
								</div> \
								<div class="serviceTitle"> \
									Proof of ... \
								</div> \
								<div class="serviceDescription"> \
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod \
								</div> \
							</div> \
							<div class="serviceStatusContainer soon"> \
								coming soon \
							</div> \
						</div> \
					</div>'}
	]

	var initialServicesCount = parseInt(servicesCounterValue.text());

	findInput.keyup(function(e) {
		//if (findInput.val().length > 3) {
			var foundServiceIndexes = searchStringInArray(findInput.val(), services);
			console.log(foundServiceIndexes);
			tableContainer.empty();
			var tableRowContainerNew;
			var servicesCount = foundServiceIndexes.length;
			if (servicesCount > initialServicesCount)
				servicesCount = initialServicesCount;
			servicesCounterValue.text(servicesCount);
			for (var i = 0; i < foundServiceIndexes.length; i++) {
				if (i%3 == 0) {
					tableContainer.append(tableRowContainerNew);
					tableRowContainerNew = $("<div class='tableRowContainer'></div>"); 
				}
				console.log(services[foundServiceIndexes[i]]);
				var service;
				for(var key in services[foundServiceIndexes[i]]) {
				    if(services[foundServiceIndexes[i]].hasOwnProperty(key)) {
				        service = services[foundServiceIndexes[i]][key];
				        break;
				    }
				}
				tableRowContainerNew.append(service);
				if (i == foundServiceIndexes.length - 1) {
					tableContainer.append(tableRowContainerNew);
				}
			}
		//}
	});

	githubImg.click(function(e) {
		e.preventDefault();
		window.open($(this).attr("href"), "_blank");
	});
})

function searchStringInArray (str, strArray) {
	var foundServiceIndexes = [];
    for (var j = 0; j < strArray.length; j++) {
    	var p = strArray[j];
    	for (var key in p) {
		  if (p.hasOwnProperty(key)) {
		    if (key.match(str)) foundServiceIndexes.push(j);
		  }
		}
    }
    return foundServiceIndexes;
}
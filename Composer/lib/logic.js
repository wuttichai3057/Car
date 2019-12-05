'use strict';
/**
 * Write your transction processor functions here
 */
/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var NS = 'org.acme.product.auction';

/**
 * transfer the car
 * @param {org.acme.product.auction.Transfer} transfer - the transfer transaction
 * @transaction
 */
function transfer(transfer) {
  var trans = transfer.carid
  var own = transfer.userid
  //trans.owner.cars.push(transfer.owner);
  var event = getFactory().newEvent(NS, 'SummitCar');
  event.carid = trans.carId;
  event.brand = trans.brand;
  event.model = trans.model;
  event.Engine_size = trans.Engine_size;
  event.userID = own.userID;
  event.firstName = own.firstName;
  event.lastName = own.lastName;
  emit(event);
}
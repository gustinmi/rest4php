#!/bin/bash
## tests.sh

echo "Testing category \n"

echo "Insert element with HTTP POST"
insert_command="curl --silent 'http://localhost:8083/index.php?&handler=Category' -H 'Content-Type: application/json' -H 'X-Requested-With: XMLHttpRequest' --data-binary '{\"name\":\"test new category $(date)\"}'" 
eval $insert_command 
echo ""

echo "Read element with HTTP GET request"
curl --silent 'http://localhost:8083/index.php?&handler=Category&id=1'
echo ""

echo "Read all elements with HTTP GET request"
curl --silent 'http://localhost:8083/index.php?&handler=Category'
echo ""

echo "Update element with HTTP PUT"
update_command="curl --silent 'http://localhost:8083/index.php?&handler=Category&id=1' -X PUT -H 'Content-Type: application/json' -H 'X-Requested-With: XMLHttpRequest' --data-binary '{\"id\":3, \"name\":\"testing 1 $(date)\"}'"
eval $update_command
echo ""

#echo "Delete element with HTTP DELETE"
#curl 'http://localhost:8083/index.php?&handler=Category' -X DELETE -H 'Content-Type: application/json' -H 'X-Requested-With: XMLHttpRequest' --data-binary '{"id":39}'
#echo ""

# echo "Testing add \n"
# echo ""

# echo "Insert element with HTTP POST"
# curl 'http://localhost:8083/index.php?&handler=Add' -H 'Content-Type: application/json' -H 'X-Requested-With: XMLHttpRequest' --data-binary '{"folder_id" : 1, "name" : "new add test name", "content" "test add content"}'
# echo ""
# 
# echo "Read element with HTTP GET request"
# curl 'http://localhost:8083/index.php?&handler=Add&id=1'
# echo ""
# 
# echo "Read all elements with HTTP GET request"
# curl 'http://localhost:8083/index.php?&handler=Add'
# echo ""

#
#echo "Update element with HTTP PUT"
# curl 'http://localhost:8083/index.php?&handler=Add&id=1' -X PUT -H 'Content-Type: application/json' -H 'X-Requested-With: XMLHttpRequest' --data-binary '{"id":1, "name":"testing 1"}'
#echo ""
#
#echo "Delete element with HTTP DELETE"
#curl 'http://localhost:8083/index.php?&handler=Add' -X DELETE -H 'Content-Type: application/json' -H 'X-Requested-With: XMLHttpRequest' --data-binary '{"id":8}'
#echo ""
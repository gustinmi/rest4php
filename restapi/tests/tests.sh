#!/bin/bash
## tests.sh

echo "Insert element with HTTP POST"
curl 'http://localhost:8083/index.php?&handler=Category' -H 'Content-Type: application/json' -H 'X-Requested-With: XMLHttpRequest' --data-binary '{"name":"test new category"}' 
echo ""

echo "Read element with HTTP GET request"
curl 'http://localhost:8083/index.php?&handler=Add&id=1'
echo ""

echo "Update element with HTTP PUT"
curl 'http://localhost:8083/index.php?&handler=Category&id=1' -X PUT -H 'Content-Type: application/json' -H 'X-Requested-With: XMLHttpRequest' --data-binary '{"id":8, "name":"testing 1"}'
echo ""

echo "Delete element with HTTP DELETE"
curl 'http://localhost:8083/index.php?&handler=Category&id=1' -X DELETE -H 'Content-Type: application/json' -H 'X-Requested-With: XMLHttpRequest' --data-binary '{"id":8}'
echo ""
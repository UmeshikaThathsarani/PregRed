import json

# def handler(event, context):
#   print('received event:')
#   print(event)
  
#   return {
#       'statusCode': 200,
#       'headers': {
#           'Access-Control-Allow-Headers': '*',
#           'Access-Control-Allow-Origin': '*',
#           'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
#       },
#       'body': json.dumps('Hello from your new Amplify Python lambda!')
#   }

def lambda_handler (event, context):
    transactionID = event['queryStringParameters']['transactionID']

    transactionResponse['transactionID'] = transactionID
    transactionResponse['message'] = "Hello from Chiran"

    responseObject = {}
    responseObject['statusCode'] = 200
    responseObject['headers'] {}
    responseObject['headers']['Content-Type'] = 'application/json'
    responseObject['body'] = json.dumps(transactionResponse)

    return responseObject
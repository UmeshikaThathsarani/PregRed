import json

def handler(event, context):
  print('received event:')
  print(event)
  
  return {
      'statusCode': 200,
      'headers': {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
      },
      'body': json.dumps('Hello from your new Amplify Python lambda!')
  }

# import json
# import boto3

# PREDICTION_PATH = '/predict7'
# DYNAMO_DB = boto3.resource('DYNAMO_DB', endpoint_url=" https://t6e2noaphk.execute-api.ap-southeast-1.amazonaws.com/dev")
# DB_TABLE_NAME = DYNAMO_DB.Table('UTest7Table-dev')

# def handler(event, context):
#   print('received event:' + event)
  
#   method = event['httpMethod']
#   if method == 'POST':
#       tableName = DB_TABLE_NAME 
#       tableName.put_item(
#         Item={
#             'age': 23,
#             'name': 'Umeshika',
#         }
#       )
#       responsebody ={
#           "message": "Hurray"
#       }
#       response = buildResponse(responsebody)
#   return response

# def buildResponse(body){
#     return{
#       'statusCode': 200,
#       'headers': {
#           'Content-Type': 'application/json',
#           'Access-Control-Allow-Headers': '*',
#           'Access-Control-Allow-Origin': '*',
#           'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
#       },
#       body : json.dumps(body)
#     }
# }